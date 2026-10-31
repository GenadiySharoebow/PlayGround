import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

/* ------------------------------------------------------------------ */
/*  HORIZON LIBRE — Baja open world                                   */
/* ------------------------------------------------------------------ */

export const WORLD_SIZE = 4200
export const HALF = WORLD_SIZE / 2
export const WATER_LEVEL = 0
export const FESTIVAL = new THREE.Vector2(18, 172)
export const VOLCANO = new THREE.Vector2(835, -955)
export const TOWN = new THREE.Vector2(-1145, 830)
export const AIRFIELD = new THREE.Vector2(1170, 365)

const clamp = THREE.MathUtils.clamp
const lerp = THREE.MathUtils.lerp
const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t) }

function hash2(x, y) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123
  return n - Math.floor(n)
}
function noise2(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y)
  const xf = x - xi, yf = y - yi
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf)
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1)
  return lerp(lerp(a, b, u), lerp(c, d, u), v)
}
function fbm(x, y, oct = 4) {
  let s = 0, a = 0.5, f = 1
  for (let i = 0; i < oct; i++) { s += a * noise2(x * f, y * f); f *= 2.03; a *= 0.5 }
  return s
}
function ridged(x, y, oct = 4) {
  let s = 0, a = 0.5, f = 1
  for (let i = 0; i < oct; i++) { const n = noise2(x * f, y * f); s += a * (1 - Math.abs(n * 2 - 1)); f *= 2.05; a *= 0.5 }
  return s
}
export function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0
    let t = Math.imul(a ^ a >>> 15, 1 | a)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

/* ---------------------------- terrain ----------------------------- */

export function heightAt(x, z) {
  let h = 10 + fbm(x * 0.0021 + 11, z * 0.0021 - 7, 4) * 48
  h += fbm(x * 0.0068 - 3, z * 0.0068 + 9, 3) * 11
  h += ridged(x * 0.0034, z * 0.0034, 3) * 24

  // mountain rim — gives the horizon a wall of ridges
  const edge = smoothstep(880, 1810, Math.max(Math.abs(x), Math.abs(z)))
  h += edge * (95 + ridged(x * 0.0055 + 4, z * 0.0055, 4) * 295)

  // second ridge line across the south
  const south = smoothstep(620, 1400, z) * smoothstep(1650, 900, Math.abs(x - 180))
  h += south * (60 + ridged(x * 0.0067 + 30, z * 0.0067, 3) * 130)

  // volcano
  const dv = Math.hypot(x - VOLCANO.x, z - VOLCANO.y)
  const cone = Math.pow(clamp(1 - dv / 780, 0, 1), 1.55) * 348
  const crater = Math.pow(clamp(1 - dv / 122, 0, 1), 1.9) * 108
  h += cone - crater

  // coastline to the west
  const coast = smoothstep(-1280, -1980, x)
  h = lerp(h, -24, coast)
  // bay + lake
  const dl = Math.hypot(x - 805, z - 720)
  h = lerp(h, -16, smoothstep(345, 150, dl))
  // town plateau
  const dt = Math.hypot(x - TOWN.x, z - TOWN.y)
  h = lerp(h, 15, smoothstep(185, 90, dt) * 0.94)
  // airfield
  const da = Math.hypot(x - AIRFIELD.x, z - AIRFIELD.y)
  h = lerp(h, 22, smoothstep(230, 120, da) * 0.96)
  // festival grounds
  const df = Math.hypot(x - FESTIVAL.x, z - FESTIVAL.y)
  h = lerp(h, 17, smoothstep(165, 80, df) * 0.97)
  return h
}

export function normalAt(x, z, out = new THREE.Vector3()) {
  const e = 1.5
  const hL = heightAt(x - e, z), hR = heightAt(x + e, z)
  const hD = heightAt(x, z - e), hU = heightAt(x, z + e)
  return out.set(hL - hR, 2 * e, hD - hU).normalize()
}

export function surfaceAt(x, z, roadFinder) {
  const h = heightAt(x, z)
  if (h < 0.45) return h < -0.7 ? 'water' : 'shore'
  if (roadFinder && roadFinder(x, z) < 7.4) return 'road'
  const desert = fbm(x * 0.0018 + 40, z * 0.0018 - 20, 3)
  if (h < 4.5) return 'sand'
  if (desert > 0.59 && x > -300) return 'sand'
  if (h > 215) return 'rock'
  if (h > 125) return 'dirt'
  return 'grass'
}

/* ----------------------------- roads ------------------------------ */

const ROAD_DEFS = [
  {
    name: 'Carretera Costera', width: 11, closed: true, surface: 'asphalt',
    pts: [[20, 155], [245, 355], [170, 770], [-250, 1080], [-740, 1215], [-1110, 1090], [-1240, 760], [-1130, 365], [-995, -95], [-735, -425], [-250, -385], [20, -95]]
  },
  {
    name: 'Volcán Pass', width: 9, closed: false,
    pts: [[245, 355], [520, 170], [700, -230], [805, -610], [848, -860], [835, -1030]]
  },
  {
    name: 'Ruta del Desierto', width: 10, closed: false,
    pts: [[170, 770], [590, 810], [980, 725], [1270, 505], [1430, 130], [1390, -320], [1160, -720], [880, -930]]
  },
  {
    name: 'Camino Selva', width: 8, closed: false,
    pts: [[-740, 1215], [-865, 1485], [-570, 1690], [-190, 1600], [130, 1380], [170, 1080]]
  },
  {
    name: 'Bulevar Festival', width: 12, closed: false,
    pts: [[20, 155], [8, 60], [90, -20], [235, -10], [330, 95], [300, 245], [190, 315], [110, 330]]
  }
]

function buildRoads(scene, obstacles) {
  const roads = []
  const sampleGrid = new Map()
  const CELL = 48
  const key = (x, z) => `${Math.floor(x / CELL)},${Math.floor(z / CELL)}`
  const addSample = (x, z) => {
    const k = key(x, z)
    let arr = sampleGrid.get(k)
    if (!arr) { arr = []; sampleGrid.set(k, arr) }
    arr.push(x, z)
  }
  const finder = (x, z) => {
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL)
    let best = 1e9
    for (let ix = cx - 1; ix <= cx + 1; ix++) for (let iz = cz - 1; iz <= cz + 1; iz++) {
      const arr = sampleGrid.get(`${ix},${iz}`)
      if (!arr) continue
      for (let i = 0; i < arr.length; i += 2) {
        const dx = x - arr[i], dz = z - arr[i + 1]
        const d = dx * dx + dz * dz
        if (d < best) best = d
      }
    }
    return Math.sqrt(best)
  }

  for (const def of ROAD_DEFS) {
    const control = def.pts.map(([x, z]) => new THREE.Vector3(x, 0, z))
    const curve = new THREE.CatmullRomCurve3(control, def.closed, 'catmullrom', 0.35)
    const length = curve.getLength()
    const N = Math.max(90, Math.ceil(length / 5))
    const pts = []
    for (let i = 0; i <= N; i++) {
      const t = i / N
      const p = curve.getPointAt(t)
      p.y = heightAt(p.x, p.z) + 0.22
      pts.push(p)
      addSample(p.x, p.z)
      if (i % 2 === 0) {
        const tangent = curve.getTangentAt(t)
        const rx = tangent.z, rz = -tangent.x
        const len = Math.hypot(rx, rz) || 1
        addSample(p.x + (rx / len) * def.width * 0.4, p.z + (rz / len) * def.width * 0.4)
        addSample(p.x - (rx / len) * def.width * 0.4, p.z - (rz / len) * def.width * 0.4)
      }
    }
    // shoulder ribbon (slightly wider, warm dust)
    const shoulder = ribbonGeometry(pts, def.width + 7, 0.08)
    const shoulderMat = new THREE.MeshStandardMaterial({ color: 0x6f5b3e, roughness: 1, metalness: 0, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1 })
    const shoulderMesh = new THREE.Mesh(shoulder, shoulderMat)
    shoulderMesh.receiveShadow = true
    scene.add(shoulderMesh)
    // asphalt
    const geo = ribbonGeometry(pts, def.width, 0.17)
    const mat = new THREE.MeshStandardMaterial({ color: 0x2b2d34, roughness: 0.9, metalness: 0.04, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.receiveShadow = true
    scene.add(mesh)

    // lane dashes + edge lines
    const dashMat = new THREE.MeshStandardMaterial({ color: 0xe8e3d2, roughness: 0.8, emissive: 0x2a240d, emissiveIntensity: 0.15 })
    const step = def.closed ? Math.max(1, Math.round(9 / (length / N))) : Math.max(1, Math.round(9 / (length / N)))
    const dashCount = Math.floor(N / step) + 2
    const dashes = new THREE.InstancedMesh(new THREE.BoxGeometry(0.24, 0.035, 3.1), dashMat, dashCount)
    dashes.frustumCulled = false
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), e = new THREE.Euler()
    let di = 0
    for (let i = 0; i < N && di < dashCount; i += step) {
      const p = pts[i]
      const p2 = pts[(i + 1) % pts.length]
      e.set(0, Math.atan2(p2.x - p.x, p2.z - p.z), 0)
      q.setFromEuler(e)
      m.compose(new THREE.Vector3(p.x, heightAt(p.x, p.z) + 0.31, p.z), q, s)
      dashes.setMatrixAt(di++, m)
    }
    dashes.count = di
    scene.add(dashes)

    // edge lines
    const edgeCount = Math.floor(N / Math.max(1, Math.round(6 / (length / N)))) + 2
    const edges = new THREE.InstancedMesh(new THREE.BoxGeometry(0.13, 0.028, 4.2), dashMat, edgeCount * 2)
    edges.frustumCulled = false
    let ei = 0
    for (let i = 0; i < N; i += Math.max(1, Math.round(6 / (length / N)))) {
      const p = pts[i]
      const p2 = pts[(i + 1) % pts.length]
      const yaw = Math.atan2(p2.x - p.x, p2.z - p.z)
      const rx = Math.cos(yaw), rz = -Math.sin(yaw)
      for (const side of [-1, 1]) {
        m.compose(new THREE.Vector3(p.x + rx * (def.width / 2 - 0.55) * side, heightAt(p.x, p.z) + 0.29, p.z + rz * (def.width / 2 - 0.55) * side), q.setFromEuler(e.set(0, yaw, 0)), s)
        edges.setMatrixAt(ei++, m)
      }
    }
    edges.count = ei
    scene.add(edges)

    roads.push({ def, curve, pts, length, mapPts: pts.map(p => [p.x, p.z]) })
  }
  return { roads, finder }
}

function ribbonGeometry(pts, width, lift) {
  const n = pts.length
  const positions = new Float32Array(n * 6)
  const uvs = new Float32Array(n * 4)
  const indices = []
  let dist = 0
  for (let i = 0; i < n; i++) {
    const p = pts[i]
    const p0 = pts[Math.max(0, i - 1)]
    const p1 = pts[Math.min(n - 1, i + 1)]
    let tx = p1.x - p0.x, tz = p1.z - p0.z
    const tl = Math.hypot(tx, tz) || 1
    tx /= tl; tz /= tl
    const rx = tz, rz = -tx
    if (i > 0) dist += Math.hypot(p.x - pts[i - 1].x, p.z - pts[i - 1].z)
    const lx = p.x + rx * width / 2, lz = p.z + rz * width / 2
    const ex = p.x - rx * width / 2, ez = p.z - rz * width / 2
    positions.set([lx, heightAt(lx, lz) + lift, lz, ex, heightAt(ex, ez) + lift, ez], i * 6)
    uvs.set([0, dist / 9, 1, dist / 9], i * 4)
    if (i < n - 1) {
      const a = i * 2
      indices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3)
    }
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
  geo.setIndex(indices)
  geo.computeVertexNormals()
  return geo
}

/* ----------------------------- sky -------------------------------- */

const PRESETS = {
  golden: {
    label: 'Golden Hour', top: 0x34649b, horizon: 0xffa45e, sun: 0xffe6ad, cloud: 0xffbf96,
    fog: 0xd18a66, fogDensity: 0.00028, sunElev: 11, sunAz: 242, sunIntensity: 2.45,
    hemiSky: 0xffc692, hemiGround: 0x49372a, hemiIntensity: 0.82, night: 0, stars: 0,
    waterDeep: 0x0f5060, waterShallow: 0x2f9aa6, exposure: 0.98
  },
  day: {
    label: 'High Noon', top: 0x2f7fc9, horizon: 0xd8edff, sun: 0xffffff, cloud: 0xffffff,
    fog: 0xc8dfea, fogDensity: 0.0002, sunElev: 56, sunAz: 160, sunIntensity: 3.1,
    hemiSky: 0xd9efff, hemiGround: 0x6d6350, hemiIntensity: 1.45, night: 0, stars: 0,
    waterDeep: 0x0d6478, waterShallow: 0x37b9c4, exposure: 1.0
  },
  dusk: {
    label: 'Fiesta Dusk', top: 0x222b62, horizon: 0xff5d78, sun: 0xffcfae, cloud: 0xff94a8,
    fog: 0x9d4b65, fogDensity: 0.00042, sunElev: 3.2, sunAz: 236, sunIntensity: 1.55,
    hemiSky: 0xff9fae, hemiGround: 0x2b2334, hemiIntensity: 0.8, night: 0.25, stars: 0.35,
    waterDeep: 0x121c48, waterShallow: 0x5b5a92, exposure: 1.08
  },
  night: {
    label: 'Baja Night', top: 0x030819, horizon: 0x101c42, sun: 0xb9ceff, cloud: 0x293252,
    fog: 0x091126, fogDensity: 0.00046, sunElev: 38, sunAz: 310, sunIntensity: 0.5,
    hemiSky: 0x7188c8, hemiGround: 0x14141e, hemiIntensity: 0.55, night: 1, stars: 1,
    waterDeep: 0x050c22, waterShallow: 0x1a2f55, exposure: 1.18
  }
}

export const TIME_PRESETS = PRESETS

function sunVector(elevDeg, azDeg) {
  const el = THREE.MathUtils.degToRad(elevDeg), az = THREE.MathUtils.degToRad(azDeg)
  return new THREE.Vector3(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)).normalize()
}

const SKY_VERT = /* glsl */`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`
const SKY_FRAG = /* glsl */`
precision highp float;
uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSunColor; uniform vec3 uCloud;
uniform vec3 uSunDir; uniform float uNight; uniform float uStars; uniform float uTime;
uniform float uCloudAmt;
varying vec3 vDir;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y);
}
float fbm(vec2 p){ float s=0.0,a=0.5; for(int i=0;i<4;i++){ s+=a*noise(p); p*=2.03; a*=0.5;} return s; }
void main(){
  vec3 d = normalize(vDir);
  float h = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(uHorizon, uTop, pow(h, 0.26));
  float sd = max(dot(d, uSunDir), 0.0);
  float disc = smoothstep(0.99935, 0.99985, sd);
  float glow = pow(sd, 22.0) * 0.55 + pow(sd, 5.0) * 0.16;
  col += uSunColor * (disc * 4.2 + glow * (1.0 - uNight * 0.6));
  float band = fbm(vec2(atan(d.z, d.x) * 2.1, d.y * 8.0 - uTime * 0.006));
  float cloudMask = smoothstep(0.57, 0.75, band) * smoothstep(0.02, 0.22, d.y) * (1.0 - smoothstep(0.65, 0.9, d.y));
  col = mix(col, uCloud, cloudMask * uCloudAmt);
  float star = step(0.9975, hash(floor(d.xz * 420.0) + floor(d.y * 420.0))) * uStars * smoothstep(0.06, 0.4, d.y);
  col += vec3(star) * 1.4;
  col = mix(col, uHorizon, smoothstep(0.02, -0.18, d.y));
  gl_FragColor = vec4(col, 1.0);
}`
const WATER_VERT = /* glsl */`
varying vec3 vWorld;
void main(){
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`
const WATER_FRAG = /* glsl */`
precision highp float;
uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uSunDir; uniform vec3 uSun; uniform vec3 uFog;
uniform float uTime;
varying vec3 vWorld;
void main(){
  vec2 p = vWorld.xz * 0.06;
  float n1 = sin(p.x * 1.7 + uTime * 0.55) * 0.5 + sin(p.y * 2.1 - uTime * 0.42) * 0.5;
  float n2 = sin((p.x + p.y) * 1.2 + uTime * 0.31) * 0.5;
  vec3 nrm = normalize(vec3(n1 * 0.055, 1.0, n2 * 0.055));
  vec3 viewDir = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(nrm, viewDir), 0.0), 2.5);
  vec3 col = mix(uDeep, uShallow, 0.35 + fres * 0.45);
  vec3 refl = reflect(-uSunDir, nrm);
  float spec = pow(max(dot(refl, viewDir), 0.0), 90.0);
  float glint = pow(max(dot(refl, viewDir), 0.0), 12.0) * 0.12;
  col += uSun * (spec * 2.2 + glint);
  float dist = length(vWorld.xz - cameraPosition.xz);
  col = mix(col, uFog, smoothstep(900.0, 3200.0, dist));
  gl_FragColor = vec4(col, 0.96);
}`
const SUN_TEX = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 256
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
  g.addColorStop(0, 'rgba(255,252,235,1)')
  g.addColorStop(0.12, 'rgba(255,230,175,0.95)')
  g.addColorStop(0.35, 'rgba(255,175,100,0.33)')
  g.addColorStop(1, 'rgba(255,120,70,0)')
  ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 256)
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t
})()

function createSky(scene, renderer) {
  const uniforms = {
    uTop: { value: new THREE.Color(0x4c7bab) }, uHorizon: { value: new THREE.Color(0xffb36f) },
    uSunColor: { value: new THREE.Color(0xfff0cc) }, uCloud: { value: new THREE.Color(0xffc9a6) },
    uSunDir: { value: sunVector(13, 216) }, uNight: { value: 0 }, uStars: { value: 0 },
    uTime: { value: 0 }, uCloudAmt: { value: 0.55 }
  }
  const mat = new THREE.ShaderMaterial({ vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, uniforms, side: THREE.BackSide, depthWrite: false, fog: false })
  const geo = new THREE.SphereGeometry(6200, 40, 24)
  const mesh = new THREE.Mesh(geo, mat)
  mesh.renderOrder = -10
  mesh.frustumCulled = false
  scene.add(mesh)

  const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: SUN_TEX, color: 0xfff0cc, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }))
  sunSprite.scale.set(1150, 1150, 1)
  scene.add(sunSprite)
  const sunCore = new THREE.Sprite(new THREE.SpriteMaterial({ map: SUN_TEX, color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }))
  sunCore.scale.set(220, 220, 1)
  scene.add(sunCore)

  const waterUniforms = {
    uDeep: { value: new THREE.Color(0x0f5060) }, uShallow: { value: new THREE.Color(0x2f9aa6) },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uSun: { value: new THREE.Color(0xfff0cc) },
    uFog: { value: new THREE.Color(0xe7a77a) }, uTime: { value: 0 }
  }
  const waterMat = new THREE.ShaderMaterial({ vertexShader: WATER_VERT, fragmentShader: WATER_FRAG, uniforms: waterUniforms, transparent: true, fog: false, depthWrite: false })
  const water = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000, 1, 1), waterMat)
  water.rotation.x = -Math.PI / 2
  water.position.y = WATER_LEVEL + 0.05
  water.renderOrder = 2
  scene.add(water)

  const hemi = new THREE.HemisphereLight(0xffd2a4, 0x4f3c2c, 1.1)
  scene.add(hemi)
  const sun = new THREE.DirectionalLight(0xffe0b8, 2.5)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.left = -130; sun.shadow.camera.right = 130
  sun.shadow.camera.top = 130; sun.shadow.camera.bottom = -130
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 1100
  sun.shadow.bias = -0.0006
  sun.shadow.normalBias = 0.6
  scene.add(sun)
  scene.add(sun.target)
  const ambient = new THREE.AmbientLight(0xffd9bb, 0.22)
  scene.add(ambient)

  let envRT = null
  const pmrem = new THREE.PMREMGenerator(renderer)
  pmrem.compileEquirectangularShader()
  const envScene = new THREE.Scene()
  const envSky = new THREE.Mesh(new THREE.SphereGeometry(100, 32, 20), mat)
  envScene.add(envSky)
  const envGround = new THREE.Mesh(new THREE.CircleGeometry(90, 24), new THREE.MeshBasicMaterial({ color: 0x5b4634 }))
  envGround.rotation.x = -Math.PI / 2
  envGround.position.y = -12
  envScene.add(envGround)

  const state = { preset: 'golden', sunDir: sunVector(13, 216) }
  function apply(name, env = true) {
    const p = PRESETS[name] || PRESETS.golden
    state.preset = name
    state.sunDir.copy(sunVector(p.sunElev, p.sunAz))
    uniforms.uTop.value.setHex(p.top)
    uniforms.uHorizon.value.setHex(p.horizon)
    uniforms.uSunColor.value.setHex(p.sun)
    uniforms.uCloud.value.setHex(p.cloud)
    uniforms.uSunDir.value.copy(state.sunDir)
    uniforms.uNight.value = p.night
    uniforms.uStars.value = p.stars
    uniforms.uCloudAmt.value = p.night > 0.7 ? 0.2 : 0.6
    waterUniforms.uDeep.value.setHex(p.waterDeep)
    waterUniforms.uShallow.value.setHex(p.waterShallow)
    waterUniforms.uSun.value.setHex(p.sun)
    waterUniforms.uSunDir.value.copy(state.sunDir)
    waterUniforms.uFog.value.setHex(p.fog)
    sun.color.setHex(p.night > 0.7 ? 0xa9c1ff : p.sun)
    sun.intensity = p.sunIntensity
    hemi.color.setHex(p.hemiSky)
    hemi.groundColor.setHex(p.hemiGround)
    hemi.intensity = p.hemiIntensity
    ambient.color.setHex(p.night > 0.7 ? 0x7e94d0 : 0xffd9bb)
    ambient.intensity = p.night > 0.7 ? 0.35 : 0.2
    scene.fog.color.setHex(p.fog)
    scene.fog.density = p.fogDensity
    scene.background = new THREE.Color(p.horizon)
    renderer.toneMappingExposure = p.exposure
    sunSprite.material.color.setHex(p.sun)
    sunCore.material.color.setHex(p.night > 0.7 ? 0xcfddff : 0xffffff)
    sunSprite.visible = p.night < 0.9
    sunCore.visible = p.night < 0.9
    if (env) {
      try {
        if (envRT) envRT.dispose()
        envRT = pmrem.fromScene(envScene, 0.01, 1, 300)
        scene.environment = envRT.texture
      } catch (e) { /* environment is a bonus */ }
    }
  }
  apply('golden', false)

  function update(camera, time, target) {
    // keep the sky dome centred on the camera and the sun sprite pinned to the sun
    mesh.position.copy(camera.position)
    const sd = state.sunDir
    sunSprite.position.copy(camera.position).addScaledVector(sd, 5200)
    sunCore.position.copy(camera.position).addScaledVector(sd, 5185)
    uniforms.uTime.value = time
    waterUniforms.uTime.value = time
    // shadow light follows the action
    if (target) {
      sun.position.copy(target).addScaledVector(sd, 430)
      sun.target.position.copy(target)
      sun.target.updateMatrixWorld()
    }
  }
  return { mesh, sun, hemi, ambient, water, uniforms, waterUniforms, sunSprite, sunCore, apply, update, get sunDir() { return state.sunDir }, get preset() { return state.preset } }
}

/* --------------------------- vegetation --------------------------- */

function colored(geo, color) {
  if (geo.index) geo = geo.toNonIndexed()
  const c = new THREE.Color(color)
  const count = geo.attributes.position.count
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3))
  return geo
}
function leafBlob(r, color, y, x = 0, z = 0, sx = 1, sy = 1, sz = 1) {
  const g = new THREE.IcosahedronGeometry(r, 0)
  g.scale(sx, sy, sz); g.translate(x, y, z)
  return colored(g, color)
}
function trunk(r, h, color, x = 0, z = 0) {
  const g = new THREE.CylinderGeometry(r * 0.7, r, h, 6)
  g.translate(x, h / 2, z)
  return colored(g, color)
}
function pineGeometry() {
  const parts = [trunk(0.24, 3.4, 0x5c4127)]
  for (let i = 0; i < 3; i++) {
    const g = new THREE.ConeGeometry(2.25 - i * 0.48, 3.2 - i * 0.4, 7)
    g.translate(0, 3.2 + i * 1.55, 0)
    parts.push(colored(g, i % 2 ? 0x2f5f3e : 0x376b45))
  }
  return mergeGeometries(parts)
}
function broadleafGeometry() {
  const parts = [trunk(0.28, 3.0, 0x66482c)]
  parts.push(leafBlob(2.25, 0x3e7a44, 4.2, 0, 0, 1.2, 0.9, 1.2))
  parts.push(leafBlob(1.7, 0x4e8d4b, 5.6, 0.7, 0.1, 1, 0.85, 1))
  parts.push(leafBlob(1.4, 0x2f6739, 3.6, -1.1, -0.3, 1, 0.8, 1))
  return mergeGeometries(parts)
}
function palmGeometry() {
  const parts = []
  let last = new THREE.Vector3(0, 0, 0)
  for (let i = 0; i < 4; i++) {
    const g = new THREE.CylinderGeometry(0.17 - i * 0.022, 0.22 - i * 0.022, 2.2, 6)
    g.translate(i * 0.12, 1.1 + i * 2.05, i * 0.06)
    parts.push(colored(g, i % 2 ? 0x7d5c38 : 0x6b4d2e))
    last.set(i * 0.12, 2.1 + i * 2.05, i * 0.06)
  }
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2
    const leaf = new THREE.ConeGeometry(0.5, 4.3, 4)
    leaf.scale(1, 0.16, 1.9)
    leaf.rotateZ(Math.PI / 2)
    leaf.rotateY(a)
    leaf.translate(last.x + Math.cos(a) * 1.6, last.y + 0.1, last.z + Math.sin(a) * 1.6)
    parts.push(colored(leaf, i % 2 ? 0x2f7a42 : 0x3c8d4a))
  }
  return mergeGeometries(parts)
}
function cactusGeometry() {
  const parts = [colored(new THREE.CylinderGeometry(0.34, 0.42, 3.8, 6).translate(0, 1.9, 0), 0x4c7c43)]
  const arm1 = new THREE.CylinderGeometry(0.2, 0.24, 1.7, 6)
  arm1.rotateZ(Math.PI / 2); arm1.translate(0.75, 2.4, 0)
  parts.push(colored(arm1, 0x4c7c43))
  const up1 = new THREE.CylinderGeometry(0.18, 0.2, 1.25, 6); up1.translate(1.42, 3.0, 0)
  parts.push(colored(up1, 0x4f8248))
  const arm2 = new THREE.CylinderGeometry(0.18, 0.22, 1.3, 6)
  arm2.rotateZ(Math.PI / 2); arm2.translate(-0.62, 1.7, 0)
  parts.push(colored(arm2, 0x4c7c43))
  const up2 = new THREE.CylinderGeometry(0.16, 0.18, 0.9, 6); up2.translate(-1.2, 2.25, 0)
  parts.push(colored(up2, 0x4f8248))
  return mergeGeometries(parts)
}
function rockGeometry() {
  const g = new THREE.DodecahedronGeometry(1, 0)
  g.scale(1.4, 0.85, 1.1)
  g.translate(0, 0.6, 0)
  return colored(g, 0x81786c)
}
function bushGeometry() {
  const parts = [
    leafBlob(0.9, 0x3d703d, 0.7, 0, 0, 1.2, 0.8, 1.15),
    leafBlob(0.6, 0x4c8246, 1.0, 0.6, 0.1, 1, 0.85, 1),
    leafBlob(0.55, 0x2e5c34, 0.6, -0.55, -0.2, 1, 0.9, 1)
  ]
  return mergeGeometries(parts)
}
function flowerGeometry() {
  const stem = new THREE.CylinderGeometry(0.025, 0.035, 0.7, 4); stem.translate(0, 0.35, 0)
  const head = new THREE.OctahedronGeometry(0.2, 0); head.translate(0, 0.75, 0)
  return mergeGeometries([colored(stem, 0x3d6d35), colored(head, 0xffc247)])
}

function scatter(scene, nearRoad) {
  const vegMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, flatShading: true })
  const geos = {
    pine: pineGeometry(), broadleaf: broadleafGeometry(), palm: palmGeometry(),
    cactus: cactusGeometry(), rock: rockGeometry(), bush: bushGeometry(), flower: flowerGeometry()
  }
  const rand = mulberry32(90210)
  const lists = { pine: [], broadleaf: [], palm: [], cactus: [], rock: [], bush: [], flower: [] }
  const attempts = 7200
  for (let i = 0; i < attempts; i++) {
    const x = (rand() - 0.5) * 3900, z = (rand() - 0.5) * 3900
    const h = heightAt(x, z)
    if (h < 1.4 || h > 245) continue
    if (Math.hypot(x - FESTIVAL.x, z - FESTIVAL.y) < 100) continue
    if (Math.hypot(x - TOWN.x, z - TOWN.y) < 185) continue
    if (Math.hypot(x - AIRFIELD.x, z - AIRFIELD.y) < 220) continue
    if (nearRoad(x, z) < 11) continue
    const desert = fbm(x * 0.0018 + 40, z * 0.0018 - 20, 3)
    const wet = fbm(x * 0.0016 - 10, z * 0.0016 + 30, 3)
    const slope = Math.abs(heightAt(x + 2, z) - h) + Math.abs(heightAt(x, z + 2) - h)
    let type
    if (h > 175 && rand() < 0.55) type = 'pine'
    else if (h < 35 && (x < -880 || Math.hypot(x - 805, z - 720) < 390) && rand() < 0.5) type = 'palm'
    else if (desert > 0.62 && x > -400) type = rand() < 0.58 ? 'cactus' : 'rock'
    else if (slope > 2.2 || rand() < 0.12) type = 'rock'
    else if (wet > 0.56) type = rand() < 0.7 ? 'broadleaf' : 'bush'
    else if (h > 95) type = rand() < 0.6 ? 'pine' : 'rock'
    else type = rand() < 0.42 ? 'broadleaf' : rand() < 0.7 ? 'bush' : 'pine'
    lists[type].push({ x, z, h, s: 0.7 + rand() * 1.35, r: rand() * Math.PI * 2 })
    if (type !== 'rock' && rand() < 0.13) {
      lists.flower.push({ x: x + (rand() - 0.5) * 9, z: z + (rand() - 0.5) * 9, h: heightAt(x + 2, z), s: 0.7 + rand(), r: rand() * 6.28 })
    }
  }
  // thin out very dense types while keeping the landscape clothed
  const caps = { pine: 520, broadleaf: 720, palm: 280, cactus: 310, rock: 380, bush: 620, flower: 420 }
  for (const type of Object.keys(lists)) {
    const list = lists[type]
    const count = Math.min(list.length, caps[type])
    if (!count) continue
    const inst = new THREE.InstancedMesh(geos[type], vegMat, count)
    inst.receiveShadow = false
    inst.castShadow = false
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3()
    const col = new THREE.Color()
    for (let i = 0; i < count; i++) {
      const o = list[Math.floor(i * list.length / count)]
      p.set(o.x, heightAt(o.x, o.z) - 0.18, o.z)
      q.setFromEuler(new THREE.Euler(0, o.r, 0))
      s.set(o.s, o.s * (0.85 + rand() * 0.3), o.s)
      m.compose(p, q, s)
      inst.setMatrixAt(i, m)
      const tint = 0.82 + rand() * 0.3
      col.setRGB(tint, tint, tint)
      inst.setColorAt(i, col)
    }
    inst.instanceMatrix.needsUpdate = true
    inst.frustumCulled = false
    scene.add(inst)
  }
}

/* --------------------------- landmarks ---------------------------- */

function textTexture(text, { w = 1024, h = 256, bg = 'rgba(10,14,24,0.86)', color = '#f4f1e8', accent = '#ff2d7a', sub = '', font = '800 110px sans-serif' } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h
  const ctx = c.getContext('2d')
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h)
  ctx.fillStyle = accent; ctx.fillRect(0, 0, w, 12)
  ctx.font = font
  ctx.fillStyle = color; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText(text, w / 2, h / 2 - (sub ? 18 : 0))
  if (sub) { ctx.font = '600 34px sans-serif'; ctx.fillStyle = accent; ctx.fillText(sub, w / 2, h / 2 + 62) }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

function createFestival(scene, obstacles, updatables) {
  const g = new THREE.Group()
  g.position.set(FESTIVAL.x, heightAt(FESTIVAL.x, FESTIVAL.y), FESTIVAL.y)
  scene.add(g)
  const y0 = 0
  const paint = (c, rough = 0.7, metal = 0.1) => new THREE.MeshStandardMaterial({ color: c, roughness: rough, metalness: metal })
  const magenta = new THREE.MeshStandardMaterial({ color: 0x2a0a18, emissive: 0xff2d7a, emissiveIntensity: 2, roughness: 0.4 })
  const cyan = new THREE.MeshStandardMaterial({ color: 0x061f24, emissive: 0x24e6ff, emissiveIntensity: 2, roughness: 0.4 })
  const warm = new THREE.MeshStandardMaterial({ color: 0x2f2410, emissive: 0xffbd57, emissiveIntensity: 1.6, roughness: 0.5 })
  const dark = new THREE.MeshStandardMaterial({ color: 0x161b22, roughness: 0.7 })

  // showcase turntable
  const platform = new THREE.Mesh(new THREE.CylinderGeometry(7.3, 7.8, 0.5, 40), dark)
  platform.position.set(20, 0.25, 14)
  platform.receiveShadow = true
  g.add(platform)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(7.45, 0.1, 6, 60), magenta)
  ring.rotation.x = Math.PI / 2
  ring.position.set(20, 0.55, 14)
  g.add(ring)
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(5.7, 0.04, 4, 50), cyan)
  ring2.rotation.x = Math.PI / 2
  ring2.position.set(20, 0.53, 14)
  g.add(ring2)
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 1.5), i % 2 ? cyan : magenta)
    strip.position.set(20 + Math.cos(a) * 6.6, 0.52, 14 + Math.sin(a) * 6.6)
    strip.rotation.y = -a
    g.add(strip)
  }

  // HORIZON gate
  const arch = new THREE.Group()
  arch.position.set(0, 0, -20)
  for (const sx of [-1, 1]) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(1.8, 11, 1.8), dark)
    pillar.position.set(sx * 9, 5.5, 0)
    pillar.castShadow = true
    arch.add(pillar)
    for (let i = 0; i < 4; i++) {
      const light = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.6, 0.1), i % 2 ? magenta : cyan)
      light.position.set(sx * 9 + (sx > 0 ? -0.93 : 0.93), 1.5 + i * 2.5, 0.92)
      arch.add(light)
    }
    obstacles.push({ x: FESTIVAL.x + sx * 9, z: FESTIVAL.y - 20, r: 1.4 })
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(19.8, 2.4, 1.2), dark)
  beam.position.y = 10.6
  arch.add(beam)
  const bannerTex = textTexture('HORIZON LIBRE', { w: 1200, h: 260, bg: 'rgba(8,12,20,0.92)', color: '#f4f1e8', accent: '#ff2d7a', sub: 'BAJA · MÉXICO · FESTIVAL' })
  const bannerGeo = new THREE.PlaneGeometry(17.4, 3.8)
  const bannerMat = new THREE.MeshBasicMaterial({ map: bannerTex, transparent: true })
  const banner = new THREE.Mesh(bannerGeo, bannerMat)
  banner.position.set(0, 10.6, 0.65)
  arch.add(banner)
  const bannerBack = new THREE.Mesh(bannerGeo, bannerMat)
  bannerBack.position.set(0, 10.6, -0.65)
  bannerBack.rotation.y = Math.PI
  arch.add(bannerBack)
  g.add(arch)

  // stage
  const stage = new THREE.Group()
  stage.position.set(-42, 0, 8)
  const deck = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 12), dark)
  deck.position.y = 0.6
  deck.castShadow = true; deck.receiveShadow = true
  stage.add(deck)
  const back = new THREE.Mesh(new THREE.BoxGeometry(22, 9, 0.6), paint(0x10131a))
  back.position.set(0, 5.2, -5.8)
  stage.add(back)
  const roof = new THREE.Mesh(new THREE.BoxGeometry(24, 0.5, 14), dark)
  roof.position.set(0, 10, 0)
  stage.add(roof)
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.45, 9.5, 0.45), dark)
    leg.position.set(sx * 11, 5.3, sz * 6.2)
    stage.add(leg)
  }
  const screenTex = textTexture('HORIZON', { w: 1024, h: 512, bg: '#120a1a', color: '#fff4e6', accent: '#24e6ff', sub: 'LIVE FROM BAJA', font: '800 190px sans-serif' })
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(12, 6), new THREE.MeshBasicMaterial({ map: screenTex }))
  screen.position.set(0, 5.4, -5.4)
  stage.add(screen)
  for (let i = 0; i < 6; i++) {
    const speaker = new THREE.Mesh(new THREE.BoxGeometry(1.3, 2.8, 1.1), dark)
    speaker.position.set(-9 + i * 3.6, 2.8, 5.4)
    stage.add(speaker)
    const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.1, 10), paint(0x2a2f38, 0.5, 0.5))
    cone.rotation.x = Math.PI / 2
    cone.position.set(-9 + i * 3.6, 2.8, 5.98)
    stage.add(cone)
  }
  // stage light beams
  for (const [i, sx] of [-1, 1].entries()) {
    const beamMat = new THREE.MeshBasicMaterial({ color: i ? 0x24e6ff : 0xff2d7a, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
    const cone = new THREE.Mesh(new THREE.ConeGeometry(3.2, 30, 18, 1, true), beamMat)
    cone.position.set(sx * 7, 19, 0)
    cone.rotation.z = sx * 0.32
    stage.add(cone)
    updatables.push((t) => { cone.rotation.y = Math.sin(t * 0.35 + i) * 0.5 })
  }
  obstacles.push({ x: FESTIVAL.x - 42, z: FESTIVAL.y + 8, r: 12 })
  g.add(stage)

  // ferris wheel
  const wheel = new THREE.Group()
  wheel.position.set(-92, 0, -22)
  const towerMat = paint(0x1b222b, 0.55, 0.6)
  for (const sx of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.5, 17, 0.5), towerMat)
    leg.position.set(sx * 4.5, 8.5, 0)
    leg.rotation.z = sx * 0.18
    wheel.add(leg)
  }
  const axleY = 17
  const wheelGroup = new THREE.Group()
  wheelGroup.position.y = axleY
  wheel.add(wheelGroup)
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x9aa7b5, emissive: 0xff2d7a, emissiveIntensity: 0.55, roughness: 0.4, metalness: 0.7 })
  for (const sz of [-0.8, 0.8]) {
    const rim = new THREE.Mesh(new THREE.TorusGeometry(8.4, 0.12, 6, 48), rimMat)
    rim.position.z = sz
    wheelGroup.add(rim)
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.07, 8.4, 0.07), rimMat)
      spoke.position.set(Math.sin(a) * 4.2, Math.cos(a) * 4.2, sz)
      spoke.rotation.z = -a
      wheelGroup.add(spoke)
    }
  }
  const gondolaMat = paint(0xffce3f, 0.6)
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2
    const car = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.3, 1.5), i % 3 === 0 ? cyan : i % 3 === 1 ? magenta : gondolaMat)
    car.position.set(Math.sin(a) * 8.35, Math.cos(a) * 8.35 - 0.8, 0)
    wheelGroup.add(car)
  }
  updatables.push((t) => { wheelGroup.rotation.z = t * 0.06 })
  obstacles.push({ x: FESTIVAL.x - 92, z: FESTIVAL.y - 22, r: 3.5 })
  g.add(wheel)

  // tents
  const tentCols = [0xff2d7a, 0x24e6ff, 0xffce3f, 0xf4f1e8]
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * Math.PI * 2 + 1.3
    const tx = Math.cos(a) * 34, tz = Math.sin(a) * 34 + 22
    const tent = new THREE.Group()
    tent.position.set(tx, 0, tz)
    const base = new THREE.Mesh(new THREE.BoxGeometry(7, 2.6, 7), paint(0xece7da, 0.8))
    base.position.y = 1.3
    tent.add(base)
    const roof = new THREE.Mesh(new THREE.ConeGeometry(5.6, 2.8, 4), paint(tentCols[i % 4], 0.65))
    roof.position.y = 4
    roof.rotation.y = Math.PI / 4
    tent.add(roof)
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(7.05, 0.35, 7.05), paint(0x161b22, 0.8))
    stripe.position.y = 2.65
    tent.add(stripe)
    g.add(tent)
    obstacles.push({ x: FESTIVAL.x + tx, z: FESTIVAL.y + tz, r: 4.3 })
  }

  // scattered crowd (instanced)
  const bodyGeo = new THREE.CylinderGeometry(0.23, 0.32, 1.2, 5); bodyGeo.translate(0, 0.6, 0)
  const headGeo = new THREE.SphereGeometry(0.23, 6, 5); headGeo.translate(0, 1.42, 0)
  const crowdGeo = mergeGeometries([colored(bodyGeo, 0xffffff), colored(headGeo, 0xf0c6a0)])
  const crowdMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 })
  const crowd = new THREE.InstancedMesh(crowdGeo, crowdMat, 90)
  const cm = new THREE.Matrix4(); const cq = new THREE.Quaternion(); const cs = new THREE.Vector3(); const cp = new THREE.Vector3(); const cc = new THREE.Color()
  const rand = mulberry32(421)
  for (let i = 0; i < 90; i++) {
    const a = rand() * Math.PI * 2, r = 12 + rand() * 55
    cp.set(Math.cos(a) * r, 0.1, Math.sin(a) * r + 8)
    cq.setFromEuler(new THREE.Euler(0, rand() * 6.28, 0))
    cs.setScalar(0.82 + rand() * 0.28)
    cm.compose(cp, cq, cs)
    crowd.setMatrixAt(i, cm)
    cc.setHSL(rand(), 0.62, 0.5 + rand() * 0.25)
    crowd.setColorAt(i, cc)
  }
  crowd.instanceMatrix.needsUpdate = true
  g.add(crowd)

  // flag poles around the festival
  const poleMat = paint(0xcfd6dc, 0.4, 0.8)
  for (let i = 0; i < 16; i++) {
    const a = i / 16 * Math.PI * 2
    const px = Math.cos(a) * 58, pz = Math.sin(a) * 58
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 8, 5), poleMat)
    pole.position.set(px, 4, pz)
    g.add(pole)
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.2), new THREE.MeshStandardMaterial({ color: i % 3 === 0 ? 0xff2d7a : i % 3 === 1 ? 0x24e6ff : 0xffce3f, side: THREE.DoubleSide, roughness: 0.8 }))
    flag.position.set(px + 1.2, 7.2, pz)
    g.add(flag)
    updatables.push((t) => { flag.rotation.y = Math.sin(t * 1.7 + i) * 0.35 })
  }

  return { group: g, platformPosition: new THREE.Vector3(FESTIVAL.x + 20, heightAt(FESTIVAL.x + 20, FESTIVAL.y + 14) + 0.55, FESTIVAL.y + 14) }
}

function createTown(scene, obstacles, updatables) {
  const baseY = 15
  const palettes = [
    [0xe86f4a, 0xf4e3c2, 0x25323a], [0x3e8fa3, 0xf5efdf, 0x24323b],
    [0xf0c247, 0x37393f, 0xf6f0df], [0x9a5ac4, 0xf0ddba, 0x2a3039]
  ]
  const houseGeos = palettes.map(([wall, trim, roof]) => {
    const parts = []
    const w = colored(new THREE.BoxGeometry(7, 4.4, 8), wall); w.translate(0, 2.2, 0); parts.push(w)
    const r = new THREE.ConeGeometry(5.7, 2.4, 4); r.rotateY(Math.PI / 4); r.scale(1, 1, 0.92); r.translate(0, 5.5, 0); parts.push(colored(r, roof))
    for (let i = -1; i <= 1; i++) {
      const win = colored(new THREE.BoxGeometry(1.1, 1.25, 0.1), trim); win.translate(i * 2.1, 2.7, 4.05); parts.push(win)
    }
    const door = colored(new THREE.BoxGeometry(1.2, 2.1, 0.1), roof); door.translate(0, 1.05, 4.05); parts.push(door)
    parts.push(colored(new THREE.BoxGeometry(7.2, 0.35, 8.2), trim).translate(0, 0.18, 0))
    return mergeGeometries(parts)
  })
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, metalness: 0.03, flatShading: true })
  const rand = mulberry32(777)
  const groups = [[], [], [], []]
  for (let i = 0; i < 64; i++) {
    const gx = Math.floor(rand() * 7) - 3, gz = Math.floor(rand() * 6) - 2
    const x = TOWN.x + gx * 19 + (rand() - 0.5) * 3
    const z = TOWN.y + gz * 22 + (rand() - 0.5) * 3
    if (Math.hypot(x - TOWN.x, z - TOWN.y) > 165) continue
    const h = heightAt(x, z)
    groups[i % 4].push({ x, z, y: h, r: (rand() > 0.5 ? 0 : 1) * Math.PI / 2 + (rand() - 0.5) * 0.12, s: 0.9 + rand() * 0.5 })
    obstacles.push({ x, z, r: 5.2 })
  }
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), e = new THREE.Euler()
  groups.forEach((list, gi) => {
    if (!list.length) return
    const inst = new THREE.InstancedMesh(houseGeos[gi], mat, list.length)
    inst.castShadow = false; inst.receiveShadow = true
    list.forEach((o, i) => {
      p.set(o.x, o.y, o.z); q.setFromEuler(e.set(0, o.r, 0)); s.setScalar(o.s)
      m.compose(p, q, s); inst.setMatrixAt(i, m)
    })
    inst.instanceMatrix.needsUpdate = true
    inst.frustumCulled = false
    scene.add(inst)
  })
  // church tower landmark
  const tower = new THREE.Group()
  const tx = TOWN.x + 12, tz = TOWN.y - 72
  tower.position.set(tx, heightAt(tx, tz), tz)
  const towerBody = new THREE.Mesh(new THREE.BoxGeometry(8, 24, 8), new THREE.MeshStandardMaterial({ color: 0xf0dfbc, roughness: 0.9 }))
  towerBody.position.y = 12; towerBody.castShadow = true
  tower.add(towerBody)
  const dome = new THREE.Mesh(new THREE.SphereGeometry(4.8, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xd9a14a, roughness: 0.55, metalness: 0.4 }))
  dome.position.y = 24
  tower.add(dome)
  const spire = new THREE.Mesh(new THREE.ConeGeometry(0.7, 5, 6), new THREE.MeshStandardMaterial({ color: 0xffce62, emissive: 0x5a3b00, emissiveIntensity: 0.4 }))
  spire.position.y = 29
  tower.add(spire)
  obstacles.push({ x: tx, z: tz, r: 6 })
  scene.add(tower)
  return { tower }
}

function createLighthouse(scene, updatables) {
  const x = -1208, z = -85
  const baseY = heightAt(x, z)
  const g = new THREE.Group()
  g.position.set(x, baseY, z)
  const white = new THREE.MeshStandardMaterial({ color: 0xf2ede0, roughness: 0.8 })
  const red = new THREE.MeshStandardMaterial({ color: 0xd93636, roughness: 0.75 })
  for (let i = 0; i < 6; i++) {
    const rTop = 2.1 - i * 0.18, rBot = 2.1 - (i + 1) * 0.18
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, 3.2, 12), i % 2 ? red : white)
    seg.position.y = 1.6 + i * 3.2
    seg.castShadow = true
    g.add(seg)
  }
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 0.3, 12), new THREE.MeshStandardMaterial({ color: 0x1b222b }))
  cap.position.y = 19.4
  g.add(cap)
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 1.8, 10), new THREE.MeshStandardMaterial({ color: 0xfff3c0, emissive: 0xffd36b, emissiveIntensity: 2.4, transparent: true, opacity: 0.9 }))
  lamp.position.y = 20.5
  g.add(lamp)
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.2, 1.8, 10), red)
  roof.position.y = 22.3
  g.add(roof)
  const beam = new THREE.Mesh(new THREE.ConeGeometry(5, 120, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0xffe6a6, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }))
  beam.position.y = 20.5
  beam.rotation.z = Math.PI / 2
  g.add(beam)
  updatables.push((t) => { beam.rotation.y = t * 0.5 })
  scene.add(g)
  return g
}

function createAirfield(scene, updatables) {
  const y = heightAt(AIRFIELD.x, AIRFIELD.y)
  const runway = new THREE.Mesh(new THREE.BoxGeometry(52, 0.12, 390), new THREE.MeshStandardMaterial({ color: 0x2e3138, roughness: 0.92 }))
  runway.position.set(AIRFIELD.x, y + 0.07, AIRFIELD.y)
  runway.receiveShadow = true
  scene.add(runway)
  for (let i = -18; i <= 18; i++) {
    const dash = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.04, 8), new THREE.MeshStandardMaterial({ color: 0xe8e3d2 }))
    dash.position.set(AIRFIELD.x, y + 0.15, AIRFIELD.y + i * 10)
    scene.add(dash)
  }
  // hangar
  const hx = AIRFIELD.x + 82, hz = AIRFIELD.y - 55
  const hangar = new THREE.Group()
  hangar.position.set(hx, heightAt(hx, hz), hz)
  const body = new THREE.Mesh(new THREE.CylinderGeometry(17, 17, 34, 16, 1, false, 0, Math.PI), new THREE.MeshStandardMaterial({ color: 0x9aa4a8, roughness: 0.7, metalness: 0.4, side: THREE.DoubleSide }))
  body.rotation.z = Math.PI / 2
  body.rotation.y = Math.PI / 2
  body.position.y = 0.2
  body.castShadow = true
  hangar.add(body)
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.3, 12, 20), new THREE.MeshStandardMaterial({ color: 0x2c333a, roughness: 0.8 }))
  door.position.set(-17.1, 6, 0)
  hangar.add(door)
  scene.add(hangar)
  // parked plane
  const plane = new THREE.Group()
  plane.position.set(AIRFIELD.x - 30, y + 0.4, AIRFIELD.y + 95)
  plane.rotation.y = -0.2
  const fus = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.8, 16, 8), new THREE.MeshStandardMaterial({ color: 0xe8e5dc, roughness: 0.5, metalness: 0.3 }))
  fus.rotation.x = Math.PI / 2
  fus.position.y = 2.3
  plane.add(fus)
  const wing = new THREE.Mesh(new THREE.BoxGeometry(22, 0.3, 3.2), fus.material)
  wing.position.y = 2.5
  plane.add(wing)
  const tail = new THREE.Mesh(new THREE.BoxGeometry(7, 0.25, 1.8), fus.material)
  tail.position.set(0, 3, -6.5)
  plane.add(tail)
  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.25, 3, 2.2), fus.material)
  fin.position.set(0, 4, -7.2)
  plane.add(fin)
  scene.add(plane)
  return { hangar, plane, runway }
}

function createBillboards(scene) {
  const specs = [
    { x: 185, z: 500, text: 'VOLCÁN', sub: 'PASS · 8 KM', accent: '#ff2d7a', rot: -0.3 },
    { x: -470, z: 1050, text: 'PLAYA', sub: 'COSTA AZUL', accent: '#24e6ff', rot: 0.55 },
    { x: 900, z: 620, text: 'DESIERTO', sub: 'DUNAS · 12 KM', accent: '#ffce3f', rot: -0.2 },
    { x: -900, z: 1300, text: 'SELVA', sub: 'JUNGLA', accent: '#7bff7b', rot: 0.3 }
  ]
  for (const s of specs) {
    const g = new THREE.Group()
    g.position.set(s.x, heightAt(s.x, s.z), s.z)
    g.rotation.y = s.rot
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.6, 8, 0.6), new THREE.MeshStandardMaterial({ color: 0x454b52, roughness: 0.6, metalness: 0.5 }))
    post.position.y = 4
    g.add(post)
    const tex = textTexture(s.text, { w: 1024, h: 420, bg: 'rgba(12,16,24,0.9)', color: '#f7f2e8', accent: s.accent, sub: s.sub, font: '800 180px sans-serif' })
    const board = new THREE.Mesh(new THREE.PlaneGeometry(12, 5), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }))
    board.position.set(0, 8, 0)
    g.add(board)
    scene.add(g)
  }
}

function createBalloons(scene, updatables) {
  const cols = [0xff2d7a, 0x24e6ff, 0xffce3f, 0xff6b35, 0x7b5cff, 0x50e39a]
  const rand = mulberry32(551)
  for (let i = 0; i < 7; i++) {
    const g = new THREE.Group()
    const x = (rand() - 0.5) * 2600, z = (rand() - 0.5) * 2600
    const y = 95 + rand() * 160
    g.position.set(x, y, z)
    const env = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), new THREE.MeshStandardMaterial({ color: cols[i % cols.length], roughness: 0.55, metalness: 0.08 }))
    env.scale.set(9, 12, 9)
    env.position.y = 15
    g.add(env)
    for (let k = 0; k < 3; k++) {
      const stripe = new THREE.Mesh(new THREE.SphereGeometry(1.01, 12, 8, k * 2.1, 0.6, 0.4, 2.3), new THREE.MeshStandardMaterial({ color: 0xf4e8d6, roughness: 0.6 }))
      stripe.scale.set(9.02, 12.02, 9.02)
      stripe.position.y = 15
      g.add(stripe)
    }
    const basket = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 3), new THREE.MeshStandardMaterial({ color: 0x6a4b2b, roughness: 0.9 }))
    basket.position.y = 0
    g.add(basket)
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 4, 3), new THREE.MeshStandardMaterial({ color: 0x2a2118 }))
      rope.position.set(sx * 1.2, 2, sz * 1.2)
      rope.rotation.z = -sx * 0.2
      rope.rotation.x = sz * 0.2
      g.add(rope)
    }
    scene.add(g)
    updatables.push((t) => {
      g.position.y = y + Math.sin(t * 0.18 + i) * 6
      g.rotation.y = t * 0.02 + i
      g.position.x = x + Math.sin(t * 0.06 + i * 1.7) * 30
    })
  }
}

function createClouds(scene, updatables) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xf7ddc6, emissive: 0x6b3c2c, emissiveIntensity: 0.15, roughness: 1, flatShading: true, transparent: true, opacity: 0.82 })
  const rand = mulberry32(333)
  for (let i = 0; i < 12; i++) {
    const g = new THREE.Group()
    const n = 4 + Math.floor(rand() * 4)
    for (let k = 0; k < n; k++) {
      const blob = new THREE.Mesh(new THREE.DodecahedronGeometry(1, 0), mat)
      blob.scale.set(22 + rand() * 24, 8 + rand() * 8, 14 + rand() * 16)
      blob.position.set((rand() - 0.5) * 60, (rand() - 0.5) * 8, (rand() - 0.5) * 34)
      g.add(blob)
    }
    g.position.set((rand() - 0.5) * 3800, 280 + rand() * 190, (rand() - 0.5) * 3800)
    g.rotation.y = rand() * 6.28
    scene.add(g)
    const speed = 0.6 + rand() * 0.8
    const x0 = g.position.x
    updatables.push((t) => { g.position.x = x0 + Math.sin(t * 0.008 * speed + i) * 220 })
  }
}

function createWildlife(scene, updatables) {
  const mat = new THREE.LineBasicMaterial({ color: 0x20242c, transparent: true, opacity: 0.7 })
  for (let f = 0; f < 3; f++) {
    const group = new THREE.Group()
    const positions = []
    for (let b = 0; b < 7; b++) {
      const ox = (b - 3) * 3, oy = Math.abs(b - 3) * 1.2
      positions.push(ox - 1.4, oy, 0, ox + 1.4, oy + 0.2, 0)
      positions.push(ox + 0.1, oy + 0.2, 0, ox + 1.2, oy + 1.6, 0)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    group.add(new THREE.LineSegments(geo, mat))
    group.scale.setScalar(2.4)
    scene.add(group)
    const cx = (Math.random() - 0.5) * 1400, cz = (Math.random() - 0.5) * 1400
    const rad = 80 + Math.random() * 140, hgt = 65 + Math.random() * 45
    updatables.push((t) => {
      const a = t * 0.08 + f * 2
      group.position.set(cx + Math.cos(a) * rad, hgt + Math.sin(t * 0.5 + f) * 2, cz + Math.sin(a) * rad)
      group.rotation.y = -a + Math.PI / 2
    })
  }
}

function createVolcanoSmoke(scene, updatables) {
  const count = 42
  const geo = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)
  const seeds = []
  const rand = mulberry32(91)
  for (let i = 0; i < count; i++) {
    seeds.push({ p: rand(), a: rand() * 6.28, r: rand() * 22, speed: 0.02 + rand() * 0.03 })
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const tex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64
    const ctx = c.getContext('2d'); const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 32)
    g.addColorStop(0, 'rgba(255,255,255,0.75)'); g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64)
    return new THREE.CanvasTexture(c)
  })()
  const mat = new THREE.PointsMaterial({ size: 36, map: tex, transparent: true, opacity: 0.28, depthWrite: false, color: 0x8e8a84, sizeAttenuation: true })
  const pts = new THREE.Points(geo, mat)
  pts.frustumCulled = false
  scene.add(pts)
  const base = heightAt(VOLCANO.x, VOLCANO.y)
  updatables.push((t) => {
    for (let i = 0; i < count; i++) {
      const s = seeds[i]
      const life = (t * s.speed + s.p) % 1
      const y = base + 10 + life * 220
      const spread = 18 + life * 115
      positions[i * 3] = VOLCANO.x + Math.cos(s.a + t * 0.05) * (s.r + spread)
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = VOLCANO.y + Math.sin(s.a + t * 0.05) * (s.r + spread)
    }
    geo.attributes.position.needsUpdate = true
  })
}

/* ----------------------------- map -------------------------------- */

function createMap(heights, seg, roads) {
  const size = 256
  const c = document.createElement('canvas'); c.width = c.height = size
  const ctx = c.getContext('2d')
  const img = ctx.createImageData(size, size)
  const step = 4200 / seg
  const n = seg + 1
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const gx = Math.min(seg - 1, Math.floor(px / size * seg))
      const gz = Math.min(seg - 1, Math.floor(py / size * seg))
      const h = heights[gz * n + gx]
      const hx = heights[gz * n + Math.min(seg, gx + 1)]
      const hz = heights[Math.min(seg, gz + 1) * n + gx]
      const slope = Math.abs(hx - h) + Math.abs(hz - h)
      let r, g, b
      if (h < -1) { r = 20; g = 61; b = 82 }
      else if (h < 3) { r = 216; g = 192; b = 142 }
      else if (h < 95) {
        const desert = fbm((px / size - 0.5) * 4200 * 0.0018 + 40, (py / size - 0.5) * 4200 * 0.0018 - 20, 3)
        if (desert > 0.62) { r = 196; g = 153; b = 92 } else { r = 88; g = 124; b = 70 }
      } else if (h < 190) { r = 132; g = 126; b = 105 }
      else if (h < 250) { r = 112; g = 106; b = 100 }
      else { r = 222; g = 218; b = 206 }
      const shade = 0.82 + Math.min(0.22, slope * 0.03)
      const idx = (py * size + px) * 4
      img.data[idx] = r * shade; img.data[idx + 1] = g * shade; img.data[idx + 2] = b * shade; img.data[idx + 3] = 255
    }
  }
  ctx.putImageData(img, 0, 0)
  // roads
  const toPx = (x, z) => [(x / 4200 + 0.5) * size, (z / 4200 + 0.5) * size]
  for (const road of roads) {
    ctx.beginPath()
    road.mapPts.forEach(([x, z], i) => { const [px, py] = toPx(x, z); if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py) })
    if (road.def.closed) ctx.closePath()
    ctx.strokeStyle = 'rgba(238,226,201,0.8)'; ctx.lineWidth = road.def.width > 10 ? 2.6 : 1.8; ctx.stroke()
    ctx.strokeStyle = 'rgba(44,45,50,0.65)'; ctx.lineWidth = 1; ctx.stroke()
  }
  // water tint over the sea? handled by height
  // vignette on map edges
  const grad = ctx.createRadialGradient(size / 2, size / 2, size * 0.2, size / 2, size / 2, size * 0.55)
  grad.addColorStop(0, 'rgba(0,0,0,0)'); grad.addColorStop(1, 'rgba(4,8,16,0.5)')
  ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size)
  return c
}

/* ----------------------------- build ------------------------------ */

export function buildWorld(scene, renderer) {
  scene.fog = new THREE.FogExp2(0xe7a77a, 0.00034)
  const sky = createSky(scene, renderer)

  const SEG = 280
  const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, SEG, SEG)
  geo.rotateX(-Math.PI / 2)
  const pos = geo.attributes.position
  const count = pos.count
  const heights = new Float32Array(count)
  const colors = new Float32Array(count * 3)
  const n = SEG + 1
  for (let i = 0; i < count; i++) {
    const x = pos.getX(i), z = pos.getZ(i)
    const h = heightAt(x, z)
    heights[i] = h
    pos.setY(i, h)
  }
  const color = new THREE.Color()
  for (let iz = 0; iz < n; iz++) {
    for (let ix = 0; ix < n; ix++) {
      const i = iz * n + ix
      const x = pos.getX(i), z = pos.getZ(i), h = heights[i]
      const hx = heights[iz * n + Math.min(SEG, ix + 1)]
      const hz = heights[Math.min(SEG, iz + 1) * n + ix]
      const slope = Math.abs(hx - h) + Math.abs(hz - h)
      const desert = fbm(x * 0.0018 + 40, z * 0.0018 - 20, 3)
      const wet = fbm(x * 0.0016 - 10, z * 0.0016 + 30, 3)
      if (h < -1) color.setRGB(0.12, 0.22, 0.26, THREE.SRGBColorSpace)
      else if (h < 2.2) color.setRGB(0.84, 0.72, 0.50, THREE.SRGBColorSpace)
      else if (h < 4.5) color.setRGB(0.78, 0.65, 0.43, THREE.SRGBColorSpace)
      else if (h < 80) {
        if (desert > 0.64 && x > -450) color.setRGB(0.67, 0.50, 0.27, THREE.SRGBColorSpace)
        else if (wet > 0.56) color.setRGB(0.18, 0.34, 0.19, THREE.SRGBColorSpace)
        else color.setRGB(0.31, 0.43, 0.20, THREE.SRGBColorSpace)
      } else if (h < 135) color.setRGB(0.42, 0.43, 0.29, THREE.SRGBColorSpace)
      else if (h < 205) color.setRGB(0.42, 0.38, 0.32, THREE.SRGBColorSpace)
      else if (h < 255) color.setRGB(0.34, 0.32, 0.30, THREE.SRGBColorSpace)
      else color.setRGB(0.78, 0.76, 0.71, THREE.SRGBColorSpace)
      if (slope > 2.4 && h > 6) color.lerp(new THREE.Color(0.26, 0.23, 0.21), Math.min(0.65, (slope - 2.4) * 0.18))
      const grain = 0.92 + (hash2(ix * 1.3, iz * 1.7) * 0.16)
      color.multiplyScalar(grain)
      colors[i * 3] = color.r; colors[i * 3 + 1] = color.g; colors[i * 3 + 2] = color.b
    }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  const terrainMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0, flatShading: false })
  const terrain = new THREE.Mesh(geo, terrainMat)
  terrain.receiveShadow = true
  terrain.castShadow = false
  scene.add(terrain)

  const obstacles = []
  const updatables = []
  const { roads, finder } = buildRoads(scene, obstacles)
  const festival = createFestival(scene, obstacles, updatables)
  createTown(scene, obstacles, updatables)
  createLighthouse(scene, updatables)
  createAirfield(scene, updatables)
  createBillboards(scene)
  createBalloons(scene, updatables)
  createClouds(scene, updatables)
  createWildlife(scene, updatables)
  createVolcanoSmoke(scene, updatables)
  scatter(scene, finder)

  const mapCanvas = createMap(heights, SEG, roads)

  const start = new THREE.Vector3(14, 0, 108)
  start.y = heightAt(start.x, start.z)
  const spawn = { x: start.x, z: start.z, yaw: 0.04 }

  return {
    scene, sky, terrain, roads, finder, mapCanvas, festival, obstacles, updatables,
    heightAt, normalAt, surfaceAt: (x, z) => surfaceAt(x, z, finder), spawn,
    start, update(time, camera, target) {
      sky.update(camera, time, target)
      for (const fn of updatables) fn(time)
    },
    setTimePreset(name) { sky.apply(name) },
    get timePreset() { return sky.preset },
    get sunDir() { return sky.sunDir }
  }
}
