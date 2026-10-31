import { clamp } from './utils.js';

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.enabled = true;
    this.volume = 0.65;
    this.engineGain = null;
    this.windGain = null;
    this.tireGain = null;
    this.osc = [];
    this.filter = null;
    this.noiseBuffer = null;
    this.tireFilter = null;
    this.windFilter = null;
    this.started = false;
  }

  async init() {
    if (this.ready) {
      await this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    const ctx = this.ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.enabled ? this.volume : 0;
    this.master.connect(ctx.destination);

    // Shared noise source for wind and tire scrub.
    const length = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      last = last * 0.86 + white * 0.14;
      data[i] = last * 1.4;
    }
    this.noiseBuffer = buffer;

    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    this.filter = ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.value = 420;
    this.filter.Q.value = 1.4;
    this.engineGain.connect(this.filter);
    this.filter.connect(this.master);

    const makeOsc = (type, freq, detune = 0, gain = 0.3) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = detune;
      g.gain.value = gain;
      osc.connect(g);
      g.connect(this.engineGain);
      osc.start();
      this.osc.push({ osc, gain: g });
      return osc;
    };
    makeOsc('sawtooth', 70, -4, 0.32);
    makeOsc('square', 140, 5, 0.12);
    makeOsc('sine', 35, 0, 0.5);

    const windSource = ctx.createBufferSource();
    windSource.buffer = buffer;
    windSource.loop = true;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windFilter.frequency.value = 500;
    windSource.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.master);
    windSource.start();

    const tireSource = ctx.createBufferSource();
    tireSource.buffer = buffer;
    tireSource.loop = true;
    this.tireGain = ctx.createGain();
    this.tireGain.gain.value = 0;
    this.tireFilter = ctx.createBiquadFilter();
    this.tireFilter.type = 'bandpass';
    this.tireFilter.frequency.value = 2100;
    this.tireFilter.Q.value = 1.2;
    tireSource.connect(this.tireFilter);
    this.tireFilter.connect(this.tireGain);
    this.tireGain.connect(this.master);
    tireSource.start();

    this.ready = true;
    await ctx.resume();
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (this.master) {
      this.master.gain.setTargetAtTime(enabled ? this.volume : 0, this.ctx.currentTime, 0.05);
    }
  }

  setVolume(volume) {
    this.volume = clamp(volume, 0, 1);
    if (this.master) this.master.gain.setTargetAtTime(this.enabled ? this.volume : 0, this.ctx.currentTime, 0.04);
  }

  update(vehicle, paused = false) {
    if (!this.ready || !vehicle) return;
    const now = this.ctx.currentTime;
    if (paused) {
      this.engineGain.gain.setTargetAtTime(0.0001, now, 0.08);
      this.windGain.gain.setTargetAtTime(0.0001, now, 0.08);
      this.tireGain.gain.setTargetAtTime(0.0001, now, 0.08);
      return;
    }
    const rpmNorm = clamp((vehicle.rpm - 800) / 5800, 0, 1.15);
    const speedNorm = clamp(vehicle.speedKmh / 360, 0, 1.2);
    const electric = vehicle.config.engine?.cylinders === 0;
    const base = electric ? 90 + rpmNorm * 460 : 32 + rpmNorm * 150;
    this.osc[0].osc.frequency.setTargetAtTime(base, now, 0.035);
    this.osc[1].osc.frequency.setTargetAtTime(base * (electric ? 2.9 : 2.02), now, 0.035);
    this.osc[2].osc.frequency.setTargetAtTime(base * 0.5, now, 0.045);
    this.filter.frequency.setTargetAtTime(260 + rpmNorm * (electric ? 2400 : 1500) + Math.abs(vehicle.throttle) * 280, now, 0.05);
    this.filter.Q.setTargetAtTime(1.1 + rpmNorm * 1.8, now, 0.1);
    const engineLevel = 0.018 + Math.abs(vehicle.throttle) * 0.032 + speedNorm * 0.014 + (vehicle.airborne ? 0.004 : 0);
    this.engineGain.gain.setTargetAtTime(engineLevel, now, 0.06);
    this.windGain.gain.setTargetAtTime(0.002 + speedNorm * 0.055, now, 0.1);
    this.windFilter.frequency.setTargetAtTime(300 + speedNorm * 1500, now, 0.1);
    const slip = vehicle.drifting ? 0.03 + clamp(vehicle.slip / 20, 0, 1) * 0.045 : (vehicle.onRoad ? 0.0015 : 0.008);
    this.tireGain.gain.setTargetAtTime(slip, now, 0.06);
    this.tireFilter.frequency.setTargetAtTime(1500 + speedNorm * 1300, now, 0.08);
  }

  click() {
    if (!this.ready) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(760, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.045, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  }

  beep(frequency = 560, duration = 0.14, volume = 0.05) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start();
    osc.stop(ctx.currentTime + duration + 0.02);
  }

  chord(frequencies, duration = 0.4) {
    if (!this.ready) return;
    frequencies.forEach((f, i) => setTimeout(() => this.beep(f, duration, 0.04), i * 70));
  }
}
