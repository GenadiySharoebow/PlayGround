import '@fontsource/barlow/400.css'
import '@fontsource/barlow/500.css'
import '@fontsource/barlow/600.css'
import '@fontsource/barlow/700.css'
import '@fontsource/barlow-condensed/600.css'
import '@fontsource/barlow-condensed/700.css'
import '@fontsource/barlow-condensed/800.css'
import '@fontsource/barlow-condensed/800-italic.css'
import './style.css'

import * as THREE from 'three'
import { buildWorld, FESTIVAL, TOWN, VOLCANO, AIRFIELD, TIME_PRESETS } from './world.js'
import { CARS, buildCar, carStats } from './cars.js'
import { Vehicle } from './vehicle.js'
import { Effects } from './effects.js'
import { GameAudio } from './audio.js'

/* ------------------------------------------------------------------ */
/*  HORIZON LIBRE — bootstrap, camera direction, screens and HUD      */
/* ------------------------------------------------------------------ */

const $ = (sel) => document.querySelector(sel)
const clamp = THREE.MathUtils.clamp
const lerp = THREE.MathUtils.lerp

const SAVE_KEY = 'horizonLibreSaveV1'
const defaultSave = { carIndex: 0, time: 'golden', credits: 50000, skill: 0, muted: false, colors: {}, best: {} }
let save = { ...defaultSave }
try {
  const raw = localStorage.getItem(SAVE_KEY)
  if (raw) save = { ...defaultSave, ...JSON.parse(raw), colors: { ...(JSON.parse(raw).colors || {}) }, best: { ...(JSON.parse(raw).best || {}) } }
} catch (e) { /* private mode */ }
function persist() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)) } catch (e) { /* ignore */ }
}

const EVENTS = [
  {
    id: 'festival', name: 'Festival Circuit', sub: 'Городская петля у сцены', type: 'CIRCUIT', laps: 2,
    route: [[14, 108], [100, 30], [320, 100], [300, 290], [80, 335], [20, 155]],
    gold: 82, silver: 98, bronze: 122, reward: 8000,
    desc: 'Два круга вокруг фестиваля. Широкие повороты, толпа и неон.'
  },
  {
    id: 'coast', name: 'Coast Run', sub: 'Спуск к Пуэрто-Соль', type: 'SPRINT', laps: 1,
    route: [[170, 770], [-250, 1080], [-740, 1215], [-1110, 1090], [-1240, 760]],
    gold: 88, silver: 106, bronze: 132, reward: 9000,
    desc: 'Быстрый спуск по серпантину к океану. Держитесь асфальта.'
  },
  {
    id: 'volcano', name: 'Volcán Climb', sub: 'Подъём к кратеру', type: 'HILL CLIMB', laps: 1,
    route: [[520, 170], [700, -230], [805, -610], [848, -860], [835, -1030]],
    gold: 84, silver: 102, bronze: 128, reward: 10000,
    desc: 'Горный подъём с резкими перепадами. Нитро пригодится.'
  },
  {
    id: 'desert', name: 'Dune Dash', sub: 'Через дюны и кактусы', type: 'SPRINT', laps: 1,
    route: [[590, 810], [980, 725], [1270, 505], [1430, 130], [1390, -320]],
    gold: 78, silver: 94, bronze: 118, reward: 9500,
    desc: 'Песок, трамплины и одинокий асфальт. Полный привод решает.'
  },
  {
    id: 'jungle', name: 'Jungle Loop', sub: 'Серпантин в сельве', type: 'SPRINT', laps: 1,
    route: [[-740, 1215], [-865, 1485], [-570, 1690], [-190, 1600], [130, 1380], [170, 1080]],
    gold: 92, silver: 112, bronze: 140, reward: 11000,
    desc: 'Узкие повороты среди пальм. Тормозите до входа в поворот.'
  }
]

/* ----------------------------- state ------------------------------ */

const state = {
  mode: 'loading',
  previous: 'title',
  carIndex: clamp(save.carIndex | 0, 0, CARS.length - 1),
  timePreset: TIME_PRESETS[save.time] ? save.time : 'golden',
  credits: Math.max(0, Number(save.credits) || 50000),
  skillTotal: Math.max(0, Number(save.skill) || 0),
  muted: !!save.muted,
  touch: matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window,
  cameraMode: 'chase',
  hasDriven: false,
  race: null,
  started: false,
  dragging: false,
  menuRotation: 0.95,
  failCount: 0,
  renderScale: 1,
  fps: 60,
  quality: 'high'
}

let renderer, scene, camera, world, effects, vehicle, audio, menuCar
let menuLight, menuSpot, carFill
let clock, lastTime = 0, worldTime = 0
let camLook = new THREE.Vector3()
let camReady = false
let lastFrameTime = performance.now()
let fpsAccum = 0, fpsFrames = 0

const input = { throttle: 0, brake: 0, steer: 0, handbrake: false, boost: false }
const keys = Object.create(null)
const touchState = { left: false, right: false, gas: false, brake: false, handbrake: false, boost: false }
const ui = {}

let skill = { drifting: false, time: 0, banked: 0, popupTimer: 0 }
let minimapTimer = 0
let hudTimer = 0
let countdownShown = -1
let announceTimer = 0
let toastTimer = 0
let raceResultTimer = 0
let mapTimer = 0
let lastMph = -1
let lastSpeed = -1
let lastGear = ''
let lastRpm = -1
let lastNitro = -1

/* ----------------------------- helpers ---------------------------- */

const wait = (ms) => new Promise(r => setTimeout(r, ms))
const raf = () => new Promise(r => requestAnimationFrame(r))
const money = (n) => Math.round(n).toLocaleString('ru-RU')
const fmtTime = (s) => {
  if (!isFinite(s)) return '--:--.---'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  const ms = Math.floor((s % 1) * 1000)
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}.${String(ms).padStart(3, '0')}`
}
const fmtShort = (s) => s < 60 ? `${s.toFixed(0)} с` : `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`

function setLoad(pct, label) {
  $('#loadFill').style.width = `${pct}%`
  $('#loadPct').textContent = `${Math.round(pct)}%`
  if (label) $('#loadLabel').textContent = label
}

function show(el) { if (el) el.classList.remove('hidden') }
function hide(el) { if (el) el.classList.add('hidden') }

function announce(text, sub = '', ms = 2100) {
  ui.announceText.textContent = text
  ui.announceSub.textContent = sub
  show(ui.announce)
  clearTimeout(announceTimer)
  announceTimer = setTimeout(() => hide(ui.announce), ms)
}

function toast(text, sub = '', ms = 2000) {
  ui.toastText.textContent = text
  ui.toastSub.textContent = sub
  show(ui.toast)
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => hide(ui.toast), ms)
}

function skillPopup(text, multi = '') {
  ui.skillPopupText.textContent = text
  ui.skillMulti.textContent = multi
  show(ui.skillPopup)
  clearTimeout(skill.popupTimer)
  skill.popupTimer = setTimeout(() => hide(ui.skillPopup), 1500)
}

function getPaint(def) { return save.colors?.[def.id] ?? def.paint }
function selectedDef() { return CARS[state.carIndex] }
function selectedPaint() { return getPaint(selectedDef()) }

function applyClass(el, def) { el.textContent = `${def.klass} ${def.rating}` }

function renderStats(el, def, large = false) {
  const s = carStats(def)
  const labels = [['speed', 'СКОРОСТЬ'], ['accel', 'РАЗГОН'], ['handling', 'УПРАВЛЕНИЕ'], ['offroad', 'БЕЗДОРОЖЬЕ'], ['braking', 'ТОРМОЗА']]
  el.innerHTML = labels.map(([key, label]) => {
    const v = s[key]
    return `<div class="stat"><span>${label}</span><div class="bar">${Array.from({ length: 10 }, (_, i) => `<i class="${i < v ? 'on' : ''}"></i>`).join('')}</div><b>${v}</b></div>`
  }).join('')
}

function renderSwatches(el, def, paint) {
  el.innerHTML = ''
  for (const hex of def.accents) {
    const b = document.createElement('button')
    b.className = 'swatch' + (hex === paint ? ' active' : '')
    b.style.background = '#' + hex.toString(16).padStart(6, '0')
    b.title = 'Выбрать цвет'
    b.addEventListener('click', () => choosePaint(hex))
    el.appendChild(b)
  }
}

function updateTitleUI() {
  const def = selectedDef(), paint = getPaint(def)
  applyClass(ui.titleClass, def)
  ui.titleCarName.textContent = `${def.brand} ${def.name}`
  ui.titleCarYear.textContent = `${def.year} · ${def.drivetrain} · ${def.power} HP`
  ui.titleTag.textContent = def.tag
  renderStats(ui.titleStats, def)
  renderSwatches(ui.titleSwatches, def, paint)
}

function updateGarageUI() {
  const def = selectedDef(), paint = getPaint(def)
  applyClass(ui.garageClass, def)
  ui.garageName.textContent = `${def.brand} ${def.name}`
  ui.garageTag.textContent = def.tag
  ui.garageMeta.textContent = `${def.year} · ${def.drivetrain} · ${def.power} HP · ${def.klass} ${def.rating}`
  ui.garageIndex.textContent = String(state.carIndex + 1).padStart(2, '0')
  renderStats(ui.garageStats, def, true)
  renderSwatches(ui.garageSwatches, def, paint)
  ui.specPower.textContent = `${def.power} HP`
  ui.specWeight.textContent = `${money(def.weight)} KG`
  ui.specSpeed.textContent = `${def.topSpeed} КМ/Ч`
  ui.specDrive.textContent = def.drivetrain
  updateCarList()
  updateHudCar()
}

function updateCarList() {
  if (!ui.carList) return
  for (const item of ui.carList.children) {
    item.classList.toggle('active', Number(item.dataset.index) === state.carIndex)
  }
}

function updateHudCar() {
  const def = selectedDef()
  applyClass(ui.hudCarClass, def)
  ui.hudCarName.textContent = `${def.brand} ${def.name}`
  ui.hudSurface.textContent = `${surfaceLabel(vehicle?.surface || 'road')} · ${def.drivetrain}`
}

function refreshMenuCar() {
  if (!menuCar && !scene) return
  const def = selectedDef(), paint = selectedPaint()
  const pos = world ? world.festival.platformPosition.clone() : new THREE.Vector3()
  if (menuCar) {
    scene.remove(menuCar.group)
    menuCar.group.traverse(o => { if (o.isMesh && o.geometry) o.geometry.dispose?.() })
  }
  menuCar = buildCar(def, paint)
  menuCar.group.position.copy(pos)
  menuCar.group.rotation.y = state.menuRotation
  menuCar.group.scale.setScalar(1.01)
  menuCar.group.visible = !(state.mode === 'driving' || state.mode === 'pause' || state.mode === 'map' || state.mode === 'results')
  scene.add(menuCar.group)
  if (!menuLight) {
    menuLight = new THREE.PointLight(0xffb184, 120, 34, 1.7)
    menuLight.position.copy(pos).add(new THREE.Vector3(3, 6, 4))
    scene.add(menuLight)
    menuSpot = new THREE.SpotLight(0x55e9ff, 180, 50, 0.6, 0.65, 1.4)
    menuSpot.position.copy(pos).add(new THREE.Vector3(-10, 12, -7))
    menuSpot.target.position.copy(pos)
    scene.add(menuSpot); scene.add(menuSpot.target)
  } else {
    menuLight.position.copy(pos).add(new THREE.Vector3(3, 6, 4))
    menuSpot.position.copy(pos).add(new THREE.Vector3(-10, 12, -7))
    menuSpot.target.position.copy(pos)
  }
}

function choosePaint(hex) {
  const def = selectedDef()
  save.colors[def.id] = hex
  persist()
  refreshMenuCar()
  updateTitleUI()
  updateGarageUI()
  audio?.click(900)
}

function selectCar(index, silent = false) {
  index = (index + CARS.length) % CARS.length
  if (index === state.carIndex) return
  state.carIndex = index
  save.carIndex = index
  persist()
  refreshMenuCar()
  updateTitleUI()
  updateGarageUI()
  if (!silent) audio?.click(660)
}

/* ---------------------------- build UI ---------------------------- */

function bindUI() {
  const ids = [
    'loading', 'title', 'hud', 'garage', 'mapscreen', 'pause', 'results',
    'btnPlay', 'btnGarageTitle', 'btnEventsTitle', 'btnCycleCar', 'btnTimeTitle', 'btnSoundTitle',
    'titleClass', 'titleCarName', 'titleCarYear', 'titleTag', 'titleStats', 'titleSwatches', 'timeLabelTitle',
    'garageClass', 'garageName', 'garageTag', 'garageMeta', 'garageStats', 'garageSwatches', 'garageIndex',
    'specPower', 'specWeight', 'specSpeed', 'specDrive', 'carList', 'garage',
    'btnGarageClose', 'btnGarageBack', 'btnGarageDrive',
    'hudCarClass', 'hudCarName', 'hudSurface', 'credits', 'skillTotal', 'speedNumber', 'mphNumber',
    'gearNumber', 'rpmBar', 'nitroFill', 'driftBadge', 'driftPoints', 'minimap', 'compass',
    'eventChip', 'hudEventName', 'hudEventSub', 'racePanel', 'raceName', 'raceTime', 'raceLap', 'raceCp',
    'raceProgress', 'checkpointArrow', 'cpDistance', 'announce', 'announceText', 'announceSub',
    'countdown', 'toast', 'toastText', 'toastSub', 'skillPopup', 'skillPopupText', 'skillMulti',
    'wrongWay', 'touchControls', 'btnPauseMobile', 'btnResume', 'btnPauseGarage', 'btnPauseMap',
    'btnReset', 'timeTabs', 'btnMutePause', 'pauseLocation', 'btnRetry', 'btnFreeRoam',
    'medalIcon', 'resultTitle', 'resultTime', 'resultGold', 'resultYour', 'resultReward',
    'btnMapClose', 'btnMapClose2', 'btnMapGarage', 'bigMap', 'bigMapMarkers', 'eventList', 'mapLegend',
    'btnMapGarage', 'rotateHint'
  ]
  for (const id of ids) ui[id] = document.getElementById(id)

  // car list
  ui.carList.innerHTML = ''
  CARS.forEach((c, i) => {
    const b = document.createElement('button')
    b.className = 'car-item'
    b.dataset.index = i
    b.innerHTML = `<span class="num">${String(i + 1).padStart(2, '0')}</span><span><b>${c.brand} ${c.name}</b><small>${c.year} · ${c.drivetrain} · ${c.tag}</small></span><span class="kl">${c.klass} ${c.rating}</span>`
    b.addEventListener('click', () => selectCar(i))
    ui.carList.appendChild(b)
  })

  ui.btnPlay.addEventListener('click', () => startGameplay())
  ui.btnGarageTitle.addEventListener('click', () => openGarage('title'))
  ui.btnEventsTitle.addEventListener('click', () => openMap('title'))
  ui.btnCycleCar.addEventListener('click', () => selectCar(state.carIndex + 1))
  ui.btnTimeTitle.addEventListener('click', () => cycleTime())
  ui.btnSoundTitle.addEventListener('click', toggleMute)
  ui.btnGarageClose.addEventListener('click', closeGarage)
  ui.btnGarageBack.addEventListener('click', closeGarage)
  ui.btnGarageDrive.addEventListener('click', () => { hide(ui.garage); startGameplay() })
  ui.btnPauseMobile.addEventListener('click', () => openPause())
  ui.btnResume.addEventListener('click', resumeFromPause)
  ui.btnPauseGarage.addEventListener('click', () => openGarage('driving'))
  ui.btnPauseMap.addEventListener('click', () => openMap('driving'))
  ui.btnReset.addEventListener('click', () => {
    vehicle?.resetToRoad()
    resumeFromPause()
    toast('МАШИНА ВОЗВРАЩЕНА НА ТРАССУ', 'R · СБРОС')
  })
  ui.btnMutePause.addEventListener('click', toggleMute)
  ui.btnRetry.addEventListener('click', () => {
    const ev = state.race?.event || EVENTS[0]
    hide(ui.results); startRace(ev)
  })
  ui.btnFreeRoam.addEventListener('click', exitResults)
  ui.btnMapClose.addEventListener('click', closeMap)
  ui.btnMapClose2.addEventListener('click', closeMap)
  ui.btnMapGarage.addEventListener('click', () => openGarage('driving'))

  ui.timeTabs.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setTime(b.dataset.time)))
  ui.touchControls.querySelectorAll('[data-touch]').forEach(b => {
    const key = b.dataset.touch
    const on = (e) => { e.preventDefault(); touchState[key] = true; b.classList.add('active'); b.setPointerCapture?.(e.pointerId) }
    const off = (e) => { e.preventDefault(); touchState[key] = false; b.classList.remove('active') }
    b.addEventListener('pointerdown', on)
    b.addEventListener('pointerup', off)
    b.addEventListener('pointercancel', off)
    b.addEventListener('pointerleave', off)
    b.addEventListener('contextmenu', e => e.preventDefault())
  })

  // keyboard
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', e => { keys[e.code] = false })
  window.addEventListener('blur', () => { for (const k in keys) keys[k] = false })

  // drag the car in the garage
  ui.garage.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button, .garage-list, .garage-detail, .modal-head')) return
    state.dragging = true
    state.dragX = e.clientX
    ui.garage.setPointerCapture?.(e.pointerId)
  })
  ui.garage.addEventListener('pointermove', (e) => {
    if (!state.dragging) return
    const dx = e.clientX - state.dragX
    state.dragX = e.clientX
    state.menuRotation += dx * 0.012
  })
  ui.garage.addEventListener('pointerup', () => { state.dragging = false })
  ui.garage.addEventListener('pointercancel', () => { state.dragging = false })

  window.addEventListener('resize', onResize)
  window.addEventListener('orientationchange', () => setTimeout(onResize, 300))
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state.mode === 'driving') openPause()
  })
}

function onKeyDown(e) {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault()
  keys[e.code] = true
  if (e.repeat) return
  if (e.code === 'Escape') {
    if (state.mode === 'driving') openPause()
    else if (state.mode === 'pause') resumeFromPause()
    else if (state.mode === 'garage') closeGarage()
    else if (state.mode === 'map') closeMap()
    else if (state.mode === 'results') exitResults()
    return
  }
  if (state.mode === 'title') {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') startGameplay()
    else if (e.code === 'KeyG') openGarage('title')
    else if (e.code === 'KeyM') openMap('title')
    else if (e.code === 'KeyT') cycleTime()
    return
  }
  if (state.mode === 'driving') {
    if (e.code === 'KeyG') openGarage('driving')
    else if (e.code === 'KeyM') openMap('driving')
    else if (e.code === 'KeyR') { vehicle.resetToRoad(); toast('МАШИНА НА ТРАССЕ', 'R · СБРОС') }
    else if (e.code === 'KeyC') cycleCamera()
    else if (e.code === 'KeyT') cycleTime()
    else if (e.code === 'KeyH') toast(selectedDef().brand + ' ' + selectedDef().name, 'АВТОМОБИЛЬ НЕДЕЛИ')
  }
}

function onResize() {
  if (!renderer) return
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(innerWidth, innerHeight)
  updateRotateHint()
  drawMinimap()
  if (state.mode === 'map') drawBigMap()
}
function updateRotateHint() {
  const portrait = innerHeight > innerWidth && innerWidth < 720
  ui.rotateHint?.classList.toggle('hidden', !(portrait && state.mode === 'driving' && state.touch && !state.race))
}

/* ----------------------------- actions ---------------------------- */

async function startGameplay(opts = {}) {
  audio?.init().then(() => { audio.setMuted(state.muted); audio.click(600) })
  audio?.chime()
  state.mode = 'driving'
  state.previous = 'driving'
  hide(ui.loading); hide(ui.title); hide(ui.garage); hide(ui.mapscreen); hide(ui.pause); hide(ui.results)
  show(ui.hud)
  if (state.touch) { show(ui.touchControls); show(ui.btnPauseMobile) }
  menuCar && (menuCar.group.visible = false)
  if (vehicle) vehicle.group.visible = true
  applySelectedCar()
  if (!state.hasDriven || opts.fresh) {
    vehicle.place(world.spawn.x, world.spawn.z, world.spawn.yaw)
    state.hasDriven = true
  }
  if (opts.race) startRace(opts.race)
  else {
    state.race = null
    clearCheckpoints()
    hide(ui.racePanel); hide(ui.checkpointArrow)
    setEventChip('СВОБОДНАЯ ЕЗДА', 'BAJA · МЕКСИКА')
    announce('BAJA', 'ДОБРО ПОЖАЛОВАТЬ НА ФЕСТИВАЛЬ', 2600)
  }
  snapCamera()
  updateHudCar()
  updateRotateHint()
  audio?.update(0)
  state.started = true
}

function applySelectedCar() {
  if (!vehicle) return
  const def = selectedDef(), paint = selectedPaint()
  if (vehicle.def.id !== def.id || vehicle.paint !== paint) vehicle.setCar(def, paint)
  vehicle.group.visible = true
  vehicle.setLights(state.timePreset === 'night')
  updateHudCar()
}

function openGarage(from = 'title') {
  if (state.mode === 'garage') return
  state.previous = from === 'title' ? 'title' : 'driving'
  state.mode = 'garage'
  hide(ui.title); hide(ui.hud); hide(ui.pause); hide(ui.mapscreen); hide(ui.results)
  show(ui.garage)
  menuCar && (menuCar.group.visible = true)
  if (vehicle) vehicle.group.visible = false
  updateGarageUI()
  audio?.click(700)
}

function closeGarage() {
  hide(ui.garage)
  if (state.previous === 'driving') {
    state.mode = 'driving'
    applySelectedCar()
    show(ui.hud)
    menuCar && (menuCar.group.visible = false)
    snapCamera()
    if (state.touch) show(ui.touchControls)
  } else {
    state.mode = 'title'
    show(ui.title)
    menuCar && (menuCar.group.visible = true)
    hide(ui.hud)
  }
  audio?.click(500)
}

function openPause() {
  if (state.mode !== 'driving') return
  state.mode = 'pause'
  show(ui.pause)
  hide(ui.hud)
  hide(ui.touchControls)
  if (vehicle) vehicle.group.visible = true
  menuCar && (menuCar.group.visible = false)
  ui.pauseLocation.textContent = state.race ? state.race.event.name.toUpperCase() : 'BAJA · FESTIVAL GROUNDS'
  syncTimeTabs()
  syncMute()
  audio?.click(420)
}

function resumeFromPause() {
  hide(ui.pause)
  state.mode = 'driving'
  show(ui.hud)
  menuCar && (menuCar.group.visible = false)
  if (vehicle) vehicle.group.visible = true
  if (state.touch) show(ui.touchControls)
  snapCamera()
  audio?.click(620)
}

function openMap(from = 'driving') {
  if (state.mode === 'map') return
  state.previous = from === 'title' ? 'title' : 'driving'
  state.mode = 'map'
  hide(ui.title); hide(ui.hud); hide(ui.pause); hide(ui.garage); hide(ui.results)
  show(ui.mapscreen)
  if (from === 'title') { menuCar && (menuCar.group.visible = true); if (vehicle) vehicle.group.visible = false }
  else { menuCar && (menuCar.group.visible = false); if (vehicle) vehicle.group.visible = false }
  drawBigMap(); updateBigMapMarkers()
  audio?.click(700)
}

function closeMap() {
  hide(ui.mapscreen)
  if (state.previous === 'title') {
    state.mode = 'title'
    show(ui.title)
    menuCar && (menuCar.group.visible = true)
    if (vehicle) vehicle.group.visible = false
  } else {
    state.mode = 'driving'
    show(ui.hud)
    if (vehicle) vehicle.group.visible = true
    menuCar && (menuCar.group.visible = false)
    snapCamera()
    if (state.touch) show(ui.touchControls)
  }
  audio?.click(520)
}

function cycleCamera() {
  const modes = ['chase', 'far', 'hood']
  state.cameraMode = modes[(modes.indexOf(state.cameraMode) + 1) % modes.length]
  if (vehicle?.obj) vehicle.obj.group.visible = state.cameraMode !== 'hood'
  toast(state.cameraMode === 'chase' ? 'КАМЕРА · ПОГОНЯ' : state.cameraMode === 'far' ? 'КАМЕРА · ДАЛЬНЯЯ' : 'КАМЕРА · КАПОТ', 'C · СМЕНА')
  snapCamera()
}

function cycleTime() {
  const order = ['golden', 'day', 'dusk', 'night']
  setTime(order[(order.indexOf(state.timePreset) + 1) % order.length])
}

function setTime(name) {
  if (!TIME_PRESETS[name]) return
  state.timePreset = name
  save.time = name
  persist()
  world.setTimePreset(name)
  ui.timeLabelTitle.textContent = TIME_PRESETS[name].label.toUpperCase()
  syncTimeTabs()
  vehicle?.setLights(name === 'night')
  audio?.click(760)
  if (state.mode === 'driving') toast(TIME_PRESETS[name].label.toUpperCase(), 'ВРЕМЯ СУТОК')
}

function syncTimeTabs() {
  ui.timeTabs?.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.time === state.timePreset))
}

function toggleMute() {
  state.muted = !state.muted
  save.muted = state.muted
  persist()
  audio?.init().then(() => audio.setMuted(state.muted))
  audio?.setMuted(state.muted)
  syncMute()
}
function syncMute() {
  if (!ui.btnMutePause) return
  ui.btnMutePause.textContent = state.muted ? 'ВЫКЛ' : 'ВКЛ'
  ui.btnMutePause.style.color = state.muted ? 'rgba(255,255,255,.35)' : 'var(--lime)'
  if (ui.btnSoundTitle) ui.btnSoundTitle.querySelector('.ico-sound').textContent = state.muted ? '×' : '♪'
}

/* ------------------------------ race ------------------------------ */

let checkpointGroup = null
let checkpointBeam = null
let checkpointMats = []

function clearCheckpoints() {
  if (checkpointGroup) {
    scene.remove(checkpointGroup)
    checkpointGroup.traverse(o => { if (o.geometry) o.geometry.dispose?.(); if (o.material) o.material.dispose?.() })
    checkpointGroup = null
  }
  checkpointBeam = null
  checkpointMats = []
}

function startRace(ev) {
  audio?.init()
  clearCheckpoints()
  state.mode = 'driving'
  hide(ui.title); hide(ui.garage); hide(ui.mapscreen); hide(ui.pause); hide(ui.results)
  show(ui.hud)
  menuCar && (menuCar.group.visible = false)
  if (vehicle) vehicle.group.visible = true
  applySelectedCar()
  const route = ev.route
  const start = route[0], next = route[1]
  const yaw = Math.atan2(next[0] - start[0], next[1] - start[1])
  vehicle.place(start[0], start[1], yaw)
  vehicle.boostFuel = 100
  state.hasDriven = true
  state.race = { event: ev, cp: 1, lap: 1, elapsed: 0, countdown: 3.05, started: false, finished: false, wrong: 0, wrongShown: false }
  countdownShown = -1
  hide(ui.results)
  show(ui.racePanel); show(ui.checkpointArrow)
  ui.raceName.textContent = ev.name
  ui.raceTime.textContent = '00:00.000'
  ui.raceLap.textContent = `КРУГ 1/${ev.laps}`
  ui.raceCp.textContent = `КП 1/${ev.route.length - 1}`
  ui.raceProgress.style.width = '0%'
  setEventChip(ev.name.toUpperCase(), ev.type + ' · BAJA')
  buildCheckpoints(ev)
  announce(ev.name.toUpperCase(), ev.sub.toUpperCase(), 1800)
  snapCamera()
  if (state.touch) show(ui.touchControls)
  audio?.click(500)
}

function setEventChip(name, sub) {
  ui.hudEventName.textContent = name
  ui.hudEventSub.textContent = sub
}

function buildCheckpoints(ev) {
  const route = ev.route
  checkpointGroup = new THREE.Group()
  const ringGeo = new THREE.TorusGeometry(10.5, 0.55, 6, 28)
  for (let i = 1; i < route.length; i++) {
    const [x, z] = route[i]
    const p2 = route[(i + 1) % route.length] || route[0]
    const yaw = Math.atan2(p2[0] - x, p2[1] - z)
    const mat = new THREE.MeshBasicMaterial({ color: 0x9dfcff, transparent: true, opacity: 0.2, depthWrite: false, side: THREE.DoubleSide })
    const ring = new THREE.Mesh(ringGeo, mat)
    ring.position.set(x, world.heightAt(x, z) + 9.2, z)
    ring.rotation.y = yaw
    ring.userData.index = i
    checkpointGroup.add(ring)
    checkpointMats.push(mat)
  }
  scene.add(checkpointGroup)
  const beamMat = new THREE.MeshBasicMaterial({ color: 0xd7ff3f, transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
  checkpointBeam = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 110, 8, 1, true), beamMat)
  scene.add(checkpointBeam)
  highlightCheckpoint()
  const first = route[1]
  const firstDist = Math.hypot(first[0] - vehicle.pos.x, first[1] - vehicle.pos.z)
  ui.cpDistance.textContent = `${Math.round(firstDist)} м`
}

function highlightCheckpoint() {
  if (!state.race || !checkpointGroup) return
  const r = state.race
  for (const ring of checkpointGroup.children) {
    const isNext = ring.userData.index === r.cp
    ring.material.color.setHex(isNext ? 0xd7ff3f : 0x9dfcff)
    ring.material.opacity = isNext ? 0.95 : 0.16
  }
  const target = r.event.route[r.cp]
  if (target && checkpointBeam) {
    checkpointBeam.position.set(target[0], world.heightAt(target[0], target[1]) + 54, target[1])
  }
}

function updateRace(dt) {
  const r = state.race
  if (!r) return
  if (!r.started) {
    r.countdown -= dt
    if (r.countdown > 0) {
      const n = Math.ceil(r.countdown)
      if (n !== countdownShown) {
        countdownShown = n
        ui.countdown.textContent = n
        ui.countdown.classList.remove('hidden')
        ui.countdown.classList.remove('go')
        ui.countdown.style.animation = 'none'
        void ui.countdown.offsetWidth
        ui.countdown.style.animation = ''
        audio?.click(330 + (3 - n) * 90)
      }
      return
    }
    r.started = true
    ui.countdown.textContent = 'GO!'
    ui.countdown.classList.add('go')
    ui.countdown.style.animation = 'none'; void ui.countdown.offsetWidth; ui.countdown.style.animation = ''
    audio?.chime()
    setTimeout(() => hide(ui.countdown), 750)
  }
  r.elapsed += dt
  const cp = r.event.route[r.cp]
  if (!cp) return
  const dx = cp[0] - vehicle.pos.x, dz = cp[1] - vehicle.pos.z
  const dist = Math.hypot(dx, dz)
  ui.cpDistance.textContent = `${Math.round(dist)} м`
  const rel = Math.atan2(dx, dz) - vehicle.yaw
  ui.checkpointArrow.querySelector('.cp-arrow-icon').style.transform = `rotate(${rel}rad)`
  const dot = (Math.sin(vehicle.yaw) * dx + Math.cos(vehicle.yaw) * dz) / (dist || 1)
  if (dot < -0.25 && dist > 70) {
    r.wrong += dt
    if (r.wrong > 1.3 && !r.wrongShown) { show(ui.wrongWay); r.wrongShown = true }
  } else {
    r.wrong = Math.max(0, r.wrong - dt * 2)
    if (r.wrong < 0.5 && r.wrongShown) { hide(ui.wrongWay); r.wrongShown = false }
  }
  if (dist < 36) {
    r.cp++
    if (r.cp >= r.event.route.length) {
      if (r.lap < r.event.laps) {
        r.lap++
        r.cp = 1
        announce(`КРУГ ${r.lap}/${r.event.laps}`, 'НЕ СБАВЛЯЙТЕ ТЕМП', 1600)
        audio?.chime()
      } else {
        finishRace()
        return
      }
    } else {
      audio?.click(1020)
    }
    highlightCheckpoint()
  }
  const total = r.event.laps * (r.event.route.length - 1)
  const done = (r.lap - 1) * (r.event.route.length - 1) + (r.cp - 1)
  ui.raceProgress.style.width = `${clamp(done / total, 0, 1) * 100}%`
  ui.raceTime.textContent = fmtTime(r.elapsed)
  ui.raceLap.textContent = `КРУГ ${r.lap}/${r.event.laps}`
  ui.raceCp.textContent = `КП ${Math.min(r.cp, r.event.route.length - 1)}/${r.event.route.length - 1}`
}

function finishRace() {
  const r = state.race
  r.finished = true
  hide(ui.checkpointArrow)
  const t = r.elapsed
  let medal = 'БРОНЗА', icon = '🥉', bonus = Math.round(r.event.reward * 0.55)
  if (t <= r.event.gold) { medal = 'ЗОЛОТО'; icon = '🥇'; bonus = r.event.reward }
  else if (t <= r.event.silver) { medal = 'СЕРЕБРО'; icon = '🥈'; bonus = Math.round(r.event.reward * 0.78) }
  else if (t > r.event.bronze) { medal = 'ФИНИШ'; icon = '🏁'; bonus = Math.round(r.event.reward * 0.35) }
  state.credits += bonus
  state.skillTotal += Math.round(bonus * 0.4)
  save.credits = state.credits; save.skill = state.skillTotal
  const bestKey = r.event.id
  const best = save.best[bestKey]
  if (!best || t < best) save.best[bestKey] = t
  persist()
  updateWallet()
  audio?.chime()
  ui.medalIcon.textContent = icon
  ui.resultTitle.textContent = r.event.name
  ui.resultTime.textContent = fmtTime(t)
  ui.resultGold.textContent = fmtTime(r.event.gold)
  ui.resultYour.textContent = fmtTime(t)
  ui.resultReward.textContent = `+${money(bonus)} ¢ · ${medal}`
  setTimeout(() => {
    if (state.race !== r) return
    state.mode = 'results'
    hide(ui.hud); hide(ui.touchControls); hide(ui.countdown); hide(ui.toast)
    show(ui.results)
    if (vehicle) vehicle.group.visible = true
    menuCar && (menuCar.group.visible = false)
  }, 1400)
}

function exitResults() {
  hide(ui.results)
  state.mode = 'driving'
  show(ui.hud)
  if (state.touch) show(ui.touchControls)
  state.race = null
  clearCheckpoints()
  hide(ui.racePanel); hide(ui.checkpointArrow); hide(ui.wrongWay)
  setEventChip('СВОБОДНАЯ ЕЗДА', 'BAJA · МЕКСИКА')
  snapCamera()
  toast('СВОБОДНАЯ ЕЗДА', 'BAJA ЖДЁТ')
}

function startRaceByIndex(i) {
  const ev = EVENTS[i]
  if (!ev) return
  hide(ui.mapscreen)
  if (state.mode === 'title' || state.mode === 'garage') startGameplay({ race: ev, fresh: true })
  else {
    hide(ui.pause)
    startRace(ev)
  }
}

/* ---------------------------- gamepad ----------------------------- */

function readInput() {
  let throttle = 0, brake = 0, steer = 0, handbrake = false, boost = false
  if (keys['KeyW'] || keys['ArrowUp']) throttle = 1
  if (keys['KeyS'] || keys['ArrowDown']) brake = 1
  if (keys['KeyD'] || keys['ArrowRight']) steer += 1
  if (keys['KeyA'] || keys['ArrowLeft']) steer -= 1
  if (keys['Space']) handbrake = true
  if (keys['ShiftLeft'] || keys['ShiftRight']) boost = true

  if (touchState.gas) throttle = 1
  if (touchState.brake) brake = 1
  if (touchState.left) steer -= 1
  if (touchState.right) steer += 1
  if (touchState.handbrake) handbrake = true
  if (touchState.boost) boost = true

  const pads = navigator.getGamepads ? navigator.getGamepads() : []
  for (const gp of pads) {
    if (!gp) continue
    const ax = gp.axes[0] || 0
    if (Math.abs(ax) > 0.12) steer = clamp(ax, -1, 1)
    const rt = gp.buttons[7]?.value || 0, lt = gp.buttons[6]?.value || 0
    if (rt > 0.05) throttle = Math.max(throttle, rt)
    if (lt > 0.05) brake = Math.max(brake, lt)
    if (gp.buttons[0]?.pressed) handbrake = true
    if (gp.buttons[2]?.pressed) boost = true
    break
  }

  if (state.race && !state.race.started) { throttle = 0; brake = 0; steer = 0; handbrake = false; boost = false }
  input.throttle = throttle
  input.brake = brake
  input.steer = clamp(steer, -1, 1)
  input.handbrake = handbrake
  input.boost = boost
  return input
}

/* ---------------------------- camera ------------------------------ */

const _desired = new THREE.Vector3()
const _lookTarget = new THREE.Vector3()
const _right = new THREE.Vector3()

function snapCamera() {
  if (!vehicle) return
  if (state.cameraMode === 'hood') {
    const f = vehicle.forward
    camera.position.set(vehicle.pos.x + f.x * 0.45, vehicle.pos.y + 1.17, vehicle.pos.z + f.z * 0.45)
    _lookTarget.set(vehicle.pos.x + f.x * 14, vehicle.pos.y + 1.1, vehicle.pos.z + f.z * 14)
    camera.lookAt(_lookTarget)
    camera.fov = 68
  } else {
    const f = vehicle.forward
    const portrait = innerHeight > innerWidth * 1.15
    const dist = state.cameraMode === 'far' ? (portrait ? 15.5 : 11.5) : (portrait ? 9.8 : 6.8)
    _desired.set(vehicle.pos.x - f.x * dist, vehicle.pos.y + (portrait ? 3.1 : 2.55), vehicle.pos.z - f.z * dist)
    _desired.y = Math.max(_desired.y, world.heightAt(_desired.x, _desired.z) + 1.2)
    camera.position.copy(_desired)
    _lookTarget.set(vehicle.pos.x + f.x * 4.2, vehicle.pos.y + 1.1, vehicle.pos.z + f.z * 4.2)
    camera.lookAt(_lookTarget)
    camera.fov = portrait ? 66 : 62
  }
  camera.updateProjectionMatrix()
  camLook.copy(_lookTarget)
  camReady = true
}

function updateCamera(dt) {
  if (!vehicle) return
  if (state.mode === 'title' || state.mode === 'garage') {
    updateMenuCamera(dt)
    return
  }
  if (state.mode !== 'driving') return
  if (!camReady) snapCamera()
  const speed = vehicle.vel.length()
  const f = vehicle.forward
  const shake = effects ? effects.shake : 0
  const offroad = vehicle.surface !== 'road' && vehicle.surface !== 'water'
  const amp = shake * 0.42 + (offroad ? Math.min(0.1, speed * 0.0018) : 0)
  if (state.cameraMode === 'hood') {
    camera.position.set(vehicle.pos.x + f.x * 0.45, vehicle.pos.y + 1.18, vehicle.pos.z + f.z * 0.45)
    _lookTarget.set(vehicle.pos.x + f.x * 18, vehicle.pos.y + 1.1 + (offroad ? Math.sin(worldTime * 20) * 0.01 : 0), vehicle.pos.z + f.z * 18)
    camera.lookAt(_lookTarget)
    camera.fov = lerp(camera.fov, 72 + Math.min(10, speed * 0.14), 0.1)
  } else {
    const far = state.cameraMode === 'far'
    const portrait = innerHeight > innerWidth * 1.15
    const dist = (far ? (portrait ? 15.5 : 11.5) : (portrait ? 9.8 : 6.9)) + speed * (far ? 0.025 : 0.035)
    const height = (far ? (portrait ? 3.9 : 3.4) : (portrait ? 3.1 : 2.55)) + speed * 0.008
    _desired.set(vehicle.pos.x - f.x * dist, vehicle.pos.y + height, vehicle.pos.z - f.z * dist)
    _desired.y = Math.max(_desired.y, world.heightAt(_desired.x, _desired.z) + 1.25)
    const k = 1 - Math.exp(-5.4 * dt)
    camera.position.lerp(_desired, Math.min(1, k + (camReady ? 0 : 1)))
    _lookTarget.set(vehicle.pos.x + f.x * (3.2 + speed * 0.035), vehicle.pos.y + 1.15, vehicle.pos.z + f.z * (3.2 + speed * 0.035))
    camLook.lerp(_lookTarget, 1 - Math.exp(-8 * dt))
    camera.lookAt(camLook)
    camera.fov = lerp(camera.fov, (far ? 58 : (innerHeight > innerWidth * 1.15 ? 66 : 62)) + speed * 0.22 + (vehicle.boostActive ? 3 : 0), 0.09)
    if (vehicle.drifting) {
      camera.position.x += Math.cos(vehicle.yaw) * vehicle.slip * 0.015
      camera.position.z -= Math.sin(vehicle.yaw) * vehicle.slip * 0.015
    }
  }
  if (amp > 0.001) {
    camera.position.x += (Math.random() - 0.5) * amp
    camera.position.y += (Math.random() - 0.5) * amp * 0.7
    camera.position.z += (Math.random() - 0.5) * amp
  }
  if (carFill) carFill.position.copy(camera.position).add(new THREE.Vector3(0, 1.2, 0))
  camera.updateProjectionMatrix()
  camReady = true
}

function updateMenuCamera(dt) {
  if (!menuCar) return
  const pos = menuCar.group.position
  if (!state.dragging) state.menuRotation += dt * (state.mode === 'garage' ? 0.13 : 0.07)
  menuCar.group.rotation.y = state.menuRotation
  const t = worldTime
  const portrait = innerHeight > innerWidth * 1.15
  const angle = state.mode === 'garage' ? 2.1 : 1.2 + Math.sin(t * 0.09) * 0.1
  const dist = state.mode === 'garage' ? (portrait ? 10.8 : 7.6) : (portrait ? 14.5 : 9.4)
  const height = state.mode === 'garage' ? (portrait ? 2.8 : 2.05) : (portrait ? 3.2 : 2.35)
  const desired = new THREE.Vector3(
    pos.x + Math.sin(angle) * dist,
    pos.y + height,
    pos.z + Math.cos(angle) * dist
  )
  const k = 1 - Math.exp(-3.6 * dt)
  if (!camReady) camera.position.copy(desired)
  else camera.position.lerp(desired, k)
  const dir = new THREE.Vector3().subVectors(pos.clone().add(new THREE.Vector3(0, 0.7, 0)), camera.position).normalize()
  _right.set(-dir.z, 0, dir.x).normalize()
  const target = pos.clone().add(new THREE.Vector3(0, 0.72, 0)).addScaledVector(_right, state.mode === 'garage' ? -0.65 : (portrait ? -0.35 : -0.9))
  if (!camReady) camLook.copy(target)
  else camLook.lerp(target, 1 - Math.exp(-5 * dt))
  camera.lookAt(camLook)
  camera.fov = lerp(camera.fov, state.mode === 'garage' ? (portrait ? 51 : 46) : (portrait ? 59 : 50), 0.1)
  if (carFill) carFill.position.copy(camera.position).add(new THREE.Vector3(0, 1.0, 0))
  camera.updateProjectionMatrix()
  camReady = true
}

/* ----------------------------- HUD -------------------------------- */

function surfaceLabel(s) {
  return ({ road: 'АСФАЛЬТ', sand: 'ПЕСОК', grass: 'ТРАВА', dirt: 'ГРУНТ', rock: 'СКАЛЫ', shore: 'БЕРЕГ', water: 'ВОДА' })[s] || 'БЕЗДОРОЖЬЕ'
}

function updateWallet() {
  if (ui.credits) ui.credits.textContent = money(state.credits)
  if (ui.skillTotal) ui.skillTotal.textContent = money(state.skillTotal)
}

function updateHUD(dt) {
  if (!vehicle) return
  const speed = Math.round(vehicle.speedKmh)
  if (speed !== lastSpeed) { ui.speedNumber.textContent = speed; lastSpeed = speed }
  const mph = Math.round(vehicle.speedKmh * 0.621371)
  if (mph !== lastMph) { ui.mphNumber.textContent = `${mph} MPH`; lastMph = mph }
  const gear = vehicle.def.ev ? 'D' : String(vehicle.gear)
  if (gear !== lastGear) { ui.gearNumber.textContent = gear; lastGear = gear }
  const rpmPct = clamp(vehicle.rpm / vehicle.def.redline, 0, 1) * 100
  if (Math.abs(rpmPct - lastRpm) > 0.5) { ui.rpmBar.style.width = `${rpmPct}%`; lastRpm = rpmPct }
  const nitro = Math.round(vehicle.boostFuel)
  if (nitro !== lastNitro) { ui.nitroFill.style.width = `${nitro}%`; lastNitro = nitro }
  const surface = vehicle.surface
  ui.hudSurface.textContent = `${surfaceLabel(surface)} · ${vehicle.def.drivetrain}${vehicle.airborne ? ' · ВОЗДУХ' : ''}`
  if (vehicle.drifting && vehicle.driftPoints > 20) {
    show(ui.driftBadge)
    ui.driftPoints.textContent = Math.round(vehicle.driftPoints)
  } else hide(ui.driftBadge)

  const heading = ((vehicle.yaw * 180 / Math.PI) + 180 + 360) % 360
  const dirs = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ']
  ui.compass.textContent = dirs[Math.round(heading / 45) % 8]

  const ref = state.race ? state.race.event.route[state.race.cp] : null
  if (ref && state.race && state.race.started) show(ui.checkpointArrow)
  else if (!state.race) hide(ui.checkpointArrow)

  updateWallet()
  minimapTimer -= dt
  if (minimapTimer <= 0) { drawMinimap(); minimapTimer = 0.075 }
  if (state.race) {
    if (state.race.started && !state.race.finished) ui.raceTime.textContent = fmtTime(state.race.elapsed)
  }
}

/* ----------------------------- skill ------------------------------ */

function updateSkill(dt) {
  const drifting = !!vehicle?.drifting
  if (drifting) {
    if (!skill.drifting) { skill.time = 0; skill.banked = 0 }
    skill.drifting = true
    skill.time += dt
    const pts = Math.round(vehicle.driftPoints)
    if (pts > 35) {
      const multi = 1 + Math.min(2.5, skill.time * 0.24)
      skillPopup(`DRIFT +${pts}`, `x${multi.toFixed(1)}`)
    }
  } else if (skill.drifting) {
    skill.drifting = false
    const raw = Math.round(vehicle.driftPoints)
    if (skill.time > 0.28 && raw > 35) {
      const bonus = Math.round(raw * (1 + Math.min(2.5, skill.time * 0.24)))
      state.skillTotal += bonus
      state.credits += bonus * 2
      save.skill = state.skillTotal; save.credits = state.credits
      persist()
      skillPopup(`SKILL +${bonus}`, 'BANKED')
      audio?.chime()
      updateWallet()
    }
    skill.time = 0
    vehicle.driftPoints = 0
  }
}

function onEffectMessage(text, sub) {
  if (!text) return
  if (sub === 'AIRTIME') {
    const n = parseInt(text.replace(/[^0-9]/g, ''), 10) || 0
    const pts = Math.round(n * 2)
    if (pts > 0) {
      state.skillTotal += pts; state.credits += pts * 2
      save.skill = state.skillTotal; save.credits = state.credits; persist()
      skillPopup(text, `+${money(pts)} SKILL`)
      audio?.chime(); updateWallet()
    }
  } else {
    toast(text, sub)
  }
}

/* ----------------------------- maps ------------------------------- */

function worldToPct(x, z) {
  return [((x / 4200) + 0.5) * 100, ((z / 4200) + 0.5) * 100]
}

function drawMinimap() {
  if (!world || !ui.minimap) return
  const ctx = ui.minimap.getContext('2d')
  const W = 220
  const z = 2.7
  ctx.clearRect(0, 0, W, W)
  ctx.fillStyle = '#0b1a24'
  ctx.fillRect(0, 0, W, W)
  const px = (vehicle ? vehicle.pos.x : world.spawn.x)
  const pz = (vehicle ? vehicle.pos.z : world.spawn.z)
  const mapX = (px / 4200 + 0.5) * 256
  const mapY = (pz / 4200 + 0.5) * 256
  ctx.save()
  ctx.translate(W / 2 - mapX * z, W / 2 - mapY * z)
  ctx.scale(z, z)
  ctx.imageSmoothingEnabled = true
  ctx.drawImage(world.mapCanvas, 0, 0)
  ctx.restore()
  // active route
  if (state.race) {
    ctx.strokeStyle = 'rgba(215,255,63,.8)'
    ctx.lineWidth = 2
    ctx.beginPath()
    state.race.event.route.forEach(([x, yy], i) => {
      const sx = W / 2 + ((x - px) / 4200) * 256 * z
      const sy = W / 2 + ((yy - pz) / 4200) * 256 * z
      if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy)
    })
    ctx.stroke()
    const nx = state.race.event.route[state.race.cp]
    if (nx) {
      const sx = W / 2 + ((nx[0] - px) / 4200) * 256 * z
      const sy = W / 2 + ((nx[1] - pz) / 4200) * 256 * z
      ctx.fillStyle = '#d7ff3f'
      ctx.beginPath(); ctx.arc(sx, sy, 4, 0, 7); ctx.fill()
    }
  }
  // festival + events
  const drawDot = (x, zz, color, r = 3) => {
    const sx = W / 2 + ((x - px) / 4200) * 256 * z
    const sy = W / 2 + ((zz - pz) / 4200) * 256 * z
    if (sx < -8 || sy < -8 || sx > W + 8 || sy > W + 8) return
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(sx, sy, r, 0, 7); ctx.fill()
    ctx.strokeStyle = 'rgba(8,12,20,.8)'; ctx.lineWidth = 1; ctx.stroke()
  }
  for (const ev of EVENTS) drawDot(ev.route[0][0], ev.route[0][1], 'rgba(255,45,122,.9)', 3.2)
  drawDot(FESTIVAL.x, FESTIVAL.y, '#23e6ff', 4)
  drawDot(TOWN.x, TOWN.y, '#ff7a3d', 3)
  // player arrow
  ctx.save()
  ctx.translate(W / 2, W / 2)
  ctx.rotate(Math.PI - (vehicle ? vehicle.yaw : 0))
  ctx.fillStyle = '#d7ff3f'
  ctx.shadowColor = '#d7ff3f'; ctx.shadowBlur = 10
  ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(5.5, 6); ctx.lineTo(0, 3); ctx.lineTo(-5.5, 6); ctx.closePath(); ctx.fill()
  ctx.restore()
  // edge fade
  const grad = ctx.createRadialGradient(W / 2, W / 2, W * 0.35, W / 2, W / 2, W * 0.72)
  grad.addColorStop(0, 'rgba(8,12,20,0)'); grad.addColorStop(1, 'rgba(8,12,20,.55)')
  ctx.fillStyle = grad; ctx.fillRect(0, 0, W, W)
}

function drawBigMap() {
  if (!world || !ui.bigMap) return
  const ctx = ui.bigMap.getContext('2d')
  const S = 900
  ctx.imageSmoothingEnabled = true
  ctx.clearRect(0, 0, S, S)
  ctx.drawImage(world.mapCanvas, 0, 0, S, S)
  // grid
  ctx.strokeStyle = 'rgba(255,255,255,.065)'
  ctx.lineWidth = 1
  for (let i = 1; i < 9; i++) {
    const p = i / 9 * S
    ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, S); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(S, p); ctx.stroke()
  }
  // labels
  const label = (text, x, z, color, size = 17) => {
    const [pctX, pctY] = worldToPct(x, z)
    ctx.font = `800 ${size}px "Barlow Condensed", sans-serif`
    ctx.textAlign = 'center'
    ctx.fillStyle = 'rgba(8,12,20,.7)'
    ctx.fillText(text, pctX / 100 * S + 2, pctY / 100 * S + 2)
    ctx.fillStyle = color
    ctx.fillText(text, pctX / 100 * S, pctY / 100 * S)
  }
  label('FESTIVAL', FESTIVAL.x, FESTIVAL.y - 40, '#23e6ff', 18)
  label('PUERTO SOL', TOWN.x, TOWN.y - 30, '#ffb75a', 17)
  label('VOLCÁN', VOLCANO.x, VOLCANO.y - 90, '#ff8a5a', 17)
  label('AERÓDROMO', AIRFIELD.x, AIRFIELD.y - 30, '#d7ff3f', 15)
  label('DESIERTO', 1100, 650, 'rgba(255,222,150,.8)', 16)
  label('SELVA', -450, 1550, 'rgba(150,255,160,.8)', 16)
  // active route
  if (state.race) {
    const route = state.race.event.route
    ctx.strokeStyle = '#d7ff3f'; ctx.lineWidth = 4; ctx.shadowColor = '#d7ff3f'; ctx.shadowBlur = 12
    ctx.beginPath()
    route.forEach(([x, z], i) => {
      const [px, py] = worldToPct(x, z)
      if (i === 0) ctx.moveTo(px / 100 * S, py / 100 * S); else ctx.lineTo(px / 100 * S, py / 100 * S)
    })
    ctx.stroke(); ctx.shadowBlur = 0
  }
  // player arrow
  if (vehicle) {
    const [pctX, pctY] = worldToPct(vehicle.pos.x, vehicle.pos.z)
    ctx.save()
    ctx.translate(pctX / 100 * S, pctY / 100 * S)
    ctx.rotate(Math.PI - vehicle.yaw)
    ctx.fillStyle = '#d7ff3f'; ctx.shadowColor = '#d7ff3f'; ctx.shadowBlur = 14
    ctx.beginPath(); ctx.moveTo(0, -17); ctx.lineTo(11, 12); ctx.lineTo(0, 6); ctx.lineTo(-11, 12); ctx.closePath(); ctx.fill()
    ctx.restore()
  }
}

function updateBigMapMarkers() {
  if (!ui.bigMapMarkers) return
  ui.bigMapMarkers.innerHTML = ''
  const add = (x, z, cls, label, click) => {
    const [px, py] = worldToPct(x, z)
    const el = document.createElement('button')
    el.className = `map-marker ${cls}`
    el.style.left = `${px}%`
    el.style.top = `${py}%`
    el.textContent = label || ''
    if (click) el.addEventListener('click', click)
    ui.bigMapMarkers.appendChild(el)
  }
  add(FESTIVAL.x, FESTIVAL.y, 'fest', '★')
  add(TOWN.x, TOWN.y, 'town', '')
  EVENTS.forEach((ev, i) => add(ev.route[0][0], ev.route[0][1], state.race?.event.id === ev.id ? 'active' : '', String(i + 1), () => startRaceByIndex(i)))
}

function drawEventList() {
  if (!ui.eventList) return
  ui.eventList.innerHTML = ''
  EVENTS.forEach((ev, i) => {
    const b = document.createElement('button')
    b.className = 'event-item'
    b.innerHTML = `<div class="event-top"><b>${ev.name}</b><span class="badge">${ev.type}</span></div>
      <small>${ev.sub}</small>
      <div class="event-meta"><span><i>◆</i> ${ev.route.length - 1} КП</span><span><i>◷</i> ЗОЛОТО ${fmtShort(ev.gold)}</span><span><i>¢</i> ${money(ev.reward)}</span></div>`
    b.addEventListener('click', () => startRaceByIndex(i))
    ui.eventList.appendChild(b)
  })
}

/* ----------------------------- loop ------------------------------- */

function frame(now) {
  requestAnimationFrame(frame)
  const dt = Math.min(0.05, (now - lastFrameTime) / 1000 || 0.016)
  lastFrameTime = now
  worldTime += dt

  if (state.mode === 'driving') {
    const inp = readInput()
    vehicle.applyInput(inp)
    if (state.race && !state.race.started) {
      vehicle.step(1 / 120, { throttle: 0, brake: 0, steer: 0, handbrake: false, boost: false })
    } else {
      const steps = Math.min(5, Math.max(1, Math.round(dt * 120)))
      const h = dt / steps
      for (let i = 0; i < steps; i++) vehicle.step(h, inp)
    }
    updateRace(dt)
    updateSkill(dt)
    effects.update(dt)
    updateHUD(dt)
    effects.shake = effects.shake
    audio?.updateEngine(vehicle.rpm, inp.throttle, vehicle.vel.length(), vehicle.slip, vehicle.surface !== 'road', vehicle.boostActive, true)
  } else {
    if (state.mode === 'results') effects.update(dt)
    audio?.updateEngine(vehicle?.rpm || 900, 0, 0, 0, false, false, false)
    if (state.mode === 'title' || state.mode === 'garage') {
      if (menuCar) menuCar.group.rotation.y = state.menuRotation
    }
  }

  world.update(worldTime, camera, state.mode === 'driving' ? vehicle.pos : (menuCar ? menuCar.group.position : null))
  updateCamera(dt)
  if (state.mode === 'map' && (mapTimer -= dt) <= 0) { drawBigMap(); mapTimer = 0.25 }
  audio?.update()
  renderer.render(scene, camera)

  // adaptive quality: keep the experience smooth on software renderers
  fpsAccum += dt; fpsFrames++
  if (fpsAccum > 2.5) {
    state.fps = fpsFrames / fpsAccum
    fpsAccum = 0; fpsFrames = 0
    if (state.fps < 24 && state.quality === 'high') {
      state.quality = 'medium'
      if (!state.touch && innerWidth < 2200) renderer.setPixelRatio(1)
      if (world.sky.sun.shadow.mapSize.x > 1024) {
        world.sky.sun.shadow.mapSize.set(1024, 1024)
        world.sky.sun.shadow.map?.dispose()
        world.sky.sun.shadow.map = null
      }
    }
  }
}

/* ----------------------------- boot ------------------------------- */

async function boot() {
  setLoad(6, 'Подключаем камеру…')
  await raf()
  await wait(120)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance', stencil: false })
  const gl = renderer.getContext()
  const dbg = gl.getExtension('WEBGL_debug_renderer_info')
  const gpuName = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : ''
  const software = /swiftshader|llvmpipe|software/i.test(gpuName)
  renderer.setPixelRatio(software ? 1 : Math.min(devicePixelRatio || 1, 1.65))
  renderer.setSize(innerWidth, innerHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.domElement.id = 'game-canvas'
  $('#scene').appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 14000)
  carFill = new THREE.PointLight(0xb7d4ff, 55, 26, 2)
  scene.add(carFill)

  setLoad(17, 'Генерируем рельеф Баха…')
  await raf()
  world = buildWorld(scene, renderer)
  setLoad(58, 'Зажигаем фестиваль…')
  await raf()

  save.beaten = save.beaten || {}
  if (software) {
    state.quality = 'medium'
    world.sky.sun.shadow.mapSize.set(1024, 1024)
    world.sky.sun.shadow.map?.dispose()
    world.sky.sun.shadow.map = null
  }

  effects = new Effects(scene)
  effects.onMessage = onEffectMessage
  audio = new GameAudio()
  audio.setMuted(state.muted)
  vehicle = new Vehicle(scene, world, effects, selectedDef(), selectedPaint())
  vehicle.group.visible = false
  vehicle.setLights(state.timePreset === 'night')

  bindUI()
  refreshMenuCar()
  updateTitleUI()
  updateGarageUI()
  updateWallet()
  drawEventList()

  setLoad(74, 'Полируем хром и неон…')
  await raf()
  camera.position.set(world.festival.platformPosition.x + 6, world.festival.platformPosition.y + 3, world.festival.platformPosition.z - 6)
  camera.lookAt(world.festival.platformPosition.x, world.festival.platformPosition.y + 0.7, world.festival.platformPosition.z)
  world.setTimePreset(state.timePreset)
  ui.timeLabelTitle.textContent = TIME_PRESETS[state.timePreset].label.toUpperCase()
  syncTimeTabs()
  syncMute()

  updateRotateHint()
  drawMinimap()
  drawBigMap()
  updateBigMapMarkers()

  setLoad(92, 'Настраиваем закат…')
  await raf()
  await wait(260)
  setLoad(100, 'Готово')
  await wait(200)

  hide(ui.loading)
  show(ui.title)
  state.mode = 'title'
  state.started = false
  clock = performance.now()
  lastFrameTime = performance.now()
  requestAnimationFrame(frame)

  // debug/test hooks
  window.__game = {
    state, CARS, EVENTS, world, vehicle, effects, audio, scene, camera, renderer,
    start: () => startGameplay(),
    startRace: (i) => startRaceByIndex(i),
    openGarage: () => openGarage(state.mode === 'title' ? 'title' : 'driving'),
    openMap: () => openMap(state.mode === 'title' ? 'title' : 'driving'),
    setTime,
    teleport: (x, z, yaw = 0) => { vehicle.place(x, z, yaw); snapCamera() },
    snapCamera,
    selectCar,
    finishRace,
    get gpu() { return gpuName },
    get software() { return software }
  }
  window.__scene = { rendered: true, gpu: gpuName, software, world: true }
  console.log('HORIZON LIBRE ready', gpuName)
}

boot().catch(err => {
  console.error(err)
  const l = document.getElementById('loadLabel')
  if (l) l.textContent = 'Ошибка запуска: ' + err.message
})
