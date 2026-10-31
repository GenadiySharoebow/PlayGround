import * as THREE from 'three'

/* ------------------------------------------------------------------ */
/*  HORIZON LIBRE — car roster and procedural low-poly car factory    */
/* ------------------------------------------------------------------ */

export const CARS = [
  {
    id: 'brisa', brand: 'Brisa', name: 'GT', year: 2024, klass: 'A', rating: 812,
    type: 'coupe', tag: 'Balanced sport',
    paint: 0x19c8b9, accents: [0x19c8b9, 0xf5f1e8, 0xff3b6b, 0x2c61ff, 0xffb02e, 0x141820],
    power: 420, weight: 1445, topSpeed: 291, grip: 1.06, brake: 1.02, offroad: 0.58,
    drivetrain: 'AWD', wheelbase: 2.72, track: 1.62, wheelR: 0.36, wheelW: 0.28,
    len: 4.48, width: 1.91, gearRatios: [3.62, 2.38, 1.72, 1.32, 1.06, 0.88], finalDrive: 3.55,
    torque: 455, redline: 7600, cd: 0.68
  },
  {
    id: 'sierra', brand: 'Sierra', name: 'RS', year: 2023, klass: 'A', rating: 786,
    type: 'rally', tag: 'Rally weapon',
    paint: 0xc9f23d, accents: [0xc9f23d, 0x1fd3e8, 0xffffff, 0xff4a3d, 0x1b2540, 0xf2a93b],
    power: 342, weight: 1360, topSpeed: 251, grip: 1.0, brake: 0.98, offroad: 0.94,
    drivetrain: 'AWD', wheelbase: 2.58, track: 1.6, wheelR: 0.37, wheelW: 0.28,
    len: 4.08, width: 1.84, gearRatios: [3.75, 2.45, 1.78, 1.37, 1.09, 0.89], finalDrive: 3.9,
    torque: 420, redline: 7200, cd: 0.72
  },
  {
    id: 'volcan', brand: 'Volcán', name: 'R', year: 2025, klass: 'S2', rating: 947,
    type: 'super', tag: 'Hypercar',
    paint: 0xff5a1f, accents: [0xff5a1f, 0x18d7ff, 0xf3f0e7, 0x11151d, 0xffd23f, 0xb71fff],
    power: 782, weight: 1348, topSpeed: 352, grip: 1.23, brake: 1.2, offroad: 0.38,
    drivetrain: 'AWD', wheelbase: 2.68, track: 1.72, wheelR: 0.35, wheelW: 0.33,
    len: 4.62, width: 2.02, gearRatios: [3.9, 2.55, 1.86, 1.43, 1.13, 0.92], finalDrive: 3.45,
    torque: 720, redline: 8200, cd: 0.62
  },
  {
    id: 'marea', brand: 'Marea', name: 'Spyder', year: 2022, klass: 'S1', rating: 861,
    type: 'roadster', tag: 'Open-top cruiser',
    paint: 0xe51f45, accents: [0xe51f45, 0xf7efe0, 0x1a2230, 0x17b8d8, 0xf2b134, 0x7b2cff],
    power: 505, weight: 1420, topSpeed: 311, grip: 1.12, brake: 1.08, offroad: 0.46,
    drivetrain: 'RWD', wheelbase: 2.64, track: 1.66, wheelR: 0.35, wheelW: 0.3,
    len: 4.42, width: 1.94, gearRatios: [3.6, 2.35, 1.7, 1.3, 1.02, 0.84], finalDrive: 3.7,
    torque: 530, redline: 8000, cd: 0.65
  },
  {
    id: 'camino', brand: 'Camino', name: 'Rey', year: 2021, klass: 'B', rating: 693,
    type: 'truck', tag: 'Baja pickup',
    paint: 0xd7a55a, accents: [0xd7a55a, 0x2f6b4f, 0x1c2026, 0xf2e7cc, 0xdb3b2b, 0x3f8fd6],
    power: 452, weight: 2310, topSpeed: 222, grip: 0.88, brake: 0.86, offroad: 1.0,
    drivetrain: '4WD', wheelbase: 3.3, track: 1.78, wheelR: 0.46, wheelW: 0.36,
    len: 5.42, width: 2.12, gearRatios: [3.9, 2.5, 1.8, 1.4, 1.1, 0.9], finalDrive: 4.1,
    torque: 690, redline: 6200, cd: 0.86
  },
  {
    id: 'lobo', brand: 'Lobo', name: 'GT3', year: 2024, klass: 'S1', rating: 899,
    type: 'gt3', tag: 'Track monster',
    paint: 0xf1f0ea, accents: [0xf1f0ea, 0x203dff, 0xff2d7a, 0x171b24, 0xffd400, 0x29d8a5],
    power: 608, weight: 1255, topSpeed: 302, grip: 1.3, brake: 1.26, offroad: 0.3,
    drivetrain: 'RWD', wheelbase: 2.7, track: 1.74, wheelR: 0.35, wheelW: 0.33,
    len: 4.58, width: 2.04, gearRatios: [3.8, 2.5, 1.82, 1.4, 1.1, 0.9], finalDrive: 3.6,
    torque: 620, redline: 8400, cd: 0.7
  },
  {
    id: 'cielo', brand: 'Cielo', name: '68', year: 1968, klass: 'B', rating: 641,
    type: 'classic', tag: 'Vintage muscle',
    paint: 0xefe3c0, accents: [0xefe3c0, 0x1b5e8c, 0x8b1d2c, 0x1b1c20, 0xcf9b3b, 0x3b7d4f],
    power: 382, weight: 1600, topSpeed: 238, grip: 0.89, brake: 0.84, offroad: 0.5,
    drivetrain: 'RWD', wheelbase: 2.9, track: 1.6, wheelR: 0.38, wheelW: 0.26,
    len: 4.78, width: 1.9, gearRatios: [3.2, 2.1, 1.55, 1.2, 0.96, 0.8], finalDrive: 3.3,
    torque: 560, redline: 6100, cd: 0.82
  },
  {
    id: 'electrico', brand: 'Eléctrico', name: 'X', year: 2025, klass: 'S1', rating: 878,
    type: 'ev', tag: 'Silent missile',
    paint: 0x1fe0ff, accents: [0x1fe0ff, 0xf4f7ff, 0x0d1020, 0x8a5cff, 0xff2d7a, 0xb6ff3d],
    power: 672, weight: 1935, topSpeed: 283, grip: 1.14, brake: 1.12, offroad: 0.52,
    drivetrain: 'AWD', wheelbase: 2.86, track: 1.72, wheelR: 0.37, wheelW: 0.31,
    len: 4.76, width: 1.98, gearRatios: [1.0], finalDrive: 8.2,
    torque: 980, redline: 16000, cd: 0.58, ev: true
  },
  {
    id: 'duna', brand: 'Duna', name: 'Buggy', year: 2023, klass: 'B', rating: 612,
    type: 'buggy', tag: 'Desert toy',
    paint: 0xffcf2e, accents: [0xffcf2e, 0xff5b2d, 0x1c252e, 0xf3f0e5, 0x25d8b4, 0x7b4bff],
    power: 302, weight: 1090, topSpeed: 204, grip: 0.83, brake: 0.8, offroad: 1.08,
    drivetrain: 'RWD', wheelbase: 2.7, track: 1.88, wheelR: 0.5, wheelW: 0.4,
    len: 4.1, width: 2.0, gearRatios: [3.55, 2.3, 1.68, 1.28, 1.0, 0.84], finalDrive: 4.2,
    torque: 390, redline: 7000, cd: 0.98
  },
  {
    id: 'toro', brand: 'Toro', name: 'Bronco', year: 2022, klass: 'A', rating: 754,
    type: 'suv', tag: 'Go-anywhere 4x4',
    paint: 0x2d7a52, accents: [0x2d7a52, 0xf0c241, 0x1c2229, 0xe9e4d6, 0xd94428, 0x397fc7],
    power: 402, weight: 2130, topSpeed: 231, grip: 0.95, brake: 0.9, offroad: 1.04,
    drivetrain: '4WD', wheelbase: 2.94, track: 1.78, wheelR: 0.45, wheelW: 0.34,
    len: 4.84, width: 2.05, gearRatios: [3.8, 2.45, 1.76, 1.36, 1.08, 0.88], finalDrive: 4.0,
    torque: 600, redline: 6500, cd: 0.84
  }
]

const SHARED = {
  glass: new THREE.MeshStandardMaterial({ color: 0x09131d, metalness: 0.9, roughness: 0.1, transparent: true, opacity: 0.92 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x11151a, roughness: 0.72, metalness: 0.18 }),
  trim: new THREE.MeshStandardMaterial({ color: 0x23282e, roughness: 0.48, metalness: 0.6 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xd9e2e7, roughness: 0.18, metalness: 1 }),
  tire: new THREE.MeshStandardMaterial({ color: 0x101113, roughness: 0.94, metalness: 0 }),
  rim: new THREE.MeshStandardMaterial({ color: 0xbec7ce, roughness: 0.26, metalness: 0.92 }),
  rimDark: new THREE.MeshStandardMaterial({ color: 0x31383f, roughness: 0.32, metalness: 0.86 }),
  red: new THREE.MeshStandardMaterial({ color: 0x7c0f14, emissive: 0xff1d2b, emissiveIntensity: 0.75, roughness: 0.35 }),
  amber: new THREE.MeshStandardMaterial({ color: 0x6b3400, emissive: 0xff8a18, emissiveIntensity: 0.55, roughness: 0.4 }),
  head: new THREE.MeshStandardMaterial({ color: 0xfff6df, emissive: 0xffedb8, emissiveIntensity: 1.3, roughness: 0.25 }),
  white: new THREE.MeshStandardMaterial({ color: 0xf1efe6, roughness: 0.5, metalness: 0.2 }),
  black: new THREE.MeshStandardMaterial({ color: 0x08090b, roughness: 0.8 })
}

function box(w, h, d, mat, x = 0, y = 0, z = 0, parent) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  mesh.position.set(x, y, z)
  mesh.castShadow = true
  mesh.receiveShadow = true
  if (parent) parent.add(mesh)
  return mesh
}

function cyl(r, h, mat, x = 0, y = 0, z = 0, parent, radial = 10) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, radial), mat)
  mesh.position.set(x, y, z)
  mesh.castShadow = true
  if (parent) parent.add(mesh)
  return mesh
}

/* eight-corner wedge / tapered box */
function taperedBox(w, h, d, frontScale = 0.88, rearScale = 0.96, topScale = 0.9, topShift = 0) {
  const x = w / 2, y = h / 2, z = d / 2
  const v = [
    [-x * rearScale, 0, -z], [x * rearScale, 0, -z], [-x * frontScale, 0, z], [x * frontScale, 0, z],
    [-x * rearScale * topScale, h, -z + topShift], [x * rearScale * topScale, h, -z + topShift],
    [-x * frontScale * topScale, h, z - topShift * 1.6], [x * frontScale * topScale, h, z - topShift * 1.6]
  ]
  const pos = []
  for (const p of v) pos.push(...p)
  const idx = [
    0, 1, 2, 2, 1, 3, 4, 6, 5, 5, 6, 7,
    0, 2, 4, 4, 2, 6, 1, 5, 3, 3, 5, 7,
    2, 3, 6, 6, 3, 7, 0, 1, 4, 4, 1, 5
  ]
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  geo.setIndex(idx)
  geo.computeVertexNormals()
  return geo
}

function sideShell(def, beltY, bottomY, profile) {
  const z0 = -def.len / 2, z1 = def.len / 2
  const pts = profile || [
    [z0, bottomY + 0.05],
    [z0 - 0.01, beltY - 0.16],
    [z0 + 0.12, beltY],
    [z0 + def.len * 0.17, beltY + 0.05],
    [z1 - def.len * 0.22, beltY + 0.03],
    [z1 - 0.04, beltY - 0.08],
    [z1, beltY - 0.21],
    [z1, bottomY + 0.03],
    [z0 + def.len * 0.36, bottomY - 0.02],
    [z0 + def.len * 0.64, bottomY - 0.02]
  ]
  const shape = new THREE.Shape()
  shape.moveTo(pts[0][0], pts[0][1])
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1])
  shape.closePath()
  const geo = new THREE.ExtrudeGeometry(shape, { depth: def.width, bevelEnabled: true, bevelSize: 0.035, bevelThickness: 0.035, bevelSegments: 1 })
  geo.rotateY(-Math.PI / 2)
  geo.translate(def.width / 2, 0, 0)
  geo.computeVertexNormals()
  return geo
}

function makeWheel(def, rimMaterial) {
  const pivot = new THREE.Group()
  const spin = new THREE.Group()
  const tire = new THREE.Mesh(new THREE.CylinderGeometry(def.wheelR, def.wheelR, def.wheelW, 14, 1), SHARED.tire)
  tire.rotation.z = Math.PI / 2
  tire.castShadow = true
  spin.add(tire)
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(def.wheelR * 0.59, def.wheelR * 0.59, def.wheelW + 0.025, 10), rimMaterial)
  rim.rotation.z = Math.PI / 2
  spin.add(rim)
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(def.wheelR * 0.16, def.wheelR * 0.16, def.wheelW + 0.06, 8), SHARED.chrome)
  hub.rotation.z = Math.PI / 2
  spin.add(hub)
  for (let i = 0; i < 5; i++) {
    const spoke = box(def.wheelW * 0.42, def.wheelR * 0.86, 0.035, rimMaterial, 0, 0, 0, spin)
    spoke.rotation.x = (i / 5) * Math.PI
    spoke.position.x = def.wheelW * 0.23
  }
  pivot.add(spin)
  return { pivot, spin }
}

function addLights(group, def, beltY) {
  const zF = def.len / 2 + 0.005
  const zR = -def.len / 2 - 0.005
  const yF = beltY - 0.18
  const headMat = SHARED.head.clone()
  const brakeMat = SHARED.red.clone()
  if (def.type === 'classic') {
    for (const sx of [-1, 1]) {
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.145, 10, 6), headMat)
      lamp.position.set(sx * def.width * 0.31, yF + 0.09, zF + 0.03)
      group.add(lamp)
      const trim = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 6, 12), SHARED.chrome)
      trim.position.copy(lamp.position)
      trim.rotation.y = Math.PI / 2
      group.add(trim)
    }
    box(def.width * 0.88, 0.09, 0.05, SHARED.chrome, 0, beltY - 0.47, zF + 0.03, group)
    box(def.width * 0.9, 0.11, 0.05, SHARED.chrome, 0, beltY - 0.46, zR - 0.04, group)
    for (const sx of [-1, 1]) {
      box(0.19, 0.1, 0.035, brakeMat, sx * def.width * 0.34, yF + 0.02, zR - 0.03, group)
    }
  } else if (def.type === 'ev') {
    box(def.width * 0.62, 0.06, 0.03, headMat, 0, yF + 0.08, zF, group)
    box(def.width * 0.72, 0.055, 0.03, brakeMat, 0, yF + 0.08, zR, group)
  } else if (def.type === 'buggy') {
    for (const sx of [-1, 1]) {
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), headMat)
      lamp.position.set(sx * 0.5, beltY + 0.28, def.len / 2 - 0.12)
      group.add(lamp)
    }
    box(0.9, 0.06, 0.03, brakeMat, 0, beltY + 0.22, -def.len / 2 + 0.1, group)
  } else {
    for (const sx of [-1, 1]) {
      box(def.width * 0.19, 0.1, 0.035, headMat, sx * def.width * 0.32, yF, zF, group)
      box(def.width * 0.075, 0.07, 0.038, SHARED.amber, sx * def.width * 0.4, yF - 0.02, zF, group)
    }
    const tail = box(def.width * 0.56, 0.075, 0.035, brakeMat, 0, yF + 0.1, zR, group)
    tail.material = brakeMat
  }
  return { headMat, brakeMat }
}

export function buildCar(def, paintColor = def.paint) {
  const group = new THREE.Group()
  group.name = `car-${def.id}`
  const paint = new THREE.MeshStandardMaterial({
    color: paintColor, metalness: 0.58, roughness: 0.3, envMapIntensity: 1.05
  })
  const accent = new THREE.MeshStandardMaterial({ color: def.accents[1] || 0xffffff, metalness: 0.32, roughness: 0.4 })
  const rimMat = def.type === 'buggy' || def.type === 'rally' ? SHARED.rimDark : SHARED.rim
  const beltY = def.type === 'truck' || def.type === 'suv' ? 1.1 : def.type === 'buggy' ? 0.92 : 0.78
  // Keep a believable ride height and push the wheels out to the corners so
  // the low-poly silhouettes read clearly from the chase camera.
  const bottomY = def.wheelR * 1.12
  const wb = def.wheelbase, tr = def.track + 0.22
  const bodyHalf = def.width / 2
  const chassis = new THREE.Group()
  group.add(chassis)

  let shell
  if (def.type === 'truck') {
    shell = sideShell(def, 1.08, 0.44, [
      [-def.len / 2, 0.58], [-def.len / 2, 0.84], [-def.len * 0.12, 0.88], [-def.len * 0.12, 1.08],
      [def.len * 0.17, 1.1], [def.len / 2 - 0.05, 1.02], [def.len / 2, 0.72], [def.len / 2, 0.54],
      [def.len * 0.34, 0.52], [-def.len * 0.34, 0.52]
    ])
  } else if (def.type === 'buggy') {
    shell = sideShell(def, 0.76, 0.48, [
      [-def.len / 2, 0.57], [-def.len / 2 + 0.1, 0.67], [-def.len * 0.55, 0.78], [-def.len * 0.1, 0.82],
      [def.len * 0.2, 0.72], [def.len / 2 - 0.15, 0.66], [def.len / 2 - 0.1, 0.58], [-def.len * 0.3, 0.55]
    ])
  } else if (def.type === 'classic') {
    shell = sideShell(def, 0.84, 0.4, [
      [-def.len / 2, 0.49], [-def.len / 2, 0.78], [-def.len * 0.32, 0.86], [-def.len * 0.08, 0.88],
      [def.len * 0.16, 0.9], [def.len * 0.3, 0.78], [def.len / 2, 0.7], [def.len / 2, 0.49],
      [def.len * 0.3, 0.45], [-def.len * 0.32, 0.45]
    ])
  } else {
    shell = sideShell(def, beltY, bottomY)
  }
  const body = new THREE.Mesh(shell, paint)
  body.castShadow = true
  body.receiveShadow = true
  chassis.add(body)

  // dark underbody
  box(def.width * 0.88, 0.18, def.len * 0.88, SHARED.dark, 0, bottomY - 0.02, 0, chassis)
  // side skirts
  box(0.07, 0.11, def.len * 0.55, SHARED.trim, def.width * 0.49, bottomY + 0.06, 0, chassis)
  box(0.07, 0.11, def.len * 0.55, SHARED.trim, -def.width * 0.49, bottomY + 0.06, 0, chassis)

  // cabin / greenhouse
  const cabinLen = def.type === 'truck' ? def.len * 0.3 : def.type === 'buggy' ? 0 : def.len * 0.4
  const cabinH = def.type === 'suv' ? 0.66 : def.type === 'truck' ? 0.55 : def.type === 'classic' ? 0.5 : 0.47
  const cabinZ = def.type === 'truck' ? def.len * 0.1 : def.type === 'super' || def.type === 'gt3' ? -def.len * 0.04 : -def.len * 0.06
  if (def.type !== 'roadster' && def.type !== 'buggy' && cabinLen > 0.1) {
    const cab = new THREE.Mesh(taperedBox(def.width * 0.79, cabinH, cabinLen, 0.92, 0.78, 0.72, cabinH * 0.22), SHARED.glass)
    cab.position.set(0, beltY - 0.04, cabinZ)
    cab.castShadow = true
    chassis.add(cab)
    const roof = new THREE.Mesh(taperedBox(def.width * 0.68, 0.08, cabinLen * 0.7, 0.94, 0.82, 0.9, 0), paint)
    roof.position.set(0, beltY + cabinH - 0.005, cabinZ - cabinLen * 0.14)
    roof.castShadow = true
    chassis.add(roof)
    // bright roof spine separates the glasshouse from the paint at a distance
    box(def.width * 0.055, 0.012, cabinLen * 0.64, accent, 0, beltY + cabinH + 0.043, cabinZ - cabinLen * 0.14, chassis)
    // pillars
    box(0.045, cabinH, 0.045, SHARED.dark, def.width * 0.395, beltY + cabinH * 0.45, cabinZ + cabinLen * 0.36, chassis)
    box(0.045, cabinH, 0.045, SHARED.dark, -def.width * 0.395, beltY + cabinH * 0.45, cabinZ + cabinLen * 0.36, chassis)
  } else if (def.type === 'roadster') {
    const windshield = new THREE.Mesh(new THREE.BoxGeometry(def.width * 0.7, 0.38, 0.04), SHARED.glass)
    windshield.position.set(0, beltY + 0.17, def.len * 0.12)
    windshield.rotation.x = -0.34
    chassis.add(windshield)
    box(def.width * 0.62, 0.08, 0.35, SHARED.trim, 0, beltY + 0.02, def.len * 0.08, chassis)
    box(0.06, 0.34, 0.06, SHARED.trim, def.width * 0.38, beltY + 0.16, def.len * 0.12, chassis)
    box(0.06, 0.34, 0.06, SHARED.trim, -def.width * 0.38, beltY + 0.16, def.len * 0.12, chassis)
  }

  // truck bed walls
  if (def.type === 'truck') {
    box(def.width * 0.96, 0.34, 0.11, paint, 0, 0.92, -def.len / 2 + 0.07, chassis)
    box(0.1, 0.34, def.len * 0.38, paint, def.width * 0.45, 0.92, -def.len * 0.26, chassis)
    box(0.1, 0.34, def.len * 0.38, paint, -def.width * 0.45, 0.92, -def.len * 0.26, chassis)
    box(def.width * 0.86, 0.06, def.len * 0.38, SHARED.dark, 0, 0.87, -def.len * 0.26, chassis)
    for (const sx of [-1, 1]) cyl(0.035, 0.4, SHARED.chrome, sx * def.width * 0.44, 1.12, -def.len * 0.09, chassis, 6).rotation.x = Math.PI / 2
  }

  // rally roof scoop / light pod
  if (def.type === 'rally') {
    box(0.48, 0.13, 0.62, SHARED.trim, 0, beltY + cabinH, cabinZ - 0.3, chassis)
    box(0.75, 0.09, 0.12, SHARED.dark, 0, beltY + cabinH + 0.13, cabinZ - 0.58, chassis)
    for (let i = -1; i <= 1; i++) box(0.12, 0.08, 0.04, SHARED.head, i * 0.24, beltY + cabinH + 0.13, cabinZ - 0.65, chassis)
    for (const sx of [-1, 1]) box(0.26, 0.2, 0.06, SHARED.dark, sx * def.width * 0.36, beltY - 0.4, -def.len * 0.36, chassis)
  }

  // supercar / gt3 aero
  if (def.type === 'super' || def.type === 'gt3') {
    const wingW = def.width * 1.02
    box(wingW, 0.055, 0.42, paint, 0, beltY + 0.47, -def.len * 0.44, chassis)
    box(0.055, 0.4, 0.1, SHARED.dark, def.width * 0.34, beltY + 0.26, -def.len * 0.44, chassis)
    box(0.055, 0.4, 0.1, SHARED.dark, -def.width * 0.34, beltY + 0.26, -def.len * 0.44, chassis)
    box(def.width * 0.78, 0.08, 0.28, SHARED.dark, 0, bottomY + 0.02, def.len * 0.45, chassis)
    box(def.width * 0.86, 0.05, 0.2, SHARED.dark, 0, bottomY + 0.02, -def.len * 0.46, chassis)
    // side intakes
    box(0.06, 0.18, 0.52, SHARED.dark, def.width * 0.48, beltY - 0.26, -def.len * 0.02, chassis)
    box(0.06, 0.18, 0.52, SHARED.dark, -def.width * 0.48, beltY - 0.26, -def.len * 0.02, chassis)
  }
  if (def.type === 'gt3') {
    for (const sx of [-1, 1]) {
      box(0.07, 0.3, 0.6, SHARED.dark, sx * def.width * 0.49, beltY - 0.34, def.len * 0.24, chassis)
    }
    box(def.width * 0.5, 0.03, 0.5, accent, 0, 1.16, -def.len * 0.07, chassis)
  }

  // simple racing stripe for a few cars
  if (['coupe', 'classic', 'ev'].includes(def.type)) {
    box(def.width * 0.095, 0.014, def.len * 0.56, accent, 0, beltY + 0.045, def.len * 0.06, chassis)
  }

  // side blade / rocker accent
  for (const sx of [-1, 1]) {
    box(0.025, 0.055, def.len * 0.5, accent, sx * (bodyHalf + 0.012), bottomY + 0.13, def.len * 0.01, chassis)
  }

  // ducktail spoiler and rear diffuser make the back end read clearly
  if (def.type === 'coupe' || def.type === 'rally' || def.type === 'classic') {
    box(def.width * 0.74, 0.038, 0.22, paint, 0, beltY + 0.055, -def.len * 0.46, chassis)
    for (const sx of [-1, 1]) box(0.04, 0.07, 0.08, SHARED.dark, sx * def.width * 0.26, beltY + 0.02, -def.len * 0.455, chassis)
  }
  if (def.type !== 'buggy') {
    box(def.width * 0.8, 0.11, 0.16, SHARED.black, 0, bottomY + 0.02, -def.len / 2 + 0.02, chassis)
    for (let i = -2; i <= 2; i++) box(0.035, 0.14, 0.2, SHARED.dark, i * def.width * 0.15, bottomY + 0.02, -def.len / 2 - 0.04, chassis)
  }

  // mirrors
  for (const sx of [-1, 1]) {
    box(0.14, 0.08, 0.08, paint, sx * (def.width / 2 + 0.07), beltY + 0.14, def.len * 0.11, chassis)
    box(0.035, 0.06, 0.03, SHARED.dark, sx * (def.width / 2 + 0.13), beltY + 0.14, def.len * 0.11, chassis)
  }

  // grille + plate + exhausts
  box(def.width * 0.46, 0.17, 0.04, SHARED.black, 0, beltY - 0.33, def.len / 2 + 0.02, chassis)
  box(0.46, 0.12, 0.035, SHARED.white, 0, bottomY + 0.16, -def.len / 2 - 0.045, chassis)
  if (def.type !== 'ev') {
    for (const sx of [-1, 1]) {
      const ex = cyl(0.055, 0.18, SHARED.chrome, sx * def.width * 0.27, bottomY + 0.08, -def.len / 2 - 0.02, chassis, 8)
      ex.rotation.x = Math.PI / 2
    }
  }

  // buggy tube frame replaces most bodywork
  if (def.type === 'buggy') {
    const cageMat = SHARED.trim
    for (const sx of [-1, 1]) {
      const rail = cyl(0.045, def.len * 0.72, cageMat, sx * def.width * 0.31, beltY + 0.18, -0.1, chassis, 6)
      rail.rotation.x = Math.PI / 2
      for (let i = -2; i <= 2; i++) {
        const post = cyl(0.04, 0.72, cageMat, sx * def.width * 0.31, beltY - 0.05, i * def.len * 0.14, chassis, 6)
        post.rotation.z = 0
      }
    }
    const top = cyl(0.045, def.len * 0.66, cageMat, 0, beltY + 0.52, -0.32, chassis, 6)
    top.rotation.x = Math.PI / 2
    box(0.55, 0.12, 0.5, SHARED.dark, 0, beltY - 0.12, 0.28, chassis)
    for (let i = 0; i < 3; i++) box(def.width * 0.7, 0.02, 0.025, accent, 0, beltY + 0.53, 0.1 - i * 0.18, chassis)
  }

  // wheels
  const wheels = []
  const zF = wb / 2, zR = -wb / 2
  for (const [x, z, front] of [[-tr / 2, zF, true], [tr / 2, zF, true], [-tr / 2, zR, false], [tr / 2, zR, false]]) {
    const w = makeWheel(def, rimMat)
    w.pivot.position.set(x, def.wheelR, z)
    w.front = front
    w.side = Math.sign(x)
    group.add(w.pivot)
    wheels.push(w)
    // Dark wheel tub keeps the open wheel arches from showing the road through.
    const tub = new THREE.Mesh(new THREE.CylinderGeometry(def.wheelR * 0.82, def.wheelR * 0.82, 0.05, 12), SHARED.black)
    tub.rotation.z = Math.PI / 2
    tub.position.set(x - Math.sign(x) * def.wheelW * 0.55, def.wheelR, z)
    chassis.add(tub)
    // fender flare sits proud of the bodywork
    const flare = new THREE.Mesh(new THREE.TorusGeometry(def.wheelR * 1.02, 0.055, 4, 14, Math.PI), paint)
    flare.position.set(Math.sign(x) * (bodyHalf + 0.015), def.wheelR, z)
    flare.rotation.y = Math.PI / 2
    flare.rotation.z = Math.PI / 2
    chassis.add(flare)
  }

  const lights = addLights(chassis, def, beltY)
  const boostFlames = []
  for (const sx of [-1, 1]) {
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.5, 6), new THREE.MeshBasicMaterial({ color: 0x5fd8ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }))
    flame.position.set(sx * def.width * 0.27, bottomY + 0.08, -def.len / 2 - 0.27)
    flame.rotation.x = Math.PI / 2
    flame.visible = false
    chassis.add(flame)
    boostFlames.push(flame)
  }

  // soft shadow blob under the car
  const blob = new THREE.Mesh(new THREE.CircleGeometry(def.width * 0.62, 18), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.26, depthWrite: false }))
  blob.rotation.x = -Math.PI / 2
  blob.position.y = 0.015
  group.add(blob)

  group.traverse(o => { if (o.isMesh) { o.castShadow = o.castShadow !== false; o.receiveShadow = true } })
  return { group, chassis, wheels, lights, boostFlames, paintMat: paint, accentMat: accent, def, blob }
}

export function setCarColor(carObj, hex) {
  carObj.paintMat.color.setHex(hex)
  carObj.def.paint = hex
}

export function carClassLabel(def) {
  return `${def.klass} ${def.rating}`
}

export function carStats(def) {
  return {
    speed: Math.round(THREE.MathUtils.clamp((def.topSpeed - 190) / 170 * 10, 1, 10)),
    accel: Math.round(THREE.MathUtils.clamp((def.power / def.weight) * 26 - 2.5, 1, 10)),
    handling: Math.round(THREE.MathUtils.clamp((def.grip - 0.75) * 18, 1, 10)),
    offroad: Math.round(THREE.MathUtils.clamp(def.offroad * 9, 1, 10)),
    braking: Math.round(THREE.MathUtils.clamp(def.brake * 7.8, 1, 10))
  }
}
