import { useTick } from '@pixi/react';
import { FillGradient } from 'pixi.js';
import AstroObject from '../AstroObject';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { updatePlanet as updatePlanetPosition } from '../..//helpers';
import { updatePlanet, selectPlanets } from '../..//store/planets/planetsSlice';
import { SUN_CHARACTERISTICS, EARTH_CHARACTERISTICS } from '../../consts';
import { selectSettings } from '../../store/settings/settingsSlice';

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

const AstroField = () => {
  const dispatch = useAppDispatch();

  const planets = useAppSelector(selectPlanets);
  const { step, isHabitableZoneEnabled, isSimulationRunning } =
    useAppSelector(selectSettings);

  useTick({
    callback() {
      for (const planet of planets) {
        const { velocity, position } = updatePlanetPosition(
          planet,
          planets,
          step
        );
        dispatch(updatePlanet({ id: planet.id, velocity, position }));
      }
    },
    isEnabled: isSimulationRunning,
  });

  return (
    <>
      {planets.map((planet, i) => (
        <AstroObject key={i} planet={planet} />
      ))}

      {isHabitableZoneEnabled && (
        <pixiGraphics
          /* eslint-disable react/no-unknown-property */
          position={planets[0].position}
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
          /* eslint-enable react/no-unknown-property */
        />
      )}
    </>
  );
};

export default AstroField;
