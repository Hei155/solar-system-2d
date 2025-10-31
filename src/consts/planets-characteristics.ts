const SCALE = 200;

export const FULL_WIDTH = window.innerWidth;
export const FULL_HEIGHT = window.innerHeight;

export const SUN_MASS = 1.989e30;
export const SUN_SIZE = 10;
export const SUN_COLOR = 'orange';
export const SUN_DEFAULT_POSITION = {
  x: FULL_WIDTH / 2,
  y: FULL_HEIGHT / 2,
};

export const EARTH_MASS = SUN_MASS / 330000;
export const EARTH_SIZE = SUN_SIZE / 3;
export const EARTH_DISTANCE = 1.4981e11;
export const EARTH_DISTANCE_AU = 1;
export const EARTH_DEFAULT_POSITION = {
  x: SUN_DEFAULT_POSITION.x - EARTH_DISTANCE_AU * SCALE,
  y: FULL_HEIGHT / 2,
};

export const MERCURY_MASS = EARTH_MASS / 20;
export const MERCURY_SIZE = EARTH_SIZE / 3;
export const MERCURY_DISTANCE = 6.8538e10;
export const MERCURY_DISTANCE_AU = 0.39;
export const MERCURY_DEFAULT_POSITION = {
  x: SUN_DEFAULT_POSITION.x - MERCURY_DISTANCE_AU * SCALE,
  y: FULL_HEIGHT / 2,
};

export const VENUS_MASS = EARTH_MASS / 1.23;
export const VENUS_SIZE = EARTH_SIZE;
export const VENUS_DISTANCE = 1.0748e11;
export const VENUS_DISTANCE_AU = 0.72;
export const VENUS_DEFAULT_POSITION = {
  x: SUN_DEFAULT_POSITION.x - VENUS_DISTANCE_AU * SCALE,
  y: FULL_HEIGHT / 2,
};

export const MARS_MASS = EARTH_MASS / 9.3;
export const MARS_SIZE = SUN_SIZE / 3;
export const MARS_DISTANCE = 2.228e11;
export const MARS_DISTANCE_AU = 1.52;
export const MARS_DEFAULT_POSITION = {
  x: SUN_DEFAULT_POSITION.x - MARS_DISTANCE_AU * SCALE,
  y: FULL_HEIGHT / 2,
};

export const JUPITER_MASS = SUN_MASS / 1047;
export const JUPITER_SIZE = SUN_SIZE / 2;
export const JUPITER_DISTANCE = 7.7857e11;
export const JUPITER_DISTANCE_AU = 5.2;
export const JUPITER_DEFAULT_POSITION = {
  x: SUN_DEFAULT_POSITION.x - JUPITER_DISTANCE_AU * SCALE,
  y: FULL_HEIGHT / 2,
};

export const SATURN_MASS = JUPITER_MASS / 3.505;
export const SATURN_SIZE = SUN_SIZE / 2;
export const SATURN_DISTANCE = 1.2934e12;
export const SATURN_DISTANCE_AU = 9.58;
export const SATURN_DEFAULT_POSITION = {
  x: SUN_DEFAULT_POSITION.x - SATURN_DISTANCE_AU * SCALE,
  y: FULL_HEIGHT / 2,
};

export const URANUS_MASS = SUN_MASS / 22965;
export const URANUS_SIZE = SUN_SIZE / 2;
export const URANUS_DISTANCE = 2.8769e12;
export const URANUS_DISTANCE_AU = 19.2;
export const URANUS_DEFAULT_POSITION = {
  x: SUN_DEFAULT_POSITION.x - URANUS_DISTANCE_AU * SCALE,
  y: FULL_HEIGHT / 2,
};

export const SUN_CHARACTERISTICS = {
  mass: SUN_MASS,
  size: SUN_SIZE,
  color: SUN_COLOR,
  position: SUN_DEFAULT_POSITION,
};

export const MERCURY_CHARACTERISTICS = {
  mass: MERCURY_MASS,
  size: MERCURY_SIZE,
  distance: MERCURY_DISTANCE,
  distanceAU: MERCURY_DISTANCE_AU,
  position: MERCURY_DEFAULT_POSITION,
};

export const VENUS_CHARACTERISTICS = {
  mass: VENUS_MASS,
  size: VENUS_SIZE,
  distance: VENUS_DISTANCE,
  distanceAU: VENUS_DISTANCE_AU,
  position: VENUS_DEFAULT_POSITION,
};

export const EARTH_CHARACTERISTICS = {
  mass: EARTH_MASS,
  size: EARTH_SIZE,
  distance: EARTH_DISTANCE,
  distanceAU: EARTH_DISTANCE_AU,
  position: EARTH_DEFAULT_POSITION,
};

export const MARS_CHARACTERISTICS = {
  mass: MARS_MASS,
  size: MARS_SIZE,
  distance: MARS_DISTANCE,
  distanceAU: MARS_DISTANCE_AU,
  position: MARS_DEFAULT_POSITION,
};

export const JUPITER_CHARACTERISTICS = {
  mass: JUPITER_MASS,
  size: JUPITER_SIZE,
  distance: JUPITER_DISTANCE,
  distanceAU: JUPITER_DISTANCE_AU,
  position: JUPITER_DEFAULT_POSITION,
};

export const SATURN_CHARACTERISTICS = {
  mass: SATURN_MASS,
  size: SATURN_SIZE,
  distance: SATURN_DISTANCE,
  distanceAU: SATURN_DISTANCE_AU,
  position: SATURN_DEFAULT_POSITION,
};

export const URANUS_CHARACTERISTICS = {
  mass: URANUS_MASS,
  size: URANUS_SIZE,
  distance: URANUS_DISTANCE,
  distanceAU: URANUS_DISTANCE_AU,
  position: URANUS_DEFAULT_POSITION,
};
