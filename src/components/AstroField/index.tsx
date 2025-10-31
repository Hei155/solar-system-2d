import { useTick } from '@pixi/react';
import AstroObject from '../AstroObject';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { updatePlanet as updatePlanetPosition } from '../../helpers';
import { updatePlanet, selectPlanets } from '../..//store/planets/planetsSlice';
import { selectSettings } from '../../store/settings/settingsSlice';
import HabitablerZone from '../HabitableZone';

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
          step,
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
        <HabitablerZone sunPosition={planets[0].position} />
      )}
    </>
  );
};

export default AstroField;
