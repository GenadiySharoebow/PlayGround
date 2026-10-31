import * as THREE from 'three'
import { buildCar } from './cars.js'

const clamp = THREE.MathUtils.clamp
const lerp = THREE.MathUtils.lerp
const MPH = 2.236936

const _fwd = new THREE.Vector3()
const _right = new THREE.Vector3()
const _normal = new THREE.Vector3()
const _up = new THREE.Vector3(0, 1, 0)
const _m = new THREE.Matrix4()
const _q = new THREE.Quaternion()
const _tmp = new THREE.Vector3()

export class Vehicle {
  constructor(scene, world, effects, def, paint) {
    this.scene = scene
    this.world = world
    this.effects = effects
    this.def = def
    this.paint = paint ?? def.paint
    this.group = new THREE.Group()
    scene.add(this.group)
    // One wide headlamp cone is enough for the low-poly night look and keeps
    // the draw cost low on phones.
    this.headlight = new THREE.SpotLight(0xffedc2, 0, 95, 0.42, 0.6, 1.15)
    this.headlight.position.set(0, 1.05, 2.1)
    this.headlight.target.position.set(0, 0, 38)
    this.group.add(this.headlight)
    this.group.add(this.headlight.target)
    this.headlightOn = false
    this.obj = null
    this.pos = new THREE.Vector3(world.spawn.x, world.heightAt(world.spawn.x, world.spawn.z), world.spawn.z)
    this.vel = new THREE.Vector3()
    this.yaw = world.spawn.yaw
    this.yawVel = 0
    this.steer = 0
    this.steerAngle = 0
    this.gear = 1
    this.rpm = 900
    this.slip = 0
    this.slipRaw = 0
    this.drifting = false
    this.airborne = false
    this.yVel = 0
    this.boostFuel = 100
    this.boostActive = false
    this.surface = 'road'
    this.onRoad = true
    this.waterTime = 0
    this.shiftTimer = 0
    this.wheelSpin = 0
    this.lastGround = this.pos.y
    this.bounce = 0
    this.bodyPitch = 0
    this.bodyRoll = 0
    this.longAccel = 0
    this.driftPoints = 0
    this.airTime = 0
    this.landedHard = 0
    this.nitroCooldown = 0
    this.speedKmh = 0
    this.distance = 0
    this.quatReady = false
    this.setCar(def, this.paint)
  }

  setCar(def, paint) {
    if (this.obj) {
      this.scene.remove(this.obj.group)
      this.obj.group.traverse(o => {
        if (o.isMesh && o.geometry) o.geometry.dispose?.()
      })
    }
    this.def = def
    this.paint = paint ?? def.paint
    this.obj = buildCar(def, this.paint)
    this.group.add(this.obj.group)
    this.obj.group.rotation.y = 0
    this.gear = 1
    this.rpm = 900
    this.shiftTimer = 0
    this.quatReady = false
  }

  get color() { return this.paint }

  place(x, z, yaw = 0) {
    this.pos.set(x, this.world.heightAt(x, z), z)
    this.lastGround = this.pos.y
    this.yaw = yaw
    this.vel.set(0, 0, 0)
    this.yawVel = 0
    this.steer = 0
    this.airborne = false
    this.yVel = 0
    this.gear = 1
    this.rpm = 900
    this.waterTime = 0
    this.boostFuel = 100
    this.quatReady = false
    this.updateVisual(0, true)
  }

  get forward() { return _fwd.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)) }
  get right() { return _right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw)) }

  resetToRoad() {
    let best = null, bestD = Infinity
    for (const road of this.world.roads) {
      const pts = road.pts
      for (let i = 0; i < pts.length; i += 2) {
        const p = pts[i]
        const d = (p.x - this.pos.x) ** 2 + (p.z - this.pos.z) ** 2
        if (d < bestD) { bestD = d; best = { p, i, road } }
      }
    }
    if (best) {
      const { p, i, road } = best
      const p2 = road.pts[Math.min(road.pts.length - 1, i + 1)]
      const yaw = Math.atan2(p2.x - p.x, p2.z - p.z)
      this.place(p.x - Math.sin(yaw) * 2, p.z - Math.cos(yaw) * 2, yaw)
      return true
    }
    this.place(this.world.spawn.x, this.world.spawn.z, this.world.spawn.yaw)
    return false
  }

  step(dt, input) {
    const def = this.def
    const water = this.world.surfaceAt(this.pos.x, this.pos.z) === 'water'
    if (water) {
      this.waterTime += dt
      this.vel.multiplyScalar(0.965)
      if (this.waterTime > 1.25) {
        this.resetToRoad()
        if (this.effects) this.effects.message('BACK ON THE ROAD')
      }
    } else {
      this.waterTime = Math.max(0, this.waterTime - dt * 2)
    }

    const speed = this.vel.length()
    this.speedKmh = speed * 3.6
    this.surface = this.world.surfaceAt(this.pos.x, this.pos.z)
    this.onRoad = this.surface === 'road'
    const offroad = !this.onRoad && this.surface !== 'water'
    const onLoose = this.surface === 'sand' || this.surface === 'shore' || this.surface === 'dirt'

    const fwd = this.forward
    const right = this.right
    const vLong = this.vel.dot(fwd)
    const vLat = this.vel.dot(right)
    this.slipRaw = Math.atan2(vLat, Math.max(4, Math.abs(vLong)))
    this.slip = vLat

    // steering input smoothing
    const speedFactor = clamp(speed / 75, 0, 1)
    const maxSteer = lerp(0.56, 0.075, Math.pow(speedFactor, 0.72))
    const steerTarget = clamp(input.steer, -1, 1)
    this.steer += (steerTarget - this.steer) * Math.min(1, dt * 10)
    this.steerAngle = this.steer * maxSteer

    // gearbox / rpm
    const wheelRPM = Math.abs(vLong) / (2 * Math.PI * def.wheelR) * 60
    if (def.ev) {
      this.gear = 1
      this.rpm = 1000 + Math.abs(vLong) / (def.topSpeed / 3.6) * 14000
    } else {
      if (this.shiftTimer > 0) this.shiftTimer -= dt
      if (this.shiftTimer <= 0) {
        const ratio = def.gearRatios[this.gear - 1] * def.finalDrive
        const rpm = Math.max(700, wheelRPM * ratio)
        if (rpm > def.redline * 0.965 && this.gear < def.gearRatios.length) { this.gear++; this.shiftTimer = 0.16 }
        else if (rpm < def.redline * 0.33 && this.gear > 1) { this.gear--; this.shiftTimer = 0.12 }
      }
      const ratio = def.gearRatios[this.gear - 1] * def.finalDrive
      this.rpm = clamp(wheelRPM * ratio, 750, def.redline + 180)
    }

    const rpmX = clamp(this.rpm / def.redline, 0, 1.05)
    let torqueCurve
    if (rpmX < 0.12) torqueCurve = 0.52 + rpmX * 2.4
    else if (rpmX < 0.58) torqueCurve = 0.8 + (rpmX - 0.12) * 0.44
    else torqueCurve = Math.max(0.22, 1.02 - (rpmX - 0.58) * 1.35)

    const throttle = clamp(input.throttle, 0, 1)
    const brake = clamp(input.brake, 0, 1)
    const handbrake = input.handbrake ? 1 : 0
    const gripSurface = this.onRoad ? 1 : clamp(0.55 + def.offroad * 0.46, 0.6, 1.04)
    const downforce = Math.min(0.55, speed * speed * 0.00007)
    const grip = def.grip * gripSurface * (1 + downforce)

    // longitudinal forces
    let accel = 0
    if (!this.airborne) {
      if (throttle > 0.01) {
        if (vLong < -0.7) {
          accel += throttle * 12
        } else {
          let ratio = def.ev ? def.finalDrive : def.gearRatios[this.gear - 1] * def.finalDrive
          if (this.shiftTimer > 0) ratio *= 0.15
          let force = def.torque * torqueCurve * ratio / def.wheelR * throttle * 0.93
          if (def.ev) force = def.torque * throttle * 7.2
          const traction = def.weight * 9.81 * grip * (def.drivetrain === 'RWD' ? 0.93 : 1.26)
          force = Math.min(force, traction)
          accel += force / def.weight
        }
      }
      if (brake > 0.01) {
        if (vLong > 0.8) {
          accel -= brake * 9.81 * def.brake * 1.28
        } else {
          // reverse
          const revMax = 13
          if (vLong > -revMax) accel -= brake * 4.2
        }
      }
      if (handbrake) accel -= Math.sign(vLong) * Math.min(Math.abs(vLong) / dt, 8.6)

      // boost
      this.boostActive = !!input.boost && this.boostFuel > 0.5 && vLong > 2 && !this.airborne
      if (this.boostActive) {
        accel += 5.6 * (1 - speed / (def.topSpeed / 3.6 * 1.03))
        this.boostFuel = Math.max(0, this.boostFuel - dt * 26)
      } else {
        this.boostFuel = Math.min(100, this.boostFuel + dt * 7.5)
      }

      // resistance
      const drag = 0.5 * 1.225 * def.cd * (def.width * 0.9) * speed * speed / def.weight
      accel -= Math.sign(vLong) * drag
      accel -= Math.sign(vLong) * (offroad ? 0.85 : 0.16)
      if (onLoose) accel -= Math.sign(vLong) * 0.55
    }

    const prevLong = vLong
    const top = def.topSpeed / 3.6 * (this.boostActive ? 1.05 : 1.0) * (offroad ? 0.72 : 1)
    const predictedLong = clamp(vLong + accel * dt, -16, top + 1)

    // yaw dynamics — bicycle model capped by available lateral grip
    let yawTarget = 0
    if (!this.airborne) {
      const latMax = 9.81 * grip * (handbrake ? 2.3 : 1.65)
      const cap = latMax / Math.max(5.5, speed)
      yawTarget = (predictedLong / def.wheelbase) * Math.tan(this.steerAngle)
      yawTarget = clamp(yawTarget, -cap, cap)
      if (def.drivetrain === 'RWD') yawTarget += this.steer * throttle * clamp(speed / 40, 0, 1) * 0.2
      if (def.drivetrain === 'AWD' || def.drivetrain === '4WD') yawTarget *= 1.03
      if (handbrake) yawTarget *= 1.18
    }
    const yawResponse = this.airborne ? 0.8 : (handbrake ? 4.4 : 8.5)
    this.yawVel += (yawTarget - this.yawVel) * Math.min(1, dt * yawResponse)
    this.yaw += this.yawVel * dt

    // Project the old velocity onto the freshly rotated chassis. Keeping the
    // world-space momentum (instead of snapping it to the new heading) is what
    // makes the car slide, rotate and recover naturally in a drift.
    const nf = this.forward.clone()
    const nr = this.right.clone()
    let long = this.vel.dot(nf) + accel * dt
    let lat = this.vel.dot(nr)
    this.longAccel = (long - prevLong) / Math.max(dt, 1e-4)
    if (long > top) long = lerp(long, top, Math.min(1, dt * 4))
    if (long < -16) long = -16
    if (Math.abs(long) < 0.3 && throttle < 0.01 && brake < 0.01) long = 0

    if (!this.airborne) {
      const gripK = (handbrake ? 0.9 : 5.8) * (this.onRoad ? 1 : 0.62) * (onLoose ? 0.84 : 1) * (1 + def.grip * 0.12)
      lat *= Math.exp(-gripK * dt)
      // scrub a little speed while sliding hard
      if (Math.abs(lat) > 5) long -= Math.sign(long) * Math.min(Math.abs(long), Math.abs(lat) * 0.02 * dt * 60)
      this.slip = lat
      this.slipRaw = Math.atan2(lat, Math.max(4, Math.abs(long)))
    } else {
      lat *= Math.exp(-0.22 * dt)
      this.slip = lat
    }
    this.vel.copy(nf).multiplyScalar(long).addScaledVector(nr, lat)
    this.speedKmh = this.vel.length() * 3.6

    // drift state
    const driftThreshold = handbrake ? 1.6 : 3.2
    this.drifting = !this.airborne && speed > 8 && Math.abs(lat) > driftThreshold && (handbrake || Math.abs(this.slipRaw) > 0.14)
    if (this.drifting) {
      this.driftPoints += Math.abs(lat) * speed * dt * 0.55
    } else {
      this.driftPoints *= Math.max(0, 1 - dt * 1.8)
    }

    // integrate position
    this.pos.x += this.vel.x * dt
    this.pos.z += this.vel.z * dt
    this.distance += speed * dt

    // world bounds
    const L = 1990
    if (Math.abs(this.pos.x) > L) { this.pos.x = clamp(this.pos.x, -L, L); this.vel.x *= -0.25; this.yawVel *= 0.5 }
    if (Math.abs(this.pos.z) > L) { this.pos.z = clamp(this.pos.z, -L, L); this.vel.z *= -0.25; this.yawVel *= 0.5 }

    // solid props
    for (const o of this.world.obstacles) {
      const dx = this.pos.x - o.x, dz = this.pos.z - o.z
      const rr = o.r + 1.05
      const d2 = dx * dx + dz * dz
      if (d2 < rr * rr && d2 > 1e-6) {
        const d = Math.sqrt(d2)
        const nx = dx / d, nz = dz / d
        this.pos.x = o.x + nx * rr
        this.pos.z = o.z + nz * rr
        const vn = this.vel.x * nx + this.vel.z * nz
        if (vn < 0) {
          this.vel.x -= nx * vn * 1.4
          this.vel.z -= nz * vn * 1.4
          this.vel.multiplyScalar(0.72)
          this.yawVel *= 0.6
          if (Math.abs(vn) > 6 && this.effects) this.effects.bump(this.pos, Math.abs(vn))
        }
      }
    }

    // vertical motion / jumps
    const ground = this.world.heightAt(this.pos.x, this.pos.z)
    if (this.airborne) {
      this.yVel -= 23 * dt
      this.pos.y += this.yVel * dt
      this.airTime += dt
      if (this.pos.y <= ground) {
        const impact = Math.abs(this.yVel)
        this.pos.y = ground
        this.yVel = 0
        this.airborne = false
        this.landedHard = impact
        if (impact > 7 && this.effects) this.effects.land(this.pos, impact)
        if (this.airTime > 0.5 && this.effects) this.effects.air(this.airTime * impact)
        this.airTime = 0
      }
    } else {
      const drop = this.pos.y - ground
      if (drop > 0.55 && speed > 11 && !water) {
        this.airborne = true
        this.yVel = Math.min(10, drop * speed * 0.16 + 1.2)
      } else {
        this.pos.y = ground
        this.lastGround = ground
      }
    }

    // surface spray / smoke / dust
    if (this.effects && !this.airborne) {
      if (this.drifting) {
        this.effects.tireSmoke(this.pos, this.yaw, this.vel, this.drifting)
      } else if (offroad && speed > 7) {
        this.effects.dust(this.pos, this.vel, this.surface, speed, dt)
      }
      if (this.drifting && this.onRoad && speed > 12) {
        this.effects.skid(this.pos, this.yaw, this.obj.def.track / 2, this.obj.def.wheelbase / 2)
      }
      if (water) this.effects.splash(this.pos)
    }

    this.wheelSpin += long * dt / def.wheelR
    this.updateVisual(dt)
    this.updateTelemetry(dt)
  }

  updateTelemetry(dt) {
    this.speedKmh = this.vel.length() * 3.6
    if (this.obj) {
      const braking = this._lastBrake || this._lastHandbrake
      this.obj.lights.brakeMat.emissiveIntensity = braking ? 3.4 : 0.7
      const boostOn = this.boostActive
      for (const f of this.obj.boostFlames) {
        f.visible = boostOn
        if (boostOn) {
          f.scale.set(0.8 + Math.random() * 0.5, 0.7 + Math.random() * 0.8, 0.8 + Math.random() * 0.5)
          f.material.opacity = 0.65 + Math.random() * 0.35
        }
      }
    }
  }

  updateVisual(dt, snap = false) {
    if (!this.obj) return
    const speed = this.vel.length()
    const fwd = this.forward
    const right = this.right
    const normal = this.world.normalAt(this.pos.x, this.pos.z, _normal)
    if (this.airborne) normal.set(0, 1, 0)
    _right.copy(right)
    _up.copy(normal)
    _fwd.copy(fwd)
    _fwd.addScaledVector(_up, -_fwd.dot(_up)).normalize()
    _right.crossVectors(_up, _fwd).normalize()
    _fwd.crossVectors(_right, _up).normalize()
    _m.makeBasis(_right, _up, _fwd)
    _q.setFromRotationMatrix(_m)
    if (this.airborne) {
      const pitch = clamp(this.yVel * 0.012, -0.16, 0.16)
      _q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -pitch))
    }
    if (!this.quatReady || snap) {
      this.group.quaternion.copy(_q)
      this.quatReady = true
    } else {
      this.group.quaternion.slerp(_q, 1 - Math.exp(-16 * dt))
    }
    this.group.position.copy(this.pos)

    // suspension / body language
    const offroad = this.surface !== 'road'
    const bump = offroad ? Math.sin(this.distance * 0.72) * 0.022 * clamp(speed / 20, 0, 1) : 0
    this.bounce = lerp(this.bounce, bump, 0.25)
    const pitchTarget = clamp(-this.longAccel * 0.0055, -0.075, 0.075)
    const rollTarget = clamp(this.yawVel * speed * 0.0018 + this.slip * 0.002, -0.095, 0.095)
    this.bodyPitch = lerp(this.bodyPitch, pitchTarget, 0.12)
    this.bodyRoll = lerp(this.bodyRoll, rollTarget, 0.12)
    this.obj.chassis.position.y = this.bounce
    this.obj.chassis.rotation.x = this.bodyPitch
    this.obj.chassis.rotation.z = this.bodyRoll

    // wheels
    for (const w of this.obj.wheels) {
      w.spin.rotation.x = this.wheelSpin
      if (w.front) w.pivot.rotation.y = this.steerAngle * 0.95
      const y = this.airborne ? -0.2 : 0
      w.pivot.position.y = this.obj.def.wheelR + y
    }
    this.obj.group.position.y = 0
  }

  setLights(night) {
    if (!this.obj) return
    this.headlightOn = !!night
    if (this.headlight) this.headlight.intensity = night ? 360 : 0
    this.obj.lights.headMat.emissiveIntensity = night ? 3.4 : 1.2
    this.obj.lights.headMat.emissive.setHex(night ? 0xfff0c0 : 0xffedb8)
  }

  applyInput(input) {
    this._lastBrake = input.brake > 0.1
    this._lastHandbrake = !!input.handbrake
  }
}
