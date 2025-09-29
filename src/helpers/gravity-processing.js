import { GRAVITY_CONSTANT, STEP } from '../consts';

export const processGravity = (planetA, planetB) => {
  const dx = planetB.position.x - planetA.position.x;
  const dy = planetB.position.y - planetA.position.y;

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

export const updatePlanet = (planet, planets) => {
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
      x: (planet.position.x += planet.velocity.x * STEP),
      y: (planet.position.y += planet.velocity.y * STEP),
    },
  };

  return newPlanet;
};
