import * as THREE from 'three';

function smoothArray(values, radius, closed) {
  const out = new Float32Array(values.length);
  for (let i = 0; i < values.length; i++) {
    let sum = 0;
    let count = 0;
    for (let o = -radius; o <= radius; o++) {
      let index = i + o;
      if (closed) index = (index + values.length) % values.length;
      else if (index < 0 || index >= values.length) continue;
      sum += values[index];
      count++;
    }
    out[i] = sum / count;
  }
  return out;
}

export class Path3D {
  constructor(points, { closed = false, spacing = 3.5, heightAt = () => 0, smooth = 6 } = {}) {
    const vectors = points.map(([x, z]) => new THREE.Vector3(x, 0, z));
    this.closed = closed;
    this.curve = new THREE.CatmullRomCurve3(vectors, closed, 'catmullrom', 0.42);
    const length = this.curve.getLength();
    const count = Math.max(8, Math.ceil(length / spacing));
    const spaced = this.curve.getSpacedPoints(count);
    if (closed && spaced.length > 1) spaced.pop();

    const heights = new Float32Array(spaced.length);
    for (let i = 0; i < spaced.length; i++) {
      heights[i] = heightAt(spaced[i].x, spaced[i].z);
    }
    const smoothed = smooth > 0 ? smoothArray(heights, smooth, closed) : heights;

    this.samples = [];
    for (let i = 0; i < spaced.length; i++) {
      const p = spaced[i];
      this.samples.push({ x: p.x, y: smoothed[i], z: p.z, dist: 0, tx: 0, tz: 1, rx: 1, rz: 0 });
    }

    let total = 0;
    for (let i = 0; i < this.samples.length; i++) {
      const prev = this.samples[(i - 1 + this.samples.length) % this.samples.length];
      const next = this.samples[(i + 1) % this.samples.length];
      let dx = next.x - prev.x;
      let dz = next.z - prev.z;
      if (!closed && (i === 0 || i === this.samples.length - 1)) {
        dx = this.samples[Math.min(i + 1, this.samples.length - 1)].x - this.samples[Math.max(i - 1, 0)].x;
        dz = this.samples[Math.min(i + 1, this.samples.length - 1)].z - this.samples[Math.max(i - 1, 0)].z;
      }
      const len = Math.hypot(dx, dz) || 1;
      const s = this.samples[i];
      s.tx = dx / len;
      s.tz = dz / len;
      s.rx = s.tz;
      s.rz = -s.tx;
      s.dist = total;
      if (i < this.samples.length - 1) {
        total += Math.hypot(this.samples[i + 1].x - s.x, this.samples[i + 1].z - s.z);
      }
    }
    if (closed) {
      const last = this.samples[this.samples.length - 1];
      const first = this.samples[0];
      total += Math.hypot(first.x - last.x, first.z - last.z);
    }
    this.length = total;
    this.count = this.samples.length;
    this.spacing = total / Math.max(1, this.count);
  }

  sample(distance) {
    let d = distance;
    if (this.closed) {
      d = ((d % this.length) + this.length) % this.length;
    } else {
      d = Math.max(0, Math.min(this.length, d));
    }
    const approx = d / this.spacing;
    let i = Math.floor(approx);
    let t = approx - i;
    if (i >= this.count) i = this.count - 1;
    if (!this.closed && i >= this.count - 1) {
      i = this.count - 2;
      t = 1;
    }
    const a = this.samples[i];
    const b = this.samples[(i + 1) % this.count];
    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      z: a.z + (b.z - a.z) * t,
      tx: a.tx + (b.tx - a.tx) * t,
      tz: a.tz + (b.tz - a.tz) * t,
      rx: a.rx + (b.rx - a.rx) * t,
      rz: a.rz + (b.rz - a.rz) * t,
      index: i,
      distance: d,
    };
  }

  pointAt(distance) {
    return this.sample(distance);
  }

  nearestDistance(x, z) {
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < this.samples.length; i++) {
      const s = this.samples[i];
      const d = (s.x - x) ** 2 + (s.z - z) ** 2;
      if (d < bestDist) {
        bestDist = d;
        best = s.dist;
      }
    }
    return best;
  }
}
