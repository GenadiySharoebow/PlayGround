/* ------------------------------------------------------------------ */
/*  HORIZON LIBRE — procedural synth audio (no external assets)       */
/* ------------------------------------------------------------------ */

const midi = n => 440 * Math.pow(2, (n - 69) / 12)

export class GameAudio {
  constructor() {
    this.ctx = null
    this.ready = false
    this.muted = false
    this.master = null
    this.engineBus = null
    this.musicBus = null
    this.sfxBus = null
    this.engine = null
    this.wind = null
    this.tire = null
    this.module = 0
    this.nextStep = 0
    this.step = 0
    this.tempo = 94
    this.musicOn = true
    this.engineOn = false
    this.boost = false
    this.delay = null
  }

  async init() {
    if (this.ready) return
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    await this.ctx.resume().catch(() => {})
    this.master = this.ctx.createGain()
    this.master.gain.value = this.muted ? 0 : 0.72
    this.master.connect(this.ctx.destination)

    this.engineBus = this.ctx.createGain(); this.engineBus.gain.value = 0.0
    this.musicBus = this.ctx.createGain(); this.musicBus.gain.value = 0.16
    this.sfxBus = this.ctx.createGain(); this.sfxBus.gain.value = 0.35
    this.engineBus.connect(this.master)
    this.musicBus.connect(this.master)
    this.sfxBus.connect(this.master)

    // echo for the music
    this.delay = this.ctx.createDelay(1.0)
    this.delay.delayTime.value = 0.29
    const fb = this.ctx.createGain(); fb.gain.value = 0.23
    const wet = this.ctx.createGain(); wet.gain.value = 0.28
    this.delay.connect(fb); fb.connect(this.delay)
    this.delay.connect(wet); wet.connect(this.musicBus)

    this.buildEngine()
    this.buildWind()
    this.nextStep = this.ctx.currentTime + 0.1
    this.ready = true
  }

  noiseBuffer(seconds = 2) {
    const len = Math.floor(this.ctx.sampleRate * seconds)
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
    const data = buf.getChannelData(0)
    let last = 0
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1
      last = last * 0.35 + white * 0.65
      data[i] = last
    }
    return buf
  }

  buildEngine() {
    const ctx = this.ctx
    const osc1 = ctx.createOscillator(); osc1.type = 'sawtooth'; osc1.frequency.value = 70
    const osc2 = ctx.createOscillator(); osc2.type = 'square'; osc2.frequency.value = 35
    const gain1 = ctx.createGain(); gain1.gain.value = 0.22
    const gain2 = ctx.createGain(); gain2.gain.value = 0.08
    const filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 700; filter.Q.value = 1.4
    const bus = ctx.createGain(); bus.gain.value = 0.0
    osc1.connect(gain1); gain1.connect(filter)
    osc2.connect(gain2); gain2.connect(filter)
    filter.connect(bus); bus.connect(this.engineBus)
    osc1.start(); osc2.start()
    this.engine = { osc1, osc2, filter, bus, gain1, gain2 }

    const src = ctx.createBufferSource(); src.buffer = this.noiseBuffer(2); src.loop = true
    const filt = ctx.createBiquadFilter(); filt.type = 'bandpass'; filt.frequency.value = 1700; filt.Q.value = 3.5
    const g = ctx.createGain(); g.gain.value = 0
    src.connect(filt); filt.connect(g); g.connect(this.engineBus)
    src.start()
    this.tire = { src, filt, gain: g }
  }

  buildWind() {
    const ctx = this.ctx
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuffer(3); src.loop = true
    const filt = ctx.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 420; filt.Q.value = 0.6
    const g = ctx.createGain(); g.gain.value = 0
    src.connect(filt); filt.connect(g); g.connect(this.master)
    src.start()
    this.wind = { gain: g, filter: filt }
  }

  updateEngine(rpm = 900, throttle = 0, speed = 0, slip = 0, offroad = false, boost = false, active = false) {
    if (!this.ready) return
    const t = this.ctx.currentTime
    const f = Math.max(24, rpm / 60 * 3.1)
    const targetOn = active ? 0.055 + throttle * 0.11 : 0.0
    this.engine.bus.gain.setTargetAtTime(targetOn * (boost ? 1.35 : 1), t, 0.07)
    this.engine.osc1.frequency.setTargetAtTime(f, t, 0.035)
    this.engine.osc2.frequency.setTargetAtTime(f * 0.5 + 1.4, t, 0.05)
    this.engine.filter.frequency.setTargetAtTime(320 + throttle * 1300 + Math.min(900, rpm / 9), t, 0.06)
    this.engine.filter.Q.setTargetAtTime(boost ? 3.2 : 1.2, t, 0.1)
    this.engine.gain2.gain.setTargetAtTime(boost ? 0.14 : 0.07, t, 0.08)

    const squeal = active ? Math.min(0.16, Math.abs(slip) * 0.022) : 0
    this.tire.gain.gain.setTargetAtTime(squeal, t, 0.05)
    this.tire.filt.frequency.setTargetAtTime(1200 + Math.abs(slip) * 90, t, 0.08)

    const windVol = active ? Math.min(0.2, (speed / 80) ** 2 * 0.18 + (offroad ? 0.02 : 0)) : 0.012
    this.wind.gain.gain.setTargetAtTime(windVol, t, 0.15)
    this.wind.filter.frequency.setTargetAtTime(300 + speed * 7, t, 0.2)
  }

  click(pitch = 700) {
    if (!this.ready) return
    const ctx = this.ctx, t = ctx.currentTime
    const o = ctx.createOscillator(); o.type = 'triangle'
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.14, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1)
    o.frequency.setValueAtTime(pitch, t); o.frequency.exponentialRampToValueAtTime(pitch * 0.65, t + 0.09)
    o.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + 0.12)
  }

  chime() {
    if (!this.ready) return
    const ctx = this.ctx, t = ctx.currentTime
    ;[0, 4, 7, 12].forEach((n, i) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = midi(72 + n)
      const g = ctx.createGain(); g.gain.setValueAtTime(0, t + i * 0.07); g.gain.linearRampToValueAtTime(0.08, t + i * 0.07 + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.07 + 0.7)
      o.connect(g); g.connect(this.sfxBus); o.start(t + i * 0.07); o.stop(t + i * 0.07 + 0.8)
    })
  }

  note(freq, time, duration, gain, type = 'triangle', dest = null, filterHz = 2800) {
    const ctx = this.ctx
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, time)
    g.gain.linearRampToValueAtTime(gain, time + 0.015)
    g.gain.exponentialRampToValueAtTime(0.0001, time + duration)
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = filterHz
    o.connect(f); f.connect(g); g.connect(dest || this.musicBus)
    o.start(time); o.stop(time + duration + 0.05)
  }

  scheduleMusic() {
    if (!this.ready || !this.musicOn) return
    const ctx = this.ctx
    const stepDur = (60 / this.tempo) / 4
    while (this.nextStep < ctx.currentTime + 0.25) {
      const s = this.step % 64
      const bar = Math.floor(s / 16) % 4
      const chord = bar === 0 ? [57, 60, 64, 69] : bar === 1 ? [53, 57, 60, 65] : bar === 2 ? [48, 52, 55, 60] : [55, 59, 62, 67]
      const root = chord[0] - 12
      if (s % 16 === 0) {
        // warm pad
        chord.forEach((n, i) => this.note(midi(n), this.nextStep, 4.2, 0.022, i === 0 ? 'triangle' : 'sawtooth', null, 600 + i * 120))
      }
      if (s % 8 === 0) this.note(midi(root - 12 + (bar === 2 ? 0 : 0)), this.nextStep, 0.55, 0.11, 'sawtooth', this.delay, 420)
      if (s % 8 === 4) this.note(midi(root - 5), this.nextStep, 0.32, 0.055, 'sine', this.delay, 500)
      if (s % 2 === 1) {
        const arp = chord[(Math.floor(s / 2) + bar) % 4] + 12
        this.note(midi(arp), this.nextStep, 0.18, 0.026, 'triangle', this.delay, 3200)
      }
      if (s === 60) this.note(midi(chord[2] + 12), this.nextStep, 0.9, 0.03, 'sine', this.delay, 4000)
      this.nextStep += stepDur
      this.step++
    }
  }

  update() {
    if (!this.ready) return
    this.scheduleMusic()
  }

  setMuted(muted) {
    this.muted = muted
    if (this.master) this.master.gain.setTargetAtTime(muted ? 0 : 0.72, this.ctx.currentTime, 0.05)
  }

  setMusic(on) {
    this.musicOn = on
    if (this.musicBus) this.musicBus.gain.setTargetAtTime(on ? 0.16 : 0, this.ctx.currentTime, 0.2)
  }
}
