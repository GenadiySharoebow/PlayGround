import * as THREE from 'three';
import { clamp } from './utils.js';

function softDotTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.45, 'rgba(255,255,255,.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const MAX_PARTICLES = 700;

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this.cursor = 0;
    this.skidCursor = 0;
    this.skidTimer = 0;

    const positions = new Float32Array(MAX_PARTICLES * 3);
    const colors = new Float32Array(MAX_PARTICLES * 3);
    const sizes = new Float32Array(MAX_PARTICLES);
    const alphas = new Float32Array(MAX_PARTICLES);
    for (let i = 0; i < MAX_PARTICLES; i++) {
      this.particles.push({ life: 0, maxLife: 1, vx: 0, vy: 0, vz: 0, drag: 0.95, gravity: 0, grow: 0 });
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
    this.geometry = geometry;
    const material = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: softDotTexture() } },
      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = color;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (340.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float mask = texture2D(uMap, gl_PointCoord).a;
          if (mask < 0.01) discard;
          gl_FragColor = vec4(vColor, mask * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.NormalBlending,
    });
    this.points = new THREE.Points(geometry, material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);

    // Skid marks.
    const skidGeo = new THREE.PlaneGeometry(0.42, 1.9);
    skidGeo.rotateX(-Math.PI / 2);
    this.skidMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a0907,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
    });
    this.skidPool = [];
    for (let i = 0; i < 150; i++) {
      const mark = new THREE.Mesh(skidGeo, this.skidMaterial);
      mark.visible = false;
      mark.renderOrder = 2;
      scene.add(mark);
      this.skidPool.push(mark);
    }
  }

  spawn(x, y, z, options = {}) {
    const p = this.particles[this.cursor];
    const index = this.cursor;
    this.cursor = (this.cursor + 1) % MAX_PARTICLES;
    const life = options.life ?? 0.8;
    p.life = life;
    p.maxLife = life;
    p.vx = options.vx ?? 0;
    p.vy = options.vy ?? 0.5;
    p.vz = options.vz ?? 0;
    p.drag = options.drag ?? 0.93;
    p.gravity = options.gravity ?? -0.4;
    p.grow = options.grow ?? 1;
    p.size = options.size ?? 1;
    p.baseSize = p.size;
    const color = options.color ?? new THREE.Color(0xd8c6a0);
    this.geometry.attributes.position.setXYZ(index, x, y, z);
    this.geometry.attributes.color.setXYZ(index, color.r, color.g, color.b);
    this.geometry.attributes.aSize.setX(index, p.size);
    this.geometry.attributes.aAlpha.setX(index, options.alpha ?? 0.8);
  }

  burst(position, color, count = 18, power = 5, up = 3) {
    const c = new THREE.Color(color);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * power;
      this.spawn(position.x, position.y, position.z, {
        vx: Math.cos(a) * r,
        vy: Math.random() * up + 0.5,
        vz: Math.sin(a) * r,
        color: c.clone().offsetHSL(0, 0, (Math.random() - 0.5) * 0.2),
        size: 0.3 + Math.random() * 0.7,
        life: 0.6 + Math.random() * 0.9,
        gravity: -5,
        drag: 0.965,
      });
    }
  }

  dust(position, color = 0xb7a178, count = 2, speed = 2) {
    const c = new THREE.Color(color);
    for (let i = 0; i < count; i++) {
      this.spawn(position.x + (Math.random() - 0.5) * 1.4, position.y + 0.25, position.z + (Math.random() - 0.5) * 1.4, {
        vx: (Math.random() - 0.5) * speed,
        vy: 0.7 + Math.random() * 1.1,
        vz: (Math.random() - 0.5) * speed,
        color: c.clone().offsetHSL(0, 0, (Math.random() - 0.5) * 0.14),
        size: 0.9 + Math.random() * 1.2,
        life: 0.75 + Math.random() * 0.7,
        gravity: -0.3,
        drag: 0.94,
        alpha: 0.32,
      });
    }
  }

  smoke(position, count = 1) {
    for (let i = 0; i < count; i++) {
      this.spawn(position.x + (Math.random() - 0.5) * 0.8, position.y + 0.2, position.z + (Math.random() - 0.5) * 0.8, {
        vx: (Math.random() - 0.5) * 1.2,
        vy: 0.6 + Math.random() * 0.8,
        vz: (Math.random() - 0.5) * 1.2,
        color: new THREE.Color(0xd9d5ca),
        size: 0.7 + Math.random() * 1.1,
        life: 0.9 + Math.random() * 0.9,
        gravity: 0.1,
        drag: 0.94,
        alpha: 0.2,
      });
    }
  }

  addSkid(x, z, yaw, groundY) {
    const mark = this.skidPool[this.skidCursor];
    this.skidCursor = (this.skidCursor + 1) % this.skidPool.length;
    mark.position.set(x, groundY + 0.035, z);
    mark.rotation.y = yaw;
    mark.visible = true;
    mark.material = this.skidMaterial;
  }

  update(dt) {
    const pos = this.geometry.attributes.position;
    const color = this.geometry.attributes.color;
    const size = this.geometry.attributes.aSize;
    const alpha = this.geometry.attributes.aAlpha;
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = this.particles[i];
      if (p.life <= 0) {
        if (alpha.getX(i) !== 0) {
          alpha.setX(i, 0);
          size.setX(i, 0);
        }
        continue;
      }
      p.life -= dt;
      if (p.life <= 0) {
        alpha.setX(i, 0);
        size.setX(i, 0);
        continue;
      }
      const t = p.life / p.maxLife;
      p.vx *= Math.pow(p.drag, dt * 60);
      p.vz *= Math.pow(p.drag, dt * 60);
      p.vy += p.gravity * dt;
      pos.setXYZ(i, pos.getX(i) + p.vx * dt, pos.getY(i) + p.vy * dt, pos.getZ(i) + p.vz * dt);
      size.setX(i, p.baseSize * (1 + (1 - t) * p.grow));
      alpha.setX(i, t * t * 0.9);
    }
    pos.needsUpdate = true;
    size.needsUpdate = true;
    alpha.needsUpdate = true;
    color.needsUpdate = true;
  }

  clearSkids() {
    for (const mark of this.skidPool) mark.visible = false;
  }
}
