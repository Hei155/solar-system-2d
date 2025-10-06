import { useTick } from '@pixi/react';
import AstroObject from '../AstroObject';
import { updatePlanet } from '../../helpers';
import { Planet } from '../../types';

interface AstroFieldProps {
  planets: Planet[];
  setPlanets: (planets: Planet[]) => void;
}

const AstroField = ({ planets, setPlanets }: AstroFieldProps) => {
  useTick(() => {
    for (const planet of planets) {
      const newPlanet = updatePlanet(planet, planets);
      const copy = structuredClone(planets);
      const filtered = copy.filter((cur) => cur.name !== planet.name);
      setPlanets([...filtered, newPlanet]);
    }
  });

  return planets.map(({ position, color, size, strokeColor, velocity }, i) => (
    <AstroObject
      key={i}
      position={position}
      color={color}
      size={size}
      strokeColor={strokeColor}
    />
  ));
};

export default AstroField;
