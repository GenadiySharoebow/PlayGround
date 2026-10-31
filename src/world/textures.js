import * as THREE from 'three';
import { makeCanvas, mulberry32 } from '../utils.js';

export function makeAsphaltTexture() {
  const canvas = makeCanvas(256, 512);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#292a2d';
  ctx.fillRect(0, 0, 256, 512);
  const rand = mulberry32(77);
  for (let i = 0; i < 6200; i++) {
    const g = Math.floor(26 + rand() * 34);
    ctx.fillStyle = `rgba(${g},${g},${g + 2},${0.12 + rand() * 0.35})`;
    const s = 0.5 + rand() * 2.2;
    ctx.fillRect(rand() * 256, rand() * 512, s, s);
  }
  const grad = ctx.createLinearGradient(0, 0, 256, 0);
  grad.addColorStop(0, 'rgba(0,0,0,0)');
  grad.addColorStop(0.2, 'rgba(0,0,0,.12)');
  grad.addColorStop(0.34, 'rgba(255,255,255,.02)');
  grad.addColorStop(0.5, 'rgba(0,0,0,0)');
  grad.addColorStop(0.66, 'rgba(255,255,255,.02)');
  grad.addColorStop(0.8, 'rgba(0,0,0,.12)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 512);
  ctx.fillStyle = 'rgba(224,220,204,.7)';
  ctx.fillRect(9, 0, 3, 512);
  ctx.fillRect(244, 0, 3, 512);
  ctx.fillStyle = 'rgba(226,177,68,.78)';
  for (let y = 0; y < 512; y += 66) ctx.fillRect(126, y, 4, 38);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

export function makeWindowTextures(seed, tint = 0xffc477) {
  const rand = mulberry32(seed);
  const w = 128;
  const h = 256;
  const mapCanvas = makeCanvas(w, h);
  const glowCanvas = makeCanvas(w, h);
  const map = mapCanvas.getContext('2d');
  const glow = glowCanvas.getContext('2d');
  map.fillStyle = '#2b2e33';
  map.fillRect(0, 0, w, h);
  const brick = map.createLinearGradient(0, 0, w, 0);
  brick.addColorStop(0, 'rgba(255,255,255,.06)');
  brick.addColorStop(0.5, 'rgba(0,0,0,.06)');
  brick.addColorStop(1, 'rgba(255,255,255,.02)');
  map.fillStyle = brick;
  map.fillRect(0, 0, w, h);
  glow.fillStyle = '#000';
  glow.fillRect(0, 0, w, h);
  const cols = 7;
  const rows = 15;
  const padX = 8;
  const padY = 8;
  const cellW = (w - padX * 2) / cols;
  const cellH = (h - padY * 2) / rows;
  const warm = new THREE.Color(tint);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const wx = padX + x * cellW + 2;
      const wy = padY + y * cellH + 2;
      const ww = cellW - 4;
      const wh = cellH - 4;
      const lit = rand() > 0.58;
      map.fillStyle = lit ? '#e8c98b' : '#161b20';
      map.fillRect(wx, wy, ww, wh);
      map.fillStyle = 'rgba(0,0,0,.28)';
      map.fillRect(wx, wy + wh * 0.55, ww, 1);
      if (lit) {
        glow.fillStyle = `rgba(${Math.round(warm.r * 255)},${Math.round(warm.g * 255)},${Math.round(warm.b * 255)},${0.55 + rand() * 0.4})`;
        glow.fillRect(wx, wy, ww, wh);
      }
    }
  }
  // Concrete bands every few floors.
  map.fillStyle = 'rgba(10,12,14,.4)';
  for (let y = 1; y < rows; y += 5) map.fillRect(0, padY + y * cellH, w, 2);
  const mapTex = new THREE.CanvasTexture(mapCanvas);
  const glowTex = new THREE.CanvasTexture(glowCanvas);
  mapTex.colorSpace = THREE.SRGBColorSpace;
  glowTex.colorSpace = THREE.SRGBColorSpace;
  mapTex.anisotropy = 4;
  glowTex.anisotropy = 4;
  return { map: mapTex, glow: glowTex };
}

export function makeSignTexture(text, color = '#ff5a2a', sub = 'APEX MOTORSPORT') {
  const canvas = makeCanvas(512, 192);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0a0c10';
  ctx.fillRect(0, 0, 512, 192);
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.strokeRect(10, 10, 492, 172);
  ctx.fillStyle = color;
  ctx.font = 'italic 900 68px "Arial Narrow", "Barlow Condensed", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 92);
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  ctx.font = '700 15px "Manrope", sans-serif';
  ctx.letterSpacing = '5px';
  ctx.fillText(sub, 256, 148);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function makeBannerTexture(text = 'HORIZON', sub = 'APEX FESTIVAL') {
  const canvas = makeCanvas(1024, 192);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0c0e13';
  ctx.fillRect(0, 0, 1024, 192);
  const g = ctx.createLinearGradient(0, 0, 1024, 0);
  g.addColorStop(0, '#ff4c1f');
  g.addColorStop(0.5, '#ffb83d');
  g.addColorStop(1, '#ff4c1f');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 1024, 8);
  ctx.fillRect(0, 184, 1024, 8);
  ctx.fillStyle = '#f5f1e8';
  ctx.font = 'italic 900 108px "Arial Narrow", "Barlow Condensed", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 512, 89);
  ctx.fillStyle = '#ffbe3d';
  ctx.font = '800 16px "Manrope", sans-serif';
  ctx.fillText(sub, 512, 155);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function makeBoardTexture() {
  const canvas = makeCanvas(256, 320);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#06151a';
  ctx.fillRect(0, 0, 256, 320);
  ctx.strokeStyle = '#6de7ff';
  ctx.lineWidth = 6;
  ctx.strokeRect(9, 9, 238, 302);
  ctx.fillStyle = '#6de7ff';
  ctx.font = 'italic 900 160px "Arial Narrow", "Barlow Condensed", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('H', 128, 140);
  ctx.fillStyle = '#e9fdff';
  ctx.font = '800 14px "Manrope", sans-serif';
  ctx.fillText('HORIZON BOARD', 128, 245);
  ctx.fillStyle = 'rgba(109,231,255,.5)';
  ctx.font = '700 10px "Manrope", sans-serif';
  ctx.fillText('SMASH TO COLLECT', 128, 270);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeCloudTexture() {
  const canvas = makeCanvas(512, 256);
  const ctx = canvas.getContext('2d');
  const rand = mulberry32(22);
  ctx.clearRect(0, 0, 512, 256);
  for (let i = 0; i < 28; i++) {
    const x = 70 + rand() * 372;
    const y = 95 + rand() * 70;
    const r = 35 + rand() * 75;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255,248,235,.48)');
    g.addColorStop(0.55, 'rgba(255,245,228,.2)');
    g.addColorStop(1, 'rgba(255,245,228,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeGlowTexture(inner = 'rgba(255,244,220,1)', outer = 'rgba(255,170,80,0)') {
  const canvas = makeCanvas(256, 256);
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, inner);
  g.addColorStop(0.12, 'rgba(255,226,168,.82)');
  g.addColorStop(0.4, 'rgba(255,170,80,.18)');
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeCheckeredTexture() {
  const canvas = makeCanvas(512, 128);
  const ctx = canvas.getContext('2d');
  const size = 32;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 16; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? '#f4f0e4' : '#101216';
      ctx.fillRect(x * size, y * size, size, size);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 1);
  return tex;
}

export function makeHorizonScreenTexture() {
  const canvas = makeCanvas(1024, 512);
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 1024, 512);
  g.addColorStop(0, '#09111b');
  g.addColorStop(0.5, '#142234');
  g.addColorStop(1, '#1f1010');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 1024, 512);
  ctx.strokeStyle = 'rgba(109,231,255,.2)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * 26);
    ctx.lineTo(1024, i * 26 + 80);
    ctx.stroke();
  }
  ctx.fillStyle = '#ff5a2a';
  ctx.fillRect(0, 0, 1024, 6);
  ctx.fillStyle = '#f5f1e8';
  ctx.font = 'italic 900 136px "Arial Narrow", "Barlow Condensed", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('HORIZON', 512, 244);
  ctx.fillStyle = '#ffbe3d';
  ctx.font = '800 20px "Manrope", sans-serif';
  ctx.fillText('WELCOME TO THE FESTIVAL', 512, 345);
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  ctx.font = '700 15px "Manrope", sans-serif';
  ctx.fillText('SEASON 01  ·  OPEN WORLD  ·  GOLDEN HOUR', 512, 385);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeStarfieldTexture() {
  const canvas = makeCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 512, 512);
  const rand = mulberry32(8);
  for (let i = 0; i < 500; i++) {
    const a = 0.2 + rand() * 0.8;
    ctx.fillStyle = `rgba(255,255,255,${a})`;
    ctx.fillRect(rand() * 512, rand() * 512, rand() > 0.9 ? 2 : 1, rand() > 0.9 ? 2 : 1);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
