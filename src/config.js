export const CARS = [
  {
    id: 'falcon',
    name: 'FALCON GT-R',
    brand: 'VORTEX MOTORS',
    cls: 'A',
    type: 'coupe',
    color: 0x1f6fff,
    accent: 0xf4f7ff,
    rim: 0xd7dde8,
    drive: 'AWD',
    topSpeed: 318,
    zeroTo100: 3.6,
    stats: { speed: 78, accel: 72, handling: 70, grip: 75 },
    engine: { cylinders: 6, note: 82, character: 'smooth' },
  },
  {
    id: 'vipera',
    name: 'VIPERA SV',
    brand: 'STRADALE',
    cls: 'S1',
    type: 'super',
    color: 0xf0341f,
    accent: 0x181818,
    rim: 0x2c2c2e,
    drive: 'RWD',
    topSpeed: 348,
    zeroTo100: 3.1,
    stats: { speed: 90, accel: 84, handling: 78, grip: 80 },
    engine: { cylinders: 10, note: 118, character: 'wild' },
  },
  {
    id: 'nomad',
    name: 'NOMAD RS',
    brand: 'TERRA WORKS',
    cls: 'B',
    type: 'rally',
    color: 0xff7a1a,
    accent: 0x15171b,
    rim: 0xd6a65a,
    drive: 'AWD',
    topSpeed: 240,
    zeroTo100: 4.6,
    stats: { speed: 62, accel: 70, handling: 88, grip: 86 },
    engine: { cylinders: 4, note: 94, character: 'raspy' },
  },
  {
    id: 'apex',
    name: 'APEX ONE',
    brand: 'APEX MOTORSPORT',
    cls: 'S2',
    type: 'hyper',
    color: 0xffd12e,
    accent: 0x1a1a1d,
    rim: 0x1c1c1f,
    drive: 'AWD',
    topSpeed: 390,
    zeroTo100: 2.5,
    stats: { speed: 98, accel: 96, handling: 88, grip: 91 },
    engine: { cylinders: 8, note: 136, character: 'scream' },
  },
  {
    id: 'titan',
    name: 'TITAN V8',
    brand: 'IRONWORKS',
    cls: 'A',
    type: 'muscle',
    color: 0x15161a,
    accent: 0xd8d8d8,
    rim: 0xb8b8b8,
    drive: 'RWD',
    topSpeed: 300,
    zeroTo100: 4.2,
    stats: { speed: 82, accel: 80, handling: 58, grip: 63 },
    engine: { cylinders: 8, note: 72, character: 'deep' },
  },
  {
    id: 'kestrel',
    name: 'KESTREL 911',
    brand: 'KESTREL CLASSICS',
    cls: 'B',
    type: 'classic',
    color: 0xc9d1d9,
    accent: 0x4d1717,
    rim: 0xdedede,
    drive: 'RWD',
    topSpeed: 265,
    zeroTo100: 4.9,
    stats: { speed: 68, accel: 64, handling: 72, grip: 68 },
    engine: { cylinders: 6, note: 104, character: 'airy' },
  },
  {
    id: 'yeti',
    name: 'YETI X',
    brand: 'NORD EXPEDITION',
    cls: 'B',
    type: 'suv',
    color: 0x6f8a4c,
    accent: 0x1c1e1a,
    rim: 0x9c9c94,
    drive: 'AWD',
    topSpeed: 210,
    zeroTo100: 6.2,
    stats: { speed: 52, accel: 58, handling: 76, grip: 94 },
    engine: { cylinders: 6, note: 62, character: 'growl' },
  },
  {
    id: 'sakura',
    name: 'SAKURA R',
    brand: 'SAKURA MOTOR CO.',
    cls: 'A',
    type: 'jdm',
    color: 0xf2f2ee,
    accent: 0xe13333,
    rim: 0x2b2b2e,
    drive: 'RWD',
    topSpeed: 280,
    zeroTo100: 3.9,
    stats: { speed: 76, accel: 75, handling: 86, grip: 82 },
    engine: { cylinders: 4, note: 112, character: 'turbo' },
  },
  {
    id: 'storm',
    name: 'STORM E',
    brand: 'VOLT DYNAMICS',
    cls: 'S1',
    type: 'ev',
    color: 0x35e5e5,
    accent: 0x101214,
    rim: 0xd7f8ff,
    drive: 'AWD',
    topSpeed: 330,
    zeroTo100: 2.9,
    stats: { speed: 86, accel: 90, handling: 82, grip: 85 },
    engine: { cylinders: 0, note: 146, character: 'electric' },
  },
  {
    id: 'dune',
    name: 'DUNE KING',
    brand: 'DUNE & SONS',
    cls: 'C',
    type: 'truck',
    color: 0xc79a5b,
    accent: 0x26221d,
    rim: 0x2d2a26,
    drive: '4WD',
    topSpeed: 195,
    zeroTo100: 7.5,
    stats: { speed: 45, accel: 48, handling: 64, grip: 96 },
    engine: { cylinders: 8, note: 54, character: 'rumble' },
  },
];

export const CIRCUIT = [
  [0, -390], [330, -355], [590, -210], [690, 30], [620, 270], [390, 430],
  [90, 500], [-220, 440], [-450, 250], [-500, -20], [-420, -270], [-190, -400],
];

export const HIGHWAY = [
  [-1320, -1280], [-500, -1480], [520, -1440], [1250, -1000], [1560, -330],
  [1580, 520], [1320, 1180], [700, 1480], [-150, 1560], [-980, 1400],
  [-1450, 800], [-1600, 100], [-1560, -700],
];

export const CITY_LOOP = [
  [760, -480], [1300, -480], [1300, -1080], [760, -1080],
];

export const CITY_CROSS = [
  [760, -780], [1300, -780],
  [1030, -480], [1030, -1080],
  [890, -480], [890, -1080],
  [760, -630], [1300, -630],
  [760, -930], [1300, -930],
];

export const CITY_LINK = [
  [690, 30], [870, -160], [1020, -420], [1050, -700],
];

export const LAKE_ROAD = [
  [-450, 250], [-650, 280], [-820, 420], [-840, 620], [-650, 780], [-380, 700], [-220, 440],
];

export const MOUNTAIN_ROAD = [
  [-500, -20], [-650, -250], [-700, -520], [-920, -730], [-1100, -1000], [-1320, -1280],
];

export const FARM_ROAD = [
  [-420, -270], [-690, -390], [-980, -260], [-1160, -500], [-920, -730],
];

export const ROADS = [
  { id: 'circuit', points: CIRCUIT, width: 17, closed: true, kind: 'festival' },
  { id: 'highway', points: HIGHWAY, width: 21, closed: true, kind: 'highway' },
  { id: 'city-loop', points: CITY_LOOP, width: 15, closed: true, kind: 'city' },
  { id: 'city-link', points: CITY_LINK, width: 15, closed: false, kind: 'city' },
  { id: 'lake-road', points: LAKE_ROAD, width: 12, closed: false, kind: 'local' },
  { id: 'mountain-road', points: MOUNTAIN_ROAD, width: 12, closed: false, kind: 'mountain' },
  { id: 'farm-road', points: FARM_ROAD, width: 11, closed: false, kind: 'local' },
];

// Extra city streets are drawn as narrow roads.
for (let i = 0; i < CITY_CROSS.length; i += 2) {
  ROADS.push({
    id: `city-street-${i / 2}`,
    points: [CITY_CROSS[i], CITY_CROSS[i + 1]],
    width: 9,
    closed: false,
    kind: 'street',
  });
}

export const EVENTS = [
  {
    id: 'festival-circuit',
    name: 'ФЕСТИВАЛЬНЫЙ КРУГ',
    type: 'CIRCUIT',
    icon: '◎',
    desc: '2 круга · 12 поворотов · 3 соперника',
    route: CIRCUIT,
    closed: true,
    laps: 2,
    width: 17,
    reward: 1800,
    credits: 14000,
    aiSkill: 0.87,
    startIndex: 0,
  },
  {
    id: 'coastal-rush',
    name: 'ПРИБРЕЖНЫЙ РЫВОК',
    type: 'SPRINT',
    icon: '»',
    desc: 'Спринт · 4.4 км · 3 соперника',
    route: [[690, 30], [870, -160], [1020, -420], [1050, -700], [1250, -1000], [1560, -330], [1580, 520], [1320, 1180], [700, 1480]],
    closed: false,
    laps: 1,
    width: 16,
    reward: 2200,
    credits: 18000,
    aiSkill: 0.9,
    startIndex: 0,
  },
  {
    id: 'mountain-king',
    name: 'КОРОЛЬ ГОР',
    type: 'HILL CLIMB',
    icon: '▲',
    desc: 'Подъём · 3.2 км · 3 соперника',
    route: [[-500, -20], [-650, -250], [-700, -520], [-920, -730], [-1100, -1000], [-1320, -1280]],
    closed: false,
    laps: 1,
    width: 13,
    reward: 2600,
    credits: 22000,
    aiSkill: 0.92,
    startIndex: 0,
  },
];

export const WATER_LEVEL = 1.5;
export const FESTIVAL = { x: 0, z: 0, radius: 240 };
export const CITY = { x: 1030, z: -780, radius: 430 };
export const LAKE = { x: -650, z: 560, radius: 330 };

export const QUALITY = {
  high: { pixelRatio: 1.5, shadows: true, shadowSize: 2048, trees: 720, grass: 320, drawDistance: 2600 },
  medium: { pixelRatio: 1.1, shadows: true, shadowSize: 1024, trees: 480, grass: 200, drawDistance: 2200 },
  low: { pixelRatio: 0.85, shadows: false, shadowSize: 512, trees: 280, grass: 100, drawDistance: 1700 },
};
