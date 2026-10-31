import * as THREE from '../vendor/three.module.js';
import { terrainHeight, terrainSlope } from './world.js';

const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

export const VEHICLES = [
  {
    id: 'jeep',
    name: 'Trail Jeep',
    tagline: 'THE ALL-ROUNDER',
    price: 0,
    color: 0xe45a3a,
    accent: 0xffc93f,
    trim: 0x2c303d,
    length: 2.95,
    width: 1.46,
    wheelBase: 2.55,
    frontRadius: 0.56,
    rearRadius: 0.56,
    suspLen: 0.5,
    travel: 0.36,
    mass: 230,
    inertia: 315,
    power: 4550,
    reverse: 2450,
    brake: 4200,
    maxSpeed: 30,
    grip: 1.0,
    spring: 105000,
    damping: 6800,
    stats: { power: 0.62, grip: 0.72, weight: 0.48 }
  },
  {
    id: 'buggy',
    name: 'Dune Buggy',
    tagline: 'LIGHT & FLIGHTY',
    price: 220,
    color: 0xf2b53a,
    accent: 0xfff0c6,
    trim: 0x30333e,
    length: 2.6,
    width: 1.34,
    wheelBase: 2.45,
    frontRadius: 0.54,
    rearRadius: 0.66,
    suspLen: 0.58,
    travel: 0.44,
    mass: 185,
    inertia: 245,
    power: 4200,
    reverse: 2300,
    brake: 3900,
    maxSpeed: 35,
    grip: 0.92,
    spring: 88000,
    damping: 5400,
    stats: { power: 0.7, grip: 0.54, weight: 0.3 }
  },
  {
    id: 'truck',
    name: 'Mud Titan',
    tagline: 'BIG WHEELS, BIGGER AIR',
    price: 520,
    color: 0x3c7cd1,
    accent: 0x8fe1a4,
    trim: 0x262b38,
    length: 3.35,
    width: 1.76,
    wheelBase: 2.95,
    frontRadius: 0.82,
    rearRadius: 0.82,
    suspLen: 0.64,
    travel: 0.5,
    mass: 330,
    inertia: 545,
    power: 6400,
    reverse: 3200,
    brake: 5600,
    maxSpeed: 28,
    grip: 1.14,
    spring: 155000,
    damping: 10800,
    stats: { power: 0.86, grip: 0.94, weight: 0.82 }
  }
];

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.set(x, y, z);
  return mesh;
}

export class Vehicle {
  constructor(scene, config) {
    this.scene = scene;
    this.config = config;
    this.group = new THREE.Group();
    this.group.rotation.order = 'ZYX';
    this.scene.add(this.group);

    this.wheels = [];
    this.crashPoints = [];
    this.bodyPoints = [];
    this.onLand = null;
    this.onCrash = null;

    this.buildModel();
    this.reset(0);
  }

  buildModel() {
    const c = this.config;
    const bodyMat = new THREE.MeshStandardMaterial({ color: c.color, flatShading: true, roughness: 0.52, metalness: 0.18 });
    const accentMat = new THREE.MeshStandardMaterial({ color: c.accent, flatShading: true, roughness: 0.6, metalness: 0.12 });
    const trimMat = new THREE.MeshStandardMaterial({ color: c.trim, flatShading: true, roughness: 0.85, metalness: 0.2 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x23262d, flatShading: true, roughness: 0.9, metalness: 0.1 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x9fd6df, flatShading: true, roughness: 0.25, metalness: 0.5, transparent: true, opacity: 0.6 });
    const lightMat = new THREE.MeshStandardMaterial({ color: 0xfff0b8, flatShading: true, roughness: 0.5, emissive: 0xffc447, emissiveIntensity: 0.7 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xc23530, flatShading: true, roughness: 0.6, emissive: 0x4a0805, emissiveIntensity: 0.5 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xe0a878, flatShading: true, roughness: 0.9 });

    const L = c.length;
    const W = c.width;
    const extraHigh = c.id === 'truck';

    const chassis = new THREE.Group();
    this.chassis = chassis;
    this.group.add(chassis);

    const mainY = extraHigh ? 0.3 : 0.2;
    const body = box(L, 0.56, W, bodyMat, 0, mainY, 0);
    chassis.add(body);
    const hood = box(L * 0.32, 0.24, W * 0.93, bodyMat, L * 0.27, mainY + 0.3, 0);
    chassis.add(hood);
    const nose = box(L * 0.12, 0.2, W * 0.88, bodyMat, L * 0.47, mainY + 0.16, 0);
    chassis.add(nose);
    const stripe = box(L * 0.965, 0.075, W + 0.02, accentMat, 0, mainY + 0.08, 0);
    chassis.add(stripe);

    // Cabin tub and rear bed.
    const cab = box(L * 0.4, 0.44, W * 0.9, bodyMat, -L * 0.16, mainY + 0.32, 0);
    chassis.add(cab);
    const bed = box(L * 0.24, 0.34, W * 0.94, trimMat, -L * 0.39, mainY + 0.24, 0);
    chassis.add(bed);
    const skid = box(L * 0.7, 0.12, W * 0.82, trimMat, 0, mainY - 0.31, 0);
    chassis.add(skid);

    // Bumpers and lights.
    chassis.add(box(0.18, 0.26, W * 1.06, trimMat, L * 0.52, mainY + 0.05, 0));
    chassis.add(box(0.16, 0.24, W * 1.02, trimMat, -L * 0.52, mainY + 0.02, 0));
    for (const z of [-W * 0.3, W * 0.3]) {
      chassis.add(box(0.07, 0.16, 0.22, lightMat, L * 0.523, mainY + 0.24, z));
      chassis.add(box(0.06, 0.14, 0.17, redMat, -L * 0.522, mainY + 0.2, z));
    }

    // Windshield.
    const glass = box(0.06, 0.55, W * 0.8, glassMat, L * 0.06, mainY + 0.72, 0);
    glass.rotation.z = -0.24;
    chassis.add(glass);
    const frame = box(0.09, 0.07, W * 0.84, trimMat, L * 0.1, mainY + 0.99, 0);
    frame.rotation.z = -0.24;
    chassis.add(frame);

    // Roll cage.
    const barMat = c.id === 'buggy' ? accentMat : trimMat;
    for (const z of [-W * 0.37, W * 0.37]) {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.9, 6), barMat);
      pillar.position.set(-L * 0.27, mainY + 0.93, z);
      chassis.add(pillar);
    }
    const topBar = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, W * 0.74, 6), barMat);
    topBar.rotation.x = Math.PI / 2;
    topBar.position.set(-L * 0.27, mainY + 1.38, 0);
    chassis.add(topBar);

    // Driver.
    const seatX = -L * 0.17;
    const seatY = mainY + 0.55;
    chassis.add(box(0.38, 0.5, 0.42, darkMat, seatX - 0.18, seatY + 0.08, 0));
    const torso = box(0.34, 0.38, 0.34, accentMat, seatX, seatY + 0.36, 0);
    chassis.add(torso);
    const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.19, 1), skinMat);
    head.position.set(seatX, seatY + 0.68, 0);
    chassis.add(head);
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.225, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.62), accentMat);
    helmet.position.set(seatX, seatY + 0.71, 0);
    helmet.scale.y = 0.9;
    chassis.add(helmet);
    const visor = box(0.11, 0.11, 0.3, darkMat, seatX + 0.13, seatY + 0.7, 0);
    chassis.add(visor);
    // Arms to the wheel.
    const armGeo = new THREE.BoxGeometry(0.09, 0.09, 0.34);
    for (const z of [-0.16, 0.16]) {
      const arm = new THREE.Mesh(armGeo, accentMat);
      arm.position.set(seatX + 0.16, seatY + 0.38, z);
      arm.rotation.x = z > 0 ? 0.45 : -0.45;
      chassis.add(arm);
    }
    const steering = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.035, 5, 8), darkMat);
    steering.rotation.y = Math.PI / 2;
    steering.position.set(seatX + 0.46, seatY + 0.34, 0);
    steering.rotation.z = 0.2;
    chassis.add(steering);

    // Spare tire on the tail (not on the buggy).
    if (c.id !== 'buggy') {
      const spare = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.2, 10), darkMat);
      spare.rotation.x = Math.PI / 2;
      spare.position.set(-L * 0.545, mainY + 0.35, 0);
      chassis.add(spare);
      const spareHub = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.22, 8), accentMat);
      spareHub.rotation.x = Math.PI / 2;
      spareHub.position.set(-L * 0.55, mainY + 0.35, 0);
      chassis.add(spareHub);
    }

    // Little side plate / number decal.
    const decalTex = this.makeDecalTexture();
    const decalMat = new THREE.MeshBasicMaterial({ map: decalTex, transparent: true });
    const decal = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.34), decalMat);
    decal.position.set(-L * 0.04, mainY + 0.28, W * 0.501);
    chassis.add(decal);

    // Exhaust.
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.4, 6), trimMat);
    pipe.rotation.z = Math.PI / 2;
    pipe.position.set(-L * 0.5, mainY - 0.12, -W * 0.28);
    chassis.add(pipe);

    // Wheels.
    const axleZ = W * 0.5 + 0.09;
    const frontX = c.wheelBase * 0.5;
    const rearX = -c.wheelBase * 0.5;
    const axleY = -0.18;
    const positions = [
      { x: frontX, z: axleZ, r: c.frontRadius, front: true },
      { x: frontX, z: -axleZ, r: c.frontRadius, front: true },
      { x: rearX, z: axleZ, r: c.rearRadius, front: false },
      { x: rearX, z: -axleZ, r: c.rearRadius, front: false }
    ];
    for (const p of positions) {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(p.x, axleY, p.z);
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(p.r, p.r, 0.38, 10), darkMat);
      tire.rotation.x = Math.PI / 2;
      wheelGroup.add(tire);
      const tread = new THREE.Mesh(new THREE.CylinderGeometry(p.r * 1.01, p.r * 1.01, 0.16, 10), trimMat);
      tread.rotation.x = Math.PI / 2;
      wheelGroup.add(tread);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(p.r * 0.47, p.r * 0.47, 0.4, 8), accentMat);
      hub.rotation.x = Math.PI / 2;
      wheelGroup.add(hub);
      const hubDot = new THREE.Mesh(new THREE.CylinderGeometry(p.r * 0.16, p.r * 0.16, 0.42, 6), trimMat);
      hubDot.rotation.x = Math.PI / 2;
      wheelGroup.add(hubDot);
      chassis.add(wheelGroup);
      this.wheels.push({
        group: wheelGroup,
        x: p.x,
        z: p.z,
        y: axleY,
        radius: p.r,
        front: p.front,
        spin: 0,
        compression: 0,
        contact: false
      });
    }

    this.group.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = false;
      }
      if (obj.material === glassMat) obj.castShadow = false;
    });

    const headX = seatX;
    const headY = seatY + 0.98;
    this.headPoint = { x: headX, y: headY };
    this.crashPoints.push({ x: headX, y: headY, crash: true });

    const halfL = L * 0.5;
    const bottomY = mainY - 0.36;
    this.bodyPoints = [
      { x: halfL, y: bottomY },
      { x: -halfL, y: bottomY },
      { x: halfL * 0.55, y: mainY + 0.36 },
      { x: -halfL * 0.55, y: mainY + 0.36 },
      { x: halfL, y: mainY + 0.2 },
      { x: -halfL, y: mainY + 0.2 }
    ];
    this.bodyPoints.push(...this.crashPoints);

    this.spawnOffset = -axleY + c.suspLen + Math.max(c.frontRadius, c.rearRadius) - 0.03;
    this.axleY = axleY;
  }

  makeDecalTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 84;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 128, 84);
    ctx.fillStyle = '#fff3df';
    ctx.beginPath();
    ctx.roundRect(3, 3, 122, 78, 12);
    ctx.fill();
    ctx.strokeStyle = '#2a241d';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = '#2a241d';
    ctx.font = '400 50px Bungee, Impact, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.config.id === 'truck' ? '44' : this.config.id === 'buggy' ? '09' : '07', 64, 45);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  reset(x) {
    const y = terrainHeight(x) + this.spawnOffset;
    this.x = x;
    this.z = 0;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.angle = 0;
    this.angVel = 0;
    this.airTime = 0;
    this.airAngle = 0;
    this.contactCount = 0;
    this.crashed = false;
    this.crashReason = '';
    this.throttle = 0;
    this.prevAngle = 0;
    this.landedImpact = 0;
    this.speed = 0;
    for (const wheel of this.wheels) {
      wheel.spin = 0;
      wheel.compression = 0.03;
      wheel.contact = false;
    }
    this.group.position.set(this.x, this.y, 0);
    this.group.rotation.z = 0;
    this.updateVisuals();
  }

  /** Advance simulation with fixed substeps. */
  update(dt, input, world) {
    const steps = Math.min(6, Math.max(1, Math.ceil(dt / (1 / 120))));
    const h = dt / steps;
    for (let i = 0; i < steps; i += 1) {
      this.step(h, input, world);
    }
    this.updateVisuals();
  }

  step(dt, input, world) {
    const c = this.config;
    const gas = input.gas ? 1 : 0;
    const brake = input.brake ? 1 : 0;
    let throttle = gas - brake * 0.78;
    if (this.crashed) throttle = 0;
    this.throttle = throttle;

    const cos = Math.cos(this.angle);
    const sin = Math.sin(this.angle);
    const downX = sin;
    const downY = -cos;
    const upX = -sin;
    const upY = cos;

    let ax = 0;
    let ay = -22;
    let alpha = 0;
    let contacts = 0;
    let lastImpact = 0;

    const speed = Math.hypot(this.vx, this.vy);
    const drag = 0.026 * speed;
    ax -= this.vx * drag;
    ay -= this.vy * drag;

    const apply = (fx, fy, rx, ry, torqueScale = 1) => {
      ax += fx / c.mass;
      ay += fy / c.mass;
      alpha += ((rx * fy - ry * fx) / c.inertia) * torqueScale;
    };

    for (const wheel of this.wheels) {
      if (wheel.z < 0) continue; // physics is a 2D side view; one wheel per axle
      const ax0 = wheel.x;
      const ay0 = wheel.y;
      const rx = ax0 * cos - ay0 * sin;
      const ry = ax0 * sin + ay0 * cos;
      const wx = this.x + rx;
      const wy = this.y + ry;
      const ground = terrainHeight(wx);
      const reach = c.suspLen + wheel.radius;
      const dist = wy - ground;
      const compression = clamp(reach - dist, 0, c.travel);
      wheel.compression = compression;
      wheel.contact = compression > 0.001;

      if (wheel.contact) {
        contacts += 1;
        const slope = terrainSlope(wx);
        const inv = 1 / Math.hypot(1, slope);
        const tx = inv;
        const ty = slope * inv;
        const nx = -slope * inv;
        const ny = inv;

        const vpx = this.vx - this.angVel * ry;
        const vpy = this.vy + this.angVel * rx;
        const vUp = vpx * nx + vpy * ny;
        const vAlong = vpx * tx + vpy * ty;
        wheel.spin += (vAlong / wheel.radius) * dt;
        lastImpact = Math.min(lastImpact, vUp);

        let springF = c.spring * compression - c.damping * vUp;
        springF = clamp(springF, 0, c.spring * c.travel * 1.4);

        const contactLX = ax0 + downX * (c.suspLen - compression + wheel.radius);
        const contactLY = ay0 + downY * (c.suspLen - compression + wheel.radius);
        const crx = contactLX * cos - contactLY * sin;
        const cry = contactLX * sin + contactLY * cos;
        apply(nx * springF, ny * springF, crx, cry, 1);

        let drive = 0;
        if (throttle > 0.01) {
          const limit = clamp(vAlong / c.maxSpeed, 0, 1);
          drive = throttle * c.power * 0.5 * (1 - limit * limit);
        } else if (throttle < -0.01) {
          if (vAlong > 0.6) {
            drive = throttle * c.brake * 0.5;
          } else {
            const limit = clamp((-vAlong) / (c.maxSpeed * 0.5), 0, 1);
            drive = throttle * c.reverse * 0.5 * (1 - limit * limit);
          }
        }
        const roll = Math.sign(vAlong) * Math.min(Math.abs(vAlong) * c.mass * 0.42, 55) + Math.sign(vAlong) * 11;
        drive = (drive - roll) * c.grip;
        apply(tx * drive, ty * drive, crx, cry, 0.38);
      } else {
        wheel.spin += throttle * dt * 9;
      }
    }

    if (contacts === 0) {
      alpha += throttle * 2.25;
      alpha -= this.angVel * 0.12;
    } else {
      alpha -= this.angVel * 0.05;
    }

    // Integrate.
    this.vx += ax * dt;
    this.vy += ay * dt;
    this.angVel += alpha * dt;
    this.vx = clamp(this.vx, -45, 55);
    this.vy = clamp(this.vy, -70, 45);
    this.angVel = clamp(this.angVel, -8, 8);
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.angle += this.angVel * dt;

    // Chassis collision against the slope.
    this.resolveBody(world);
    this.contactCount = contacts;
    this.speed = Math.hypot(this.vx, this.vy);

    // Air time and landing events.
    if (contacts === 0) {
      this.airTime += dt;
      this.airAngle += this.angle - this.prevAngle;
    } else {
      if (this.airTime > 0.28) {
        this.landedImpact = Math.abs(lastImpact);
        if (this.onLand) this.onLand(this.airTime, this.airAngle, Math.abs(lastImpact));
      }
      this.airTime = 0;
      this.airAngle = 0;
    }
    this.prevAngle = this.angle;
  }

  resolveBody(world) {
    const cos = Math.cos(this.angle);
    const sin = Math.sin(this.angle);
    let crashed = false;

    for (const point of [...this.bodyPoints, ...this.crashPoints]) {
      const rx = point.x * cos - point.y * sin;
      const ry = point.x * sin + point.y * cos;
      const px = this.x + rx;
      const py = this.y + ry;
      const ground = terrainHeight(px);
      if (py >= ground) continue;

      const slope = terrainSlope(px);
      const inv = 1 / Math.hypot(1, slope);
      const nx = -slope * inv;
      const ny = inv;
      const pen = ground - py;
      this.x += nx * pen * 0.7;
      this.y += ny * pen * 0.7;

      const vpx = this.vx - this.angVel * ry;
      const vpy = this.vy + this.angVel * rx;
      const vn = vpx * nx + vpy * ny;
      if (vn < 0) {
        const rn = rx * ny - ry * nx;
        const eff = 1 / this.config.mass + (rn * rn) / this.config.inertia;
        const j = (-(1.16) * vn) / eff;
        this.vx += (j * nx) / this.config.mass;
        this.vy += (j * ny) / this.config.mass;
        this.angVel += (rn * j) / this.config.inertia;
        const tx = ny;
        const ty = -nx;
        const vt = vpx * tx + vpy * ty;
        const jt = clamp((-vt * 0.45) / eff, -j * 0.5, j * 0.5);
        this.vx += (jt * tx) / this.config.mass;
        this.vy += (jt * ty) / this.config.mass;
        this.angVel += ((rx * ty - ry * tx) * jt) / this.config.inertia;
      }
      if (point.crash && pen > 0.015) crashed = true;
    }

    if (crashed && !this.crashed) {
      this.crashed = true;
      this.crashReason = 'rollover';
      if (this.onCrash) this.onCrash('rollover');
    }
  }

  updateVisuals() {
    this.group.position.set(this.x, this.y, 0);
    this.group.rotation.z = this.angle;
    const c = this.config;
    for (const wheel of this.wheels) {
      wheel.group.position.set(wheel.x, wheel.y - (c.suspLen - wheel.compression), wheel.z);
      wheel.group.rotation.z = wheel.spin;
    }
  }

  get wheelGroundSpeed() {
    return this.speed;
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    });
  }
}
