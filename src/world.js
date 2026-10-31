import * as THREE from 'three';
import { CITY, EVENTS, FESTIVAL, LAKE, ROADS, WATER_LEVEL } from './config.js';
import { Path3D } from './path.js';
import {
  clamp, lerp, smoothstep, fbm, noise2, mulberry32, makeCanvas, TAU,
} from './utils.js';
import {
  makeAsphaltTexture, makeGlowTexture, makeStarfieldTexture,
} from './world/textures.js';
import { buildWorldProps } from './world/props.js';
import { buildWorldMap } from './world/map.js';

export const WORLD_SIZE = 4000;
export const WORLD_HALF = WORLD_SIZE / 2;
const FIELD_SIZE = 1024;

const SKY_VERTEX = `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 p = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * p;
  }
`;

const SKY_FRAGMENT = `
  varying vec3 vDir;
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uHaze;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  uniform float uNight;
  uniform float uTime;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
    float band = smoothstep(0.43, 0.66, h);
    vec3 col = mix(uHorizon, uTop, band);
    float low = 1.0 - smoothstep(0.42, 0.56, h);
    col = mix(col, uHaze, low * 0.68);
    float sunDot = max(dot(dir, normalize(uSunDir)), 0.0);
    float disk = pow(sunDot, 1450.0) * 3.2;
    float glow = pow(sunDot, 18.0) * 0.34 + pow(sunDot, 5.0) * 0.1;
    col += uSunColor * (disk + glow);
    // Warm horizon flare opposite the sun, giving the low-poly world some depth.
    float rim = pow(1.0 - abs(dir.y), 9.0) * 0.18;
    col += vec3(1.0, 0.36, 0.16) * rim;
    // Sparse stars, only after dusk.
    vec3 sdir = floor(dir * 430.0);
    float star = step(0.9982, hash(sdir.xy + sdir.z * 19.7));
    star *= smoothstep(0.48, 0.9, h) * uNight;
    col += vec3(0.82, 0.9, 1.0) * star * (0.7 + 0.3 * sin(uTime * 2.0 + hash(sdir.xy) * 8.0));
    gl_FragColor = vec4(col, 1.0);
  }
`;

const WATER_VERTEX = `
  uniform float uTime;
  varying vec3 vWorld;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.y += sin(p.x * 0.09 + uTime * 0.9) * 0.07 + sin(p.z * 0.13 - uTime * 0.7) * 0.05;
    vec4 wp = modelMatrix * vec4(p, 1.0);
    vWorld = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const WATER_FRAGMENT = `
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  uniform vec3 uCenter;
  varying vec3 vWorld;
  varying vec2 vUv;
  void main() {
    vec3 n = normalize(vec3(
      sin(vWorld.x * 0.11 + uTime * 0.8) * 0.045,
      1.0,
      cos(vWorld.z * 0.14 - uTime * 0.65) * 0.045
    ));
    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fres = pow(1.0 - max(dot(viewDir, n), 0.0), 2.4);
    vec3 col = mix(uDeep, uShallow, 0.35 + fres * 0.55);
    float spec = pow(max(dot(reflect(-normalize(uSunDir), n), viewDir), 0.0), 120.0);
    col += uSunColor * spec * 1.4;
    float d = length(vWorld.xz - uCenter.xz);
    float foam = smoothstep(312.0, 336.0, d) * (0.55 + 0.45 * sin(vWorld.x * 0.2 + uTime * 1.6));
    col = mix(col, vec3(0.8, 0.91, 0.9), foam * 0.25);
    gl_FragColor = vec4(col, 0.93);
  }
`;

export class World {
  constructor(scene, renderer, quality) {
    this.scene = scene;
    this.renderer = renderer;
    this.quality = quality;
    this.timeOfDay = 17.35;
    this.nightFactor = 0;
    this.roadPaths = [];
    this.roadSamples = [];
    this.colliders = [];
    this.colliderGrid = new Map();
    this.smashables = [];
    this.beacons = [];
    this.traffic = [];
    this.animated = [];
    this.lightPools = [];
    this.cityMaterials = [];
    this.signMaterials = [];
    this.clouds = [];
    this.balloons = [];
    this.boats = [];
    this.turbines = [];
    this.flags = [];
    this.time = 0;

    this.buildRoads();
    this.buildRoadField();
    this.buildTerrain();
    this.buildRoadMeshes();
    this.buildWater();
    this.buildSky();
    this.buildLights();
    this.setTime(this.timeOfDay);
    this.buildEnvironment();
    this.buildSunSprite();
    buildWorldProps(this);
    this.mapCanvas = buildWorldMap(this);
    this.updateNightVisuals();
  }

  rawHeight(x, z) {
    let h = 2.5 + (fbm(x * 0.00072 + 9.3, z * 0.00072 - 4.1, 5, 13) - 0.5) * 44;
    h += (fbm(x * 0.0027 - 2.2, z * 0.0027 + 7.8, 4, 42) - 0.5) * 8;
    h += (noise2(x * 0.014, z * 0.014, 7) - 0.5) * 1.2;

    const cityD = Math.hypot(x - CITY.x, z - CITY.z);
    const cityMask = 1 - smoothstep(CITY.radius * 0.68, CITY.radius, cityD);
    h = lerp(h, 10.4, cityMask * 0.95);

    const festivalD = Math.hypot(x - FESTIVAL.x, z - FESTIVAL.z);
    const festivalMask = 1 - smoothstep(FESTIVAL.radius * 0.42, FESTIVAL.radius, festivalD);
    h = lerp(h, 6.3, festivalMask * 0.97);

    const lakeD = Math.hypot(x - LAKE.x, z - LAKE.z) / LAKE.radius;
    if (lakeD < 1.34) {
      const lakeMask = 1 - smoothstep(0.58, 1.28, lakeD);
      const bed = -10 + lakeD * lakeD * 9;
      h = lerp(h, bed, lakeMask);
    }

    const edge = smoothstep(1260, 1940, Math.max(Math.abs(x), Math.abs(z)));
    h += edge * edge * (120 + fbm(x * 0.0018, z * 0.0018, 4, 61) * 165);
    const north = smoothstep(700, 1900, z) * smoothstep(0.2, 1, fbm(x * 0.0012, z * 0.0011, 4, 91));
    h += north * 24;
    return h;
  }

  buildRoads() {
    for (const road of ROADS) {
      const path = new Path3D(road.points, {
        closed: road.closed,
        spacing: road.kind === 'highway' ? 4.2 : 3.2,
        heightAt: (x, z) => this.rawHeight(x, z),
        smooth: road.kind === 'street' ? 3 : 7,
      });
      path.id = road.id;
      path.width = road.width;
      path.kind = road.kind;
      this.roadPaths.push(path);
      for (const sample of path.samples) {
        sample.width = road.width;
        sample.kind = road.kind;
        this.roadSamples.push(sample);
      }
    }
  }

  buildRoadField() {
    const field = {
      size: FIELD_SIZE,
      cell: WORLD_SIZE / FIELD_SIZE,
      dist: new Float32Array(FIELD_SIZE * FIELD_SIZE).fill(999),
      height: new Float32Array(FIELD_SIZE * FIELD_SIZE),
      width: new Float32Array(FIELD_SIZE * FIELD_SIZE),
    };
    const cell = field.cell;
    for (const road of this.roadPaths) {
      const radius = road.width / 2 + 52;
      const radiusCells = Math.ceil(radius / cell);
      for (const sample of road.samples) {
        const cx = Math.floor((sample.x + WORLD_HALF) / cell);
        const cz = Math.floor((sample.z + WORLD_HALF) / cell);
        for (let oz = -radiusCells; oz <= radiusCells; oz++) {
          const iz = cz + oz;
          if (iz < 0 || iz >= FIELD_SIZE) continue;
          const wz = -WORLD_HALF + (iz + 0.5) * cell;
          const dz = wz - sample.z;
          for (let ox = -radiusCells; ox <= radiusCells; ox++) {
            const ix = cx + ox;
            if (ix < 0 || ix >= FIELD_SIZE) continue;
            const wx = -WORLD_HALF + (ix + 0.5) * cell;
            const dx = wx - sample.x;
            const d = Math.hypot(dx, dz);
            if (d > radius) continue;
            const index = iz * FIELD_SIZE + ix;
            if (d < field.dist[index]) {
              field.dist[index] = d;
              field.height[index] = sample.y;
              field.width[index] = road.width;
            }
          }
        }
      }
    }
    this.roadField = field;
  }

  sampleRoadField(x, z) {
    const f = this.roadField;
    if (!f) return { dist: 999, height: 0, width: 0 };
    const ix = clamp(Math.floor((x + WORLD_HALF) / f.cell), 0, FIELD_SIZE - 1);
    const iz = clamp(Math.floor((z + WORLD_HALF) / f.cell), 0, FIELD_SIZE - 1);
    const index = iz * FIELD_SIZE + ix;
    return { dist: f.dist[index], height: f.height[index], width: f.width[index] };
  }

  heightAt(x, z) {
    const base = this.rawHeight(x, z);
    const road = this.sampleRoadField(x, z);
    if (road.dist < 54) {
      const blend = 1 - smoothstep(11, 54, road.dist);
      const roadY = Math.max(road.height, WATER_LEVEL + 1.2);
      return lerp(base, roadY, blend);
    }
    return base;
  }

  slopeAt(x, z) {
    const e = 2.5;
    const hx = (this.heightAt(x + e, z) - this.heightAt(x - e, z)) / (2 * e);
    const hz = (this.heightAt(x, z + e) - this.heightAt(x, z - e)) / (2 * e);
    return Math.hypot(hx, hz);
  }

  surfaceAt(x, z) {
    const road = this.sampleRoadField(x, z);
    if (road.dist < road.width / 2 + 1.2) return { type: 'asphalt', onRoad: true, grip: 1 };
    if (road.dist < road.width / 2 + 7) return { type: 'shoulder', onRoad: true, grip: 0.87 };
    const h = this.heightAt(x, z);
    if (h < WATER_LEVEL + 1.4) return { type: 'sand', onRoad: false, grip: 0.55 };
    const slope = this.slopeAt(x, z);
    if (slope > 0.62) return { type: 'rock', onRoad: false, grip: 0.52 };
    if (x > CITY.x - CITY.radius && x < CITY.x + CITY.radius && z > CITY.z - CITY.radius && z < CITY.z + CITY.radius) {
      return { type: 'city', onRoad: false, grip: 0.93 };
    }
    return { type: 'grass', onRoad: false, grip: 0.7 };
  }

  buildTerrain() {
    const segments = this.quality.terrainSegments || 300;
    const geometry = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, segments, segments);
    geometry.rotateX(-Math.PI / 2);
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const z = position.getZ(i);
      position.setY(i, this.heightAt(x, z));
    }
    geometry.computeVertexNormals();
    const normals = geometry.attributes.normal;
    const colors = new Float32Array(position.count * 3);
    const color = new THREE.Color();
    const grassA = new THREE.Color(0x5d7645);
    const grassB = new THREE.Color(0x7d8b4d);
    const grassC = new THREE.Color(0x4b673f);
    const dry = new THREE.Color(0x9c8b5e);
    const rock = new THREE.Color(0x706b62);
    const rockDark = new THREE.Color(0x4d4a47);
    const sand = new THREE.Color(0xbda77e);
    const cityGround = new THREE.Color(0x54584e);
    const snow = new THREE.Color(0xd8d9d2);
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const z = position.getZ(i);
      const y = position.getY(i);
      const n = noise2(x * 0.026 + 3, z * 0.026 - 1, 11);
      const n2 = noise2(x * 0.006, z * 0.006, 23);
      const slope = 1 - normals.getY(i);
      const road = this.sampleRoadField(x, z);
      if (road.dist < road.width / 2 + 8) {
        color.copy(rockDark).offsetHSL(0, 0, (n - 0.5) * 0.04);
      } else if (y < WATER_LEVEL + 2.2) {
        color.copy(sand).offsetHSL(0, (n - 0.5) * 0.06, (n2 - 0.5) * 0.08);
      } else if (slope > 0.34) {
        color.copy(rock).lerp(rockDark, clamp((slope - 0.34) * 1.4, 0, 1)).offsetHSL(0, 0, (n - 0.5) * 0.05);
      } else if (y > 92) {
        color.copy(snow).offsetHSL(0, 0, (n - 0.5) * 0.05);
      } else if (y > 48) {
        color.copy(rock).lerp(dry, 0.22 + n * 0.22).offsetHSL(0, 0, (n2 - 0.5) * 0.05);
      } else {
        color.copy(grassA).lerp(grassB, n2 * 0.9);
        if (n > 0.62) color.lerp(grassC, 0.45);
        if (y > 24) color.lerp(dry, smoothstep(24, 50, y) * 0.55);
        const cityD = Math.hypot(x - CITY.x, z - CITY.z);
        if (cityD < CITY.radius) color.lerp(cityGround, (1 - smoothstep(CITY.radius * 0.55, CITY.radius, cityD)) * 0.45);
      }
      const festivalD = Math.hypot(x - FESTIVAL.x, z - FESTIVAL.z);
      if (festivalD < FESTIVAL.radius && road.dist > road.width / 2 + 8) {
        color.lerp(new THREE.Color(0x687b48), (1 - smoothstep(80, FESTIVAL.radius, festivalD)) * 0.22);
      }
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.97,
      metalness: 0,
      flatShading: true,
    });
    this.terrain = new THREE.Mesh(geometry, material);
    this.terrain.receiveShadow = true;
    this.scene.add(this.terrain);
  }

  buildRoadMeshes() {
    const texture = makeAsphaltTexture();
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      color: 0xffffff,
      roughness: 0.88,
      metalness: 0.04,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    const shoulderMaterial = new THREE.MeshStandardMaterial({
      color: 0x635d4b,
      roughness: 1,
      transparent: true,
      opacity: 0.72,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    for (const path of this.roadPaths) {
      this.scene.add(this.makeRibbon(path, path.width, 0.05, material, true));
      this.scene.add(this.makeRibbon(path, path.width + 6, 0.02, shoulderMaterial, false));
    }
  }

  makeRibbon(path, width, lift, material, withUv) {
    const samples = path.samples;
    const count = samples.length;
    const vertices = [];
    const uvs = [];
    const indices = [];
    const half = width / 2;
    let v = 0;
    for (let i = 0; i < count; i++) {
      const s = samples[i];
      if (i > 0) {
        const prev = samples[i - 1];
        v += Math.hypot(s.x - prev.x, s.z - prev.z) / 18;
      }
      const y = this.heightAt(s.x, s.z) + lift;
      vertices.push(s.x + s.rx * half, y, s.z + s.rz * half);
      vertices.push(s.x - s.rx * half, y, s.z - s.rz * half);
      if (withUv) {
        uvs.push(1, v, 0, v);
      } else {
        uvs.push(1, v, 0, v);
      }
      if (i < count - 1) {
        const a = i * 2;
        indices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
      }
    }
    if (path.closed) {
      const a = (count - 1) * 2;
      indices.push(a, 0, a + 1, a + 1, 0, 1);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.renderOrder = withUv ? 2 : 1;
    return mesh;
  }

  buildWater() {
    const geometry = new THREE.CircleGeometry(LAKE.radius + 4, 80);
    geometry.rotateX(-Math.PI / 2);
    this.waterMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uDeep: { value: new THREE.Color(0x123d4b) },
        uShallow: { value: new THREE.Color(0x3f8890) },
        uSunColor: { value: new THREE.Color(0xffd7a0) },
        uSunDir: { value: new THREE.Vector3(0.4, 0.3, 0.2).normalize() },
        uCenter: { value: new THREE.Vector3(LAKE.x, 0, LAKE.z) },
      },
      vertexShader: WATER_VERTEX,
      fragmentShader: WATER_FRAGMENT,
      transparent: true,
      depthWrite: false,
    });
    this.water = new THREE.Mesh(geometry, this.waterMaterial);
    this.water.position.set(LAKE.x, WATER_LEVEL, LAKE.z);
    this.water.renderOrder = 3;
    this.scene.add(this.water);
  }

  buildSky() {
    const geometry = new THREE.SphereGeometry(6800, 32, 20);
    this.skyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTop: { value: new THREE.Color(0x2f67b6) },
        uHorizon: { value: new THREE.Color(0xf0b27c) },
        uHaze: { value: new THREE.Color(0xffc08a) },
        uSunColor: { value: new THREE.Color(0xffd6a0) },
        uSunDir: { value: new THREE.Vector3(0.4, 0.2, 0.3).normalize() },
        uNight: { value: 0 },
        uTime: { value: 0 },
      },
      vertexShader: SKY_VERTEX,
      fragmentShader: SKY_FRAGMENT,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this.sky = new THREE.Mesh(geometry, this.skyMaterial);
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -10;
    this.scene.add(this.sky);
    this.scene.fog = new THREE.FogExp2(0xd3a078, 0.00042);
  }

  buildLights() {
    this.hemi = new THREE.HemisphereLight(0xbfd4ff, 0x38402b, 0.75);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffc27a, 3.0);
    this.sun.castShadow = this.quality.shadows;
    this.sun.shadow.mapSize.set(this.quality.shadowSize, this.quality.shadowSize);
    this.sun.shadow.camera.left = -230;
    this.sun.shadow.camera.right = 230;
    this.sun.shadow.camera.top = 230;
    this.sun.shadow.camera.bottom = -230;
    this.sun.shadow.camera.near = 10;
    this.sun.shadow.camera.far = 1000;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.03;
    this.sun.target.position.set(0, 0, 0);
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);
    this.moon = new THREE.DirectionalLight(0x8aa8ff, 0.18);
    this.moon.position.set(-220, 360, 120);
    this.scene.add(this.moon);
  }

  setTime(time) {
    this.timeOfDay = time;
    const t = ((time % 24) + 24) % 24;
    const theta = (t / 24) * TAU - Math.PI / 2;
    const elevation = Math.sin(((t - 6) / 12) * Math.PI) * 0.98;
    const cosEl = Math.cos(elevation);
    this.sunDir = new THREE.Vector3(Math.cos(theta) * cosEl, Math.sin(elevation), Math.sin(theta) * cosEl).normalize();
    const day = smoothstep(-0.06, 0.22, this.sunDir.y);
    const sunset = (1 - smoothstep(0.03, 0.4, Math.abs(this.sunDir.y))) * smoothstep(-0.08, 0.06, this.sunDir.y);
    const night = 1 - smoothstep(-0.07, 0.2, this.sunDir.y);
    this.nightFactor = night;
    this.dayFactor = day;

    const topNight = new THREE.Color(0x020716);
    const topDay = new THREE.Color(0x2c66b6);
    const topDusk = new THREE.Color(0x273c76);
    const horNight = new THREE.Color(0x0b1730);
    const horDay = new THREE.Color(0xb9d5e2);
    const horDusk = new THREE.Color(0xff9357);
    const hazeNight = new THREE.Color(0x0d1930);
    const hazeDay = new THREE.Color(0xc5dce0);
    const hazeDusk = new THREE.Color(0xffad78);
    const top = topNight.clone().lerp(topDay, day).lerp(topDusk, sunset * 0.5);
    const horizon = horNight.clone().lerp(horDay, day).lerp(horDusk, sunset * 0.92);
    const haze = hazeNight.clone().lerp(hazeDay, day).lerp(hazeDusk, sunset * 0.95);
    const sunColor = new THREE.Color(0xfff0cf).lerp(new THREE.Color(0xff6b2f), sunset).lerp(new THREE.Color(0x6f8dff), night * 0.75);

    this.skyMaterial.uniforms.uTop.value.copy(top);
    this.skyMaterial.uniforms.uHorizon.value.copy(horizon);
    this.skyMaterial.uniforms.uHaze.value.copy(haze);
    this.skyMaterial.uniforms.uSunColor.value.copy(sunColor);
    this.skyMaterial.uniforms.uSunDir.value.copy(this.sunDir);
    this.skyMaterial.uniforms.uNight.value = night;

    this.scene.fog.color.copy(horizon).lerp(haze, 0.4).multiplyScalar(0.78 + day * 0.18);
    this.scene.fog.density = 0.00042 + night * 0.00018;

    this.sun.color.copy(new THREE.Color(0xfff2dc).lerp(new THREE.Color(0xff9b55), sunset * 0.9));
    this.sun.intensity = 0.15 + day * 3.25 + sunset * 0.6;
    this.sun.visible = this.sunDir.y > -0.08;
    this.hemi.intensity = 0.2 + day * 0.65;
    this.hemi.color.copy(new THREE.Color(0x8fa8d8).lerp(new THREE.Color(0xdbe8ff), day));
    this.hemi.groundColor.copy(new THREE.Color(0x1a211d).lerp(new THREE.Color(0x45513a), day));
    this.moon.intensity = night * 0.42;

    if (this.waterMaterial) {
      this.waterMaterial.uniforms.uSunDir.value.copy(this.sunDir);
      this.waterMaterial.uniforms.uSunColor.value.copy(sunColor);
      this.waterMaterial.uniforms.uDeep.value.copy(new THREE.Color(0x0b2733).lerp(new THREE.Color(0x123d4b), day));
      this.waterMaterial.uniforms.uShallow.value.copy(new THREE.Color(0x204e5d).lerp(new THREE.Color(0x4f9aa0), day));
    }
    if (this.sunSprite) {
      this.sunSprite.position.copy(this.sunDir).multiplyScalar(4200);
      this.sunSprite.material.opacity = clamp((this.sunDir.y + 0.06) * 2.2, 0, 0.9);
    }
    this.updateNightVisuals();
  }

  updateNightVisuals() {
    const night = this.nightFactor;
    const lightsOn = night > 0.34;
    for (const mat of this.cityMaterials) mat.emissiveIntensity = lightsOn ? 1.45 : 0.12;
    for (const mat of this.signMaterials) mat.emissiveIntensity = lightsOn ? 2.1 : 0.25;
    for (const pool of this.lightPools) pool.visible = lightsOn;
    for (const item of this.animated) {
      if (item.userData?.nightOnly) item.visible = lightsOn;
    }
  }

  buildEnvironment() {
    const canvas = makeCanvas(1024, 512);
    const ctx = canvas.getContext('2d');
    const top = this.skyMaterial.uniforms.uTop.value;
    const horizon = this.skyMaterial.uniforms.uHorizon.value;
    const haze = this.skyMaterial.uniforms.uHaze.value;
    const g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, `#${top.getHexString()}`);
    g.addColorStop(0.5, `#${horizon.getHexString()}`);
    g.addColorStop(0.6, `#${haze.getHexString()}`);
    g.addColorStop(0.68, '#4f4a40');
    g.addColorStop(1, '#171b18');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1024, 512);
    const sunX = 512 + this.sunDir.x * 300;
    const sunY = 256 - this.sunDir.y * 180;
    const sg = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 100);
    sg.addColorStop(0, 'rgba(255,245,220,1)');
    sg.addColorStop(0.2, 'rgba(255,190,110,.75)');
    sg.addColorStop(1, 'rgba(255,140,60,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(0, 0, 1024, 512);
    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.environment = pmrem.fromEquirectangular(texture).texture;
    this.scene.environment = this.environment;
    this.scene.environmentIntensity = 0.62;
    texture.dispose();
    pmrem.dispose();
  }

  buildSunSprite() {
    const texture = makeGlowTexture('rgba(255,250,232,1)', 'rgba(255,130,40,0)');
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    });
    this.sunSprite = new THREE.Sprite(material);
    this.sunSprite.scale.set(950, 950, 1);
    this.sunSprite.position.copy(this.sunDir).multiplyScalar(4200);
    this.scene.add(this.sunSprite);
  }

  addCollider(collider) {
    collider._gridX = Math.floor(collider.x / 64);
    collider._gridZ = Math.floor(collider.z / 64);
    this.colliders.push(collider);
    const key = `${collider._gridX}|${collider._gridZ}`;
    if (!this.colliderGrid.has(key)) this.colliderGrid.set(key, []);
    this.colliderGrid.get(key).push(collider);
  }

  addCircleCollider(x, z, radius, type = 'prop') {
    this.addCollider({ shape: 'circle', x, z, radius, type });
  }

  addBoxCollider(x, z, halfW, halfD, type = 'building') {
    this.addCollider({ shape: 'box', x, z, halfW, halfD, type });
  }

  resolveVehicle(position, velocity, radius) {
    let hit = false;
    const cx = Math.floor(position.x / 64);
    const cz = Math.floor(position.z / 64);
    for (let oz = -1; oz <= 1; oz++) {
      for (let ox = -1; ox <= 1; ox++) {
        const list = this.colliderGrid.get(`${cx + ox}|${cz + oz}`);
        if (!list) continue;
        for (const c of list) {
          if (c.shape === 'circle') {
            const dx = position.x - c.x;
            const dz = position.z - c.z;
            const d = Math.hypot(dx, dz);
            const min = radius + c.radius;
            if (d < min && d > 0.0001) {
              const nx = dx / d;
              const nz = dz / d;
              position.x += nx * (min - d);
              position.z += nz * (min - d);
              const vn = velocity.x * nx + velocity.z * nz;
              if (vn < 0) {
                velocity.x -= nx * vn * 1.3;
                velocity.z -= nz * vn * 1.3;
              }
              hit = true;
            }
          } else {
            const minX = c.x - c.halfW - radius;
            const maxX = c.x + c.halfW + radius;
            const minZ = c.z - c.halfD - radius;
            const maxZ = c.z + c.halfD + radius;
            if (position.x > minX && position.x < maxX && position.z > minZ && position.z < maxZ) {
              const left = position.x - minX;
              const right = maxX - position.x;
              const back = position.z - minZ;
              const front = maxZ - position.z;
              const min = Math.min(left, right, back, front);
              let nx = 0;
              let nz = 0;
              if (min === left) nx = -1;
              else if (min === right) nx = 1;
              else if (min === back) nz = -1;
              else nz = 1;
              position.x += nx * min;
              position.z += nz * min;
              const vn = velocity.x * nx + velocity.z * nz;
              if (vn < 0) {
                velocity.x -= nx * vn * 1.25;
                velocity.z -= nz * vn * 1.25;
              }
              hit = true;
            }
          }
        }
      }
    }
    const bound = WORLD_HALF - 30;
    if (position.x < -bound) { position.x = -bound; velocity.x = Math.abs(velocity.x) * 0.3; hit = true; }
    if (position.x > bound) { position.x = bound; velocity.x = -Math.abs(velocity.x) * 0.3; hit = true; }
    if (position.z < -bound) { position.z = -bound; velocity.z = Math.abs(velocity.z) * 0.3; hit = true; }
    if (position.z > bound) { position.z = bound; velocity.z = -Math.abs(velocity.z) * 0.3; hit = true; }
    return hit;
  }

  checkBoards(position) {
    const smashed = [];
    for (const board of this.smashables) {
      if (!board.active) continue;
      const dx = position.x - board.position.x;
      const dz = position.z - board.position.z;
      const dy = position.y + 1.2 - board.position.y;
      if (dx * dx + dz * dz < 16 && Math.abs(dy) < 5.5) {
        board.active = false;
        board.group.visible = false;
        smashed.push(board);
      }
    }
    return smashed;
  }

  update(dt, playerPos, elapsed) {
    this.time = elapsed;
    this.waterMaterial.uniforms.uTime.value = elapsed;
    this.skyMaterial.uniforms.uTime.value = elapsed;

    if (this.sun) {
      const target = playerPos || new THREE.Vector3();
      this.sun.position.copy(target).addScaledVector(this.sunDir, 420);
      this.sun.target.position.copy(target);
      this.sun.target.updateMatrixWorld();
      this.moon.position.copy(target).add(new THREE.Vector3(-180, 320, 100));
    }
    this.sky.position.copy(playerPos || new THREE.Vector3());

    for (const cloud of this.clouds) {
      cloud.position.x += cloud.userData.speed * dt;
      if (cloud.position.x > 2400) cloud.position.x = -2400;
    }
    for (const item of this.animated) {
      if (item.userData?.spin) item.rotation[item.userData.spinAxis || 'y'] += item.userData.spin * dt;
      if (item.userData?.bob) {
        item.position.y = item.userData.baseY + Math.sin(elapsed * item.userData.bobSpeed + item.userData.phase) * item.userData.bob;
      }
      if (item.userData?.orbit) {
        const a = elapsed * item.userData.orbit.speed + item.userData.orbit.phase;
        item.position.x = item.userData.orbit.cx + Math.cos(a) * item.userData.orbit.radius;
        item.position.z = item.userData.orbit.cz + Math.sin(a) * item.userData.orbit.radius;
      }
      if (item.userData?.pulse) {
        const s = 1 + Math.sin(elapsed * 2.4 + item.userData.pulse.phase) * 0.06;
        item.scale.setScalar(item.userData.pulse.base * s);
      }
    }
    for (const board of this.smashables) {
      if (!board.active) continue;
      board.group.rotation.y += dt * 0.8;
      board.group.position.y = board.baseY + Math.sin(elapsed * 1.7 + board.phase) * 0.25;
      if (board.glow) board.glow.material.opacity = 0.45 + Math.sin(elapsed * 2.2 + board.phase) * 0.12;
    }
    for (const beacon of this.beacons) {
      beacon.group.rotation.y += dt * 0.6;
      const s = 1 + Math.sin(elapsed * 2 + beacon.phase) * 0.08;
      beacon.ring.scale.setScalar(s);
    }
    for (const turbine of this.turbines) turbine.blades.rotation.z += turbine.speed * dt;
    for (const traffic of this.traffic) traffic.update(dt);
  }
}
