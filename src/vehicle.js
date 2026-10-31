import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { clamp, damp, lerp, smoothstep, TAU } from './utils.js';

const DIMS = {
  coupe: { length: 4.5, width: 1.9, bodyH: 0.52, cabinL: 2.05, cabinH: 0.48, cabinZ: -0.12, wheelR: 0.36, track: 1.62, wheelbase: 2.68, wing: 0.25 },
  super: { length: 4.55, width: 1.98, bodyH: 0.46, cabinL: 1.82, cabinH: 0.42, cabinZ: -0.24, wheelR: 0.35, track: 1.7, wheelbase: 2.65, wing: 0.42 },
  hyper: { length: 4.72, width: 2.08, bodyH: 0.42, cabinL: 1.62, cabinH: 0.36, cabinZ: -0.3, wheelR: 0.36, track: 1.78, wheelbase: 2.72, wing: 0.66 },
  rally: { length: 4.25, width: 1.86, bodyH: 0.58, cabinL: 2.12, cabinH: 0.6, cabinZ: -0.04, wheelR: 0.38, track: 1.62, wheelbase: 2.52, wing: 0.35 },
  muscle: { length: 4.85, width: 1.94, bodyH: 0.58, cabinL: 1.95, cabinH: 0.5, cabinZ: -0.48, wheelR: 0.37, track: 1.62, wheelbase: 2.85, wing: 0.12 },
  classic: { length: 4.3, width: 1.8, bodyH: 0.6, cabinL: 1.85, cabinH: 0.56, cabinZ: -0.08, wheelR: 0.34, track: 1.54, wheelbase: 2.5, wing: 0.06 },
  suv: { length: 4.55, width: 1.98, bodyH: 0.72, cabinL: 2.3, cabinH: 0.7, cabinZ: 0.03, wheelR: 0.44, track: 1.7, wheelbase: 2.68, wing: 0.08 },
  jdm: { length: 4.4, width: 1.86, bodyH: 0.5, cabinL: 2.0, cabinH: 0.48, cabinZ: -0.08, wheelR: 0.36, track: 1.6, wheelbase: 2.58, wing: 0.48 },
  ev: { length: 4.75, width: 1.96, bodyH: 0.48, cabinL: 2.35, cabinH: 0.44, cabinZ: -0.02, wheelR: 0.38, track: 1.68, wheelbase: 2.78, wing: 0.18 },
  truck: { length: 5.35, width: 2.08, bodyH: 0.72, cabinL: 1.7, cabinH: 0.72, cabinZ: 0.62, wheelR: 0.46, track: 1.78, wheelbase: 3.05, wing: 0.04 },
};

function addMesh(parent, geometry, material, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function makeCabinGeometry(bottomW, bottomL, topW, topL, height, topShift = 0) {
  const bw = bottomW / 2;
  const bl = bottomL / 2;
  const tw = topW / 2;
  const tl = topL / 2;
  const positions = new Float32Array([
    -bw, 0, -bl, bw, 0, -bl, bw, 0, bl, -bw, 0, bl,
    -tw, height, -tl + topShift, tw, height, -tl + topShift, tw, height, tl + topShift, -tw, height, tl + topShift,
  ]);
  const indices = [
    0, 1, 2, 0, 2, 3,
    4, 6, 5, 4, 7, 6,
    0, 4, 5, 0, 5, 1,
    1, 5, 6, 1, 6, 2,
    2, 6, 7, 2, 7, 3,
    3, 7, 4, 3, 4, 0,
  ];
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function makeCarMaterials(config) {
  const paint = new THREE.MeshPhysicalMaterial({
    color: config.color,
    metalness: 0.58,
    roughness: 0.25,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    envMapIntensity: 1.15,
  });
  const accent = new THREE.MeshPhysicalMaterial({
    color: config.accent,
    metalness: 0.4,
    roughness: 0.34,
    clearcoat: 0.7,
    clearcoatRoughness: 0.16,
    envMapIntensity: 1,
  });
  const trim = new THREE.MeshStandardMaterial({ color: 0x0c0e12, metalness: 0.35, roughness: 0.58 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x090a0b, metalness: 0, roughness: 0.92 });
  const rim = new THREE.MeshStandardMaterial({ color: config.rim, metalness: 0.9, roughness: 0.22 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x09131c,
    metalness: 0.88,
    roughness: 0.1,
    transparent: true,
    opacity: 0.9,
    envMapIntensity: 1.8,
  });
  const headlight = new THREE.MeshStandardMaterial({
    color: 0xfff8e8,
    emissive: 0xfff2cf,
    emissiveIntensity: 1.5,
    roughness: 0.25,
  });
  const taillight = new THREE.MeshStandardMaterial({
    color: 0x4b0606,
    emissive: 0xff1d0a,
    emissiveIntensity: 1.1,
    roughness: 0.35,
  });
  return { paint, accent, trim, rubber, rim, glass, headlight, taillight };
}

export function buildCarModel(config, { player = false } = {}) {
  const d = DIMS[config.type] || DIMS.coupe;
  const mats = makeCarMaterials(config);
  const root = new THREE.Group();
  root.name = `car-${config.id}`;
  const leanPivot = d.wheelR * 0.62;
  const lean = new THREE.Group();
  lean.position.y = leanPivot;
  root.add(lean);
  const body = new THREE.Group();
  body.position.y = -leanPivot;
  lean.add(body);

  const wheelY = d.wheelR;
  const bodyBottom = d.wheelR * 0.72;
  const bodyY = bodyBottom + d.bodyH / 2;
  const bodyTop = bodyBottom + d.bodyH;

  // Main hull.
  addMesh(body, new RoundedBoxGeometry(d.width, d.bodyH, d.length, 3, 0.12), mats.paint, 0, bodyY, 0);
  // Nose and tail wedges make the silhouette less boxy.
  addMesh(body, new RoundedBoxGeometry(d.width * 0.9, 0.16, d.length * 0.34, 2, 0.055), mats.paint, 0, bodyTop - 0.04, d.length * 0.33, 0.035, 0, 0);
  addMesh(body, new RoundedBoxGeometry(d.width * 0.94, 0.13, d.length * 0.23, 2, 0.05), mats.paint, 0, bodyTop - 0.08, -d.length * 0.39, -0.025, 0, 0);

  // Glasshouse and roof.
  const cabin = addMesh(
    body,
    makeCabinGeometry(d.width * 0.79, d.cabinL, d.width * 0.62, d.cabinL * 0.61, d.cabinH, d.cabinL * 0.06),
    mats.glass,
    0, bodyTop, d.cabinZ,
  );
  cabin.castShadow = false;
  addMesh(body, new RoundedBoxGeometry(d.width * 0.63, 0.07, d.cabinL * 0.61, 2, 0.035), mats.paint, 0, bodyTop + d.cabinH + 0.01, d.cabinZ + d.cabinL * 0.06);
  // B-pillars.
  const pillarZ = d.cabinZ - d.cabinL * 0.05;
  addMesh(body, new THREE.BoxGeometry(d.width * 0.8, d.cabinH * 0.92, 0.055), mats.trim, 0, bodyTop + d.cabinH * 0.46, pillarZ);

  // Mirrors.
  const mirrorX = d.width * 0.53;
  const mirrorY = bodyTop + d.cabinH * 0.54;
  const mirrorZ = d.cabinZ + d.cabinL * 0.31;
  addMesh(body, new RoundedBoxGeometry(0.22, 0.1, 0.14, 2, 0.03), mats.paint, mirrorX, mirrorY, mirrorZ);
  addMesh(body, new RoundedBoxGeometry(0.22, 0.1, 0.14, 2, 0.03), mats.paint, -mirrorX, mirrorY, mirrorZ);
  addMesh(body, new THREE.BoxGeometry(0.1, 0.04, 0.08), mats.trim, mirrorX, mirrorY, mirrorZ + 0.07);
  addMesh(body, new THREE.BoxGeometry(0.1, 0.04, 0.08), mats.trim, -mirrorX, mirrorY, mirrorZ + 0.07);

  // Front bumper, splitter and grille.
  addMesh(body, new THREE.BoxGeometry(d.width * 0.96, 0.18, 0.16), mats.trim, 0, bodyBottom + 0.12, d.length / 2 - 0.03);
  addMesh(body, new THREE.BoxGeometry(d.width * 1.01, 0.055, 0.34), mats.trim, 0, bodyBottom - 0.01, d.length / 2 - 0.02);
  addMesh(body, new THREE.BoxGeometry(d.width * 0.46, 0.16, 0.04), mats.trim, 0, bodyBottom + 0.32, d.length / 2 + 0.045);
  addMesh(body, new THREE.BoxGeometry(d.width * 0.42, 0.03, 0.05), mats.accent, 0, bodyBottom + 0.45, d.length / 2 + 0.05);

  // Rear bumper and diffuser.
  addMesh(body, new THREE.BoxGeometry(d.width * 0.94, 0.17, 0.15), mats.trim, 0, bodyBottom + 0.12, -d.length / 2 + 0.02);
  addMesh(body, new THREE.BoxGeometry(d.width * 0.72, 0.09, 0.24), mats.trim, 0, bodyBottom - 0.005, -d.length / 2 + 0.02);
  for (let i = -2; i <= 2; i++) {
    addMesh(body, new THREE.BoxGeometry(0.025, 0.08, 0.22), mats.accent, i * d.width * 0.11, bodyBottom + 0.005, -d.length / 2 - 0.02);
  }

  // Side skirts and door line.
  for (const side of [-1, 1]) {
    addMesh(body, new THREE.BoxGeometry(0.06, 0.1, d.length * 0.62), mats.trim, side * (d.width / 2 - 0.01), bodyBottom + 0.045, -d.length * 0.01);
    addMesh(body, new THREE.BoxGeometry(0.012, 0.015, d.length * 0.44), mats.accent, side * (d.width / 2 + 0.005), bodyTop - 0.08, -d.length * 0.02);
  }

  // Headlights.
  const lampY = bodyTop - 0.07;
  const lampZ = d.length / 2 - 0.005;
  if (config.type === 'classic') {
    for (const side of [-1, 1]) {
      addMesh(body, new THREE.CylinderGeometry(0.14, 0.14, 0.055, 12), mats.headlight, side * d.width * 0.32, lampY, lampZ, Math.PI / 2);
      addMesh(body, new THREE.CylinderGeometry(0.175, 0.175, 0.025, 12), mats.trim, side * d.width * 0.32, lampY, lampZ - 0.02, Math.PI / 2);
    }
  } else if (config.type === 'ev') {
    addMesh(body, new RoundedBoxGeometry(d.width * 0.7, 0.075, 0.045, 2, 0.02), mats.headlight, 0, lampY, lampZ);
    addMesh(body, new RoundedBoxGeometry(d.width * 0.55, 0.04, 0.045, 2, 0.015), mats.trim, 0, bodyBottom + 0.24, lampZ + 0.005);
  } else {
    for (const side of [-1, 1]) {
      addMesh(body, new RoundedBoxGeometry(0.38, 0.1, 0.06, 2, 0.025), mats.headlight, side * d.width * 0.31, lampY, lampZ);
      addMesh(body, new THREE.BoxGeometry(0.43, 0.035, 0.03), mats.trim, side * d.width * 0.31, lampY + 0.07, lampZ + 0.01);
    }
  }
  // Taillights.
  const tailZ = -d.length / 2 + 0.005;
  if (config.type === 'ev') {
    addMesh(body, new RoundedBoxGeometry(d.width * 0.62, 0.06, 0.045, 2, 0.02), mats.taillight, 0, bodyTop - 0.08, tailZ);
  } else {
    for (const side of [-1, 1]) {
      addMesh(body, new RoundedBoxGeometry(0.34, 0.09, 0.05, 2, 0.02), mats.taillight, side * d.width * 0.33, bodyTop - 0.08, tailZ);
    }
  }
  addMesh(body, new THREE.BoxGeometry(d.width * 0.36, 0.055, 0.02), mats.trim, 0, bodyTop - 0.2, tailZ - 0.01);

  // Exhausts.
  for (const side of [-1, 1]) {
    addMesh(body, new THREE.CylinderGeometry(0.065, 0.07, 0.18, 8), mats.trim, side * d.width * 0.27, bodyBottom + 0.02, -d.length / 2 - 0.06, Math.PI / 2);
  }

  // Type-specific details.
  if (d.wing > 0.1) {
    const wingY = bodyTop + d.wing;
    addMesh(body, new THREE.BoxGeometry(d.width * 0.86, 0.055, 0.33), mats.paint, 0, wingY, -d.length / 2 + 0.16, -0.08);
    addMesh(body, new THREE.BoxGeometry(0.055, d.wing, 0.14), mats.trim, -d.width * 0.32, bodyTop + d.wing * 0.52, -d.length / 2 + 0.16);
    addMesh(body, new THREE.BoxGeometry(0.055, d.wing, 0.14), mats.trim, d.width * 0.32, bodyTop + d.wing * 0.52, -d.length / 2 + 0.16);
    addMesh(body, new THREE.BoxGeometry(d.width * 0.9, 0.025, 0.1), mats.accent, 0, wingY + 0.04, -d.length / 2 + 0.16);
  }
  if (config.type === 'muscle') {
    addMesh(body, new RoundedBoxGeometry(0.62, 0.13, 0.75, 2, 0.05), mats.trim, 0, bodyTop + 0.01, d.length * 0.22);
    addMesh(body, new THREE.BoxGeometry(0.4, 0.02, 0.05), mats.accent, 0, bodyTop + 0.08, d.length * 0.3);
    for (const side of [-1, 1]) addMesh(body, new THREE.BoxGeometry(0.26, 0.02, 0.02), mats.accent, side * 0.36, bodyTop + 0.06, d.length * 0.3);
  }
  if (config.type === 'rally' || config.type === 'suv') {
    const railY = bodyTop + d.cabinH + 0.08;
    for (const side of [-1, 1]) {
      addMesh(body, new THREE.BoxGeometry(0.045, 0.06, d.cabinL * 0.55), mats.trim, side * d.width * 0.28, railY, d.cabinZ);
      addMesh(body, new THREE.BoxGeometry(0.045, 0.09, 0.045), mats.trim, side * d.width * 0.28, railY - 0.06, d.cabinZ + d.cabinL * 0.24);
      addMesh(body, new THREE.BoxGeometry(0.045, 0.09, 0.045), mats.trim, side * d.width * 0.28, railY - 0.06, d.cabinZ - d.cabinL * 0.24);
    }
    if (config.type === 'rally') {
      addMesh(body, new RoundedBoxGeometry(d.width * 0.5, 0.1, 0.17, 2, 0.03), mats.trim, 0, bodyTop + d.cabinH + 0.14, d.cabinZ + d.cabinL * 0.4);
      for (let i = -1; i <= 1; i++) {
        addMesh(body, new THREE.CylinderGeometry(0.055, 0.055, 0.035, 10), mats.headlight, i * 0.19, bodyTop + d.cabinH + 0.15, d.cabinZ + d.cabinL * 0.48, Math.PI / 2);
      }
    }
  }
  if (config.type === 'truck') {
    const bedY = bodyTop + 0.01;
    addMesh(body, new THREE.BoxGeometry(d.width * 0.88, 0.05, d.length * 0.48), mats.trim, 0, bedY, -d.length * 0.23);
    for (const side of [-1, 1]) {
      addMesh(body, new THREE.BoxGeometry(0.08, 0.36, d.length * 0.48), mats.paint, side * d.width * 0.44, bedY + 0.18, -d.length * 0.23);
    }
    addMesh(body, new THREE.BoxGeometry(d.width * 0.88, 0.34, 0.08), mats.paint, 0, bedY + 0.17, -d.length * 0.47);
    addMesh(body, new THREE.BoxGeometry(d.width * 0.72, 0.025, 0.04), mats.accent, 0, bedY + 0.36, -d.length * 0.48);
    addMesh(body, new THREE.BoxGeometry(0.16, 0.16, 0.16), mats.trim, -d.width * 0.28, bodyTop + 0.2, d.cabinZ + 0.45);
    addMesh(body, new THREE.BoxGeometry(0.16, 0.16, 0.16), mats.trim, d.width * 0.28, bodyTop + 0.2, d.cabinZ + 0.45);
  }
  if (config.type === 'classic') {
    addMesh(body, new THREE.BoxGeometry(d.width * 0.9, 0.05, 0.2), mats.accent, 0, bodyTop + 0.015, -d.length / 2 + 0.2);
    for (const side of [-1, 1]) {
      addMesh(body, new THREE.BoxGeometry(0.03, d.bodyH * 0.6, d.length * 0.9), mats.accent, side * (d.width / 2 + 0.012), bodyY + 0.02, 0);
    }
  }
  if (config.type === 'jdm' || config.type === 'super' || config.type === 'hyper') {
    addMesh(body, new THREE.BoxGeometry(d.width * 0.11, 0.012, d.length * 0.72), mats.accent, 0, bodyTop + 0.012, -d.length * 0.02);
  }

  // Wheel assemblies.
  const wheels = [];
  const axleX = d.track / 2;
  const wheelZ = d.wheelbase / 2;
  for (let i = 0; i < 4; i++) {
    const front = i < 2;
    const side = i % 2 === 0 ? -1 : 1;
    const steer = new THREE.Group();
    steer.position.set(side * axleX, wheelY, front ? wheelZ : -wheelZ);
    const spin = new THREE.Group();
    steer.add(spin);
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(d.wheelR, d.wheelR, 0.28, 14), mats.rubber);
    tire.rotation.z = Math.PI / 2;
    tire.castShadow = true;
    spin.add(tire);
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(d.wheelR * 0.62, d.wheelR * 0.62, 0.3, 10), mats.rim);
    rim.rotation.z = Math.PI / 2;
    spin.add(rim);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(d.wheelR * 0.2, d.wheelR * 0.2, 0.32, 8), mats.trim);
    hub.rotation.z = Math.PI / 2;
    spin.add(hub);
    for (let s = 0; s < 5; s++) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.035, d.wheelR * 0.9, 0.06), mats.rim);
      spoke.rotation.x = (s / 5) * TAU;
      spoke.position.x = side * 0.145;
      spin.add(spoke);
    }
    const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.14, 0.1), mats.accent);
    caliper.position.set(side * 0.13, 0.02, 0);
    spin.add(caliper);
    root.add(steer);
    wheels.push({ steer, spin, front, side, radius: d.wheelR });
  }

  const headlightMat = mats.headlight;
  const taillightMat = mats.taillight;
  let spotlights = [];
  if (player) {
    for (const side of [-1, 1]) {
      const spot = new THREE.SpotLight(0xfff0c9, 0, 105, Math.PI / 6.5, 0.55, 1.25);
      spot.position.set(side * d.width * 0.31, lampY, d.length / 2 + 0.1);
      spot.target.position.set(side * d.width * 0.55, -0.4, d.length / 2 + 28);
      root.add(spot);
      root.add(spot.target);
      spotlights.push(spot);
    }
  }

  root.userData = {
    lean,
    body,
    wheels,
    dims: d,
    headlightMat,
    taillightMat,
    spotlights,
    config,
  };
  return root;
}

export class Vehicle {
  constructor(scene, config, world) {
    this.scene = scene;
    this.config = config;
    this.world = world;
    this.group = buildCarModel(config, { player: true });
    scene.add(this.group);
    this.dims = this.group.userData.dims;
    this.bodyLean = this.group.userData.lean;
    this.wheels = this.group.userData.wheels;
    this.headlightMat = this.group.userData.headlightMat;
    this.taillightMat = this.group.userData.taillightMat;
    this.spotlights = this.group.userData.spotlights;

    this.position = new THREE.Vector3();
    this.velocity = new THREE.Vector3();
    this.forward = new THREE.Vector3(0, 0, 1);
    this.right = new THREE.Vector3(1, 0, 0);
    this.yaw = 0;
    this.yawRate = 0;
    this.steer = 0;
    this.throttle = 0;
    this.brake = 0;
    this.handbrake = 0;
    this.verticalVelocity = 0;
    this.airborne = false;
    this.justLanded = 0;
    this.onRoad = true;
    this.surfaceGrip = 1;
    this.speed = 0;
    this.speedKmh = 0;
    this.longitudinalSpeed = 0;
    this.lateralSpeed = 0;
    this.accel = 0;
    this.gear = 'N';
    this.rpm = 900;
    this.wheelSpin = 0;
    this.slip = 0;
    this.braking = false;
    this.drifting = false;
    this.distance = 0;
    this.leanPitch = 0;
    this.leanRoll = 0;
    this.landImpact = 0;
    this.boost = 0;
    this.headlightLevel = 0;
  }

  spawn(x, z, yaw = 0, y = null) {
    const ground = y ?? this.world.heightAt(x, z);
    this.position.set(x, ground + 0.03, z);
    this.velocity.set(0, 0, 0);
    this.yaw = yaw;
    this.yawRate = 0;
    this.verticalVelocity = 0;
    this.airborne = false;
    this.steer = 0;
    this.throttle = 0;
    this.brake = 0;
    this.handbrake = 0;
    this.wheelSpin = 0;
    this.syncVisual(0);
  }

  resetToRoad() {
    const p = this.position;
    let best = null;
    let bestDist = Infinity;
    for (const sample of this.world.roadSamples) {
      const d = (sample.x - p.x) ** 2 + (sample.z - p.z) ** 2;
      if (d < bestDist) {
        bestDist = d;
        best = sample;
      }
    }
    if (best) {
      const yaw = Math.atan2(best.tx, best.tz);
      this.spawn(best.x, best.z, yaw, this.world.heightAt(best.x, best.z));
      return true;
    }
    return false;
  }

  setNight(level) {
    this.headlightLevel = level;
    const on = level > 0.32;
    for (const spot of this.spotlights) spot.intensity = on ? 150 : 0;
    this.headlightMat.emissiveIntensity = on ? 3.4 : 1.5;
  }

  update(dt, input, timeOfDay = 12) {
    const topSpeed = this.config.topSpeed / 3.6;
    const stats = this.config.stats;
    const drive = this.config.drive;

    this.steer = damp(this.steer, input.steer, 8.5, dt);
    this.throttle = damp(this.throttle, input.throttle, 11, dt);
    this.brake = damp(this.brake, input.brake, 13, dt);
    this.handbrake = damp(this.handbrake, input.handbrake ? 1 : 0, 12, dt);

    this.forward.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    this.right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    let vLong = this.velocity.dot(this.forward);
    let vLat = this.velocity.dot(this.right);

    const surface = this.world.surfaceAt(this.position.x, this.position.z);
    this.onRoad = surface.onRoad;
    this.surfaceGrip = surface.grip;
    const speedAbs = Math.abs(vLong);
    const speedRatio = clamp(speedAbs / topSpeed, 0, 1.08);

    // Engine and brake.
    let driveAccel = 0;
    if (!this.airborne) {
      const baseAccel = 3.2 + (stats.accel / 100) * 9.6;
      const powerCurve = clamp(1 - Math.pow(clamp(speedRatio, 0, 1), 1.8), 0.02, 1);
      if (this.throttle > 0.01) {
        if (vLong < -0.8) {
          driveAccel = this.throttle * 24;
        } else {
          driveAccel = this.throttle * baseAccel * powerCurve * (drive === 'AWD' || drive === '4WD' ? 1.06 : 0.98);
        }
      }
      if (this.brake > 0.01) {
        if (vLong > 0.7) {
          driveAccel -= this.brake * (24 + stats.grip * 0.07);
        } else if (this.throttle < 0.01) {
          driveAccel -= this.brake * 6.5 * clamp(1 - Math.abs(vLong) / 13, 0, 1);
        }
      }
      if (this.handbrake > 0.1) {
        driveAccel -= Math.sign(vLong) * this.handbrake * 15 * clamp(speedAbs / 6, 0, 1);
      }
      if (this.throttle < 0.01 && this.brake < 0.01) {
        vLong *= Math.exp(-0.6 * dt);
      }
      // Off-road resistance.
      if (!this.onRoad) vLong *= Math.exp(-0.42 * dt);
    }

    vLong += driveAccel * dt;
    // Drag and rolling resistance.
    vLong -= Math.sign(vLong) * (0.16 + speedAbs * 0.0035) * dt;
    vLong -= vLong * Math.abs(vLong) * 0.00075 * dt;
    if (Math.abs(vLong) > topSpeed * 1.05) vLong = Math.sign(vLong) * topSpeed * 1.05;

    // Lateral grip. Handbrake and loose surfaces let the rear step out.
    const gripStat = stats.grip / 100;
    const gripFactor = (0.58 + gripStat * 0.62) * surface.grip;
    const latDamp = this.airborne ? 0.15 : this.handbrake > 0.2 ? 1.1 : 5.5 + gripFactor * 5.5;
    vLat *= Math.exp(-latDamp * dt);

    this.lateralSpeed = vLat;
    this.longitudinalSpeed = vLong;

    // Yaw / steering.
    if (!this.airborne) {
      const steerScale = (0.34 + 0.66 * gripFactor) * (this.onRoad ? 1 : 0.72);
      const speedSteer = lerp(1.55, 0.48, clamp(speedAbs / topSpeed, 0, 1)) * steerScale;
      const turnEngage = smoothstep(0.6, 6.5, speedAbs);
      const driftBoost = this.handbrake > 0.2 ? 1.48 : (drive === 'RWD' && this.throttle > 0.7 && speedAbs > 11 ? 1.12 : 1);
      const targetYawRate = this.steer * speedSteer * turnEngage * driftBoost;
      this.yawRate = damp(this.yawRate, targetYawRate, this.handbrake > 0.2 ? 3.4 : 7.2, dt);
    } else {
      this.yawRate = damp(this.yawRate, this.steer * 0.35, 1.3, dt);
    }
    this.yaw += this.yawRate * dt;
    this.forward.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    this.right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    this.velocity.copy(this.forward).multiplyScalar(vLong).addScaledVector(this.right, vLat);

    // Gravity along the ground slope.
    if (!this.airborne) {
      const e = 1.4;
      const hx = (this.world.heightAt(this.position.x + e, this.position.z) - this.world.heightAt(this.position.x - e, this.position.z)) / (2 * e);
      const hz = (this.world.heightAt(this.position.x, this.position.z + e) - this.world.heightAt(this.position.x, this.position.z - e)) / (2 * e);
      this.velocity.x -= hx * 9.81 * dt * 0.62;
      this.velocity.z -= hz * 9.81 * dt * 0.62;
    }

    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;

    const hit = this.world.resolveVehicle(this.position, this.velocity, 1.15);
    if (hit) {
      this.velocity.multiplyScalar(0.72);
      this.yawRate *= 0.6;
    }

    // Vertical movement and suspension.
    const f = this.forward;
    const r = this.right;
    const halfBase = this.dims.wheelbase / 2;
    const halfTrack = this.dims.track / 2;
    const frontY = this.world.heightAt(this.position.x + f.x * halfBase, this.position.z + f.z * halfBase);
    const rearY = this.world.heightAt(this.position.x - f.x * halfBase, this.position.z - f.z * halfBase);
    const rightY = this.world.heightAt(this.position.x + r.x * halfTrack, this.position.z + r.z * halfTrack);
    const leftY = this.world.heightAt(this.position.x - r.x * halfTrack, this.position.z - r.z * halfTrack);
    const targetY = (frontY + rearY + rightY + leftY) * 0.25;
    const groundPitch = -Math.atan2(frontY - rearY, this.dims.wheelbase);
    const groundRoll = Math.atan2(rightY - leftY, this.dims.track);

    this.justLanded = 0;
    if (!this.airborne) {
      const gap = this.position.y - targetY;
      if (gap > 0.52 && speedAbs > 7) {
        this.airborne = true;
        this.verticalVelocity = -Math.min(2.5, gap);
      } else {
        const previousY = this.position.y;
        this.position.y = damp(this.position.y, targetY, 18, dt);
        this.verticalVelocity = (this.position.y - previousY) / Math.max(dt, 0.0001);
      }
    }
    if (this.airborne) {
      this.verticalVelocity -= 25 * dt;
      this.position.y += this.verticalVelocity * dt;
      if (this.position.y <= targetY) {
        this.landImpact = Math.abs(this.verticalVelocity);
        this.position.y = targetY;
        this.verticalVelocity = 0;
        this.airborne = false;
        this.justLanded = this.landImpact;
        if (this.landImpact > 6) this.velocity.multiplyScalar(0.86);
      }
    }

    // Smooth orientation to the terrain.
    const targetPitch = this.airborne ? -clamp(this.verticalVelocity * 0.012, -0.15, 0.15) : groundPitch;
    const targetRoll = this.airborne ? this.yawRate * 0.08 : groundRoll;
    this.groundPitch = damp(this.groundPitch || 0, targetPitch, 10, dt);
    this.groundRoll = damp(this.groundRoll || 0, targetRoll, 10, dt);

    this.speed = this.velocity.length();
    this.speedKmh = this.speed * 3.6;
    this.accel = driveAccel;
    this.slip = Math.abs(vLat) + Math.abs(this.yawRate) * Math.min(speedAbs, 25) * 0.12;
    this.drifting = !this.airborne && this.slip > 3.4 && this.speedKmh > 24;
    this.braking = this.brake > 0.15 || this.handbrake > 0.2;

    // Gearbox and RPM.
    const ratio = clamp(this.speedKmh / this.config.topSpeed, 0, 1);
    if (this.speedKmh < 1.5 && this.throttle < 0.1) {
      this.gear = 'N';
      this.rpm = 800 + this.throttle * 900;
    } else if (vLong < -0.5) {
      this.gear = 'R';
      this.rpm = 1000 + Math.abs(ratio) * 3600;
    } else {
      const g = clamp(Math.floor(ratio * 6) + 1, 1, 6);
      const lower = (g - 1) / 6;
      const upper = g / 6;
      const local = clamp((ratio - lower) / Math.max(0.01, upper - lower), 0, 1);
      this.gear = String(g);
      this.rpm = 1200 + local * 5400 + this.throttle * 280;
    }

    // Wheel spin and steering.
    this.wheelSpin += (vLong / Math.max(0.2, this.dims.wheelR)) * dt;
    for (const wheel of this.wheels) {
      wheel.spin.rotation.x = this.wheelSpin;
      if (wheel.front) wheel.steer.rotation.y = -this.steer * 0.48;
    }

    // Weight transfer and body motion.
    const latG = this.yawRate * vLong;
    const leanRollTarget = clamp(latG * 0.012, -0.075, 0.075) * (this.airborne ? 0 : 1);
    const leanPitchTarget = clamp(-driveAccel * 0.0065, -0.055, 0.055) * (this.airborne ? 0 : 1);
    this.leanRoll = damp(this.leanRoll, leanRollTarget, 7, dt);
    this.leanPitch = damp(this.leanPitch, leanPitchTarget, 7, dt);
    const bob = this.airborne ? 0 : Math.sin(this.position.x * 0.24 + this.position.z * 0.19) * 0.008 * clamp(this.speed / 18, 0, 1);
    this.bodyLean.position.y = this.dims.wheelR * 0.62 + bob;
    this.bodyLean.rotation.x = this.leanPitch;
    this.bodyLean.rotation.z = this.leanRoll;

    // Brake lights.
    this.taillightMat.emissiveIntensity = this.braking ? 3.4 : (this.headlightLevel > 0.32 ? 1.6 : 1.1);

    // Headlights respond to time of day.
    this.setNight(this.headlightLevel);

    this.distance += this.speed * dt;
    this.syncVisual(dt);
  }

  syncVisual() {
    this.group.position.copy(this.position);
    this.group.rotation.order = 'YXZ';
    this.group.rotation.set(this.groundPitch || 0, this.yaw, this.groundRoll || 0);
  }
}

export class AICar {
  constructor(scene, config, path, distance, lane = 0, speed = 26, world) {
    this.scene = scene;
    this.config = config;
    this.path = path;
    this.world = world;
    this.distance = distance;
    this.totalDistance = distance;
    this.lane = lane;
    this.baseSpeed = speed;
    this.speed = speed;
    this.finishTime = null;
    this.group = buildCarModel(config, { player: false });
    this.group.traverse((o) => {
      if (o.isMesh) o.castShadow = true;
    });
    scene.add(this.group);
    this.wheels = this.group.userData.wheels;
    this.wheelSpin = 0;
    this.finished = false;
    this.place = 1;
    this.sync(0);
  }

  update(dt) {
    if (this.finished) return;
    this.speed = damp(this.speed, this.baseSpeed, 1.8, dt);
    this.distance += this.speed * dt;
    this.totalDistance += this.speed * dt;
    if (this.path.closed) {
      this.distance %= this.path.length;
    } else if (this.distance >= this.path.length) {
      this.distance = this.path.length;
      this.finished = true;
    }
    this.wheelSpin += (this.speed / 0.36) * dt;
    for (const w of this.wheels) w.spin.rotation.x = this.wheelSpin;
    this.sync(dt);
  }

  sync(dt) {
    const s = this.path.sample(this.distance);
    const x = s.x + s.rx * this.lane;
    const z = s.z + s.rz * this.lane;
    const y = this.world.heightAt(x, z);
    this.group.position.set(x, y, z);
    const yaw = Math.atan2(s.tx, s.tz);
    this.group.rotation.order = 'YXZ';
    const ahead = this.path.sample(this.distance + 8);
    const slope = Math.atan2(this.world.heightAt(ahead.x, ahead.z) - y, 8);
    this.group.rotation.set(-slope * 0.8, yaw, Math.sin(this.distance * 0.02) * 0.012);
    if (dt > 0) {
      this.group.position.y += Math.sin(this.distance * 0.7) * 0.006;
    }
  }
}

export function makeTrafficCar(scene, config, path, distance, speed, lane, world) {
  const car = new AICar(scene, config, path, distance, lane, speed, world);
  car.group.traverse((o) => {
    if (o.isMesh) o.castShadow = true;
  });
  return car;
}
