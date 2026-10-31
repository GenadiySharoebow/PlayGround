import * as THREE from 'three';
import { CARS, EVENTS, QUALITY } from './config.js';
import { World, WORLD_HALF } from './world.js';
import { Vehicle, AICar } from './vehicle.js';
import { Effects } from './effects.js';
import { AudioEngine } from './audio.js';
import { Path3D } from './path.js';
import { clamp, damp, formatTime, formatNumber, lerp, smoothstep } from './utils.js';

const $ = (id) => document.getElementById(id);
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class Game {
  constructor() {
    this.state = 'loading';
    this.paused = true;
    this.starting = false;
    this.overlay = null;
    this.selectedIndex = 0;
    this.garageSelection = 0;
    this.cameraMode = 0;
    this.keys = new Set();
    this.touch = { left: false, right: false, gas: false, brake: false, handbrake: false };
    this.elapsed = 0;
    this.menuAngle = 0.62;
    this.cameraSnapped = false;
    this.skillPoints = 0;
    this.skillTimer = 0;
    this.skillLabel = 'DRIFT';
    this.smashCount = 0;
    this.nearBeacon = null;
    this.race = null;
    this.lastEvent = null;
    this.hudAccumulator = 0;
    this.minimapAccumulator = 0;
    this.fadeTimer = null;
    this.xp = Number(localStorage.getItem('apex-xp') || 220);
    this.credits = Number(localStorage.getItem('apex-credits') || 45000);
    this.soundEnabled = localStorage.getItem('apex-sound') !== 'off';
    this.isCoarse = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 800;
    this.qualityKey = this.isCoarse ? 'medium' : 'high';
    this.quality = { ...QUALITY[this.qualityKey], terrainSegments: this.isCoarse ? 220 : 300 };
    this.dom = {};
    this.initDom();
  }

  initDom() {
    const ids = [
      'loading', 'loading-progress', 'loading-label', 'loading-percent', 'menu', 'hud',
      'car-name', 'car-brand', 'car-class', 'car-stats', 'car-index', 'car-strip', 'start-button',
      'garage-button', 'sound-toggle', 'sound-label', 'speed', 'gear', 'speed-arc', 'hud-car-name',
      'hud-car-brand', 'hud-car-class', 'minimap', 'map-coords', 'event-type', 'event-name',
      'race-clock', 'race-lap', 'race-time', 'race-pos', 'checkpoint-hint', 'countdown',
      'interact-prompt', 'events-button', 'map-button', 'pause-button', 'events-panel',
      'event-list', 'map-panel', 'world-map', 'pause-panel', 'resume-button', 'garage-pause-button',
      'restart-button', 'time-slider', 'time-label', 'quality-select', 'volume-slider',
      'volume-label', 'results-panel', 'result-title', 'result-time', 'result-standings',
      'result-xp', 'result-credits', 'result-close', 'result-retry', 'garage-panel',
      'garage-grid', 'garage-confirm', 'fade', 'speed-lines', 'skill-chain', 'skill-points',
      'skill-label', 'toast-wrap', 'level', 'xp-fill', 'xp-value', 'mobile-controls',
    ];
    for (const id of ids) this.dom[id] = $(id);
  }

  async boot() {
    this.setLoading(4, 'Запускаем движок');
    await nextFrame();
    this.setupRenderer();
    this.setLoading(16, 'Генерируем рельеф');
    await nextFrame();
    this.world = new World(this.scene, this.renderer, this.quality);
    this.setLoading(68, 'Собираем автомобили');
    await nextFrame();
    this.effects = new Effects(this.scene);
    this.audio = new AudioEngine();
    this.audio.setEnabled(this.soundEnabled);
    this.audio.setVolume(Number(localStorage.getItem('apex-volume') || 0.65));
    this.createCarAtMenu();
    this.buildCarStrip();
    this.buildGarageGrid();
    this.buildEventList();
    this.bindUI();
    this.applyCarUI();
    this.setLoading(92, 'Расставляем фестиваль');
    await nextFrame();
    this.world.setTime(this.world.timeOfDay);
    this.snapMenuCamera();
    this.setLoading(100, 'Готово');
    await delay(380);
    this.dom.loading.classList.add('done');
    this.dom.menu.classList.remove('is-hidden');
    this.state = 'menu';
    this.paused = false;
    this.cameraSnapped = false;
    this.clock = new THREE.Clock();
    this.renderer.setAnimationLoop(() => this.animate());
    setTimeout(() => this.dom.loading.remove(), 900);
  }

  setLoading(value, label) {
    if (this.dom['loading-progress']) this.dom['loading-progress'].style.width = `${value}%`;
    if (this.dom['loading-percent']) this.dom['loading-percent'].textContent = `${value}%`;
    if (label && this.dom['loading-label']) this.dom['loading-label'].textContent = label;
  }

  setupRenderer() {
    const canvas = $('game');
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.quality.pixelRatio));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = this.quality.shadows;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 7000);
    this.camera.position.set(20, 15, 35);
    this.clock = new THREE.Clock();
    window.addEventListener('resize', () => this.onResize());
  }

  onResize() {
    if (!this.renderer || !this.camera) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.quality.pixelRatio));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  createCarAtMenu() {
    if (this.playerCar) {
      this.scene.remove(this.playerCar.group);
    }
    const config = CARS[this.selectedIndex];
    this.playerCar = new Vehicle(this.scene, config, this.world);
    const spawn = this.world.menuSpawn;
    this.playerCar.spawn(spawn.x, spawn.z, spawn.yaw, spawn.y);
    this.playerCar.position.y = spawn.y;
    this.playerCar.setNight(this.world.nightFactor);
    this.playerCar.syncVisual();
    this.applyCarUI();
  }

  replaceCar(preserve = false) {
    const old = this.playerCar;
    const position = old ? old.position.clone() : null;
    const yaw = old ? old.yaw : 0;
    const velocity = old ? old.velocity.clone() : null;
    if (old) this.scene.remove(old.group);
    this.playerCar = new Vehicle(this.scene, CARS[this.selectedIndex], this.world);
    if (preserve && position) {
      this.playerCar.spawn(position.x, position.z, yaw, position.y - 0.03);
      this.playerCar.velocity.copy(velocity);
      this.playerCar.syncVisual();
    } else {
      const spawn = this.world.menuSpawn;
      this.playerCar.spawn(spawn.x, spawn.z, spawn.yaw, spawn.y);
      this.playerCar.position.y = spawn.y;
      this.playerCar.syncVisual();
    }
    this.playerCar.setNight(this.world.nightFactor);
    this.applyCarUI();
  }

  selectCar(index, preserve = this.state === 'playing') {
    this.selectedIndex = clamp(index, 0, CARS.length - 1);
    this.garageSelection = this.selectedIndex;
    this.replaceCar(preserve);
    this.buildCarStrip();
    this.buildGarageGrid();
    this.applyCarUI();
  }

  buildCarStrip() {
    const strip = this.dom['car-strip'];
    if (!strip) return;
    strip.innerHTML = '';
    CARS.forEach((car, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `car-swatch${index === this.selectedIndex ? ' active' : ''}`;
      button.style.setProperty('--swatch', `#${car.color.toString(16).padStart(6, '0')}`);
      button.title = car.name;
      button.setAttribute('aria-label', car.name);
      button.addEventListener('click', () => {
        this.audio?.click();
        this.selectCar(index, false);
      });
      strip.appendChild(button);
    });
  }

  applyCarUI() {
    const car = CARS[this.selectedIndex];
    if (!car || !this.dom['car-name']) return;
    this.dom['car-name'].textContent = car.name;
    this.dom['car-brand'].textContent = `${car.brand} · ${car.drive}`;
    this.dom['car-class'].textContent = car.cls;
    this.dom['car-index'].textContent = String(this.selectedIndex + 1).padStart(2, '0');
    this.dom['hud-car-name'].textContent = car.name;
    this.dom['hud-car-brand'].textContent = `${car.brand} · ${car.drive}`;
    this.dom['hud-car-class'].textContent = car.cls;
    const stats = [
      ['СКОРОСТЬ', car.stats.speed],
      ['РАЗГОН', car.stats.accel],
      ['УПРАВЛЕНИЕ', car.stats.handling],
      ['СЦЕПЛЕНИЕ', car.stats.grip],
    ];
    this.dom['car-stats'].innerHTML = stats.map(([label, value]) => `
      <div class="stat"><span>${label}</span><i><b style="width:${value}%"></b></i><em>${value}</em></div>
    `).join('');
    this.updateXPUI();
  }

  buildGarageGrid() {
    const grid = this.dom['garage-grid'];
    if (!grid) return;
    grid.innerHTML = '';
    CARS.forEach((car, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `garage-car${index === this.garageSelection ? ' active' : ''}`;
      button.style.setProperty('--swatch', `#${car.color.toString(16).padStart(6, '0')}`);
      button.innerHTML = `
        <div class="swatch"></div>
        <strong>${car.name}</strong>
        <small>${car.brand} · ${car.drive}</small>
        <em>${car.cls}</em>
      `;
      button.addEventListener('click', () => {
        this.audio?.click();
        this.garageSelection = index;
        this.buildGarageGrid();
      });
      grid.appendChild(button);
    });
  }

  buildEventList() {
    const list = this.dom['event-list'];
    if (!list) return;
    list.innerHTML = '';
    EVENTS.forEach((event) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'event-item';
      button.innerHTML = `
        <span class="event-icon">${event.icon}</span>
        <span><strong>${event.name}</strong><small>${event.desc}</small></span>
        <em>+${formatNumber(event.reward)} XP</em>
      `;
      button.addEventListener('click', () => {
        this.audio?.click();
        this.beginEvent(event);
      });
      list.appendChild(button);
    });
  }

  bindUI() {
    this.dom['start-button'].addEventListener('click', () => this.startGame());
    this.dom['garage-button'].addEventListener('click', () => this.openGarage());
    this.dom['garage-pause-button'].addEventListener('click', () => this.openGarage());
    this.dom['garage-confirm'].addEventListener('click', () => {
      this.audio?.click();
      this.selectCar(this.garageSelection, this.state === 'playing');
      this.closePanel('garage-panel');
      this.toast('АВТОМОБИЛЬ ВЫБРАН');
    });
    this.dom['sound-toggle'].addEventListener('click', async () => {
      this.soundEnabled = !this.soundEnabled;
      localStorage.setItem('apex-sound', this.soundEnabled ? 'on' : 'off');
      if (!this.audio.ready) await this.audio.init();
      this.audio.setEnabled(this.soundEnabled);
      this.dom['sound-label'].textContent = this.soundEnabled ? 'ЗВУК ВКЛ' : 'ЗВУК ВЫКЛ';
      this.audio.click();
    });
    this.dom['sound-label'].textContent = this.soundEnabled ? 'ЗВУК ВКЛ' : 'ЗВУК ВЫКЛ';
    this.dom['events-button'].addEventListener('click', () => this.openPanel('events-panel'));
    this.dom['map-button'].addEventListener('click', () => {
      this.drawWorldMap();
      this.openPanel('map-panel');
    });
    this.dom['pause-button'].addEventListener('click', () => this.openPanel('pause-panel'));
    this.dom['resume-button'].addEventListener('click', () => this.closePanel('pause-panel'));
    this.dom['restart-button'].addEventListener('click', () => {
      this.playerCar?.resetToRoad();
      this.cameraSnapped = false;
      this.closePanel('pause-panel');
      this.toast('ПОЗИЦИЯ СБРОШЕНА');
    });
    this.dom['result-close'].addEventListener('click', () => {
      this.closePanel('results-panel');
      this.cleanupRace();
    });
    this.dom['result-retry'].addEventListener('click', () => {
      const event = this.lastEvent;
      this.closePanel('results-panel');
      this.cleanupRace();
      if (event) this.beginEvent(event);
    });
    for (const button of document.querySelectorAll('[data-close]')) {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-close');
        if (id === 'garage-panel') this.closePanel(id);
        else this.closePanel(id);
      });
    }
    this.dom['time-slider'].addEventListener('input', (e) => {
      const value = Number(e.target.value);
      this.world.setTime(value);
      this.dom['time-label'].textContent = this.formatClock(value);
    });
    this.dom['quality-select'].addEventListener('change', (e) => this.setQuality(e.target.value));
    this.dom['volume-slider'].addEventListener('input', (e) => {
      const value = Number(e.target.value);
      this.audio.setVolume(value);
      localStorage.setItem('apex-volume', String(value));
      this.dom['volume-label'].textContent = `${Math.round(value * 100)}%`;
    });
    this.dom['volume-slider'].value = String(Number(localStorage.getItem('apex-volume') || 0.65));
    this.dom['volume-label'].textContent = `${Math.round(Number(this.dom['volume-slider'].value) * 100)}%`;
    this.dom['time-slider'].value = String(this.world.timeOfDay);
    this.dom['time-label'].textContent = this.formatClock(this.world.timeOfDay);
    this.dom['quality-select'].value = this.qualityKey;

    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    window.addEventListener('keyup', (e) => this.onKeyUp(e));
    window.addEventListener('blur', () => this.keys.clear());

    for (const button of document.querySelectorAll('.mobile-controls [data-control]')) {
      const control = button.getAttribute('data-control');
      const set = (value, event) => {
        event.preventDefault();
        this.touch[control] = value;
        button.classList.toggle('active', value);
      };
      button.addEventListener('pointerdown', (event) => {
        button.setPointerCapture?.(event.pointerId);
        set(true, event);
      });
      for (const type of ['pointerup', 'pointercancel', 'pointerleave']) {
        button.addEventListener(type, (event) => set(false, event));
      }
      button.addEventListener('contextmenu', (event) => event.preventDefault());
    }
    window.addEventListener('contextmenu', (e) => {
      if (e.target.closest('.mobile-controls')) e.preventDefault();
    });
    window.addEventListener('touchmove', (e) => {
      if (e.target.closest('.mobile-controls')) e.preventDefault();
    }, { passive: false });
  }

  onKeyDown(event) {
    const code = event.code;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(code)) event.preventDefault();
    if (event.repeat) return;
    this.keys.add(code);
    if (code === 'Escape') {
      if (this.overlay) {
        const id = this.overlay;
        if (id === 'results-panel') {
          this.closePanel(id);
          this.cleanupRace();
        } else {
          this.closePanel(id);
        }
      } else if (this.state === 'playing') {
        this.openPanel('pause-panel');
      }
      return;
    }
    if (this.state === 'menu') {
      if (code === 'Enter' || code === 'NumpadEnter') this.startGame();
      return;
    }
    if (this.state !== 'playing') return;
    if (this.overlay) return;
    if (code === 'KeyC') {
      this.cameraMode = (this.cameraMode + 1) % 3;
      this.toast(['ПОГОНЯ', 'БЛИЗКО', 'БАМПЕР'][this.cameraMode]);
    } else if (code === 'KeyM') {
      this.drawWorldMap();
      this.openPanel('map-panel');
    } else if (code === 'KeyR') {
      this.playerCar?.resetToRoad();
      this.cameraSnapped = false;
      this.toast('ПОЗИЦИЯ СБРОШЕНА');
    } else if (code === 'KeyE') {
      if (this.nearBeacon && !this.race) {
        this.beginEvent(this.nearBeacon.event);
      }
    } else if (code === 'KeyH') {
      this.audio?.beep(300, 0.28, 0.04);
    } else if (code === 'KeyT') {
      this.world.setTime((this.world.timeOfDay + 2) % 24);
      this.dom['time-slider'].value = String(this.world.timeOfDay);
      this.dom['time-label'].textContent = this.formatClock(this.world.timeOfDay);
    }
  }

  onKeyUp(event) {
    this.keys.delete(event.code);
  }

  formatClock(value) {
    const h = Math.floor(value) % 24;
    const m = Math.floor((value % 1) * 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  async startGame() {
    if (this.state !== 'menu' || this.starting) return;
    this.starting = true;
    await this.audio.init();
    this.audio.setEnabled(this.soundEnabled);
    this.audio.chord([392, 523, 659], 0.45);
    this.fade(true);
    await delay(430);
    this.state = 'playing';
    this.paused = false;
    this.dom.menu.classList.add('is-hidden');
    this.dom.hud.classList.remove('is-hidden');
    this.dom.fade.classList.remove('show');
    const path = this.world.roadPaths.find((p) => p.id === 'circuit');
    const sample = path.sample(path.length - 10);
    this.playerCar.spawn(sample.x, sample.z, Math.atan2(sample.tx, sample.tz));
    this.playerCar.setNight(this.world.nightFactor);
    this.cameraSnapped = false;
    this.updateCamera(0.016, true);
    this.updateXPUI();
    this.toast('ДОБРО ПОЖАЛОВАТЬ НА ФЕСТИВАЛЬ HORIZON');
    setTimeout(() => this.toast('ДОЕДЬ ДО МАРКЕРА СОБЫТИЯ ИЛИ ОТКРОЙ «СОБЫТИЯ»'), 2200);
    this.starting = false;
  }

  fade(show) {
    this.dom.fade.classList.toggle('show', show);
  }

  animate() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.elapsed += dt;
    if (this.state === 'loading') {
      this.renderer.render(this.scene, this.camera);
      return;
    }
    if (this.state === 'menu') {
      this.updateMenu(dt);
      this.world.update(dt, this.playerCar.position, this.elapsed);
      this.effects.update(dt);
      this.renderer.render(this.scene, this.camera);
      return;
    }
    if (this.state === 'playing') {
      if (!this.paused) {
        this.updatePlaying(dt);
        this.world.update(dt, this.playerCar.position, this.elapsed);
        this.effects.update(dt);
        this.audio.update(this.playerCar, false);
      } else {
        this.audio.update(this.playerCar, true);
        this.effects.update(dt * 0.1);
      }
      this.updateHUD(dt);
      this.renderer.render(this.scene, this.camera);
    }
  }

  updateMenu(dt) {
    this.menuAngle += dt * 0.045;
    const car = this.playerCar;
    if (!car) return;
    const target = car.position.clone().add(new THREE.Vector3(0, 0.85, 0));
    const angle = this.menuAngle;
    const portrait = window.innerHeight > window.innerWidth * 1.1;
    const compact = window.innerHeight < 500;
    const distance = compact ? 12.8 : portrait ? 19.5 : 18.2;
    const desired = target.clone().add(new THREE.Vector3(
      Math.sin(angle) * distance,
      (compact ? 4.5 : portrait ? 6.6 : 6.2) + Math.sin(this.elapsed * 0.32) * 0.22,
      Math.cos(angle) * distance,
    ));
    this.camera.position.copy(desired);
    const look = target.clone().add(new THREE.Vector3(Math.cos(angle) * 1.1, 0.25, -Math.sin(angle) * 1.1));
    this.camera.lookAt(look);
    this.camera.fov = compact ? 50 : portrait ? 46 : 42;
    this.camera.updateProjectionMatrix();
    car.setNight(this.world.nightFactor);
    car.syncVisual();
  }

  snapMenuCamera() {
    this.menuAngle = 0.62;
    this.updateMenu(0);
  }

  getInput() {
    if (this.race && !this.race.running) {
      return { throttle: 0, brake: 0, steer: 0, handbrake: false };
    }
    const forward = this.keys.has('KeyW') || this.keys.has('ArrowUp') || this.touch.gas;
    const back = this.keys.has('KeyS') || this.keys.has('ArrowDown') || this.touch.brake;
    const left = this.keys.has('KeyA') || this.keys.has('ArrowLeft') || this.touch.left;
    const right = this.keys.has('KeyD') || this.keys.has('ArrowRight') || this.touch.right;
    const handbrake = this.keys.has('Space') || this.touch.handbrake;
    return {
      throttle: forward ? 1 : 0,
      brake: back ? 1 : 0,
      steer: (right ? 1 : 0) - (left ? 1 : 0),
      handbrake,
    };
  }

  updatePlaying(dt) {
    const car = this.playerCar;
    if (!car) return;
    const input = this.getInput();
    car.update(dt, input, this.world.timeOfDay);
    car.setNight(this.world.nightFactor);
    this.updateEffects(dt, car);
    this.updateSkill(dt, car);
    this.updateRace(dt);
    this.checkCollectibles();
    this.updateNearbyBeacon();
    this.updateCamera(dt);
    this.hudAccumulator += dt;
    this.minimapAccumulator += dt;
    if (this.hudAccumulator > 0.055) {
      this.updateHUD(this.hudAccumulator);
      this.hudAccumulator = 0;
    }
    if (this.minimapAccumulator > 0.055) {
      this.drawMinimap();
      this.minimapAccumulator = 0;
    }
  }

  updateEffects(dt, car) {
    if (!car.airborne && car.speedKmh > 4) {
      if (!car.onRoad && Math.random() < 0.55) {
        const color = car.surfaceGrip < 0.6 ? 0xc7b28a : 0xa89872;
        this.effects.dust(car.position, color, 1, 2.4);
      }
      if (car.drifting) {
        this.effects.smoke(car.position, car.onRoad ? 2 : 1);
      }
    }
    if (car.drifting && car.speedKmh > 18) {
      this.effects.skidTimer = (this.effects.skidTimer || 0) + dt;
      if (this.effects.skidTimer > 0.055) {
        this.effects.skidTimer = 0;
        const f = car.forward;
        const r = car.right;
        const rearZ = -car.dims.wheelbase / 2;
        const track = car.dims.track / 2;
        for (const side of [-1, 1]) {
          const x = car.position.x + f.x * rearZ + r.x * side * track;
          const z = car.position.z + f.z * rearZ + r.z * side * track;
          this.effects.addSkid(x, z, car.yaw, this.world.heightAt(x, z));
        }
      }
    }
    if (car.justLanded > 4) {
      this.effects.dust(car.position, 0xb7a178, 12, 6);
      this.audio.beep(90, 0.18, 0.025);
    }
  }

  updateSkill(dt, car) {
    const active = car.drifting || car.airborne;
    if (active) {
      this.skillTimer += dt;
      const gain = (car.speedKmh * 0.09 + (car.airborne ? 24 : 0)) * dt;
      this.skillPoints += gain;
      this.skillLabel = car.airborne ? 'AIR' : 'DRIFT';
      this.dom['skill-chain'].classList.remove('is-hidden');
      this.dom['skill-points'].textContent = Math.round(this.skillPoints);
      this.dom['skill-label'].textContent = this.skillLabel;
    } else if (this.skillTimer > 0) {
      this.skillTimer -= dt * 1.6;
      if (this.skillTimer <= 0) {
        if (this.skillPoints > 5) {
          const reward = Math.round(this.skillPoints);
          this.addXP(reward);
          this.toast(`SKILL CHAIN <b>+${reward} XP</b>`);
        }
        this.skillPoints = 0;
        this.dom['skill-chain'].classList.add('is-hidden');
      }
    }
  }

  checkCollectibles() {
    const smashed = this.world.checkBoards(this.playerCar.position);
    for (const board of smashed) {
      this.smashCount++;
      this.addXP(150);
      this.effects.burst(board.position, 0x6de7ff, 26, 8, 5);
      this.toast(`HORIZON BOARD <b>+150 XP</b> · ${this.smashCount} / ${this.world.smashables.length}`);
      this.audio.beep(880, 0.14, 0.05);
    }
  }

  updateNearbyBeacon() {
    if (this.race) {
      this.nearBeacon = null;
      this.dom['interact-prompt'].classList.add('is-hidden');
      return;
    }
    let best = null;
    let bestDist = 28;
    for (const beacon of this.world.beacons) {
      const d = Math.hypot(this.playerCar.position.x - beacon.position.x, this.playerCar.position.z - beacon.position.z);
      if (d < bestDist) {
        bestDist = d;
        best = beacon;
      }
    }
    this.nearBeacon = best;
    this.dom['interact-prompt'].classList.toggle('is-hidden', !best);
  }

  updateCamera(dt, snap = false) {
    const car = this.playerCar;
    if (!car) return;
    const speedRatio = clamp(car.speedKmh / CARS[this.selectedIndex].topSpeed, 0, 1);
    const portrait = window.innerHeight > window.innerWidth * 1.1;
    const f = car.forward;
    const r = car.right;
    let desired;
    let look;
    if (this.cameraMode === 2) {
      desired = car.position.clone().addScaledVector(f, 2.35).add(new THREE.Vector3(0, 1.12, 0));
      look = car.position.clone().addScaledVector(f, 24).add(new THREE.Vector3(0, 0.85, 0));
    } else {
      const close = this.cameraMode === 1;
      const dist = (close ? 5.2 : 7.2) + (portrait ? 4.2 : 0) + speedRatio * (close ? 0.6 : 2.2);
      const height = (close ? 1.55 : 2.45) + (portrait ? 1.0 : 0) + speedRatio * 0.35;
      desired = car.position.clone().addScaledVector(f, -dist).add(new THREE.Vector3(0, height, 0));
      look = car.position.clone().addScaledVector(f, 7 + speedRatio * 11).add(new THREE.Vector3(0, 1.15, 0));
    }
    if (snap || !this.cameraSnapped) {
      this.camera.position.copy(desired);
      this.cameraSnapped = true;
    } else {
      const lambda = this.cameraMode === 2 ? 24 : 6.5 + speedRatio * 4;
      this.camera.position.lerp(desired, 1 - Math.exp(-lambda * dt));
    }
    const ground = this.world.heightAt(this.camera.position.x, this.camera.position.z) + 1.2;
    if (this.camera.position.y < ground) this.camera.position.y = ground;
    if (this.cameraMode !== 2 && !car.onRoad && car.speedKmh > 20) {
      const shake = Math.min(0.09, car.speedKmh / 3200);
      this.camera.position.x += (Math.random() - 0.5) * shake;
      this.camera.position.y += (Math.random() - 0.5) * shake;
    }
    this.camera.lookAt(look);
    const targetFov = (this.cameraMode === 2 ? 64 : 54) + (portrait ? 3 : 0) + speedRatio * 11 + (car.drifting ? 2 : 0);
    this.camera.fov = damp(this.camera.fov, targetFov, 4, dt);
    this.camera.updateProjectionMatrix();
  }

  updateHUD(dt) {
    const car = this.playerCar;
    if (!car) return;
    this.dom.speed.textContent = Math.round(car.speedKmh);
    this.dom.gear.textContent = car.gear;
    const max = CARS[this.selectedIndex].topSpeed;
    const ratio = clamp(car.speedKmh / max, 0, 1);
    this.dom['speed-arc'].style.strokeDashoffset = String(235 - ratio * 235);
    this.dom['speed-lines'].style.opacity = String(clamp((ratio - 0.62) * 1.4, 0, 0.42));
    const x = Math.round(car.position.x);
    const z = Math.round(car.position.z);
    this.dom['map-coords'].textContent = `${x >= 0 ? 'E' : 'W'} ${String(Math.abs(x)).padStart(4, '0')} · ${z >= 0 ? 'S' : 'N'} ${String(Math.abs(z)).padStart(4, '0')}`;
    this.updateXPUI();
    if (this.race) this.updateRaceHUD();
  }

  updateXPUI() {
    if (!this.dom.level) return;
    const level = Math.floor(this.xp / 1000) + 1;
    const fill = ((this.xp % 1000) / 1000) * 100;
    this.dom.level.textContent = `УР. ${String(level).padStart(2, '0')}`;
    this.dom['xp-fill'].style.width = `${fill}%`;
    this.dom['xp-value'].textContent = `${formatNumber(this.xp % 1000)} / 1000`;
  }

  addXP(amount) {
    this.xp += Math.round(amount);
    localStorage.setItem('apex-xp', String(this.xp));
    this.updateXPUI();
  }

  addCredits(amount) {
    this.credits += Math.round(amount);
    localStorage.setItem('apex-credits', String(this.credits));
  }

  toast(html) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = html;
    this.dom['toast-wrap'].appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }

  setQuality(key) {
    this.qualityKey = key;
    const q = { ...QUALITY[key], terrainSegments: key === 'high' ? 300 : key === 'medium' ? 220 : 180 };
    this.quality = q;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, q.pixelRatio));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = q.shadows;
    this.world.sun.castShadow = q.shadows;
    this.world.sun.shadow.mapSize.set(q.shadowSize, q.shadowSize);
    this.toast(`КАЧЕСТВО: ${key === 'high' ? 'ВЫСОКОЕ' : key === 'medium' ? 'СРЕДНЕЕ' : 'НИЗКОЕ'}`);
  }

  openPanel(id) {
    if (!this.dom[id]) return;
    if (this.overlay && this.overlay !== id) {
      this.dom[this.overlay].classList.add('is-hidden');
    }
    this.overlay = id;
    this.paused = true;
    this.dom[id].classList.remove('is-hidden');
    this.audio?.click();
  }

  closePanel(id) {
    if (this.dom[id]) this.dom[id].classList.add('is-hidden');
    if (this.overlay === id) this.overlay = null;
    if (this.state === 'playing' && !document.querySelector('.overlay-panel:not(.is-hidden)')) {
      this.paused = false;
    }
  }

  openGarage() {
    this.garageSelection = this.selectedIndex;
    this.buildGarageGrid();
    this.openPanel('garage-panel');
  }

  async beginEvent(event) {
    if (this.state !== 'playing' || this.race) return;
    this.lastEvent = event;
    this.closeAllOverlays();
    this.fade(true);
    await delay(320);
    this.setupRace(event);
    this.fade(false);
  }

  setupRace(event) {
    this.cleanupRace();
    const path = new Path3D(event.route, {
      closed: event.closed,
      spacing: 3.6,
      heightAt: (x, z) => this.world.heightAt(x, z),
      smooth: 5,
    });
    this.race = {
      event,
      path,
      laps: event.laps,
      lap: 0,
      cpIndex: 0,
      gates: [],
      ai: [],
      countdown: 3.6,
      lastCount: 4,
      running: false,
      finished: false,
      startTime: 0,
      elapsed: 0,
    };

    const start = path.sample(0);
    const startLane = -3.0;
    const px = start.x + start.rx * startLane;
    const pz = start.z + start.rz * startLane;
    this.playerCar.spawn(px, pz, Math.atan2(start.tx, start.tz));
    this.playerCar.setNight(this.world.nightFactor);
    this.cameraSnapped = false;

    const configs = CARS.filter((c) => c.id !== CARS[this.selectedIndex].id)
      .sort((a, b) => b.stats.speed - a.stats.speed)
      .slice(0, 3);
    const lanes = [2.2, 5.4, -6.2];
    const total = path.length * (event.closed ? event.laps : 1);
    this.race.totalDistance = total;
    configs.forEach((config, index) => {
      const speed = clamp((config.topSpeed / 3.6) * (0.3 + event.aiSkill * 0.055), 19, 41);
      const ai = new AICar(this.scene, config, path, 0, lanes[index], speed, this.world);
      ai.baseSpeed = speed;
      this.race.ai.push(ai);
    });

    const gateCount = event.closed ? 6 : 5;
    for (let i = 0; i < gateCount; i++) {
      const distance = ((i + 1) / gateCount) * path.length;
      this.race.gates.push(this.createCheckpointGate(path, distance, i));
    }
    this.updateGateVisuals();
    this.dom['race-clock'].classList.remove('is-hidden');
    this.dom['checkpoint-hint'].classList.remove('is-hidden');
    this.dom['countdown'].classList.remove('is-hidden');
    this.dom['countdown'].textContent = '3';
    this.dom['event-type'].textContent = event.type;
    this.dom['event-name'].textContent = event.name;
    this.dom['interact-prompt'].classList.add('is-hidden');
    this.dom['race-lap'].textContent = `КРУГ 1 / ${event.laps}`;
    this.dom['race-time'].textContent = '00:00.00';
    this.dom['race-pos'].textContent = 'P1 / 4';
    this.audio.beep(440, 0.2, 0.06);
    this.toast(`СОБЫТИЕ: <b>${event.name}</b>`);
    this.updateRaceHUD();
  }

  createCheckpointGate(path, distance, index) {
    const s = path.sample(distance);
    const ground = this.world.heightAt(s.x, s.z);
    const width = this.race.event.width || 16;
    const group = new THREE.Group();
    group.position.set(s.x, ground, s.z);
    group.rotation.y = Math.atan2(s.tx, s.tz);
    const material = new THREE.MeshBasicMaterial({
      color: index === 0 ? 0x6de7ff : 0x6de7ff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sideMat = new THREE.MeshBasicMaterial({
      color: 0x6de7ff,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    for (const side of [-1, 1]) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.55, 8.2, 0.55), sideMat);
      pillar.position.set(side * (width / 2 + 1.6), 4.1, 0);
      group.add(pillar);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 0.35, 8), material);
      base.position.set(side * (width / 2 + 1.6), 0.2, 0);
      group.add(base);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(width + 4.2, 0.45, 0.55), material);
    beam.position.y = 8.15;
    group.add(beam);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.gateGlowTexture(),
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }));
    glow.scale.set(18, 10, 1);
    glow.position.y = 4.4;
    group.add(glow);
    this.scene.add(group);
    return {
      group,
      glow,
      materials: [material, sideMat],
      position: new THREE.Vector3(s.x, ground, s.z),
      distance,
    };
  }

  gateGlowTexture() {
    if (this._gateGlow) return this._gateGlow;
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(170,248,255,.9)');
    g.addColorStop(0.35, 'rgba(109,231,255,.25)');
    g.addColorStop(1, 'rgba(109,231,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    this._gateGlow = new THREE.CanvasTexture(canvas);
    this._gateGlow.colorSpace = THREE.SRGBColorSpace;
    return this._gateGlow;
  }

  updateRace(dt) {
    const race = this.race;
    if (!race || race.finished) return;
    if (!race.running) {
      race.countdown -= dt;
      const n = Math.max(0, Math.ceil(race.countdown));
      if (n !== race.lastCount) {
        race.lastCount = n;
        if (n > 0) {
          this.dom['countdown'].textContent = String(n);
          this.dom['countdown'].style.animation = 'none';
          void this.dom['countdown'].offsetWidth;
          this.dom['countdown'].style.animation = '';
          this.audio.beep(560, 0.12, 0.05);
        }
      }
      if (race.countdown <= 0) {
        race.running = true;
        race.startTime = this.elapsed;
        this.dom['countdown'].textContent = 'GO';
        this.audio.chord([523, 659, 784], 0.3);
        setTimeout(() => this.dom['countdown'].classList.add('is-hidden'), 850);
      }
      return;
    }
    race.elapsed += dt;
    race.ai.forEach((ai) => {
      ai.update(dt);
      if (!ai.finishTime && ai.totalDistance >= race.totalDistance) {
        ai.finishTime = race.elapsed;
      }
    });
    const gate = race.gates[race.cpIndex];
    if (gate) {
      const dx = this.playerCar.position.x - gate.position.x;
      const dz = this.playerCar.position.z - gate.position.z;
      const dy = this.playerCar.position.y - gate.position.y;
      if (dx * dx + dz * dz < 30 * 30 && Math.abs(dy) < 12) {
        race.cpIndex++;
        this.audio.beep(880, 0.1, 0.05);
        this.effects.burst(new THREE.Vector3(gate.position.x, gate.position.y + 3, gate.position.z), 0x6de7ff, 14, 5, 4);
        if (race.cpIndex >= race.gates.length) {
          race.cpIndex = 0;
          race.lap++;
          if (race.lap >= race.laps) {
            this.finishRace();
            return;
          }
          this.toast(`КРУГ ${race.lap + 1} / ${race.laps}`);
          this.audio.beep(660, 0.2, 0.05);
        }
        this.updateGateVisuals();
      }
    }
    this.updateRaceHUD();
  }

  updateGateVisuals() {
    const race = this.race;
    if (!race) return;
    race.gates.forEach((gate, index) => {
      const active = index === race.cpIndex;
      const pulse = active ? 1 + Math.sin(this.elapsed * 5) * 0.035 : 1;
      gate.group.scale.setScalar(pulse);
      for (const mat of gate.materials) mat.opacity = active ? 0.9 : 0.16;
      gate.glow.material.opacity = active ? 0.65 : 0.06;
    });
  }

  updateRaceHUD() {
    const race = this.race;
    if (!race) return;
    const time = race.running ? race.elapsed : 0;
    this.dom['race-time'].textContent = formatTime(time);
    this.dom['race-lap'].textContent = `КРУГ ${Math.min(race.lap + 1, race.laps)} / ${race.laps}`;
    const gate = race.gates[race.cpIndex];
    if (gate) {
      const d = Math.hypot(this.playerCar.position.x - gate.position.x, this.playerCar.position.z - gate.position.z);
      this.dom['checkpoint-hint'].innerHTML = `СЛЕДУЮЩИЙ ЧЕКПОИНТ <b>${Math.round(d)} М</b>`;
    }
    let place = 1;
    const playerProgress = race.lap * race.path.length + (race.cpIndex === 0 ? 0 : race.gates[race.cpIndex - 1].distance);
    for (const ai of race.ai) {
      const aiProgress = Math.min(ai.totalDistance, race.totalDistance);
      if (aiProgress > playerProgress) place++;
    }
    this.dom['race-pos'].textContent = `P${place} / ${race.ai.length + 1}`;
  }

  finishRace() {
    const race = this.race;
    if (!race || race.finished) return;
    race.finished = true;
    race.running = false;
    this.dom['countdown'].classList.add('is-hidden');
    const playerTime = race.elapsed;
    const entries = [{
      name: 'ВЫ',
      car: CARS[this.selectedIndex].name,
      time: playerTime,
      you: true,
    }];
    for (const ai of race.ai) {
      const estimate = ai.finishTime ?? (race.totalDistance / Math.max(ai.baseSpeed, 1)) + playerTime * 0.04;
      entries.push({ name: ai.config.name, car: ai.config.brand, time: estimate, you: false });
    }
    entries.sort((a, b) => a.time - b.time);
    const place = entries.findIndex((e) => e.you) + 1;
    const titles = ['ФИНИШ', 'ПОБЕДА', 'СЕРЕБРО', 'БРОНЗА'];
    this.dom['result-title'].textContent = titles[Math.min(place, 3)] || 'ФИНИШ';
    this.dom['result-time'].textContent = formatTime(playerTime);
    this.dom['result-standings'].innerHTML = entries.map((entry, index) => `
      <div class="standing${entry.you ? ' you' : ''}">
        <b>${index + 1}</b>
        <span>${entry.name}<small style="display:block;color:rgba(255,255,255,.35);font-size:7px;letter-spacing:.1em">${entry.car}</small></span>
        <em>${formatTime(entry.time)}</em>
      </div>
    `).join('');
    const reward = race.event.reward + (place === 1 ? 600 : place === 2 ? 300 : 0);
    const credits = race.event.credits + (place === 1 ? 5000 : 0);
    this.dom['result-xp'].textContent = formatNumber(reward);
    this.dom['result-credits'].textContent = formatNumber(credits);
    this.addXP(reward);
    this.addCredits(credits);
    this.audio.chord(place === 1 ? [523, 659, 784, 1046] : [392, 494, 587], 0.5);
    this.openPanel('results-panel');
    this.dom['race-clock'].classList.add('is-hidden');
    this.dom['checkpoint-hint'].classList.add('is-hidden');
  }

  cleanupRace() {
    const race = this.race;
    if (race) {
      for (const ai of race.ai) {
        this.scene.remove(ai.group);
      }
      for (const gate of race.gates) {
        this.scene.remove(gate.group);
      }
    }
    this.race = null;
    this.dom['race-clock'].classList.add('is-hidden');
    this.dom['checkpoint-hint'].classList.add('is-hidden');
    this.dom['countdown'].classList.add('is-hidden');
    this.dom['event-type'].textContent = 'СВОБОДНАЯ ЕЗДА';
    this.dom['event-name'].textContent = 'ФЕСТИВАЛЬ HORIZON';
  }

  closeAllOverlays() {
    for (const panel of document.querySelectorAll('.overlay-panel')) panel.classList.add('is-hidden');
    this.overlay = null;
    if (this.state === 'playing') this.paused = false;
  }

  drawMinimap() {
    const canvas = this.dom.minimap;
    if (!canvas || !this.world.mapCanvas || !this.playerCar) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const center = size / 2;
    const radius = center - 4;
    ctx.clearRect(0, 0, size, size);
    ctx.save();
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = '#0b1214';
    ctx.fillRect(0, 0, size, size);
    const px = ((this.playerCar.position.x + WORLD_HALF) / (WORLD_HALF * 2)) * 1000;
    const pz = ((this.playerCar.position.z + WORLD_HALF) / (WORLD_HALF * 2)) * 1000;
    const scale = 2.45;
    ctx.translate(center, center);
    ctx.scale(scale, scale);
    ctx.translate(-px, -pz);
    ctx.drawImage(this.world.mapCanvas, 0, 0);
    ctx.restore();

    const toScreen = (x, z) => {
      const mx = ((x + WORLD_HALF) / (WORLD_HALF * 2)) * 1000;
      const mz = ((z + WORLD_HALF) / (WORLD_HALF * 2)) * 1000;
      return { x: center + (mx - px) * scale, y: center + (mz - pz) * scale };
    };

    ctx.save();
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.clip();
    for (const beacon of this.world.beacons) {
      const p = toScreen(beacon.position.x, beacon.position.z);
      if (Math.hypot(p.x - center, p.y - center) > radius - 8) continue;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ff5a2a';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.6)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    for (const board of this.world.smashables) {
      if (!board.active) continue;
      const p = toScreen(board.position.x, board.position.z);
      if (Math.hypot(p.x - center, p.y - center) > radius - 6) continue;
      ctx.fillStyle = '#6de7ff';
      ctx.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
    }
    if (this.race) {
      const gate = this.race.gates[this.race.cpIndex];
      if (gate) {
        const p = toScreen(gate.position.x, gate.position.z);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.strokeStyle = '#6de7ff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    ctx.restore();

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(Math.PI - this.playerCar.yaw);
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(6, 7);
    ctx.lineTo(0, 4);
    ctx.lineTo(-6, 7);
    ctx.closePath();
    ctx.fillStyle = '#f5f1e8';
    ctx.fill();
    ctx.strokeStyle = 'rgba(10,12,16,.8)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = 'rgba(255,255,255,.65)';
    ctx.font = '700 10px "Manrope", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('N', center, 18);
  }

  drawWorldMap() {
    const canvas = this.dom['world-map'];
    if (!canvas || !this.world?.mapCanvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(this.world.mapCanvas, 0, 0, size, size);
    const toScreen = (x, z) => ({
      x: ((x + WORLD_HALF) / (WORLD_HALF * 2)) * size,
      y: ((z + WORLD_HALF) / (WORLD_HALF * 2)) * size,
    });
    for (const beacon of this.world.beacons) {
      const p = toScreen(beacon.position.x, beacon.position.z);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 9, 0, Math.PI * 2);
      ctx.fillStyle = '#ff5a2a';
      ctx.fill();
      ctx.strokeStyle = '#fff3e0';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = 'rgba(245,241,232,.75)';
      ctx.font = '700 12px "Manrope", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(beacon.event.name, p.x, p.y - 15);
    }
    for (const board of this.world.smashables) {
      if (!board.active) continue;
      const p = toScreen(board.position.x, board.position.z);
      ctx.fillStyle = '#6de7ff';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    if (this.playerCar) {
      const p = toScreen(this.playerCar.position.x, this.playerCar.position.z);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(Math.PI - this.playerCar.yaw);
      ctx.beginPath();
      ctx.moveTo(0, -14);
      ctx.lineTo(9, 10);
      ctx.lineTo(0, 6);
      ctx.lineTo(-9, 10);
      ctx.closePath();
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = '#ff5a2a';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }
  }
}
