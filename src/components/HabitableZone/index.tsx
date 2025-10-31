import { FillGradient } from 'pixi.js';
import { Graphics } from 'pixi.js';
import { SUN_DEFAULT_POSITION, EARTH_DEFAULT_POSITION } from '../../consts';

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

interface HabitableZoneProps {
  sunPosition: { x: number; y: number };
}

const drawHabitableZone = (g: Graphics) => {
  g.clear();
  g.setFillStyle({ fill: radialGradient, alpha: 0.35 });
  g.circle(0, 0, (SUN_DEFAULT_POSITION.x - EARTH_DEFAULT_POSITION.x) * 1.24);
  g.fill();
  g.circle(0, 0, (SUN_DEFAULT_POSITION.x - EARTH_DEFAULT_POSITION.x) * 0.725);
  g.cut();
};

const HabitablerZone = ({ sunPosition }: HabitableZoneProps) => {
  return (
    <pixiGraphics
      /* eslint-disable react/no-unknown-property */
      position={sunPosition}
      draw={drawHabitableZone}
      /* eslint-enable react/no-unknown-property */
    />
  );
};

export default HabitablerZone;
