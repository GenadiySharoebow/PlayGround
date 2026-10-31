import * as THREE from 'three';
import { FESTIVAL } from '../config.js';
import { makeBannerTexture, makeCheckeredTexture, makeGlowTexture, makeHorizonScreenTexture } from './textures.js';

function mesh(parent, geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

export function buildFestival(world) {
  const { scene } = world;
  const group = new THREE.Group();
  group.name = 'festival';
  scene.add(group);

  const ground = world.heightAt(FESTIVAL.x, FESTIVAL.z);
  const dark = new THREE.MeshStandardMaterial({ color: 0x111318, roughness: 0.72, metalness: 0.35 });
  const black = new THREE.MeshStandardMaterial({ color: 0x07080a, roughness: 0.88 });
  const concrete = new THREE.MeshStandardMaterial({ color: 0x53534f, roughness: 0.92 });
  const orange = new THREE.MeshStandardMaterial({ color: 0xff5a2a, emissive: 0xff3b13, emissiveIntensity: 0.35, roughness: 0.5 });
  const amber = new THREE.MeshStandardMaterial({ color: 0xffbe3d, emissive: 0xff8a1a, emissiveIntensity: 0.4, roughness: 0.5 });
  const cyan = new THREE.MeshStandardMaterial({ color: 0x6de7ff, emissive: 0x28c8e8, emissiveIntensity: 0.55, roughness: 0.35 });
  const fabricRed = new THREE.MeshStandardMaterial({ color: 0x9c251c, roughness: 0.88, side: THREE.DoubleSide });
  const fabricCream = new THREE.MeshStandardMaterial({ color: 0xd7c5a1, roughness: 0.9, side: THREE.DoubleSide });

  // Rotating display plinth.
  const plinthTop = ground + 0.72;
  mesh(group, new THREE.CylinderGeometry(17, 18.2, 0.72, 48), dark, 0, ground + 0.36, 10);
  mesh(group, new THREE.TorusGeometry(16.4, 0.14, 4, 64), amber, 0, ground + 0.74, 10, Math.PI / 2);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffbe3d, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(10.8, 11.1, 64), ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(0, plinthTop + 0.02, 10);
  group.add(ring);
  world.menuSpawn = { x: 0, y: plinthTop + 0.02, z: 10, yaw: 0.42 };

  // Showcase lighting so the menu car reads clearly against the dusk sky.
  const showcaseKey = new THREE.PointLight(0xffd3a1, 48, 58, 1.7);
  showcaseKey.position.set(0, ground + 9.5, 18);
  group.add(showcaseKey);
  const showcaseRim = new THREE.PointLight(0x6de7ff, 22, 42, 1.8);
  showcaseRim.position.set(14, ground + 4.5, 4);
  group.add(showcaseRim);
  const showcaseWarm = new THREE.PointLight(0xff7a30, 16, 36, 1.8);
  showcaseWarm.position.set(-13, ground + 3, 15);
  group.add(showcaseWarm);

  // Main stage.
  const stageZ = -58;
  mesh(group, new THREE.BoxGeometry(46, 1.4, 20), black, 0, ground + 0.7, stageZ);
  mesh(group, new THREE.BoxGeometry(42, 0.16, 16), concrete, 0, ground + 1.46, stageZ + 1);
  for (const side of [-1, 1]) {
    mesh(group, new THREE.BoxGeometry(1.4, 15, 1.4), dark, side * 21, ground + 8.2, stageZ - 9);
    mesh(group, new THREE.BoxGeometry(1.4, 15, 1.4), dark, side * 21, ground + 8.2, stageZ + 9);
  }
  mesh(group, new THREE.BoxGeometry(46, 1.2, 22), dark, 0, ground + 16, stageZ);
  mesh(group, new THREE.BoxGeometry(42, 0.25, 18), black, 0, ground + 15.3, stageZ);
  const screenTexture = makeHorizonScreenTexture();
  const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture, toneMapped: false });
  const screen = mesh(group, new THREE.PlaneGeometry(30, 10.5), screenMat, 0, ground + 9.2, stageZ + 9.15);
  screen.castShadow = false;
  mesh(group, new THREE.BoxGeometry(31, 11.5, 0.6), black, 0, ground + 9.2, stageZ + 8.8);
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      mesh(group, new THREE.BoxGeometry(2.4, 3.1, 2.1), black, side * (16.8 + i * 1.5), ground + 3.2, stageZ + 6.8 - i * 2.2);
      mesh(group, new THREE.CylinderGeometry(0.55, 0.55, 0.15, 10), dark, side * (16.8 + i * 1.5), ground + 4.1, stageZ + 7.9 - i * 2.2, Math.PI / 2);
    }
  }
  // Stage light bars.
  for (let i = 0; i < 6; i++) {
    const x = -16 + i * 6.4;
    mesh(group, new THREE.BoxGeometry(3.2, 0.45, 0.8), dark, x, ground + 14.4, stageZ + 8.5);
    for (let j = -1; j <= 1; j++) {
      mesh(group, new THREE.CylinderGeometry(0.3, 0.3, 0.3, 8), j === 0 ? amber : orange, x + j * 1.05, ground + 14.1, stageZ + 8.5, Math.PI / 2);
    }
  }
  const stageLightA = new THREE.PointLight(0xff7a30, 30, 95, 1.7);
  stageLightA.position.set(-12, ground + 9, stageZ + 14);
  group.add(stageLightA);
  const stageLightB = new THREE.PointLight(0x6de7ff, 24, 90, 1.7);
  stageLightB.position.set(13, ground + 8, stageZ + 15);
  group.add(stageLightB);
  const stageLightC = new THREE.PointLight(0xffbe3d, 18, 70, 1.7);
  stageLightC.position.set(0, ground + 3, stageZ + 13);
  group.add(stageLightC);

  // Festival towers.
  for (const [x, z] of [[-42, 24], [42, 24], [-48, -18], [48, -18]]) {
    const tower = new THREE.Group();
    tower.position.set(x, ground, z);
    mesh(tower, new THREE.CylinderGeometry(0.35, 0.6, 17, 5), dark, 0, 8.5, 0);
    mesh(tower, new THREE.BoxGeometry(3.2, 0.4, 1.2), dark, 0, 17.1, 0);
    for (let i = -1; i <= 1; i++) mesh(tower, new THREE.CylinderGeometry(0.24, 0.24, 0.26, 8), amber, i * 1.05, 16.8, 0.45, Math.PI / 2);
    group.add(tower);
    world.addCircleCollider(x, z, 0.8, 'tower');
  }

  // Tents.
  const tentPositions = [
    [-68, 54, fabricRed], [64, 60, fabricCream], [-72, -8, fabricCream],
    [72, -6, fabricRed], [-94, 90, fabricRed], [92, 92, fabricCream],
  ];
  for (const [x, z, fabric] of tentPositions) {
    const y = world.heightAt(x, z);
    const tent = new THREE.Group();
    tent.position.set(x, y, z);
    mesh(tent, new THREE.BoxGeometry(13, 0.25, 10), concrete, 0, 0.12, 0);
    mesh(tent, new THREE.ConeGeometry(8.6, 5.2, 4), fabric, 0, 5.4, 0, 0, Math.PI / 4);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) mesh(tent, new THREE.CylinderGeometry(0.12, 0.12, 4.2, 5), dark, sx * 5.4, 2.1, sz * 4.1);
    group.add(tent);
  }

  // Barrier fence around the plinth.
  const barrierMat = new THREE.MeshStandardMaterial({ color: 0xb8b9b5, roughness: 0.55, metalness: 0.55 });
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    const x = Math.cos(a) * 24;
    const z = 10 + Math.sin(a) * 24;
    if (z < -7) continue;
    const barrier = new THREE.Group();
    barrier.position.set(x, world.heightAt(x, z), z);
    barrier.rotation.y = -a;
    mesh(barrier, new THREE.BoxGeometry(4.2, 0.12, 0.08), barrierMat, 0, 1.05, 0);
    mesh(barrier, new THREE.BoxGeometry(4.2, 0.08, 0.08), barrierMat, 0, 0.55, 0);
    mesh(barrier, new THREE.BoxGeometry(0.08, 1.2, 0.08), barrierMat, -2, 0.6, 0);
    mesh(barrier, new THREE.BoxGeometry(0.08, 1.2, 0.08), barrierMat, 2, 0.6, 0);
    group.add(barrier);
  }

  // Flags.
  const flagMatA = new THREE.MeshStandardMaterial({ color: 0xff5a2a, side: THREE.DoubleSide, roughness: 0.7 });
  const flagMatB = new THREE.MeshStandardMaterial({ color: 0xffbe3d, side: THREE.DoubleSide, roughness: 0.7 });
  for (let i = 0; i < 14; i++) {
    const x = -100 + i * 15.4;
    const z = 140 - Math.abs(i - 7) * 8;
    const y = world.heightAt(x, z);
    const pole = new THREE.Group();
    pole.position.set(x, y, z);
    mesh(pole, new THREE.CylinderGeometry(0.07, 0.09, 8, 5), barrierMat, 0, 4, 0);
    const flag = mesh(pole, new THREE.PlaneGeometry(2.8, 1.4), i % 2 ? flagMatA : flagMatB, 1.35, 7.2, 0);
    flag.castShadow = false;
    pole.userData.baseY = y;
    group.add(pole);
    world.flags.push(flag);
  }

  // Start / finish gate on the circuit.
  buildStartGate(world, group);

  // A few low fences along the festival approach.
  for (const side of [-1, 1]) {
    for (let i = 0; i < 10; i++) {
      const x = side * (30 + i * 7.5);
      const z = 138 + i * 4;
      const y = world.heightAt(x, z);
      const fence = new THREE.Group();
      fence.position.set(x, y, z);
      fence.rotation.y = side * 0.2;
      mesh(fence, new THREE.BoxGeometry(7.6, 0.12, 0.08), barrierMat, 0, 1, 0);
      mesh(fence, new THREE.BoxGeometry(0.08, 1.1, 0.08), barrierMat, -3.7, 0.55, 0);
      mesh(fence, new THREE.BoxGeometry(0.08, 1.1, 0.08), barrierMat, 3.7, 0.55, 0);
      group.add(fence);
    }
  }
}

function buildStartGate(world, parent) {
  const path = world.roadPaths.find((p) => p.id === 'circuit');
  if (!path) return;
  const sample = path.samples[0];
  const yaw = Math.atan2(sample.tx, sample.tz);
  const ground = world.heightAt(sample.x, sample.z);
  const group = new THREE.Group();
  group.position.set(sample.x, ground, sample.z);
  group.rotation.y = yaw;
  parent.add(group);

  const metal = new THREE.MeshStandardMaterial({ color: 0x1a1d22, roughness: 0.5, metalness: 0.65 });
  const white = new THREE.MeshStandardMaterial({ color: 0xf2eee3, roughness: 0.7 });
  const banner = new THREE.MeshBasicMaterial({ map: makeBannerTexture('START / FINISH', 'HORIZON CIRCUIT'), toneMapped: false });
  for (const side of [-1, 1]) {
    mesh(group, new THREE.BoxGeometry(1.1, 11, 1.1), metal, side * 13.5, 5.5, 0);
    mesh(group, new THREE.BoxGeometry(2.2, 0.3, 2.2), metal, side * 13.5, 0.15, 0);
  }
  mesh(group, new THREE.BoxGeometry(29, 3.6, 0.35), metal, 0, 10, 0);
  const plane = mesh(group, new THREE.PlaneGeometry(28, 3.3), banner, 0, 10, 0.2);
  plane.castShadow = false;

  const check = new THREE.MeshBasicMaterial({ map: makeCheckeredTexture(), toneMapped: false });
  const line = new THREE.Mesh(new THREE.PlaneGeometry(path.width, 3.2), check);
  line.rotation.x = -Math.PI / 2;
  line.position.set(0, 0.08, 0);
  group.add(line);

  // Finish gate glow.
  const glowTex = makeGlowTexture('rgba(255,190,61,1)', 'rgba(255,90,42,0)');
  const glowMat = new THREE.SpriteMaterial({ map: glowTex, transparent: true, opacity: 0.34, blending: THREE.AdditiveBlending, depthWrite: false });
  for (const side of [-1, 1]) {
    const sprite = new THREE.Sprite(glowMat);
    sprite.scale.set(6, 6, 1);
    sprite.position.set(side * 13.5, 5.5, 0.5);
    group.add(sprite);
  }
  world.startGate = { x: sample.x, z: sample.z, yaw };
}
