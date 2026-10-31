/** Tiny procedural audio kit — no samples, no downloads. */
export class GameAudio {
  constructor(muted = false) {
    this.ctx = null;
    this.master = null;
    this.muted = muted;
    this.running = false;
    this.engineReady = false;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    try {
      this.ctx = new AudioCtx();
    } catch {
      return;
    }
    const ctx = this.ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.55;
    this.master.connect(ctx.destination);

    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = 480;
    this.engineFilter.Q.value = 2.2;
    this.engineGain.connect(this.engineFilter);
    this.engineFilter.connect(this.master);

    this.engineOscA = ctx.createOscillator();
    this.engineOscA.type = 'sawtooth';
    this.engineOscA.frequency.value = 55;
    this.engineOscB = ctx.createOscillator();
    this.engineOscB.type = 'square';
    this.engineOscB.frequency.value = 27.5;
    this.engineOscB.detune.value = -7;
    const bGain = ctx.createGain();
    bGain.gain.value = 0.55;
    this.engineOscA.connect(this.engineGain);
    this.engineOscB.connect(bGain);
    bGain.connect(this.engineGain);
    this.engineOscA.start();
    this.engineOscB.start();

    this.wind = ctx.createBufferSource();
    this.wind.buffer = this.noiseBuffer(3);
    this.wind.loop = true;
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = 'bandpass';
    this.windFilter.frequency.value = 700;
    this.windFilter.Q.value = 0.7;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    this.wind.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.master);
    this.wind.start();

    this.engineReady = true;
  }

  noiseBuffer(seconds) {
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i += 1) {
      const white = Math.random() * 2 - 1;
      last = last * 0.86 + white * 0.14;
      data[i] = last * 2.4;
    }
    return buffer;
  }

  setMuted(muted) {
    this.muted = muted;
    if (this.master) this.master.gain.setTargetAtTime(muted ? 0 : 0.55, this.ctx.currentTime, 0.03);
  }

  setRunning(running) {
    this.running = running;
    if (!this.engineReady) return;
    if (!running) {
      this.engineGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.12);
      this.windGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2);
    }
  }

  update(speed, throttle, airborne) {
    if (!this.engineReady || !this.running) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const sp = Math.min(speed, 40);
    const freq = 48 + sp * 2.55 + Math.abs(throttle) * 14;
    this.engineOscA.frequency.setTargetAtTime(freq, t, 0.07);
    this.engineOscB.frequency.setTargetAtTime(freq * 0.5, t, 0.09);
    this.engineFilter.frequency.setTargetAtTime(340 + sp * 46 + Math.abs(throttle) * 220, t, 0.09);
    const target = (0.026 + sp * 0.0017 + Math.abs(throttle) * 0.018) * (airborne ? 0.72 : 1);
    this.engineGain.gain.setTargetAtTime(target, t, 0.09);
    this.windGain.gain.setTargetAtTime(Math.min(0.06, sp * 0.00145), t, 0.16);
    this.windFilter.frequency.setTargetAtTime(420 + sp * 32, t, 0.2);
  }

  blip(freq, duration = 0.1, type = 'sine', volume = 0.16, slide = 0) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + duration);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(t);
    osc.stop(t + duration + 0.04);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  noiseBurst(duration = 0.3, volume = 0.24, frequency = 900) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer(Math.max(0.1, duration));
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(frequency, t);
    filter.frequency.exponentialRampToValueAtTime(160, t + duration);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    src.start(t);
    src.stop(t + duration + 0.02);
    src.onended = () => {
      src.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  coin(streak = 0) {
    const base = 880 + Math.min(streak, 8) * 38;
    this.blip(base, 0.075, 'triangle', 0.13, 180);
    setTimeout(() => this.blip(base * 1.5, 0.09, 'sine', 0.09, 90), 45);
  }

  fuel() {
    this.blip(440, 0.14, 'sine', 0.15, 220);
    setTimeout(() => this.blip(660, 0.16, 'triangle', 0.12, 180), 70);
    setTimeout(() => this.blip(880, 0.22, 'sine', 0.09, 120), 140);
  }

  flip(flips = 1) {
    const notes = [523, 659, 784, 1046, 1318];
    for (let i = 0; i < Math.min(5, 2 + flips); i += 1) {
      setTimeout(() => this.blip(notes[i], 0.12, 'triangle', 0.11, 40), i * 62);
    }
  }

  land(strength) {
    const s = Math.min(1, Math.max(0.18, strength / 13));
    this.blip(72, 0.16, 'sine', 0.13 * s, -28);
    this.noiseBurst(0.12, 0.11 * s, 500);
  }

  crash() {
    this.noiseBurst(0.7, 0.32, 1500);
    this.blip(160, 0.7, 'sawtooth', 0.12, -110);
    setTimeout(() => this.noiseBurst(0.4, 0.16, 600), 120);
  }

  click() {
    this.blip(620, 0.05, 'triangle', 0.07, 80);
  }

  buy() {
    const notes = [660, 880, 1100, 1320];
    notes.forEach((n, i) => setTimeout(() => this.blip(n, 0.1, 'triangle', 0.1, 40), i * 70));
  }

  denied() {
    this.blip(220, 0.12, 'sawtooth', 0.08, -60);
    setTimeout(() => this.blip(180, 0.15, 'sawtooth', 0.08, -40), 80);
  }
}
