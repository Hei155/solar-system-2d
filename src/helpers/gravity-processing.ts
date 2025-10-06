import { GRAVITY_CONSTANT, STEP } from '../consts';
import { SUN_CHARACTERISTICS, EARTH_CHARACTERISTICS } from '../consts';
import { Planet } from '../types';

const UNIT =
  SUN_CHARACTERISTICS.DEFAULT_POSITION.x -
  EARTH_CHARACTERISTICS.DEFAULT_POSITION.x;

const SCALE = 1.4981e11 / UNIT;

export const processGravity = (planetA: Planet, planetB: Planet) => {
  const dx = (planetB.position.x - planetA.position.x) * SCALE;
  const dy = (planetB.position.y - planetA.position.y) * SCALE;

  const distance = Math.sqrt(dx * dx + dy * dy);

  const minDistance = 10;
  const safeDistance = Math.max(distance, minDistance);

  const force =
    (GRAVITY_CONSTANT * planetA.mass * planetB.mass) /
    Math.pow(safeDistance, 2);

  const forceX = force * (dx / safeDistance);
  const forceY = force * (dy / safeDistance);

  return { forceX, forceY };
};

export const updatePlanet = (planet: Planet, planets: Planet[]) => {
  let totalXForce = 0;
  let totalYForce = 0;

  for (const otherPlanet of planets) {
    const { forceX, forceY } = processGravity(planet, otherPlanet);
    totalXForce += forceX;
    totalYForce += forceY;
  }

  const newPlanet = {
    ...planet,
    velocity: {
      x: (planet.velocity.x += (totalXForce / planet.mass) * STEP),
      y: (planet.velocity.y += (totalYForce / planet.mass) * STEP),
    },
    position: {
      x: (planet.position.x += (planet.velocity.x / SCALE) * STEP),
      y: (planet.position.y += (planet.velocity.y / SCALE) * STEP),
    },
  };

  return newPlanet;
};
