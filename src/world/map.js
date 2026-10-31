import * as THREE from 'three';
import { CITY, FESTIVAL, LAKE } from '../config.js';
import { makeCanvas, clamp } from '../utils.js';

export function buildWorldMap(world) {
  const size = 1000;
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const half = 2000;
  const toPx = (v) => ((v + half) / 4000) * size;
  const cell = 8;
  const count = Math.ceil(size / cell);
  const color = new THREE.Color();
  for (let y = 0; y < count; y++) {
    for (let x = 0; x < count; x++) {
      const wx = (x / count) * 4000 - half;
      const wz = (y / count) * 4000 - half;
      const h = world.rawHeight(wx, wz);
      if (h < 1.5) color.setHex(0x173c48);
      else if (h < 5) color.setHex(0x7d7355);
      else if (h < 24) color.setHex(0x344b34);
      else if (h < 52) color.setHex(0x4c5838);
      else if (h < 88) color.setHex(0x5e5c4d);
      else color.setHex(0x7f8178);
      ctx.fillStyle = `#${color.getHexString()}`;
      ctx.fillRect(x * cell, y * cell, cell + 1, cell + 1);
    }
  }

  // Water.
  ctx.beginPath();
  ctx.arc(toPx(LAKE.x), toPx(LAKE.z), (LAKE.radius / 4000) * size, 0, Math.PI * 2);
  ctx.fillStyle = '#1f5966';
  ctx.fill();
  ctx.strokeStyle = 'rgba(130,220,220,.45)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // City blocks.
  for (let iz = 0; iz < 4; iz++) {
    for (let ix = 0; ix < 4; ix++) {
      const x = 824 + ix * 134;
      const z = -996 + iz * 148;
      ctx.fillStyle = 'rgba(25,29,34,.72)';
      ctx.fillRect(toPx(x - 55), toPx(z - 55), (110 / 4000) * size, (110 / 4000) * size);
    }
  }

  // Roads.
  for (const path of world.roadPaths) {
    ctx.beginPath();
    for (let i = 0; i < path.samples.length; i++) {
      const s = path.samples[i];
      const px = toPx(s.x);
      const pz = toPx(s.z);
      if (i === 0) ctx.moveTo(px, pz);
      else ctx.lineTo(px, pz);
    }
    if (path.closed) ctx.closePath();
    const width = clamp((path.width / 4000) * size * 1.25, 2, 7);
    ctx.strokeStyle = path.kind === 'highway' ? '#e0d8c5' : path.kind === 'festival' ? '#ffbe3d' : '#b7b09e';
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.strokeStyle = 'rgba(10,12,14,.55)';
    ctx.lineWidth = Math.max(1, width * 0.28);
    ctx.stroke();
  }

  // Festival area.
  ctx.beginPath();
  ctx.arc(toPx(FESTIVAL.x), toPx(FESTIVAL.z), (FESTIVAL.radius / 4000) * size, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,90,42,.2)';
  ctx.fill();
  ctx.strokeStyle = '#ff5a2a';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Compass / labels.
  ctx.font = '700 15px "Manrope", sans-serif';
  ctx.fillStyle = 'rgba(245,241,232,.78)';
  ctx.textAlign = 'center';
  ctx.fillText('HORIZON FESTIVAL', toPx(0), toPx(0) - 16);
  ctx.fillStyle = 'rgba(255,190,61,.9)';
  ctx.fillText('APEX CITY', toPx(CITY.x), toPx(CITY.z));
  ctx.fillStyle = 'rgba(160,230,235,.82)';
  ctx.fillText('MIRROR LAKE', toPx(LAKE.x), toPx(LAKE.z));
  ctx.fillStyle = 'rgba(230,225,210,.58)';
  ctx.fillText('MOUNTAIN PASS', toPx(-1230), toPx(-1120));

  ctx.strokeStyle = 'rgba(255,255,255,.12)';
  ctx.lineWidth = 1;
  for (let i = 1; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo((size / 4) * i, 0);
    ctx.lineTo((size / 4) * i, size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, (size / 4) * i);
    ctx.lineTo(size, (size / 4) * i);
    ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(255,255,255,.22)';
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, size - 4, size - 4);

  return canvas;
}
