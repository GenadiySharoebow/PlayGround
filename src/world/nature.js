import * as THREE from 'three';
import { CITY, FESTIVAL, LAKE, WATER_LEVEL } from '../config.js';
import { clamp, fbm, mulberry32, TAU, makeCanvas } from '../utils.js';
import { makeCloudTexture, makeGlowTexture, makeSignTexture } from './textures.js';

function matrixAt(x, y, z, scale, rotY) {
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
  m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(scale, scale, scale));
  return m;
}

export function buildNature(world) {
  buildTrees(world);
  buildRocks(world);
  buildFarms(world);
  buildTurbines(world);
  buildLakeProps(world);
  buildClouds(world);
  buildBalloons(world);
  buildBlimp(world);
}

function buildTrees(world) {
  const rand = mulberry32(512);
  const target = world.quality.trees || 620;
  const trees = [];
  let attempts = 0;
  while (trees.length < target && attempts < target * 9) {
    attempts++;
    const x = (rand() - 0.5) * 3600;
    const z = (rand() - 0.5) * 3600;
    const cityD = Math.hypot(x - CITY.x, z - CITY.z);
    const festD = Math.hypot(x - FESTIVAL.x, z - FESTIVAL.z);
    if (cityD < CITY.radius + 25 || festD < 265) continue;
    const road = world.sampleRoadField(x, z);
    if (road.dist < 17) continue;
    const y = world.heightAt(x, z);
    if (y < 3.4 || y > 82) continue;
    if (world.slopeAt(x, z) > 0.58) continue;
    const density = fbm(x * 0.00125 + 2, z * 0.00125 - 1, 3, 5);
    if (rand() > 0.18 + density * 1.3) continue;
    const lakeD = Math.hypot(x - LAKE.x, z - LAKE.z);
    if (lakeD < LAKE.radius + 18) continue;
    trees.push({
      x, y, z,
      scale: 0.68 + rand() * 0.85,
      rot: rand() * TAU,
      type: rand() > 0.3 ? 'pine' : 'oak',
      shade: rand(),
    });
  }

  const pines = trees.filter((t) => t.type === 'pine');
  const oaks = trees.filter((t) => t.type === 'oak');
  const trunkGeo = new THREE.CylinderGeometry(0.25, 0.44, 3.4, 5);
  trunkGeo.translate(0, 1.7, 0);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a4432, roughness: 1 });
  const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, trees.length);
  trunkMesh.castShadow = world.quality.shadows;
  trunkMesh.receiveShadow = true;
  const trunkColor = new THREE.Color();

  const pineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, flatShading: true });
  const pineGeo = new THREE.ConeGeometry(2.7, 6.4, 7);
  pineGeo.translate(0, 4.6, 0);
  const pineGeo2 = new THREE.ConeGeometry(1.9, 4.5, 7);
  pineGeo2.translate(0, 7.3, 0);
  const pineMesh = new THREE.InstancedMesh(pineGeo, pineMat, pines.length);
  const pineMesh2 = new THREE.InstancedMesh(pineGeo2, pineMat, pines.length);
  pineMesh.castShadow = world.quality.shadows;
  pineMesh2.castShadow = world.quality.shadows;
  pineMesh.receiveShadow = true;
  pineMesh2.receiveShadow = true;

  const oakMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.94, flatShading: true });
  const oakGeo = new THREE.IcosahedronGeometry(2.8, 0);
  oakGeo.translate(0, 5.3, 0);
  const oakMesh = new THREE.InstancedMesh(oakGeo, oakMat, oaks.length);
  oakMesh.castShadow = world.quality.shadows;
  oakMesh.receiveShadow = true;

  let ti = 0;
  let pi = 0;
  let oi = 0;
  const greenA = new THREE.Color(0x385b34);
  const greenB = new THREE.Color(0x4e733c);
  const greenC = new THREE.Color(0x2e4d33);
  for (const tree of trees) {
    const m = matrixAt(tree.x, tree.y, tree.z, tree.scale, tree.rot);
    trunkMesh.setMatrixAt(ti, m);
    trunkColor.setHex(0x5a4432).offsetHSL(0, 0, (tree.shade - 0.5) * 0.12);
    trunkMesh.setColorAt(ti, trunkColor);
    ti++;
    if (tree.type === 'pine') {
      pineMesh.setMatrixAt(pi, m);
      pineMesh2.setMatrixAt(pi, m);
      const c = greenA.clone().lerp(greenC, tree.shade);
      pineMesh.setColorAt(pi, c);
      pineMesh2.setColorAt(pi, c.clone().offsetHSL(0, 0.02, 0.03));
      pi++;
    } else {
      oakMesh.setMatrixAt(oi, m);
      const c = greenB.clone().lerp(greenA, tree.shade);
      oakMesh.setColorAt(oi, c);
      oi++;
    }
    world.addCircleCollider(tree.x, tree.z, 0.9 * tree.scale, 'tree');
  }
  trunkMesh.instanceMatrix.needsUpdate = true;
  pineMesh.instanceMatrix.needsUpdate = true;
  pineMesh2.instanceMatrix.needsUpdate = true;
  oakMesh.instanceMatrix.needsUpdate = true;
  trunkMesh.computeBoundingSphere();
  pineMesh.computeBoundingSphere();
  pineMesh2.computeBoundingSphere();
  oakMesh.computeBoundingSphere();
  world.scene.add(trunkMesh, pineMesh, pineMesh2, oakMesh);
  world.trees = trees;
}

function buildRocks(world) {
  const rand = mulberry32(228);
  const rocks = [];
  for (let i = 0; i < 210; i++) {
    const x = (rand() - 0.5) * 3700;
    const z = (rand() - 0.5) * 3700;
    if (Math.hypot(x - CITY.x, z - CITY.z) < CITY.radius + 10) continue;
    if (Math.hypot(x - FESTIVAL.x, z - FESTIVAL.z) < 240) continue;
    if (world.sampleRoadField(x, z).dist < 15) continue;
    const y = world.heightAt(x, z);
    if (y < 3) continue;
    rocks.push({ x, y, z, scale: 0.55 + rand() * 2.1, rot: rand() * TAU, shade: rand() });
  }
  const geo = new THREE.DodecahedronGeometry(1, 0);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true });
  const mesh = new THREE.InstancedMesh(geo, mat, rocks.length);
  mesh.castShadow = world.quality.shadows;
  mesh.receiveShadow = true;
  const c = new THREE.Color();
  rocks.forEach((rock, i) => {
    const m = matrixAt(rock.x, rock.y + rock.scale * 0.24, rock.z, rock.scale, rock.rot);
    mesh.setMatrixAt(i, m);
    c.setHex(0x6a675f).offsetHSL(0, 0, (rock.shade - 0.5) * 0.16);
    mesh.setColorAt(i, c);
    if (rock.scale > 1.5) world.addCircleCollider(rock.x, rock.z, rock.scale * 0.75, 'rock');
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.computeBoundingSphere();
  world.scene.add(mesh);

  // Low scrub to break up the grass.
  const bushes = [];
  for (let i = 0; i < 320; i++) {
    const x = (rand() - 0.5) * 3700;
    const z = (rand() - 0.5) * 3700;
    if (world.sampleRoadField(x, z).dist < 11) continue;
    if (Math.hypot(x - CITY.x, z - CITY.z) < CITY.radius) continue;
    const y = world.heightAt(x, z);
    if (y < 2.8) continue;
    bushes.push({ x, y, z, s: 0.5 + rand() * 1.1, rot: rand() * TAU, shade: rand() });
  }
  const bushGeo = new THREE.IcosahedronGeometry(0.85, 0);
  const bushMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true });
  const bushMesh = new THREE.InstancedMesh(bushGeo, bushMat, bushes.length);
  const bc = new THREE.Color();
  bushes.forEach((bush, i) => {
    bushMesh.setMatrixAt(i, matrixAt(bush.x, bush.y + bush.s * 0.45, bush.z, bush.s, bush.rot));
    bc.setHex(0x4b653a).offsetHSL(0, 0, (bush.shade - 0.5) * 0.15);
    bushMesh.setColorAt(i, bc);
  });
  bushMesh.instanceMatrix.needsUpdate = true;
  bushMesh.computeBoundingSphere();
  world.scene.add(bushMesh);
}

function buildFarms(world) {
  const rand = mulberry32(711);
  const farms = [
    [-920, 220, 0.7], [-1110, 470, -0.4], [-740, -250, 1.3],
    [-1260, -180, 2.1], [420, 880, -0.7], [1030, 780, 1.8],
  ];
  const red = new THREE.MeshStandardMaterial({ color: 0x7f2d25, roughness: 0.9 });
  const cream = new THREE.MeshStandardMaterial({ color: 0xb8aa8a, roughness: 0.94 });
  const roof = new THREE.MeshStandardMaterial({ color: 0x2f3135, roughness: 0.8, metalness: 0.22 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x5a4432, roughness: 1 });
  for (const [x, z, yaw] of farms) {
    if (world.sampleRoadField(x, z).dist < 25) continue;
    const y = world.heightAt(x, z);
    const group = new THREE.Group();
    group.position.set(x, y, z);
    group.rotation.y = yaw;
    const w = 15;
    const h = 7;
    const d = 11;
    const barn = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), red);
    barn.position.y = h / 2;
    barn.castShadow = true;
    barn.receiveShadow = true;
    group.add(barn);
    // Gabled roof.
    const roofA = new THREE.Mesh(new THREE.BoxGeometry(w * 0.6, 0.45, d + 1.4), roof);
    roofA.position.set(-w * 0.24, h + 1.3, 0);
    roofA.rotation.z = 0.52;
    group.add(roofA);
    const roofB = roofA.clone();
    roofB.position.x = w * 0.24;
    roofB.rotation.z = -0.52;
    group.add(roofB);
    const door = new THREE.Mesh(new THREE.BoxGeometry(4.2, 4.8, 0.2), wood);
    door.position.set(0, 2.4, d / 2 + 0.1);
    group.add(door);
    // Silo.
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.4, 11, 10), cream);
    silo.position.set(w * 0.8, 5.5, -2);
    silo.castShadow = true;
    group.add(silo);
    const siloTop = new THREE.Mesh(new THREE.ConeGeometry(2.4, 2.2, 10), roof);
    siloTop.position.set(w * 0.8, 12.1, -2);
    group.add(siloTop);
    world.scene.add(group);
    world.addBoxCollider(x, z, w / 2, d / 2, 'building');

    // Fence paddock.
    const fenceMat = new THREE.MeshStandardMaterial({ color: 0x7a6850, roughness: 1 });
    for (let side = 0; side < 4; side++) {
      const len = 34;
      for (let i = 0; i < 7; i++) {
        const t = i / 6 - 0.5;
        const px = side < 2 ? t * len : (side === 2 ? -len / 2 : len / 2);
        const pz = side < 2 ? (side === 0 ? -len / 2 : len / 2) : t * len;
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.5, 0.2), fenceMat);
        post.position.set(px + (rand() - 0.5) * 0.3, 0.75, pz);
        group.add(post);
      }
    }
    // Hay bales.
    for (let i = 0; i < 3; i++) {
      const bale = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 1.8, 10), new THREE.MeshStandardMaterial({ color: 0xb69755, roughness: 1 }));
      bale.rotation.z = Math.PI / 2;
      bale.position.set(-w * 0.65 + rand() * 3, 1.2, 7 + rand() * 2);
      group.add(bale);
    }
  }
}

function buildTurbines(world) {
  const positions = [
    [-1140, 980], [-820, 1220], [280, 1280], [980, 1200], [1450, 620],
    [1280, -120], [-1460, -640], [-980, -1180],
  ];
  const white = new THREE.MeshStandardMaterial({ color: 0xe8e8e2, roughness: 0.6, metalness: 0.25 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x262a2e, roughness: 0.5, metalness: 0.5 });
  for (const [x, z] of positions) {
    const y = world.heightAt(x, z);
    if (y < 8) continue;
    const group = new THREE.Group();
    group.position.set(x, y, z);
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.8, 52, 7), white);
    tower.position.y = 26;
    tower.castShadow = true;
    group.add(tower);
    const nacelle = new THREE.Mesh(new THREE.BoxGeometry(4.5, 2.4, 2.2), white);
    nacelle.position.y = 52.5;
    group.add(nacelle);
    const blades = new THREE.Group();
    blades.position.set(0, 52.5, 2.2);
    for (let i = 0; i < 3; i++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.75, 25, 0.28), white);
      blade.position.y = 12.5;
      blade.rotation.z = (i / 3) * TAU;
      const holder = new THREE.Group();
      holder.rotation.z = (i / 3) * TAU;
      holder.add(blade);
      blades.add(holder);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 1.2, 10), dark);
    hub.rotation.x = Math.PI / 2;
    hub.position.z = 0.2;
    blades.add(hub);
    group.add(blades);
    world.scene.add(group);
    world.turbines.push({ group, blades, speed: 0.28 + Math.random() * 0.2 });
    world.addCircleCollider(x, z, 2, 'turbine');
  }
}

function buildLakeProps(world) {
  const wood = new THREE.MeshStandardMaterial({ color: 0x6b5138, roughness: 0.96 });
  const darkWood = new THREE.MeshStandardMaterial({ color: 0x3f3024, roughness: 1 });
  // Dock on the eastern shore, reaching toward the lake centre.
  const shoreX = LAKE.x + LAKE.radius - 4;
  const shoreZ = LAKE.z + 16;
  const ground = world.heightAt(shoreX, shoreZ);
  const dock = new THREE.Group();
  dock.position.set(shoreX, Math.max(WATER_LEVEL + 0.25, ground + 0.12), shoreZ);
  dock.rotation.y = Math.PI / 2;
  for (let i = 0; i < 12; i++) {
    const plank = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.16, 2.3), i % 2 ? wood : darkWood);
    plank.position.set(0, 0.1, -i * 2.35);
    plank.castShadow = true;
    dock.add(plank);
  }
  for (const side of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 3.2, 6), darkWood);
      post.position.set(side * 1.5, -1.2, -i * 5.2);
      dock.add(post);
    }
  }
  world.scene.add(dock);

  // Little sailboats.
  const hullMat = new THREE.MeshStandardMaterial({ color: 0xe8e4d8, roughness: 0.6 });
  const hullMat2 = new THREE.MeshStandardMaterial({ color: 0xff5a2a, roughness: 0.7 });
  const sailMat = new THREE.MeshStandardMaterial({ color: 0xf2efe4, roughness: 0.8, side: THREE.DoubleSide });
  for (let i = 0; i < 4; i++) {
    const a = i * 1.7 + 0.5;
    const r = 90 + i * 52;
    const boat = new THREE.Group();
    boat.position.set(LAKE.x + Math.cos(a) * r, WATER_LEVEL + 0.25, LAKE.z + Math.sin(a) * r);
    boat.rotation.y = a + 0.8;
    const hull = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.1, 2.1), i % 2 ? hullMat : hullMat2);
    hull.position.y = 0.4;
    boat.add(hull);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 8, 5), darkWood);
    mast.position.y = 4.6;
    boat.add(mast);
    const sail = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 5.4), sailMat);
    sail.position.set(1.2, 5.1, 0);
    sail.rotation.y = Math.PI / 2;
    boat.add(sail);
    boat.userData.baseY = boat.position.y;
    boat.userData.bob = 0.12;
    boat.userData.bobSpeed = 0.8 + i * 0.17;
    boat.userData.phase = i * 1.4;
    world.scene.add(boat);
    world.boats.push(boat);
    world.animated.push(boat);
  }

  // Reeds at the shoreline.
  const reedGeo = new THREE.ConeGeometry(0.08, 1.8, 4);
  const reedMat = new THREE.MeshStandardMaterial({ color: 0x6f7a3b, roughness: 1 });
  const reedMesh = new THREE.InstancedMesh(reedGeo, reedMat, 160);
  for (let i = 0; i < 160; i++) {
    const a = i * 2.399;
    const r = LAKE.radius - 8 + Math.sin(i) * 6;
    const x = LAKE.x + Math.cos(a) * r;
    const z = LAKE.z + Math.sin(a) * r;
    const y = world.heightAt(x, z);
    reedMesh.setMatrixAt(i, matrixAt(x, y + 0.9, z, 0.8 + (i % 5) * 0.08, a));
  }
  reedMesh.instanceMatrix.needsUpdate = true;
  world.scene.add(reedMesh);
}

function buildClouds(world) {
  const texture = makeCloudTexture();
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.36,
    depthWrite: false,
    fog: false,
  });
  const rand = mulberry32(901);
  for (let i = 0; i < 22; i++) {
    const sprite = new THREE.Sprite(material.clone());
    sprite.position.set((rand() - 0.5) * 4200, 180 + rand() * 260, (rand() - 0.5) * 4200);
    const s = 250 + rand() * 420;
    sprite.scale.set(s, s * 0.42, 1);
    sprite.material.opacity = 0.18 + rand() * 0.28;
    sprite.userData.speed = 0.4 + rand() * 0.9;
    world.scene.add(sprite);
    world.clouds.push(sprite);
  }
}

function buildBalloons(world) {
  const colors = [0xff5a2a, 0xffbe3d, 0x6de7ff, 0xff6cc7];
  const rand = mulberry32(414);
  for (let i = 0; i < 4; i++) {
    const group = new THREE.Group();
    const x = -450 + i * 420 + rand() * 100;
    const z = 140 + rand() * 500;
    const y = 105 + rand() * 65;
    group.position.set(x, y, z);
    const color = colors[i % colors.length];
    const envelope = new THREE.Mesh(
      new THREE.SphereGeometry(14, 10, 8),
      new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.05 }),
    );
    envelope.scale.set(1, 1.25, 1);
    group.add(envelope);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(8.4, 10.6, 5, 10, 1, true), new THREE.MeshStandardMaterial({ color: 0x1c1d21, roughness: 0.7, side: THREE.DoubleSide }));
    band.position.y = -9.5;
    group.add(band);
    const basket = new THREE.Mesh(new THREE.BoxGeometry(3, 2.6, 3), new THREE.MeshStandardMaterial({ color: 0x5a4432, roughness: 1 }));
    basket.position.y = -15.2;
    group.add(basket);
    for (let l = 0; l < 4; l++) {
      const line = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 7, 3), new THREE.MeshStandardMaterial({ color: 0x2b2a26 }));
      line.position.set((l % 2 ? 1 : -1) * 1.2, -11.2, (l < 2 ? 1 : -1) * 1.2);
      line.rotation.z = (l % 2 ? 1 : -1) * 0.13;
      line.rotation.x = (l < 2 ? 1 : -1) * 0.13;
      group.add(line);
    }
    group.userData.baseY = y;
    group.userData.bob = 3.5;
    group.userData.bobSpeed = 0.24 + i * 0.06;
    group.userData.phase = i * 1.3;
    group.userData.spin = 0.015;
    group.userData.spinAxis = 'y';
    world.scene.add(group);
    world.balloons.push(group);
    world.animated.push(group);
  }
}

function buildBlimp(world) {
  const group = new THREE.Group();
  const y = 245;
  group.position.set(300, y, -300);
  const hull = new THREE.Mesh(
    new THREE.SphereGeometry(1, 14, 10),
    new THREE.MeshStandardMaterial({ color: 0xe9e6db, roughness: 0.55, metalness: 0.18 }),
  );
  hull.scale.set(56, 16, 16);
  group.add(hull);
  const gondola = new THREE.Mesh(new THREE.BoxGeometry(15, 4, 5), new THREE.MeshStandardMaterial({ color: 0x22252a, roughness: 0.6 }));
  gondola.position.set(0, -14, 0);
  group.add(gondola);
  const finMat = new THREE.MeshStandardMaterial({ color: 0xff5a2a, roughness: 0.65 });
  const finA = new THREE.Mesh(new THREE.BoxGeometry(0.8, 10, 10), finMat);
  finA.position.set(-49, 0, 0);
  group.add(finA);
  const finB = finA.clone();
  finB.rotation.x = Math.PI / 2;
  group.add(finB);
  const tex = makeSignTexture('HORIZON', '#ff5a2a', 'AIR TOUR');
  const signMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide, toneMapped: false });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(34, 12.7), signMat);
  sign.position.set(0, 0, 15.8);
  group.add(sign);
  group.userData.baseY = y;
  group.userData.bob = 4;
  group.userData.bobSpeed = 0.16;
  group.userData.phase = 2;
  group.userData.orbit = { cx: 200, cz: -180, radius: 780, speed: 0.018, phase: 0.5 };
  world.scene.add(group);
  world.animated.push(group);
}
