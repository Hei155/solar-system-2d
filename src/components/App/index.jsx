import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite, FillGradient } from 'pixi.js';
import AstroField from '../AstroField';
import { useEffect, useState } from 'react';
import {
  planets,
  SUN_CHARACTERISTICS,
  EARTH_CHARACTERISTICS,
} from '../../consts';
import { FULL_HEIGHT, FULL_WIDTH } from '../../consts';

extend({
  Container,
  Graphics,
  Sprite,
});

const radialGradient = new FillGradient({
  type: 'radial',
  center: { x: 0.5, y: 0.5 },
  innerRadius: 0.3,
  outerCenter: { x: 0.5, y: 0.5 },
  outerRadius: 0.5,
  colorStops: [
    { offset: 0, color: 'red' },
    { offset: 0.4, color: 'green' },
    { offset: 0.6, color: 'green' },
    { offset: 1, color: 'blue' },
  ],
  textureSpace: 'local',
});

export default function App() {
  const [currentPlanets, setCurrentPlanets] = useState(planets);

  return (
    <div>
      <Application
        width={FULL_WIDTH}
        height={FULL_HEIGHT}
        autoStart
        sharedTicker
      >
        <AstroField planets={currentPlanets} setPlanets={setCurrentPlanets} />
        <pixiGraphics
          position={currentPlanets[0].position}
          draw={(g) => {
            g.clear();
            g.setFillStyle({ fill: radialGradient, alpha: 0.35 });
            g.circle(
              0,
              0,
              (SUN_CHARACTERISTICS.DEFAULT_POSITION.x -
                EARTH_CHARACTERISTICS.DEFAULT_POSITION.x) *
                1.24
            );
            g.fill();
            g.circle(
              0,
              0,
              (SUN_CHARACTERISTICS.DEFAULT_POSITION.x -
                EARTH_CHARACTERISTICS.DEFAULT_POSITION.x) *
                0.725
            );
            g.cut();
          }}
        />
      </Application>
    </div>
  );
}
