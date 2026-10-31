import * as THREE from '../vendor/three.module.js';

/* ------------------------------------------------------------------ */
/*  Terrain: a continuous, infinite height field for physics          */
/* ------------------------------------------------------------------ */

const fract = (n) => n - Math.floor(n);
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

function hash(n, seed = 0) {
  return fract(Math.sin(n * 127.1 + seed * 311.7 + 0.123) * 43758.5453123);
}

function valueNoise(x, period, seed) {
  const q = x / period;
  const i = Math.floor(q);
  const f = q - i;
  const u = f * f * (3 - 2 * f);
  return lerp(hash(i, seed), hash(i + 1, seed), u);
}

function rawHeight(x) {
  return (
    (valueNoise(x, 38, 1) - 0.5) * 11 +
    (valueNoise(x, 19, 2) - 0.5) * 5 +
    (valueNoise(x, 8, 3) - 0.5) * 1.6 +
    Math.sin(x * 0.009) * 4
  );
}

const RAW0 = rawHeight(0);

function hillBumps(x) {
  let y = 0;
  const first = Math.floor((x - 150) / 173) - 1;
  const last = Math.ceil((x + 100) / 173);
  for (let k = Math.max(0, first); k <= last; k += 1) {
    const cx = 132 + k * 173 + hash(k, 7) * 61;
    const amp = (hash(k, 8) - 0.48) * 7.2;
    const w = 8 + hash(k, 9) * 8;
    const d = (x - cx) / w;
    y += amp * Math.exp(-d * d);
  }
  return y;
}

export function terrainHeight(x) {
  const ramp = smoothstep(0, 62, Math.max(0, x - 16));
  const bumps = hillBumps(x) * smoothstep(70, 150, x);
  return (rawHeight(x) - RAW0 + bumps) * ramp;
}

export function terrainSlope(x) {
  return (terrainHeight(x + 0.35) - terrainHeight(x - 0.35)) / 0.7;
}

/** Height of the decorative landscape away from the racing line. */
export function landscapeHeight(x, z) {
  const az = Math.abs(z);
  const base = terrainHeight(x);
  if (az <= 3.6) return base;
  const side = z < 0 ? 1 : 0.44;
  const shoulder = smoothstep(3.6, 9, az);
  const hillAmp = smoothstep(8, 32, az) * side;
  const n1 = (valueNoise(x * 0.9 + z * 3.1, 23, 4) - 0.5) * 7.5;
  const n2 = (valueNoise(x * 1.7 - z * 2.2, 11, 5) - 0.5) * 2.4;
  const ridge = smoothstep(14, 34, az) * (2.4 + Math.sin(x * 0.035 + z * 0.07) * 1.1) * side;
  const outer = smoothstep(34, 42, az) * 7.5 * side;
  return base + shoulder * (0.22 + (n1 * 0.55 + n2 * 0.2) * hillAmp) + ridge + outer;
}

/* ------------------------------------------------------------------ */
/*  Small geometry helpers                                             */
/* ------------------------------------------------------------------ */

function mergeParts(parts) {
  const positions = [];
  const normals = [];
  const colors = [];
  const color = new THREE.Color();

  for (const part of parts) {
    let geo = part.geometry.index ? part.geometry.toNonIndexed() : part.geometry.clone();
    if (part.matrix) geo.applyMatrix4(part.matrix);
    const pos = geo.attributes.position.array;
    const nor = geo.attributes.normal.array;
    for (let i = 0; i < pos.length; i += 1) positions.push(pos[i]);
    for (let i = 0; i < nor.length; i += 1) normals.push(nor[i]);
    color.set(part.color);
    for (let i = 0; i < pos.length / 3; i += 1) colors.push(color.r, color.g, color.b);
    geo.dispose();
  }

  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  out.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  return out;
}

function makeTreeGeometry() {
  return mergeParts([
    {
      geometry: new THREE.CylinderGeometry(0.1, 0.16, 1.15, 5),
      color: 0x6b4a30,
      matrix: new THREE.Matrix4().makeTranslation(0, 0.55, 0)
    },
    {
      geometry: new THREE.ConeGeometry(1.0, 1.9, 6),
      color: 0x3c7a45,
      matrix: new THREE.Matrix4().makeTranslation(0, 1.65, 0)
    },
    {
      geometry: new THREE.ConeGeometry(0.78, 1.6, 6),
      color: 0x4b8d4d,
      matrix: new THREE.Matrix4().makeTranslation(0, 2.52, 0)
    },
    {
      geometry: new THREE.ConeGeometry(0.5, 1.25, 6),
      color: 0x5aa158,
      matrix: new THREE.Matrix4().makeTranslation(0, 3.32, 0)
    }
  ]);
}

function makeRockGeometry() {
  const geo = new THREE.DodecahedronGeometry(0.8, 0);
  geo.scale(1, 0.62, 0.88);
  return geo;
}

function makeCloudGeometry() {
  const puffs = [
    { x: -1.35, y: 0, z: 0.1, s: 0.95 },
    { x: 0, y: 0.38, z: 0, s: 1.35 },
    { x: 1.3, y: 0.02, z: -0.1, s: 1.02 },
    { x: 0.5, y: -0.08, z: 0.55, s: 0.8 },
    { x: -0.55, y: -0.05, z: -0.45, s: 0.78 }
  ];
  const parts = puffs.map((p) => ({
    geometry: new THREE.IcosahedronGeometry(p.s, 0),
    color: 0xffffff,
    matrix: new THREE.Matrix4().makeTranslation(p.x, p.y, p.z)
  }));
  return mergeParts(parts);
}

function makeCoinGeometry() {
  const disc = new THREE.CylinderGeometry(0.3, 0.3, 0.085, 10);
  disc.rotateX(Math.PI / 2);
  const rim = new THREE.TorusGeometry(0.31, 0.065, 5, 10);
  const merged = mergeParts([
    { geometry: disc, color: 0xffcf3f, matrix: new THREE.Matrix4() },
    { geometry: rim, color: 0xffe27a, matrix: new THREE.Matrix4() }
  ]);
  return merged;
}

function makeCanvasTexture(width, height, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  draw(ctx, width, height);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/* ------------------------------------------------------------------ */
/*  World                                                              */
/* ------------------------------------------------------------------ */

const CHUNK = 60;
const CHUNK_STEP = 2;
const VIEW_BEHIND = 2;
const VIEW_AHEAD = 4;

export class World {
  constructor(scene) {
    this.scene = scene;
    this.time = 0;
    this.chunkMap = new Map();
    this.collected = new Set();
    this.usedFuel = new Set();
    this.activeCoins = [];
    this.activeFuel = [];
    this.propsDirty = true;
    this.currentCenter = null;
    this.signMaterials = new Map();

    this.buildSky();
    this.buildLights();
    this.buildMountains();
    this.buildClouds();
    this.buildProps();
    this.buildGate();
    this.ensureChunks(0, true);
  }

  /* ---------- sky, light, backdrop ---------- */

  buildSky() {
    const uniforms = {
      topColor: { value: new THREE.Color(0x2d4278) },
      midColor: { value: new THREE.Color(0x7d8fc4) },
      horizonColor: { value: new THREE.Color(0xffbb84) },
      lowColor: { value: new THREE.Color(0xf3a477) },
      sunColor: { value: new THREE.Color(0xfff0bd) },
      sunDir: { value: new THREE.Vector3(-0.38, 0.2, -0.9).normalize() }
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 lowColor;
        uniform vec3 sunColor;
        uniform vec3 sunDir;
        varying vec3 vWorld;
        #include <common>
        void main() {
          vec3 dir = normalize(vWorld - cameraPosition);
          float h = dir.y;
          vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.34, h));
          col = mix(col, topColor, smoothstep(0.32, 0.78, h));
          col = mix(lowColor, col, smoothstep(-0.16, 0.01, h));
          float sd = max(dot(dir, normalize(sunDir)), 0.0);
          col += sunColor * pow(sd, 900.0) * 1.8;
          col += sunColor * pow(sd, 24.0) * 0.16;
          col += sunColor * pow(sd, 5.0) * 0.05;
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(900, 24, 16), material);
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -10;
    this.scene.add(this.sky);
  }

  buildLights() {
    this.hemi = new THREE.HemisphereLight(0xbcd4ff, 0x5a4632, 1.55);
    this.scene.add(this.hemi);

    this.sun = new THREE.DirectionalLight(0xffd2a0, 2.55);
    this.sun.position.set(-28, 45, -24);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    this.sun.shadow.camera.left = -16;
    this.sun.shadow.camera.right = 16;
    this.sun.shadow.camera.top = 16;
    this.sun.shadow.camera.bottom = -16;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 110;
    this.sun.shadow.bias = -0.0007;
    this.sun.shadow.normalBias = 0.035;
    this.scene.add(this.sun);
    this.sunTarget = new THREE.Object3D();
    this.scene.add(this.sunTarget);
    this.sun.target = this.sunTarget;

    this.fill = new THREE.DirectionalLight(0x9db8ff, 0.35);
    this.fill.position.set(20, 12, 30);
    this.scene.add(this.fill);
  }

  buildMountains() {
    this.mountains = new THREE.Group();
    const far = this.makeRidge(0x93a2ca, 0xfff0e0, 32, 68, -230, 1100, 34, 3.1);
    const near = this.makeRidge(0x7285ad, 0xe3dde2, 16, 46, -150, 980, 30, 8.7);
    this.mountains.add(far, near);
    this.scene.add(this.mountains);
  }

  makeRidge(color, snowColor, minH, maxH, z, span, segments, seed) {
    const positions = [];
    const colors = [];
    const baseY = -48;
    const colorA = new THREE.Color(color);
    const snow = new THREE.Color(snowColor);
    const heights = [];
    for (let i = 0; i <= segments; i += 1) {
      const x = -span / 2 + (span / segments) * i;
      const jag = hash(i, seed);
      const jag2 = hash(Math.floor(i / 3), seed + 4);
      heights.push(minH + (maxH - minH) * (0.32 + jag * 0.5 + jag2 * 0.3));
    }
    for (let i = 0; i < segments; i += 1) {
      const x0 = -span / 2 + (span / segments) * i;
      const x1 = x0 + span / segments;
      const h0 = heights[i];
      const h1 = heights[i + 1];
      const shade = 0.9 + hash(i, seed + 9) * 0.18;
      const c = colorA.clone().multiplyScalar(shade);
      const top = Math.max(h0, h1);
      const mixed = c.lerp(snow, smoothstep(52, 66, top) * 0.72);
      positions.push(x0, baseY, 0, x1, baseY, 0, x1, h1, 0);
      positions.push(x0, baseY, 0, x1, h1, 0, x0, h0, 0);
      for (let v = 0; v < 6; v += 1) colors.push(mixed.r, mixed.g, mixed.b);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, fog: false, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.z = z;
    mesh.frustumCulled = false;
    return mesh;
  }

  buildClouds() {
    const geo = makeCloudGeometry();
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffddca,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
      fog: false
    });
    this.clouds = new THREE.InstancedMesh(geo, mat, 36);
    this.clouds.frustumCulled = false;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const pos = new THREE.Vector3();
    const scale = new THREE.Vector3();
    let i = 0;
    for (let c = 0; c < 18; c += 1) {
      const cx = -560 + (1120 / 18) * c + hash(c, 11) * 42;
      const cy = 42 + hash(c, 12) * 32;
      const cz = -80 - hash(c, 13) * 90;
      const size = 2.7 + hash(c, 14) * 3.4;
      pos.set(cx, cy, cz);
      scale.set(size * 1.55, size * 0.62, size);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), hash(c, 17) * Math.PI);
      m.compose(pos, q, scale);
      this.clouds.setMatrixAt(i, m);
      i += 1;
    }
    this.clouds.count = i;
    this.clouds.instanceMatrix.needsUpdate = true;
    this.scene.add(this.clouds);
  }

  /* ---------- instanced nature props ---------- */

  buildProps() {
    this.treeMesh = new THREE.InstancedMesh(
      makeTreeGeometry(),
      new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1, metalness: 0 }),
      320
    );
    this.treeMesh.castShadow = false;
    this.treeMesh.receiveShadow = true;
    this.treeMesh.frustumCulled = false;
    this.treeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.treeMesh);

    this.rockMesh = new THREE.InstancedMesh(
      makeRockGeometry(),
      new THREE.MeshStandardMaterial({ color: 0x9a8c7c, flatShading: true, roughness: 1, metalness: 0 }),
      200
    );
    this.rockMesh.frustumCulled = false;
    this.rockMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.rockMesh);

    this.bushMesh = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(0.52, 0),
      new THREE.MeshStandardMaterial({ color: 0x4f8a48, flatShading: true, roughness: 1, metalness: 0 }),
      240
    );
    this.bushMesh.frustumCulled = false;
    this.bushMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.bushMesh);

    const flowerGeo = new THREE.IcosahedronGeometry(0.085, 0);
    this.flowerMesh = new THREE.InstancedMesh(
      flowerGeo,
      new THREE.MeshStandardMaterial({ color: 0xffd66b, flatShading: true, roughness: 1, emissive: 0x251200, metalness: 0 }),
      500
    );
    this.flowerMesh.frustumCulled = false;
    this.flowerMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.flowerMesh);

    this.coinGeo = makeCoinGeometry();
    this.coinMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.32,
      metalness: 0.58,
      emissive: 0x4d2800,
      emissiveIntensity: 0.6
    });

    this.fuelBodyMat = new THREE.MeshStandardMaterial({ color: 0xd94a30, flatShading: true, roughness: 0.6, metalness: 0.1 });
    this.fuelDarkMat = new THREE.MeshStandardMaterial({ color: 0x40261a, flatShading: true, roughness: 0.8, metalness: 0.1 });
    this.fuelLightMat = new THREE.MeshStandardMaterial({ color: 0xffe0a0, flatShading: true, roughness: 0.7, metalness: 0, emissive: 0x2a1500 });
  }

  /* ---------- starting gate ---------- */

  buildGate() {
    const group = new THREE.Group();
    const gx = 16;
    const baseY = terrainHeight(gx);
    const wood = new THREE.MeshStandardMaterial({ color: 0x6e4a30, flatShading: true, roughness: 0.95 });
    const beam = new THREE.MeshStandardMaterial({ color: 0x8b5d3a, flatShading: true, roughness: 0.9 });
    const postGeo = new THREE.BoxGeometry(0.38, 5.1, 0.38);
    for (const z of [-4.55, 4.55]) {
      const post = new THREE.Mesh(postGeo, wood);
      post.position.set(gx, baseY + 2.55, z);
      post.castShadow = true;
      group.add(post);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.18, 0.56), beam);
      cap.position.set(gx, baseY + 5.15, z);
      group.add(cap);
    }
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.46, 9.7), beam);
    top.position.set(gx, baseY + 5.02, 0);
    top.castShadow = true;
    group.add(top);

    const bannerTex = makeCanvasTexture(1024, 180, (ctx, w, h) => {
      ctx.fillStyle = '#ff6b35';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#fff3df';
      ctx.fillRect(0, 0, w, 12);
      ctx.fillRect(0, h - 12, w, 12);
      const block = 22;
      for (let x = 0; x < w; x += block * 2) {
        ctx.fillRect(x, h - 12 - block, block, block);
        ctx.fillRect(x + block, h - 12 - block * 2, block, block);
      }
      ctx.fillStyle = '#21140d';
      ctx.font = '400 92px Bungee, Impact, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('RIDGE RUSH', w / 2 + 3, h / 2 - 4);
      ctx.fillStyle = '#fff3df';
      ctx.fillText('RIDGE RUSH', w / 2, h / 2 - 8);
    });
    const bannerMat = new THREE.MeshBasicMaterial({ map: bannerTex, side: THREE.DoubleSide });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(6.6, 1.16), bannerMat);
    banner.position.set(gx, baseY + 4.12, 0);
    group.add(banner);

    for (let i = 0; i < 7; i += 1) {
      const tri = new THREE.BufferGeometry();
      tri.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, -0.5, 0, 0.55, -0.28, 0], 3));
      tri.computeVertexNormals();
      const flag = new THREE.Mesh(tri, new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffc93f : 0xfff3df, side: THREE.DoubleSide }));
      flag.position.set(gx, baseY + 4.8, -4.2 + i * 1.4);
      flag.rotation.y = Math.PI / 2;
      group.add(flag);
    }

    const checkerTex = makeCanvasTexture(256, 64, (ctx, w, h) => {
      const s = 32;
      for (let y = 0; y < h; y += s) {
        for (let x = 0; x < w; x += s) {
          ctx.fillStyle = ((x / s + y / s) % 2 === 0) ? '#fff4df' : '#242838';
          ctx.fillRect(x, y, s, s);
        }
      }
    });
    const line = new THREE.Mesh(
      new THREE.PlaneGeometry(1.5, 7.2),
      new THREE.MeshBasicMaterial({ map: checkerTex, transparent: true, opacity: 0.92 })
    );
    line.rotation.x = -Math.PI / 2;
    line.position.set(gx, terrainHeight(gx) + 0.035, 0);
    group.add(line);

    this.gate = group;
    this.scene.add(group);
    this.gateX = gx;
  }

  /* ---------- chunks ---------- */

  ensureChunks(carX, force = false) {
    const min = Math.floor(carX / CHUNK) - VIEW_BEHIND;
    const max = Math.floor(carX / CHUNK) + VIEW_AHEAD;
    if (!force && this.currentCenter === `${min}:${max}`) return;
    this.currentCenter = `${min}:${max}`;

    for (const [index, chunk] of this.chunkMap) {
      if (index < min || index > max) {
        this.removeChunk(index, chunk);
      }
    }
    for (let index = min; index <= max; index += 1) {
      if (!this.chunkMap.has(index)) this.makeChunk(index);
    }
    this.propsDirty = true;
    this.rebuildInstances();
  }

  makeChunk(index) {
    const start = index * CHUNK;
    const group = new THREE.Group();
    const terrain = this.makeTerrainMesh(start, start + CHUNK);
    group.add(terrain);

    const trees = [];
    const rocks = [];
    const bushes = [];
    const flowers = [];
    const coins = [];
    let fuel = null;

    // Background forest and a few foreground silhouettes.
    for (let k = 0; k < 10; k += 1) {
      if (hash(index * 11 + k, 21) > 0.88) continue;
      const x = start + 2 + hash(index * 13 + k, 22) * (CHUNK - 4);
      const foreground = k === 9;
      const z = foreground
        ? 8.4 + hash(index * 19 + k, 24) * 2.6
        : -(5.8 + hash(index * 17 + k, 23) * 29);
      const y = landscapeHeight(x, z);
      const scale = foreground ? 0.62 + hash(index * 23 + k, 25) * 0.24 : 0.72 + hash(index * 23 + k, 25) * 0.74;
      trees.push({
        x, z, y,
        scale,
        rot: hash(index * 29 + k, 26) * Math.PI * 2,
        tint: 0.82 + hash(index * 31 + k, 27) * 0.28
      });
    }
    // Distant ridge line trees, so the horizon isn't bare.
    for (let k = 0; k < 2; k += 1) {
      const x = start + 8 + hash(index * 41 + k, 28) * (CHUNK - 16);
      const z = -(32 + hash(index * 43 + k, 29) * 8);
      trees.push({
        x, z, y: landscapeHeight(x, z),
        scale: 1.0 + hash(index * 47 + k, 30) * 0.6,
        rot: hash(index * 53 + k, 31) * Math.PI * 2,
        tint: 0.72 + hash(index * 59 + k, 32) * 0.16
      });
    }

    for (let k = 0; k < 3; k += 1) {
      const x = start + 3 + hash(index * 61 + k, 33) * (CHUNK - 6);
      const positive = hash(index * 67 + k, 34) > 0.58;
      const z = (positive ? 4.6 : -4.6) + (positive ? 1 : -1) * hash(index * 71 + k, 35) * (positive ? 5 : 13);
      rocks.push({
        x, z, y: landscapeHeight(x, z),
        scale: 0.45 + hash(index * 73 + k, 36) * 1.15,
        rot: hash(index * 79 + k, 37) * Math.PI * 2,
        tilt: (hash(index * 83 + k, 38) - 0.5) * 0.35,
        tint: 0.82 + hash(index * 89 + k, 39) * 0.28
      });
    }

    for (let k = 0; k < 5; k += 1) {
      const x = start + 2 + hash(index * 97 + k, 40) * (CHUNK - 4);
      const positive = hash(index * 101 + k, 41) > 0.46;
      const z = (positive ? 4.1 : -4.1) + (positive ? 1 : -1) * hash(index * 103 + k, 42) * (positive ? 3 : 6);
      bushes.push({
        x, z, y: landscapeHeight(x, z),
        scale: 0.5 + hash(index * 107 + k, 43) * 0.8,
        rot: hash(index * 109 + k, 44) * Math.PI * 2
      });
    }

    for (let k = 0; k < 12; k += 1) {
      const x = start + 1.5 + hash(index * 113 + k, 45) * (CHUNK - 3);
      const positive = hash(index * 127 + k, 46) > 0.5;
      const z = (positive ? 3.8 : -3.8) + (positive ? 1 : -1) * hash(index * 131 + k, 47) * 3;
      flowers.push({
        x, z, y: landscapeHeight(x, z) + 0.12,
        scale: 0.6 + hash(index * 137 + k, 48) * 0.9
      });
    }

    // Coin arcs on the racing line.
    {
      const baseX = start + 10 + hash(index, 49) * 14;
      const count = 4 + Math.floor(hash(index, 50) * 2);
      for (let k = 0; k < count; k += 1) {
        const x = baseX + k * 2.1;
        const id = `${index}:${k}`;
        if (this.collected.has(id)) continue;
        const y = terrainHeight(x) + 1.25 + Math.sin((k / (count - 1)) * Math.PI) * 0.9;
        const mesh = new THREE.Mesh(this.coinGeo, this.coinMat);
        mesh.position.set(x, y, 0);
        mesh.rotation.y = hash(index * 157 + k, 51) * Math.PI;
        mesh.userData.baseY = y;
        mesh.userData.phase = hash(index * 163 + k, 52) * Math.PI * 2;
        mesh.userData.id = id;
        mesh.userData.chunk = index;
        group.add(mesh);
        coins.push(mesh);
      }
    }

    // Fuel every ~240 m.
    if (index >= 2 && index % 4 === 0) {
      const fx = start + 28 + hash(index, 53) * 8;
      const id = `${index}:fuel`;
      if (!this.usedFuel.has(id)) {
        fuel = this.makeFuelCan(fx, id, index);
        group.add(fuel.group);
      }
    }

    // Distance sign roughly every 100 m.
    const signX = Math.ceil((start + 6) / 100) * 100;
    if (signX < start + CHUNK - 6 && signX > 20) {
      const signGroup = this.makeSign(signX);
      const sy = landscapeHeight(signX, -5.4);
      signGroup.position.set(signX, sy, -5.4);
      group.add(signGroup);
    }

    const chunk = { index, group, terrain, trees, rocks, bushes, flowers, coins, fuel };
    this.chunkMap.set(index, chunk);
    this.scene.add(group);
    for (const coin of coins) this.activeCoins.push(coin);
    if (fuel) this.activeFuel.push(fuel);
  }

  makeTerrainMesh(start, end) {
    const positions = [];
    const colors = [];
    const zs = [-42, -36, -30, -25, -21, -17, -14, -11.5, -9.5, -8, -6.6, -5.4, -4.4, -3.6, -1.8, 0, 1.8, 3.6, 4.4, 5.4, 6.6, 8, 9.5, 11.5, 14, 17, 21, 25, 30, 36, 42];
    const grassA = new THREE.Color(0x679f50);
    const grassB = new THREE.Color(0x7cb464);
    const dirtA = new THREE.Color(0xb18252);
    const dirtB = new THREE.Color(0xa27346);
    const rutA = new THREE.Color(0x9b6f43);
    const rutB = new THREE.Color(0x8d633b);
    const rockA = new THREE.Color(0x8a8072);
    const rockB = new THREE.Color(0x9c8f7d);
    const mossA = new THREE.Color(0x4f7a40);
    const mossB = new THREE.Color(0x5e894a);
    const tmp = new THREE.Color();

    const addTri = (ax, ay, az, bx, by, bz, cx, cy, cz, color) => {
      positions.push(ax, ay, az, bx, by, bz, cx, cy, cz);
      for (let i = 0; i < 3; i += 1) colors.push(color.r, color.g, color.b);
    };

    for (let x = start; x < end; x += CHUNK_STEP) {
      const x2 = x + CHUNK_STEP;
      for (let zi = 0; zi < zs.length - 1; zi += 1) {
        const z0 = zs[zi];
        const z1 = zs[zi + 1];
        const a = landscapeHeight(x, z0);
        const b = landscapeHeight(x, z1);
        const c = landscapeHeight(x2, z1);
        const d = landscapeHeight(x2, z0);

        const mx = x + CHUNK_STEP / 2;
        const mz = (z0 + z1) / 2;
        const slope = Math.abs(terrainSlope(mx));
        const steep = slope > 0.58;
        const az = Math.abs(mz);
        const n = valueNoise(mx * 0.42 + mz * 0.75, 16, 71);

        if (az < 3.6) {
          const rutted = Math.abs(Math.abs(mz) - 0.9) < 0.5;
          tmp.copy(rutted ? rutA : dirtA).lerp(rutted ? rutB : dirtB, n);
          if (rutted) tmp.multiplyScalar(0.94);
        } else if (az < 6.4) {
          const edge = smoothstep(3.6, 6.4, az);
          tmp.copy(dirtA).lerp(dirtB, n).lerp(grassA, edge * 0.85);
        } else if (steep && az < 30) {
          tmp.copy(rockA).lerp(rockB, n);
        } else if (az > 27) {
          tmp.copy(mossA).lerp(mossB, n);
        } else {
          tmp.copy(grassA).lerp(grassB, n);
          if (slope > 0.38) tmp.lerp(rockA, clamp((slope - 0.38) * 1.8, 0, 0.45));
        }
        const shade = 0.985 + hash(Math.floor(x / 4) + Math.floor(mz / 3) * 7, 62) * 0.03;
        tmp.multiplyScalar(shade);

        addTri(x, a, z0, x, b, z1, x2, c, z1, tmp);
        addTri(x, a, z0, x2, c, z1, x2, d, z0, tmp);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1, metalness: 0 })
    );
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    return mesh;
  }

  makeSign(x) {
    const meter = Math.round(x / 10) * 10;
    let mat = this.signMaterials.get(meter);
    if (!mat) {
      const tex = makeCanvasTexture(256, 176, (ctx, w, h) => {
        ctx.fillStyle = '#6b4a30';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#fff3df';
        ctx.beginPath();
        ctx.roundRect(8, 8, w - 16, h - 16, 16);
        ctx.fill();
        ctx.strokeStyle = '#2a241d';
        ctx.lineWidth = 6;
        ctx.stroke();
        ctx.fillStyle = '#2a241d';
        ctx.font = '400 58px Bungee, Impact, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${meter}`, w / 2, h / 2 - 12);
        ctx.font = '800 24px Outfit, sans-serif';
        ctx.fillStyle = '#ff6b35';
        ctx.fillText('METERS', w / 2, h / 2 + 36);
        ctx.fillStyle = '#ff6b35';
        ctx.fillRect(w / 2 - 28, h - 30, 56, 6);
      });
      mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide });
      this.signMaterials.set(meter, mat);
    }
    const group = new THREE.Group();
    const post = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 2.2, 0.16),
      new THREE.MeshStandardMaterial({ color: 0x5b3d27, flatShading: true, roughness: 0.95 })
    );
    post.position.y = 1.1;
    group.add(post);
    const board = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.96), mat);
    board.position.y = 2.25;
    group.add(board);
    group.rotation.y = 0.04;
    return group;
  }

  makeFuelCan(x, id, chunkIndex) {
    const group = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.82, 0.36), this.fuelBodyMat);
    body.position.y = 0.45;
    group.add(body);
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.63, 0.16, 0.37),
      new THREE.MeshStandardMaterial({ color: 0xfff3df, flatShading: true, roughness: 0.8 })
    );
    stripe.position.y = 0.52;
    group.add(stripe);
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.045, 4, 8, Math.PI), this.fuelDarkMat);
    handle.position.y = 0.9;
    handle.rotation.x = Math.PI / 2;
    group.add(handle);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.14, 6), this.fuelDarkMat);
    cap.position.set(0.2, 0.92, 0);
    group.add(cap);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.5, 0.62, 18),
      new THREE.MeshBasicMaterial({ color: 0xffc93f, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.03;
    group.add(ring);

    const y = terrainHeight(x);
    group.position.set(x, y, 0);
    group.userData.baseY = y;
    group.userData.phase = hash(chunkIndex, 56) * Math.PI * 2;
    group.userData.id = id;
    group.userData.chunk = chunkIndex;
    return {
      group,
      ring,
      x,
      y,
      id,
      chunk: chunkIndex,
      collected: false
    };
  }

  removeChunk(index, chunk) {
    this.scene.remove(chunk.group);
    chunk.terrain.geometry.dispose();
    this.activeCoins = this.activeCoins.filter((coin) => coin.userData.chunk !== index);
    this.activeFuel = this.activeFuel.filter((fuel) => fuel.chunk !== index);
    chunk.group.traverse((obj) => {
      if (obj.isMesh && obj.geometry && obj.geometry !== this.coinGeo && obj.geometry !== this.rockMesh?.geometry) {
        if (obj.userData.disposeGeo) obj.geometry.dispose();
      }
    });
    this.chunkMap.delete(index);
  }

  rebuildInstances() {
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const pos = new THREE.Vector3();
    const scl = new THREE.Vector3();
    const color = new THREE.Color();

    let ti = 0;
    let ri = 0;
    let bi = 0;
    let fi = 0;
    const flowerColors = [0xffd66b, 0xfff3df, 0xff8a6b, 0xc7a5ff];

    const chunks = [...this.chunkMap.values()].sort((a, b) => a.index - b.index);
    for (const chunk of chunks) {
      for (const t of chunk.trees) {
        if (ti >= 320) break;
        pos.set(t.x, t.y - 0.1, t.z);
        e.set(0, t.rot, 0);
        q.setFromEuler(e);
        scl.set(0.85 * t.scale, t.scale, 0.85 * t.scale);
        m.compose(pos, q, scl);
        this.treeMesh.setMatrixAt(ti, m);
        color.setRGB(t.tint, t.tint * 0.98, t.tint * 0.92);
        this.treeMesh.setColorAt(ti, color);
        ti += 1;
      }
      for (const r of chunk.rocks) {
        if (ri >= 200) break;
        pos.set(r.x, r.y + 0.16 * r.scale, r.z);
        e.set(r.tilt, r.rot, r.tilt * 0.5);
        q.setFromEuler(e);
        scl.set(r.scale, r.scale, r.scale);
        m.compose(pos, q, scl);
        this.rockMesh.setMatrixAt(ri, m);
        color.setRGB(r.tint, r.tint, r.tint);
        this.rockMesh.setColorAt(ri, color);
        ri += 1;
      }
      for (const b of chunk.bushes) {
        if (bi >= 240) break;
        pos.set(b.x, b.y + b.scale * 0.28, b.z);
        e.set(0, b.rot, 0);
        q.setFromEuler(e);
        scl.set(b.scale * 1.2, b.scale * 0.8, b.scale);
        m.compose(pos, q, scl);
        this.bushMesh.setMatrixAt(bi, m);
        bi += 1;
      }
      for (const f of chunk.flowers) {
        if (fi >= 500) break;
        pos.set(f.x, f.y, f.z);
        e.set(0, 0, 0);
        q.setFromEuler(e);
        scl.set(f.scale, f.scale, f.scale);
        m.compose(pos, q, scl);
        this.flowerMesh.setMatrixAt(fi, m);
        const col = flowerColors[Math.floor(hash(f.x, 65) * flowerColors.length)];
        color.setHex(col);
        this.flowerMesh.setColorAt(fi, color);
        fi += 1;
      }
    }

    this.treeMesh.count = ti;
    this.rockMesh.count = ri;
    this.bushMesh.count = bi;
    this.flowerMesh.count = fi;
    this.treeMesh.instanceMatrix.needsUpdate = true;
    this.rockMesh.instanceMatrix.needsUpdate = true;
    this.bushMesh.instanceMatrix.needsUpdate = true;
    this.flowerMesh.instanceMatrix.needsUpdate = true;
    if (this.treeMesh.instanceColor) this.treeMesh.instanceColor.needsUpdate = true;
    if (this.rockMesh.instanceColor) this.rockMesh.instanceColor.needsUpdate = true;
    if (this.flowerMesh.instanceColor) this.flowerMesh.instanceColor.needsUpdate = true;
    this.propsDirty = false;
  }

  /* ---------- pickups ---------- */

  collect(x, y) {
    let coins = 0;
    let fuel = 0;
    for (const coin of this.activeCoins) {
      if (coin.visible === false) continue;
      if (Math.abs(coin.position.x - x) < 1.35 && Math.abs(coin.position.y - y) < 1.7) {
        coin.visible = false;
        this.collected.add(coin.userData.id);
        coins += 1;
      }
    }
    for (const can of this.activeFuel) {
      if (can.collected) continue;
      if (Math.abs(can.x - x) < 1.8 && Math.abs(can.y + 0.7 - y) < 2.1) {
        can.collected = true;
        can.group.visible = false;
        this.usedFuel.add(can.id);
        fuel += 28;
      }
    }
    return { coins, fuel };
  }

  resetRun() {
    this.collected.clear();
    this.usedFuel.clear();
    for (const [index, chunk] of this.chunkMap) {
      this.removeChunk(index, chunk);
    }
    this.chunkMap.clear();
    this.activeCoins = [];
    this.activeFuel = [];
    this.currentCenter = null;
    this.ensureChunks(0, true);
  }

  update(carX, dt) {
    this.time += dt;
    this.ensureChunks(carX);

    const t = this.time;
    for (const coin of this.activeCoins) {
      if (!coin.visible) continue;
      coin.rotation.y += dt * 3.1;
      coin.position.y = coin.userData.baseY + Math.sin(t * 2.2 + coin.userData.phase) * 0.12;
    }
    for (const can of this.activeFuel) {
      if (can.collected) continue;
      can.group.position.y = can.group.userData.baseY + Math.sin(t * 2 + can.group.userData.phase) * 0.08;
      can.group.rotation.y = Math.sin(t * 0.8 + can.group.userData.phase) * 0.35;
      can.ring.scale.setScalar(0.95 + Math.sin(t * 3 + can.group.userData.phase) * 0.08);
    }

    this.mountains.position.x = carX;
    this.clouds.position.x = carX * 0.94;
    this.sky.position.x = carX;
    this.sky.position.y = 0;
    this.sky.position.z = 0;

    const lightX = carX - 26;
    this.sun.position.set(lightX, terrainHeight(carX) + 46, -26);
    this.sunTarget.position.set(carX, terrainHeight(carX) + 1, 0);
    this.sunTarget.updateMatrixWorld();
    this.fill.position.set(carX + 22, terrainHeight(carX) + 14, 28);
  }

  /** Nearest sign of life around a world point, for the minimap-less HUD. */
  nextPickupDistance(x) {
    let best = Infinity;
    for (const coin of this.activeCoins) {
      if (coin.visible === false) continue;
      if (coin.position.x > x) best = Math.min(best, coin.position.x - x);
    }
    return best;
  }
}
