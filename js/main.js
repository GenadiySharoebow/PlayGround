import * as THREE from '../vendor/three.module.js';
import { World, terrainHeight, landscapeHeight } from './world.js';
import { Vehicle, VEHICLES } from './vehicle.js';
import { GameAudio } from './audio.js';

await document.fonts.ready.catch(() => {});

/* ------------------------------------------------------------------ */
/*  Save data                                                          */
/* ------------------------------------------------------------------ */

const SAVE_KEY = 'ridgeRush3d.save.v1';
const defaults = { coins: 0, best: 0, vehicle: 'jeep', owned: ['jeep'], muted: false, runs: 0 };

function loadSave() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVE_KEY) || '{}');
    const data = { ...defaults, ...parsed };
    if (!Array.isArray(data.owned) || !data.owned.includes('jeep')) data.owned = ['jeep', ...(Array.isArray(data.owned) ? data.owned : [])];
    if (!VEHICLES.some((v) => v.id === data.vehicle)) data.vehicle = 'jeep';
    return data;
  } catch {
    return { ...defaults, owned: [...defaults.owned] };
  }
}

let save = loadSave();
function persist() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  } catch {
    /* storage can be unavailable in private mode */
  }
}

/* ------------------------------------------------------------------ */
/*  Scene setup                                                        */
/* ------------------------------------------------------------------ */

const container = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.domElement.setAttribute('aria-label', 'Ridge Rush 3D game view');
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xf0b388, 82, 265);
const camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.1, 1600);

const world = new World(scene);
const audio = new GameAudio(save.muted);

function createCar() {
  const config = VEHICLES.find((v) => v.id === save.vehicle) || VEHICLES[0];
  if (car) car.dispose();
  car = new Vehicle(scene, config);
  car.onLand = handleLanding;
  car.onCrash = handleCrash;
  car.reset(0);
}
let car = null;
createCar();

const camLook = new THREE.Vector3(car.x + 2, car.y + 1.1, 0);
camera.position.set(car.x + 5.2, car.y + 4.4, car.z + 14.8);
camera.lookAt(camLook);

/* ------------------------------------------------------------------ */
/*  Particles                                                          */
/* ------------------------------------------------------------------ */

function makeSoftTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.85)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const softTex = makeSoftTexture();

class ParticleField {
  constructor(capacity, { size = 0.4, additive = false, drag = 0.98, gravity = 3.2 } = {}) {
    this.capacity = capacity;
    this.gravity = gravity;
    this.drag = drag;
    this.cursor = 0;
    this.pos = new Float32Array(capacity * 3);
    this.vel = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.size = new Float32Array(capacity);
    this.alpha = new Float32Array(capacity);
    this.life = new Float32Array(capacity);
    this.max = new Float32Array(capacity);
    for (let i = 0; i < capacity; i += 1) {
      this.pos[i * 3 + 1] = -999;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTex: { value: softTex },
        uPixel: { value: Math.min(window.devicePixelRatio || 1, 2) }
      },
      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float uPixel;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aSize * (280.0 / max(0.1, -mv.z)) * uPixel;
          vAlpha = aAlpha;
          vColor = color;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTex;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vec4 tex = texture2D(uTex, gl_PointCoord);
          gl_FragColor = vec4(vColor, tex.a * vAlpha);
          if (gl_FragColor.a < 0.01) discard;
          #include <colorspace_fragment>
        }
      `,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);
    this.geometry = geo;
    this.baseSize = size;
  }

  spawn(x, y, z, vx, vy, vz, life, color, size = 1) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.capacity;
    const p = i * 3;
    this.pos[p] = x;
    this.pos[p + 1] = y;
    this.pos[p + 2] = z;
    this.vel[p] = vx;
    this.vel[p + 1] = vy;
    this.vel[p + 2] = vz;
    const c = new THREE.Color(color);
    this.col[p] = c.r;
    this.col[p + 1] = c.g;
    this.col[p + 2] = c.b;
    this.size[i] = this.baseSize * size;
    this.life[i] = life;
    this.max[i] = life;
    this.alpha[i] = 0.9;
  }

  update(dt) {
    for (let i = 0; i < this.capacity; i += 1) {
      if (this.life[i] <= 0) {
        this.alpha[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      const p = i * 3;
      this.vel[p] *= this.drag;
      this.vel[p + 1] -= this.gravity * dt;
      this.vel[p + 2] *= this.drag;
      this.pos[p] += this.vel[p] * dt;
      this.pos[p + 1] += this.vel[p + 1] * dt;
      this.pos[p + 2] += this.vel[p + 2] * dt;
      this.alpha[i] = Math.max(0, (this.life[i] / this.max[i]) * 0.8);
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
    this.geometry.attributes.aSize.needsUpdate = true;
    this.geometry.attributes.aAlpha.needsUpdate = true;
  }
}

const dust = new ParticleField(320, { size: 0.5, gravity: 2.4, drag: 0.975 });
const sparks = new ParticleField(180, { size: 0.2, gravity: 5.5, drag: 0.99, additive: true });
const smoke = new ParticleField(140, { size: 0.34, gravity: -0.15, drag: 0.985 });

function dustBurst(x, y, z, count, spread = 1, power = 1) {
  for (let i = 0; i < count; i += 1) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.random() * spread;
    dust.spawn(
      x + Math.cos(a) * r,
      y + Math.random() * 0.35,
      z + Math.sin(a) * r * 0.7,
      (Math.random() - 0.5) * 3 * power,
      1.2 + Math.random() * 2.4 * power,
      (Math.random() - 0.5) * 2.5,
      0.55 + Math.random() * 0.7,
      [0xc79a68, 0xb98a5b, 0xd5b083][Math.floor(Math.random() * 3)],
      0.7 + Math.random() * 0.8
    );
  }
}

function sparkBurst(x, y, z, count, color = 0xffd45c) {
  for (let i = 0; i < count; i += 1) {
    const a = Math.random() * Math.PI * 2;
    const s = 1.5 + Math.random() * 3.5;
    sparks.spawn(
      x,
      y,
      z,
      Math.cos(a) * s,
      1.5 + Math.random() * 3,
      Math.sin(a) * s * 0.6,
      0.35 + Math.random() * 0.4,
      color,
      0.7 + Math.random() * 1.1
    );
  }
}

/* ------------------------------------------------------------------ */
/*  DOM / UI                                                           */
/* ------------------------------------------------------------------ */

const $ = (id) => document.getElementById(id);
const menuEl = $('menu');
const garageEl = $('garage');
const gameoverEl = $('gameover');
const hudEl = $('hud');
const hintEl = $('hint');
const comboEl = $('combo');
const toastEl = $('toast');
const fuelFill = $('fuel-fill');
const distanceEl = $('distance-value');
const bestEl = $('best-value');
const coinEl = $('coin-value');
const speedEl = $('speed-value');
const menuBestEl = $('menu-best');
const menuCoinsEl = $('menu-coins');
const garageCoinsEl = $('garage-coins');
const garageListEl = $('garage-list');
const flashEl = $('flash');

let state = 'menu';
let run = null;
let time = 0;
let shake = 0;
let dustTimer = 0;
let smokeTimer = 0;
let hintUntil = 0;
let toastTimer = 0;
let lowFuelWarned = false;
let crashTimer = 0;
let outOfFuelAt = 0;
let outOfFuelTimer = 0;
let lastDistance = -1;
let lastSpeed = -1;
let lastFuel = -1;
let lastCoins = -1;
let coinStreak = 0;
let coinStreakTimer = 0;
let lastTutorial = 0;

const input = { gas: false, brake: false };

const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760;
const hintText = isTouch
  ? 'HOLD GAS  ·  BRAKE TO REVERSE'
  : 'HOLD  →  /  D  TO CLIMB  ·  ←  /  A  TO BRAKE  ·  GAS IN AIR = BACKFLIP';

function applyMute() {
  document.body.classList.toggle('muted', save.muted);
  audio.setMuted(save.muted);
  const pressed = save.muted ? 'true' : 'false';
  $('mute-btn').setAttribute('aria-pressed', pressed);
  $('menu-mute').setAttribute('aria-pressed', pressed);
}

function toggleMute() {
  audio.init();
  if (!save.muted) audio.click();
  save.muted = !save.muted;
  applyMute();
  persist();
}

function refreshMenuStats() {
  menuBestEl.textContent = Math.floor(save.best);
  menuCoinsEl.textContent = save.coins;
  garageCoinsEl.textContent = save.coins;
  bestEl.textContent = Math.floor(save.best);
}

function showToast(message, duration = 2000) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), duration);
}

function showCombo(message) {
  comboEl.textContent = message;
  comboEl.classList.remove('show');
  void comboEl.offsetWidth;
  comboEl.classList.add('show');
}

function setHint(show) {
  hintEl.textContent = hintText;
  hintEl.classList.toggle('show', show);
}

function setOverlay(element, show) {
  element.classList.toggle('show', show);
}

function setState(next) {
  state = next;
  document.body.classList.toggle('menu-open', next === 'menu');
  document.body.classList.toggle('garage-open', next === 'garage');
  document.body.classList.toggle('playing', next === 'playing' || next === 'crashing');
  document.body.classList.toggle('crashing', next === 'crashing');
  document.body.classList.toggle('results-open', next === 'results');
  hudEl.setAttribute('aria-hidden', String(next === 'menu' || next === 'garage' || next === 'results'));
}

function startRun() {
  audio.init();
  audio.setRunning(true);
  audio.click();
  setState('playing');
  setOverlay(menuEl, false);
  setOverlay(garageEl, false);
  setOverlay(gameoverEl, false);
  run = {
    coins: 0,
    maxX: 0,
    fuel: 100,
    distance: 0,
    start: time
  };
  car.reset(0);
  world.resetRun();
  setGas(false);
  setBrake(false);
  shake = 0;
  crashTimer = 0;
  outOfFuelAt = 0;
  outOfFuelTimer = 0;
  lowFuelWarned = false;
  coinStreak = 0;
  coinStreakTimer = 0;
  hintUntil = time + 7.5;
  lastTutorial = time;
  setHint(true);
  refreshMenuStats();
  lastDistance = -1;
  lastSpeed = -1;
  lastFuel = -1;
  lastCoins = -1;
  updateHud(true);
  // Let the camera catch up from the menu orbit to the chase angle.
  camera.fov = 47;
  camera.updateProjectionMatrix();
}

function finishRun(reason) {
  if (state !== 'playing' && state !== 'crashing') return;
  setState('results');
  audio.setRunning(false);
  const distance = Math.floor(run.maxX);
  const newBest = distance > Math.floor(save.best);
  save.best = Math.max(save.best, distance);
  save.coins += run.coins;
  save.runs = (save.runs || 0) + 1;
  persist();
  refreshMenuStats();
  $('result-kicker').textContent = reason === 'fuel' ? 'TANK DRY' : 'RUN OVER';
  $('result-title').textContent = reason === 'fuel' ? 'OUT OF FUEL' : 'WIPEOUT';
  $('result-distance').textContent = distance;
  $('result-coins').textContent = run.coins;
  $('result-best').textContent = Math.floor(save.best);
  $('new-best').classList.toggle('show', newBest);
  setOverlay(gameoverEl, true);
  setOverlay(menuEl, false);
  setOverlay(garageEl, false);
  setHint(false);
  audio.setRunning(false);
}

function goMenu() {
  audio.click();
  audio.setRunning(false);
  setState('menu');
  setOverlay(gameoverEl, false);
  setOverlay(garageEl, false);
  setOverlay(menuEl, true);
  setHint(false);
  car.reset(0);
  world.resetRun();
  refreshMenuStats();
  setGas(false);
  setBrake(false);
}

/* ------------------------------------------------------------------ */
/*  Garage                                                             */
/* ------------------------------------------------------------------ */

function vehicleArt(v) {
  const body = `#${v.color.toString(16).padStart(6, '0')}`;
  const accent = `#${v.accent.toString(16).padStart(6, '0')}`;
  const dark = '#262a35';
  const wheelBig = v.id === 'truck';
  const wheelR = wheelBig ? 15 : 12;
  const wheelY = 58 - (wheelBig ? 2 : 4);
  const rearX = 40;
  const frontX = 104;
  let bodyPath = '';
  let cabPath = '';
  let bar = '';
  if (v.id === 'buggy') {
    bodyPath = `<path d="M20 44 L34 34 L93 30 L116 42 L112 54 L26 56 Z" fill="${body}" stroke="${dark}" stroke-width="2.5"/>`;
    cabPath = `<path d="M46 32 L58 18 L80 18 L90 31 Z" fill="${dark}" stroke="${accent}" stroke-width="2"/>`;
    bar = `<path d="M48 31 L44 15 M82 29 L86 15 M44 15 L86 15" stroke="${dark}" stroke-width="3.5" fill="none"/>`;
  } else if (wheelBig) {
    bodyPath = `<path d="M17 42 L29 30 L84 27 L118 38 L116 53 L20 55 Z" fill="${body}" stroke="${dark}" stroke-width="2.5"/>`;
    cabPath = `<path d="M42 30 L50 14 L84 14 L94 29 Z" fill="${body}" stroke="${dark}" stroke-width="2.5"/>`;
    bar = `<path d="M51 15 L51 8 M85 14 L85 8 M51 8 L85 8" stroke="${dark}" stroke-width="3.5" fill="none"/>`;
  } else {
    bodyPath = `<path d="M18 43 L30 34 L96 32 L120 42 L116 54 L24 55 Z" fill="${body}" stroke="${dark}" stroke-width="2.5"/>`;
    cabPath = `<path d="M45 33 L52 18 L80 18 L89 32 Z" fill="${body}" stroke="${dark}" stroke-width="2.5"/>`;
    bar = `<path d="M51 18 L49 9 M84 18 L86 9 M49 9 L86 9" stroke="${dark}" stroke-width="3.5" fill="none"/>`;
  }
  return `
    <svg viewBox="0 0 140 80" role="img" aria-label="${v.name}">
      <ellipse cx="72" cy="68" rx="50" ry="6" fill="rgba(0,0,0,0.28)"/>
      <circle cx="${rearX}" cy="${wheelY}" r="${wheelR}" fill="${dark}" stroke="#11141b" stroke-width="2"/>
      <circle cx="${frontX}" cy="${wheelY}" r="${wheelR}" fill="${dark}" stroke="#11141b" stroke-width="2"/>
      <circle cx="${rearX}" cy="${wheelY}" r="${wheelR * 0.46}" fill="${accent}"/>
      <circle cx="${frontX}" cy="${wheelY}" r="${wheelR * 0.46}" fill="${accent}"/>
      ${bodyPath}
      ${cabPath}
      <path d="M94 24 L112 38" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>
      ${bar}
      <circle cx="67" cy="25" r="5.6" fill="#e0a878"/>
      <path d="M61 25 A6 6 0 0 1 73 25 L73 22 L61 22 Z" fill="${accent}"/>
      <rect x="68" y="23" width="5" height="3" rx="1.2" fill="#252833"/>
      <rect x="112" y="41" width="5" height="4" rx="1" fill="#fff0b8"/>
      <rect x="20" y="47" width="6" height="3" rx="1" fill="#ff6b5a"/>
    </svg>`;
}

function renderGarage() {
  garageListEl.innerHTML = VEHICLES.map((v) => {
    const owned = save.owned.includes(v.id);
    const selected = save.vehicle === v.id;
    const canAfford = save.coins >= v.price;
    let action;
    if (selected) action = `<button class="vehicle-btn selected-btn" type="button" disabled>SELECTED</button>`;
    else if (owned) action = `<button class="vehicle-btn owned" type="button" data-select="${v.id}">SELECT</button>`;
    else action = `<button class="vehicle-btn" type="button" data-buy="${v.id}" ${canAfford ? '' : 'disabled'}>UNLOCK</button>`;
    const price = owned ? '' : `<div class="vehicle-price"><span class="coin-icon small"></span>${v.price}</div>`;
    const stats = [
      ['POWER', v.stats.power],
      ['GRIP', v.stats.grip],
      ['LIFT', v.stats.weight]
    ].map(([label, value]) => `<div class="vstat"><span>${label}</span><div class="vbar"><i style="width:${Math.round(value * 100)}%"></i></div></div>`).join('');
    return `
      <article class="vehicle-card ${selected ? 'selected' : ''} ${owned ? '' : 'locked'}">
        <div class="vehicle-art">${vehicleArt(v)}</div>
        <div class="vehicle-info">
          <div class="vehicle-name">${v.name}</div>
          <div class="vehicle-sub">${v.tagline}</div>
          <div class="vehicle-stats">${stats}</div>
        </div>
        <div class="vehicle-action">
          ${price}
          ${action}
        </div>
      </article>`;
  }).join('');
  garageCoinsEl.textContent = save.coins;
}

function openGarage() {
  audio.init();
  audio.click();
  setState('garage');
  setOverlay(menuEl, false);
  setOverlay(gameoverEl, false);
  setOverlay(garageEl, true);
  setHint(false);
  car.reset(0);
  renderGarage();
}

function closeGarage() {
  audio.click();
  setState('menu');
  setOverlay(garageEl, false);
  setOverlay(menuEl, true);
  car.reset(0);
  world.resetRun();
  refreshMenuStats();
}

function chooseVehicle(id) {
  const v = VEHICLES.find((item) => item.id === id);
  if (!v) return;
  if (!save.owned.includes(id)) {
    if (save.coins < v.price) {
      audio.denied();
      showToast('NOT ENOUGH COINS');
      return;
    }
    save.coins -= v.price;
    save.owned.push(id);
    audio.buy();
    showToast(`${v.name.toUpperCase()} UNLOCKED`);
  } else {
    audio.click();
  }
  save.vehicle = id;
  persist();
  createCar();
  car.reset(0);
  renderGarage();
  refreshMenuStats();
}

garageListEl.addEventListener('click', (event) => {
  const buy = event.target.closest('[data-buy]');
  const select = event.target.closest('[data-select]');
  if (buy) chooseVehicle(buy.dataset.buy);
  else if (select) chooseVehicle(select.dataset.select);
});

/* ------------------------------------------------------------------ */
/*  Events                                                             */
/* ------------------------------------------------------------------ */

function handleLanding(airTime, airAngle, impact) {
  if (state !== 'playing') return;
  shake = Math.min(0.55, shake + impact * 0.018);
  if (impact > 2.2) {
    audio.land(impact);
    dustBurst(car.x, car.y - 0.9, 0, Math.min(18, 4 + Math.round(impact)), 1.5, 0.8);
  }
  const rotations = Math.floor((Math.abs(airAngle) + 0.9) / (Math.PI * 2));
  if (rotations > 0 && airTime > 0.35) {
    const reward = rotations * 20;
    run.coins += reward;
    const label = airAngle > 0 ? 'BACKFLIP' : 'FRONTFLIP';
    showCombo(`${label}${rotations > 1 ? ` x${rotations}` : ''}  +${reward}`);
    audio.flip(rotations);
    sparkBurst(car.x, car.y + 0.6, 0, 18 + rotations * 6, 0xffd45c);
    shake = Math.min(0.8, shake + 0.22);
  } else if (airTime > 1.45) {
    const reward = 5;
    run.coins += reward;
    showCombo(`BIG AIR  +${reward}`);
    audio.flip(1);
  }
}

function handleCrash() {
  if (state !== 'playing') return;
  setState('crashing');
  crashTimer = 0;
  shake = 1.1;
  flashEl.classList.remove('hit');
  void flashEl.offsetWidth;
  flashEl.classList.add('hit');
  audio.crash();
  audio.setRunning(false);
  dustBurst(car.x, car.y - 0.4, 0, 26, 2.2, 1.35);
  sparkBurst(car.x, car.y, 0, 16, 0xffb347);
  showCombo('WIPEOUT!');
}

function updateHud(force = false) {
  if (!run) return;
  const d = Math.floor(run.maxX);
  if (force || d !== lastDistance) {
    distanceEl.textContent = d;
    lastDistance = d;
  }
  const speed = Math.round(car.speed * 3.6);
  if (force || speed !== lastSpeed) {
    speedEl.textContent = speed;
    lastSpeed = speed;
  }
  const fuel = Math.max(0, Math.round(run.fuel));
  if (force || fuel !== lastFuel) {
    fuelFill.style.width = `${fuel}%`;
    fuelFill.classList.toggle('low', fuel < 22);
    lastFuel = fuel;
  }
  if (force || run.coins !== lastCoins) {
    coinEl.textContent = run.coins;
    lastCoins = run.coins;
  }
}

/* ------------------------------------------------------------------ */
/*  Input                                                              */
/* ------------------------------------------------------------------ */

function setGas(pressed) {
  audio.init();
  input.gas = pressed;
  $('gas-btn').classList.toggle('pressed', pressed);
}
function setBrake(pressed) {
  audio.init();
  input.brake = pressed;
  $('brake-btn').classList.toggle('pressed', pressed);
}

function bindPedal(button, setter) {
  button.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    try {
      button.setPointerCapture?.(event.pointerId);
    } catch {
      // Synthetic or already-released pointers cannot be captured.
    }
    setter(true);
  });
  const release = (event) => {
    event.preventDefault();
    setter(false);
  };
  button.addEventListener('pointerup', release);
  button.addEventListener('pointercancel', release);
  button.addEventListener('lostpointercapture', () => setter(false));
  button.addEventListener('contextmenu', (event) => event.preventDefault());
}
bindPedal($('gas-btn'), setGas);
bindPedal($('brake-btn'), setBrake);

window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (['arrowright', 'arrowleft', 'arrowup', 'arrowdown', ' '].includes(key)) event.preventDefault();
  if (key === 'arrowright' || key === 'd' || key === 'arrowup' || key === 'w' || key === ' ') setGas(true);
  if (key === 'arrowleft' || key === 'a' || key === 'arrowdown' || key === 's') setBrake(true);
  if (key === 'r' && (state === 'playing' || state === 'crashing' || state === 'results')) startRun();
  if (key === 'm') toggleMute();
  if ((key === 'enter' || key === ' ') && (state === 'menu' || state === 'results')) startRun();
  if (key === 'escape' && state === 'garage') closeGarage();
});
window.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase();
  if (key === 'arrowright' || key === 'd' || key === 'arrowup' || key === 'w' || key === ' ') setGas(false);
  if (key === 'arrowleft' || key === 'a' || key === 'arrowdown' || key === 's') setBrake(false);
});
window.addEventListener('blur', () => {
  setGas(false);
  setBrake(false);
});

/* ------------------------------------------------------------------ */
/*  Buttons                                                            */
/* ------------------------------------------------------------------ */

$('play-btn').addEventListener('click', startRun);
$('retry-btn').addEventListener('click', startRun);
$('garage-btn').addEventListener('click', openGarage);
$('garage-close').addEventListener('click', closeGarage);
$('result-menu-btn').addEventListener('click', goMenu);
$('mute-btn').addEventListener('click', toggleMute);
$('menu-mute').addEventListener('click', toggleMute);

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    input.gas = false;
    input.brake = false;
  }
});
window.addEventListener('contextmenu', (event) => {
  if (event.target.closest('.pedal, #scene')) event.preventDefault();
});

/* ------------------------------------------------------------------ */
/*  Camera                                                             */
/* ------------------------------------------------------------------ */

const camTarget = new THREE.Vector3(car.x + 2, car.y + 1.1, 0);
const desired = new THREE.Vector3();
const desiredLook = new THREE.Vector3();

function updateCamera(dt) {
  const aspect = window.innerWidth / window.innerHeight;
  const portrait = aspect < 0.8;
  let targetFov = portrait ? 54 : 46;
  let lookAhead = portrait ? 1.6 : 5.6;
  let back = portrait ? 6.4 : 7.4;
  let side = portrait ? 16.8 : 15.8;
  let height = portrait ? 4.5 : 4.35;

  if (state === 'menu' || state === 'garage') {
    const a = 0.34 + Math.sin(time * 0.16) * 0.06;
    const menu = state === 'menu';
    const radius = menu ? (portrait ? 25.5 : 19.5) : 11.2;
    desired.set(
      car.x + Math.sin(a) * radius,
      car.y + (menu ? (portrait ? 6.4 : 5.0) : 3.6),
      car.z + Math.cos(a) * radius
    );
    desired.y = Math.max(desired.y, landscapeHeight(desired.x, desired.z) + 1.4);
    if (menu) {
      desiredLook.set(car.x + (portrait ? -2.2 : -4.2), car.y + (portrait ? -1.5 : 0.9), 0);
    } else {
      desiredLook.set(car.x + (portrait ? 0.7 : 3.8), car.y + 1.15, 0);
    }
    const menuBlend = 1 - Math.exp(-dt * 2.4);
    camera.position.lerp(desired, menuBlend);
    camTarget.lerp(desiredLook, menuBlend);
    camera.lookAt(camTarget);
    targetFov = menu ? 45 : 44;
  } else {
    if (state === 'playing') {
      const sp = Math.min(car.speed, 28);
      side += sp * 0.055;
      back += sp * 0.025;
      targetFov += Math.min(5.5, sp * 0.14);
      height += Math.min(0.6, sp * 0.02);
    }
    if (state === 'crashing') {
      side -= 2.0;
      targetFov += 3.5;
    }
    desired.set(car.x - back, car.y + height, car.z + side);
    const groundHere = landscapeHeight(desired.x, desired.z);
    desired.y = Math.max(desired.y, groundHere + 2.3);
    desiredLook.set(car.x + lookAhead, car.y + 1.15, 0);

    const posBlend = 1 - Math.exp(-dt * 5.2);
    const lookBlend = 1 - Math.exp(-dt * 7.5);
    camera.position.lerp(desired, posBlend);
    camTarget.lerp(desiredLook, lookBlend);

    if (shake > 0.001) {
      camera.position.x += (Math.random() - 0.5) * shake * 0.55;
      camera.position.y += (Math.random() - 0.5) * shake * 0.55;
      camera.position.z += (Math.random() - 0.5) * shake * 0.25;
      shake *= Math.exp(-dt * 7.5);
    }
    camera.lookAt(camTarget);
  }

  camera.fov += (targetFov - camera.fov) * (1 - Math.exp(-dt * 4));
  camera.updateProjectionMatrix();
}

/* ------------------------------------------------------------------ */
/*  Main loop                                                          */
/* ------------------------------------------------------------------ */

const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const raw = clock.getDelta();
  const dt = Math.min(raw, 0.05);
  time += dt;

  if (state === 'playing' || state === 'crashing') {
    const simScale = state === 'crashing' ? 0.42 : 1;
    const simDt = Math.min(dt * simScale, 0.04);
    const drive = state === 'playing' && run.fuel > 0 && !car.crashed ? input : { gas: false, brake: false };
    car.update(simDt, drive, world);

    if (state === 'playing') {
      run.maxX = Math.max(run.maxX, car.x);

      const throttle = input.gas ? 1 : 0;
      run.fuel = Math.max(0, run.fuel - simDt * (0.58 + throttle * 1.18));
      if (run.fuel < 22 && !lowFuelWarned) {
        lowFuelWarned = true;
        showToast('LOW FUEL — FIND A CAN', 1800);
      }
      if (run.fuel <= 0 && outOfFuelAt === 0) {
        outOfFuelAt = time;
        showToast('OUT OF FUEL', 1800);
        audio.denied();
      }

      const pickup = world.collect(car.x, car.y);
      if (pickup.coins > 0) {
        run.coins += pickup.coins;
        coinStreak += pickup.coins;
        coinStreakTimer = 2.4;
        audio.coin(coinStreak);
        sparkBurst(car.x, car.y + 0.5, 0, 6 + pickup.coins * 2, 0xffd45c);
      }
      if (pickup.fuel > 0) {
        const before = run.fuel;
        run.fuel = Math.min(100, run.fuel + pickup.fuel);
        if (run.fuel > before) {
          audio.fuel();
          showCombo(`+${Math.round(run.fuel - before)} FUEL`);
          sparkBurst(car.x, car.y + 0.6, 0, 12, 0x8fe1a4);
        }
      }

      if (outOfFuelAt > 0) {
        if (car.speed < 1.1) outOfFuelTimer += dt;
        if (outOfFuelTimer > 1.1 || time - outOfFuelAt > 8) finishRun('fuel');
      }

      if (time > hintUntil) setHint(false);

      // Continuous wheel dust and exhaust puffs.
      dustTimer -= dt;
      if (car.contactCount > 0 && car.speed > 4 && dustTimer <= 0) {
        dustTimer = 0.045;
        const bx = car.x - 1.2 - Math.random() * 0.5;
        const by = terrainHeight(bx);
        dust.spawn(
          bx,
          by + 0.18,
          (Math.random() - 0.5) * 1.1,
          -1.2 - Math.random() * 1.6,
          0.7 + Math.random() * 1.1,
          (Math.random() - 0.5) * 1.2,
          0.45 + Math.random() * 0.35,
          0xc59a6a,
          0.5 + Math.random() * 0.5
        );
      }
      if (input.gas && car.speed < 12) {
        smokeTimer -= dt;
        if (smokeTimer <= 0) {
          smokeTimer = 0.14;
          smoke.spawn(
            car.x - 1.6,
            car.y - 0.15,
            -0.4,
            -1.2,
            0.7,
            0.1,
            0.7,
            0x8b7f72,
            0.6
          );
        }
      }
      if (coinStreakTimer > 0) {
        coinStreakTimer -= dt;
        if (coinStreakTimer <= 0) coinStreak = 0;
      }
    } else {
      crashTimer += dt;
      if (crashTimer > 1.5) finishRun('crash');
    }
  }

  world.update(car.x, dt);
  dust.update(dt);
  sparks.update(dt);
  smoke.update(dt);
  if (state !== 'menu' && state !== 'garage') updateCamera(dt);
  else updateCamera(dt);
  updateHud();

  const currentThrottle = state === 'playing' && run.fuel > 0 ? (input.gas ? 1 : input.brake ? -0.7 : 0) : 0;
  audio.update(car.speed, currentThrottle, car.contactCount === 0);

  renderer.render(scene, camera);
}

/* ------------------------------------------------------------------ */
/*  Resize and boot                                                    */
/* ------------------------------------------------------------------ */

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 150));

applyMute();
refreshMenuStats();
setHint(false);
setState('menu');
setOverlay(menuEl, true);
updateHud(true);
dust.update(0);
frame();

window.__ridgeRush = {
  get state() { return state; },
  get car() { return car; },
  get run() { return run; },
  get save() { return save; },
  world,
  renderer,
  scene,
  camera,
  startRun,
  finishRun,
  goMenu
};
