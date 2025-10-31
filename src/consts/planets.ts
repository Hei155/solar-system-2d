import { GRAVITY_CONSTANT } from './gravity';
import {
  SUN_CHARACTERISTICS,
  EARTH_CHARACTERISTICS,
  MERCURY_CHARACTERISTICS,
  VENUS_CHARACTERISTICS,
  MARS_CHARACTERISTICS,
  JUPITER_CHARACTERISTICS,
  SATURN_CHARACTERISTICS,
  URANUS_CHARACTERISTICS,
} from './planets-characteristics';

const getOrbitalSpeed = (distance: number, attractorMass = 0) => {
  const currentAttractorMass =
    attractorMass !== 0 ? attractorMass : SUN_CHARACTERISTICS.mass;
  return Math.sqrt((GRAVITY_CONSTANT * currentAttractorMass) / distance);
};

export const planets = [
  {
    id: 1,
    name: 'Sun',
    mass: SUN_CHARACTERISTICS.mass,
    velocity: { x: 0, y: 0 },
    color: SUN_CHARACTERISTICS.color,
    size: SUN_CHARACTERISTICS.size,
    position: SUN_CHARACTERISTICS.position,
  },
  {
    id: 2,
    name: 'Mercury',
    mass: MERCURY_CHARACTERISTICS.mass / 20,
    velocity: { x: 0, y: getOrbitalSpeed(MERCURY_CHARACTERISTICS.distance) },
    color: 'grey',
    size: MERCURY_CHARACTERISTICS.size,
    position: MERCURY_CHARACTERISTICS.position,
  },
  {
    id: 3,
    name: 'Venus',
    mass: VENUS_CHARACTERISTICS.mass,
    velocity: { x: 0, y: getOrbitalSpeed(VENUS_CHARACTERISTICS.distance) },
    color: 'yellow',
    size: VENUS_CHARACTERISTICS.size,
    position: VENUS_CHARACTERISTICS.position,
  },
  {
    id: 4,
    name: 'Earth',
    mass: EARTH_CHARACTERISTICS.mass,
    velocity: {
      x: 0,
      y: getOrbitalSpeed(EARTH_CHARACTERISTICS.distance),
    },
    color: 'blue',
    size: EARTH_CHARACTERISTICS.size,
    position: EARTH_CHARACTERISTICS.position,
  },
  {
    id: 5,
    name: 'Mars',
    mass: MARS_CHARACTERISTICS.mass,
    velocity: {
      x: 0,
      y: getOrbitalSpeed(MARS_CHARACTERISTICS.distance),
    },
    color: 'brown',
    size: MARS_CHARACTERISTICS.size,
    position: MARS_CHARACTERISTICS.position,
  },
  {
    id: 6,
    name: 'Jupiter',
    mass: JUPITER_CHARACTERISTICS.mass,
    velocity: { x: 0, y: getOrbitalSpeed(JUPITER_CHARACTERISTICS.distance) },
    color: 'brown',
    size: JUPITER_CHARACTERISTICS.size,
    position: JUPITER_CHARACTERISTICS.position,
  },
  {
    id: 7,
    name: 'Saturn',
    mass: SATURN_CHARACTERISTICS.mass,
    velocity: { x: 0, y: getOrbitalSpeed(SATURN_CHARACTERISTICS.distance) },
    color: 'f9a365',
    size: SATURN_CHARACTERISTICS.size,
    position: SATURN_CHARACTERISTICS.position,
  },
  {
    id: 8,
    name: 'Uranus',
    mass: URANUS_CHARACTERISTICS.mass,
    velocity: { x: 0, y: getOrbitalSpeed(URANUS_CHARACTERISTICS.distance) },
    color: '0032ec',
    size: URANUS_CHARACTERISTICS.size,
    position: URANUS_CHARACTERISTICS.position,
  },
];
