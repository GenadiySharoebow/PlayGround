import * as THREE from 'three';
import { CARS, EVENTS } from '../config.js';
import { AICar } from '../vehicle.js';
import { clamp, mulberry32, TAU } from '../utils.js';
import { makeBoardTexture, makeGlowTexture, makeSignTexture } from './textures.js';

export function buildRoadside(world) {
  buildBillboards(world);
  buildStreetLights(world);
  buildCollectibles(world);
  buildBeacons(world);
  buildTraffic(world);
}

function buildBillboards(world) {
  const signs = [
    ['HORIZON', '#ff5a2a', 'APEX FESTIVAL · SEASON 01'],
    ['NO LIMITS', '#ffbe3d', 'OPEN ROAD'],
    ['VOLT', '#6de7ff', 'ELECTRIC PERFORMANCE'],
    ['TERRA', '#c8ff45', 'BUILT FOR THE WILD'],
    ['APEX', '#ff6cc7', 'DRIVE THE EXTRAORDINARY'],
  ];
  const positions = [
    [180, -335, -0.55], [-410, -190, 1.2], [610, 245, -2.25],
    [-720, 300, 0.6], [1110, -390, 1.9], [-1010, -560, -1.1],
  ];
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x1a1d21, roughness: 0.6, metalness: 0.55 });
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x34373c, roughness: 0.55, metalness: 0.55 });
  positions.forEach(([x, z, yaw], i) => {
    if (world.sampleRoadField(x, z).dist < 18) return;
    const [text, color, sub] = signs[i % signs.length];
    const y = world.heightAt(x, z);
    const group = new THREE.Group();
    group.position.set(x, y, z);
    group.rotation.y = yaw;
    const tex = makeSignTexture(text, color, sub);
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      emissiveMap: tex,
      emissive: 0xffffff,
      emissiveIntensity: 0.3,
      roughness: 0.4,
      side: THREE.DoubleSide,
    });
    world.signMaterials.push(mat);
    const board = new THREE.Mesh(new THREE.PlaneGeometry(16, 6), mat);
    board.position.y = 12;
    group.add(board);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(17, 7, 0.6), frameMat);
    frame.position.set(0, 12, -0.4);
    frame.castShadow = true;
    group.add(frame);
    for (const side of [-1, 1]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.34, 10, 6), poleMat);
      pole.position.set(side * 5.5, 5, 0);
      pole.castShadow = true;
      group.add(pole);
    }
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTexture('rgba(255,255,255,.8)', 'rgba(255,90,42,0)'),
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }));
    glow.scale.set(22, 11, 1);
    glow.position.set(0, 12, 0.8);
    glow.userData.nightOnly = true;
    group.add(glow);
    world.animated.push(glow);
    world.scene.add(group);
    world.addCircleCollider(x, z, 1.1, 'billboard');
  });
}

function buildStreetLights(world) {
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x2e3236, roughness: 0.55, metalness: 0.65 });
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xffd79a, emissive: 0xffb15c, emissiveIntensity: 1.8, roughness: 0.3 });
  const glowTex = makeGlowTexture('rgba(255,220,160,1)', 'rgba(255,140,40,0)');
  const poolMat = new THREE.MeshBasicMaterial({
    color: 0xffb15c,
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const roads = world.roadPaths.filter((p) => ['circuit', 'city-loop', 'city-link', 'highway'].includes(p.id));
  for (const path of roads) {
    const step = path.kind === 'highway' ? 26 : 18;
    for (let i = 4; i < path.samples.length; i += step) {
      const s = path.samples[i];
      const x = s.x + s.rx * (s.width / 2 + 2.2);
      const z = s.z + s.rz * (s.width / 2 + 2.2);
      const y = world.heightAt(x, z);
      if (y < 2) continue;
      const group = new THREE.Group();
      group.position.set(x, y, z);
      group.rotation.y = Math.atan2(s.tx, s.tz);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.17, 7.2, 5), poleMat);
      pole.position.y = 3.6;
      group.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.13, 0.13), poleMat);
      arm.position.set(-0.95, 7.2, 0);
      group.add(arm);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.16, 0.38), lampMat);
      lamp.position.set(-1.8, 7.08, 0);
      group.add(lamp);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }));
      glow.scale.set(5.2, 5.2, 1);
      glow.position.set(-1.8, 7.0, 0);
      glow.userData.nightOnly = true;
      group.add(glow);
      world.animated.push(glow);
      const pool = new THREE.Mesh(new THREE.CircleGeometry(5.4, 20), poolMat);
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(-1.8, 0.12, 0);
      pool.visible = false;
      group.add(pool);
      world.lightPools.push(pool);
      world.scene.add(group);
    }
  }
}

function buildCollectibles(world) {
  const boardTex = makeBoardTexture();
  const boardMat = new THREE.MeshStandardMaterial({
    map: boardTex,
    emissiveMap: boardTex,
    emissive: 0x6de7ff,
    emissiveIntensity: 1.1,
    roughness: 0.35,
    metalness: 0.2,
    side: THREE.DoubleSide,
  });
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x0a1a20, roughness: 0.5, metalness: 0.7 });
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x273b42, roughness: 0.45, metalness: 0.7 });
  const glowTex = makeGlowTexture('rgba(109,231,255,1)', 'rgba(0,150,255,0)');
  const roads = world.roadPaths.filter((p) => p.kind !== 'street');
  const picks = [];
  let seed = 0;
  for (const path of roads) {
    const count = Math.max(1, Math.floor(path.length / 1400));
    for (let i = 0; i < count; i++) {
      seed++;
      const d = ((i + 0.5) / count) * path.length + 210;
      picks.push({ path, d: d % path.length, side: seed % 2 ? 1 : -1 });
    }
  }
  picks.slice(0, 14).forEach((pick, i) => {
    const s = pick.path.sample(pick.d);
    const x = s.x + s.rx * (pick.side * 13);
    const z = s.z + s.rz * (pick.side * 13);
    const ground = world.heightAt(x, z);
    const group = new THREE.Group();
    group.position.set(x, ground + 2.9, z);
    group.rotation.y = Math.atan2(s.tx, s.tz) + Math.PI / 2;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 2.8, 5), poleMat);
    pole.position.y = -1.5;
    group.add(pole);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(3.0, 3.7, 0.16), frameMat);
    frame.position.y = 0.2;
    group.add(frame);
    const board = new THREE.Mesh(new THREE.PlaneGeometry(2.72, 3.42), boardMat);
    board.position.set(0, 0.2, 0.1);
    group.add(board);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }));
    glow.scale.set(7, 7, 1);
    glow.position.z = 0.2;
    group.add(glow);
    world.scene.add(group);
    world.smashables.push({
      group,
      glow,
      position: new THREE.Vector3(x, ground + 2.9, z),
      baseY: ground + 2.9,
      phase: i * 1.7,
      active: true,
    });
  });
}

function buildBeacons(world) {
  const colors = [0xff5a2a, 0x6de7ff, 0xffbe3d];
  EVENTS.forEach((event, index) => {
    const start = event.route[0];
    let x = start[0];
    let z = start[1];
    if (event.id === 'festival-circuit') {
      x = 0;
      z = -346;
    }
    const ground = world.heightAt(x, z);
    const color = colors[index % colors.length];
    const group = new THREE.Group();
    group.position.set(x, ground, z);
    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(4.5, 6.5, 22, 20, 1, true),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.14,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    cylinder.position.y = 11;
    group.add(cylinder);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(5.4, 0.16, 5, 32),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 1.1;
    group.add(ring);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTexture(`rgba(${index === 0 ? '255,120,60' : index === 1 ? '109,231,255' : '255,190,61'},1)`, 'rgba(0,0,0,0)'),
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }));
    glow.scale.set(16, 16, 1);
    glow.position.y = 6;
    group.add(glow);
    world.scene.add(group);
    world.beacons.push({ group, ring, event, phase: index * 1.4, position: new THREE.Vector3(x, ground, z) });
  });
}

function buildTraffic(world) {
  const rand = mulberry32(660);
  const closed = world.roadPaths.filter((p) => p.closed && p.kind !== 'street');
  const carPool = CARS.filter((c) => c.id !== 'apex');
  for (let i = 0; i < 7; i++) {
    const path = closed[Math.floor(rand() * closed.length)];
    const config = carPool[Math.floor(rand() * carPool.length)];
    const distance = rand() * path.length;
    const speed = 9 + rand() * 9;
    const lane = (rand() > 0.5 ? 1 : -1) * (2.4 + rand() * 2.2);
    const car = new AICar(world.scene, config, path, distance, lane, speed, world);
    car.group.traverse((obj) => {
      if (obj.isMesh) obj.castShadow = world.quality.shadows;
    });
    world.traffic.push(car);
  }
}
