import './styles.css';
import { Game } from './game.js';

const game = new Game();
game.boot().catch((error) => {
  console.error(error);
  const loading = document.getElementById('loading-label');
  const percent = document.getElementById('loading-percent');
  if (loading) loading.textContent = 'Не удалось запустить движок — обновите страницу';
  if (percent) percent.textContent = '!';
});

window.__APEX_GAME__ = game;
