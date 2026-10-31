import { buildFestival } from './festival.js';
import { buildCity } from './city.js';
import { buildNature } from './nature.js';
import { buildRoadside } from './roadside.js';

export function buildWorldProps(world) {
  buildFestival(world);
  buildCity(world);
  buildNature(world);
  buildRoadside(world);
}
