import * as THREE from 'three';
import { CITY } from '../config.js';
import { mulberry32 } from '../utils.js';
import { makeSignTexture, makeWindowTextures } from './textures.js';

export function buildCity(world) {
  const { scene } = world;
  const group = new THREE.Group();
  group.name = 'apex-city';
  scene.add(group);
  const rand = mulberry32(881);

  const variants = [
    makeWindowTextures(12, 0xffc477),
    makeWindowTextures(42, 0x9edcff),
    makeWindowTextures(77, 0xff8f67),
    makeWindowTextures(109, 0xffe3a1),
  ];
  const materials = variants.map(({ map, glow }) => {
    const mat = new THREE.MeshStandardMaterial({
      map,
      emissiveMap: glow,
      emissive: 0xffffff,
      emissiveIntensity: 0.12,
      roughness: 0.72,
      metalness: 0.22,
    });
    world.cityMaterials.push(mat);
    return mat;
  });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x22262b, roughness: 0.84, metalness: 0.3 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x14171b, roughness: 0.6, metalness: 0.55 });
  const neonColors = ['#6de7ff', '#ff5a2a', '#ffbe3d', '#c8ff45', '#ff6cc7'];
  const signTexts = ['HORIZON', 'APEX', 'NITRO', 'NIGHT', 'VOLT', 'GARAGE', 'MOTOR', 'SUSHI'];

  const columns = [824, 958, 1092, 1226];
  const rows = [-552, -700, -848, -996];
  for (let iz = 0; iz < rows.length; iz++) {
    for (let ix = 0; ix < columns.length; ix++) {
      const bx = columns[ix] + (rand() - 0.5) * 12;
      const bz = rows[iz] + (rand() - 0.5) * 12;
      const road = world.sampleRoadField(bx, bz);
      if (road.dist < 24) continue;
      const tower = rand() > 0.78;
      const height = tower ? 72 + rand() * 58 : 14 + rand() * 32;
      const width = tower ? 25 + rand() * 15 : 35 + rand() * 22;
      const depth = tower ? 25 + rand() * 15 : 35 + rand() * 22;
      const ground = world.heightAt(bx, bz);
      const mat = materials[Math.floor(rand() * materials.length)];
      const building = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), mat);
      building.position.set(bx, ground + height / 2, bz);
      building.castShadow = true;
      building.receiveShadow = true;
      group.add(building);

      const cap = new THREE.Mesh(new THREE.BoxGeometry(width + 1.2, 1.2, depth + 1.2), roofMat);
      cap.position.set(bx, ground + height + 0.6, bz);
      cap.castShadow = true;
      group.add(cap);

      if (height > 30) {
        const box = new THREE.Mesh(new THREE.BoxGeometry(width * 0.35, 3.2, depth * 0.35), darkMetal);
        box.position.set(bx + (rand() - 0.5) * width * 0.25, ground + height + 2.3, bz + (rand() - 0.5) * depth * 0.25);
        group.add(box);
      }
      if (height > 70) {
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.35, 14, 5), darkMetal);
        mast.position.set(bx, ground + height + 9, bz);
        group.add(mast);
        const beacon = new THREE.Mesh(
          new THREE.SphereGeometry(0.5, 6, 4),
          new THREE.MeshStandardMaterial({ color: 0xff3311, emissive: 0xff2200, emissiveIntensity: 4 }),
        );
        beacon.position.set(bx, ground + height + 16.2, bz);
        beacon.userData.nightOnly = false;
        group.add(beacon);
      }

      if (rand() > 0.52) {
        const signText = signTexts[Math.floor(rand() * signTexts.length)];
        const signColor = neonColors[Math.floor(rand() * neonColors.length)];
        const tex = makeSignTexture(signText, signColor, 'APEX CITY');
        const signMat = new THREE.MeshStandardMaterial({
          map: tex,
          emissiveMap: tex,
          emissive: 0xffffff,
          emissiveIntensity: 0.3,
          transparent: true,
          roughness: 0.4,
          side: THREE.DoubleSide,
        });
        world.signMaterials.push(signMat);
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(tower ? 9 : 7, tower ? 3.6 : 2.8), signMat);
        const side = rand() > 0.5 ? 1 : -1;
        sign.position.set(bx + side * (width / 2 + 0.08), ground + Math.min(height * 0.62, 27), bz);
        sign.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
        group.add(sign);
      }

      if (rand() > 0.68 && height < 45) {
        const awning = new THREE.Mesh(
          new THREE.BoxGeometry(width * 0.72, 0.22, 2.2),
          new THREE.MeshStandardMaterial({ color: rand() > 0.5 ? 0xff5a2a : 0x6de7ff, roughness: 0.65 }),
        );
        awning.position.set(bx, ground + 4, bz + depth / 2 + 1.2);
        awning.rotation.x = 0.08;
        group.add(awning);
      }

      world.addBoxCollider(bx, bz, width / 2, depth / 2, 'building');
    }
  }

  // City entrance sign, aimed at the approach road.
  const entranceX = 930;
  const entranceZ = -382;
  const ground = world.heightAt(entranceX, entranceZ);
  const tex = makeSignTexture('APEX CITY', '#ffbe3d', 'DISTRICT 01 · NIGHT LIFE');
  const signMat = new THREE.MeshStandardMaterial({
    map: tex,
    emissiveMap: tex,
    emissive: 0xffffff,
    emissiveIntensity: 0.55,
    transparent: true,
    roughness: 0.4,
    side: THREE.DoubleSide,
  });
  world.signMaterials.push(signMat);
  const entrance = new THREE.Group();
  entrance.position.set(entranceX, ground, entranceZ);
  entrance.rotation.y = Math.PI * 0.72;
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(20, 7.5), signMat);
  sign.position.y = 11;
  entrance.add(sign);
  for (const side of [-1, 1]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 14, 6), darkMetal);
    pole.position.set(side * 9.5, 7, 0);
    pole.castShadow = true;
    entrance.add(pole);
  }
  group.add(entrance);

  // A low neon strip under the overpass-like edge of the city.
  const stripMat = new THREE.MeshStandardMaterial({ color: 0x6de7ff, emissive: 0x6de7ff, emissiveIntensity: 1.5, roughness: 0.3 });
  world.signMaterials.push(stripMat);
  const strip = new THREE.Mesh(new THREE.BoxGeometry(3, 0.12, 160), stripMat);
  strip.position.set(744, world.heightAt(744, -790) + 7, -790);
  group.add(strip);
}
