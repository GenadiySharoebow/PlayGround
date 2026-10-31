import * as THREE from 'three'

const PARTICLE_VERT = /* glsl */`
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vAlpha = aAlpha;
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (520.0 / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
}`
const PARTICLE_FRAG = /* glsl */`
precision highp float;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float a = smoothstep(0.5, 0.08, d) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`

const _v = new THREE.Vector3()
const _q = new THREE.Quaternion()
const _m = new THREE.Matrix4()
const _s = new THREE.Vector3(1, 1, 1)

export class Effects {
  constructor(scene) {
    this.scene = scene
    this.onMessage = () => {}
    this.shake = 0
    this.flash = 0
    this.MAX = 700
    this.count = 0
    this.cursor = 0
    this.parts = []
    const positions = new Float32Array(this.MAX * 3)
    const sizes = new Float32Array(this.MAX)
    const alphas = new Float32Array(this.MAX)
    const colors = new Float32Array(this.MAX * 3)
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1))
    geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3))
    const mat = new THREE.ShaderMaterial({
      vertexShader: PARTICLE_VERT, fragmentShader: PARTICLE_FRAG,
      transparent: true, depthWrite: false, blending: THREE.NormalBlending
    })
    this.positions = positions; this.sizes = sizes; this.alphas = alphas; this.colors = colors
    this.points = new THREE.Points(geo, mat)
    this.points.frustumCulled = false
    this.points.renderOrder = 5
    scene.add(this.points)
    for (let i = 0; i < this.MAX; i++) {
      this.parts.push({ active: false, life: 0, max: 1, vx: 0, vy: 0, vz: 0, g: 0, drag: 0.98, size0: 1, size1: 1, r: 1, g2: 1, b: 1, alpha: 0.5 })
      alphas[i] = 0
    }

    // skid marks
    const skidGeo = new THREE.PlaneGeometry(0.42, 1.3)
    skidGeo.rotateX(-Math.PI / 2)
    const skidMat = new THREE.MeshBasicMaterial({ color: 0x14120f, transparent: true, opacity: 0.4, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 })
    this.skidMax = 420
    this.skids = new THREE.InstancedMesh(skidGeo, skidMat, this.skidMax)
    this.skids.frustumCulled = false
    this.skids.renderOrder = 1
    this.skidCursor = 0
    this.skidTimer = 0
    this.skidSides = [0, 0]
    for (let i = 0; i < this.skidMax; i++) {
      _m.makeTranslation(0, -9999, 0)
      this.skids.setMatrixAt(i, _m)
    }
    this.skids.instanceMatrix.needsUpdate = true
    scene.add(this.skids)
    this.tmpSkidQ = new THREE.Quaternion()
  }

  spawn(x, y, z, vx, vy, vz, size0, size1, life, color, alpha = 0.6, gravity = 0, drag = 0.97) {
    const i = this.cursor
    this.cursor = (this.cursor + 1) % this.MAX
    const p = this.parts[i]
    p.active = true; p.life = life; p.max = life
    p.vx = vx; p.vy = vy; p.vz = vz
    p.size0 = size0; p.size1 = size1
    p.g = gravity; p.drag = drag
    p.r = color.r; p.g2 = color.g; p.b = color.b
    p.alpha = alpha
    this.positions[i * 3] = x
    this.positions[i * 3 + 1] = y
    this.positions[i * 3 + 2] = z
    this.colors[i * 3] = color.r
    this.colors[i * 3 + 1] = color.g
    this.colors[i * 3 + 2] = color.b
    this.sizes[i] = size0
    this.alphas[i] = alpha
  }

  tireSmoke(pos, yaw, vel, intensity = 1) {
    const track = 0.8, rear = 1.2
    const fx = Math.sin(yaw), fz = Math.cos(yaw)
    const rx = Math.cos(yaw), rz = -Math.sin(yaw)
    for (const side of [-1, 1]) {
      if (Math.random() > 0.72) continue
      const x = pos.x + rx * track * side - fx * rear
      const z = pos.z + rz * track * side - fz * rear
      const y = pos.y + 0.25
      this.spawn(x, y, z,
        -vel.x * 0.14 + (Math.random() - 0.5) * 2.2,
        1.2 + Math.random() * 2.2,
        -vel.z * 0.14 + (Math.random() - 0.5) * 2.2,
        1.1 + Math.random() * 1.1, 5.5 + Math.random() * 3, 1.1 + Math.random() * 0.9,
        { r: 0.78, g: 0.76, b: 0.72 }, 0.42, -0.7, 0.985)
    }
  }

  dust(pos, vel, surface, speed, dt) {
    if (Math.random() > Math.min(0.75, dt * 42)) return
    const color = surface === 'sand' ? { r: 0.72, g: 0.56, b: 0.34 } : surface === 'dirt' ? { r: 0.55, g: 0.47, b: 0.35 } : { r: 0.5, g: 0.53, b: 0.35 }
    for (let i = 0; i < 2; i++) {
      this.spawn(
        pos.x + (Math.random() - 0.5) * 2.4,
        pos.y + 0.2,
        pos.z + (Math.random() - 0.5) * 2.4,
        -vel.x * 0.09 + (Math.random() - 0.5) * 3.4,
        1 + Math.random() * 2.6,
        -vel.z * 0.09 + (Math.random() - 0.5) * 3.4,
        1.2 + Math.random() * 1.4, 6 + Math.random() * 4, 1.2 + Math.random() * 1.2,
        color, 0.3, -0.9, 0.982)
    }
  }

  splash(pos) {
    if (Math.random() > 0.5) return
    this.spawn(pos.x + (Math.random() - 0.5) * 2, pos.y + 0.2, pos.z + (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 3, 2 + Math.random() * 3, (Math.random() - 0.5) * 3,
      0.7, 2.6, 0.8, { r: 0.72, g: 0.92, b: 0.98 }, 0.65, -7, 0.985)
  }

  land(pos, power = 8) {
    this.shake = Math.min(1.3, this.shake + power * 0.055)
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * Math.PI * 2, r = 1 + Math.random() * 2.5
      this.spawn(pos.x + Math.cos(a) * r, pos.y + 0.15, pos.z + Math.sin(a) * r,
        Math.cos(a) * (2 + Math.random() * 4), 0.6 + Math.random() * 2.6, Math.sin(a) * (2 + Math.random() * 4),
        1.2, 5.5, 0.9 + Math.random() * 0.7, { r: 0.7, g: 0.61, b: 0.44 }, 0.34, -2, 0.97)
    }
  }

  bump(pos, power = 8) {
    this.shake = Math.min(1.1, this.shake + power * 0.03)
    for (let i = 0; i < 8; i++) {
      this.spawn(pos.x, pos.y + 0.55, pos.z,
        (Math.random() - 0.5) * 8, 1 + Math.random() * 4, (Math.random() - 0.5) * 8,
        0.28, 0.05, 0.35 + Math.random() * 0.3, { r: 1, g: 0.65, b: 0.2 }, 0.9, -9, 0.98)
    }
  }

  skid(pos, yaw, track, rear) {
    this.skidTimer -= 1 / 60
    const fx = Math.sin(yaw), fz = Math.cos(yaw)
    const rx = Math.cos(yaw), rz = -Math.sin(yaw)
    for (let s = 0; s < 2; s++) {
      const side = s === 0 ? -1 : 1
      const x = pos.x + rx * track * side - fx * rear
      const z = pos.z + rz * track * side - fz * rear
      const y = pos.y + 0.045
      const dx = x - this.skidSides[s * 2]
      const dz = z - this.skidSides[s * 2 + 1]
      if (this.skidSides[s * 2] === 0 && this.skidSides[s * 2 + 1] === 0) {
        this.skidSides[s * 2] = x; this.skidSides[s * 2 + 1] = z
        continue
      }
      const d = Math.hypot(dx, dz)
      if (d < 0.35) { this.skidSides[s * 2] = x; this.skidSides[s * 2 + 1] = z; continue }
      const angle = Math.atan2(dx, dz)
      _q.setFromEuler(new THREE.Euler(0, angle, 0))
      _s.set(1, 1, Math.min(2.4, d / 1.3))
      _m.compose(_v.set(x, y, z), _q, _s)
      this.skids.setMatrixAt(this.skidCursor, _m)
      this.skidCursor = (this.skidCursor + 1) % this.skidMax
      this.skids.instanceMatrix.needsUpdate = true
      this.skidSides[s * 2] = x; this.skidSides[s * 2 + 1] = z
    }
    this.skidTimer = 0.06
  }

  air(points) {
    const n = Math.min(1000, Math.round(points))
    if (n > 20) this.onMessage(`AIR +${n}`, 'AIRTIME')
  }

  message(text, sub = '') { this.onMessage(text, sub) }

  update(dt) {
    for (let i = 0; i < this.MAX; i++) {
      const p = this.parts[i]
      if (!p.active) { this.alphas[i] = 0; continue }
      p.life -= dt
      if (p.life <= 0) { p.active = false; this.alphas[i] = 0; continue }
      const t = 1 - p.life / p.max
      p.vx *= p.drag; p.vz *= p.drag; p.vy = p.vy * p.drag + p.g * dt
      this.positions[i * 3] += p.vx * dt
      this.positions[i * 3 + 1] += p.vy * dt
      this.positions[i * 3 + 2] += p.vz * dt
      this.sizes[i] = p.size0 + (p.size1 - p.size0) * t
      this.alphas[i] = p.alpha * Math.min(1, (1 - t) * 2.5) * Math.min(1, t * 8)
    }
    this.points.geometry.attributes.position.needsUpdate = true
    this.points.geometry.attributes.aSize.needsUpdate = true
    this.points.geometry.attributes.aAlpha.needsUpdate = true
    this.points.geometry.attributes.aColor.needsUpdate = true
    this.shake *= Math.exp(-4.5 * dt)
    this.flash *= Math.exp(-6 * dt)
  }
}
