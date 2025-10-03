import {
  SUN_CHARACTERISTICS,
  MERCURY_CHARACTERISTICS,
  VENUS_CHARACTERISTICS,
  EARTH_CHARACTERISTICS,
  MOON_CHARACTERISTICS,
  JUPITER_CHARACTERISTICS,
} from './planets-characteristics';
import { GRAVITY_CONSTANT } from './gravity';

const getOrbitalSpeed = (distance, attractorMass = 0) => {
  const currentAttractorMass =
    attractorMass !== 0 ? attractorMass : SUN_CHARACTERISTICS.MASS;
  return Math.sqrt((GRAVITY_CONSTANT * currentAttractorMass) / distance);
};

export const planets = [
  {
    id: 1,
    name: 'Sun',
    mass: SUN_CHARACTERISTICS.MASS,
    position: SUN_CHARACTERISTICS.DEFAULT_POSITION,
    velocity: { x: 0, y: 0 },
    color: 'orange',
    size: SUN_CHARACTERISTICS.SIZE,
    strokeColor: 'red',
  },
  {
    id: 2,
    name: 'Mercury',
    mass: MERCURY_CHARACTERISTICS.MASS,
    position: MERCURY_CHARACTERISTICS.DEFAULT_POSITION,
    velocity: { x: 0, y: getOrbitalSpeed(MERCURY_CHARACTERISTICS.DISTANCE) },
    color: 'grey',
    size: MERCURY_CHARACTERISTICS.SIZE,
    strokeColor: 'red',
  },
  {
    id: 3,
    name: 'Venus',
    mass: VENUS_CHARACTERISTICS.MASS,
    position: VENUS_CHARACTERISTICS.DEFAULT_POSITION,
    velocity: { x: 0, y: getOrbitalSpeed(VENUS_CHARACTERISTICS.DISTANCE) },
    color: 'yellow',
    size: VENUS_CHARACTERISTICS.SIZE,
    strokeColor: 'red',
  },
  {
    name: 'Earth',
    mass: EARTH_CHARACTERISTICS.MASS,
    position: EARTH_CHARACTERISTICS.DEFAULT_POSITION,
    velocity: {
      x: 0,
      y: getOrbitalSpeed(EARTH_CHARACTERISTICS.DISTANCE),
    },
    color: 'blue',
    size: EARTH_CHARACTERISTICS.SIZE,
    strokeColor: '61dafb',
  },
  {
    id: 5,
    name: 'Jupiter',
    mass: JUPITER_CHARACTERISTICS.MASS,
    position: JUPITER_CHARACTERISTICS.DEFAULT_POSITION,
    velocity: { x: 0, y: getOrbitalSpeed(JUPITER_CHARACTERISTICS.DISTANCE) },
    color: 'brown',
    size: JUPITER_CHARACTERISTICS.SIZE,
    strokeColor: 'red',
  },
  // {
  //   id: 6,
  //   name: 'Moon',
  //   mass: MOON_CHARACTERISTICS.MASS,
  //   position: MOON_CHARACTERISTICS.DEFAULT_POSITION,
  //   velocity: {
  //     x: 0,
  //     y: getOrbitalSpeed(EARTH_CHARACTERISTICS.DISTANCE),
  //   },
  //   color: 'c6c3b5',
  //   size: MOON_CHARACTERISTICS.SIZE,
  //   strokeColor: '61dafb',
  // },
];
