import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  setStep,
  setIsHabitableZoneEnabled,
  setIsSimulationRunning,
} from '../../store/settings/settingsSlice';
import { selectSettings } from '../../store/settings/settingsSlice';
import { selectTargetPlanet } from '../../store/planets/planetsSlice';

const SettingsPanel = () => {
  const { isHabitableZoneEnabled, isSimulationRunning, step } =
    useAppSelector(selectSettings);
  const targetPlanet = useAppSelector(selectTargetPlanet);

  const dispatch = useAppDispatch();

  return (
    <aside className="settings">
      <h2>Опции</h2>
      <div>
        <strong>Скорость симуляции: </strong>
        <input
          type="range"
          min="10000"
          max="200000"
          value={step}
          onChange={() =>
            dispatch(setStep(Number((event?.target as HTMLInputElement).value)))
          }
        />
      </div>
      <label>
        Показать зону обитаемости
        <input
          type="checkbox"
          id="habitableZone"
          name="habitable zone"
          onChange={() =>
            dispatch(setIsHabitableZoneEnabled(!isHabitableZoneEnabled))
          }
        />
      </label>
      <label>
        Включить симуляцию
        <input
          type="checkbox"
          id="isSimulationRunning"
          name="isSimulationRunning"
          checked={isSimulationRunning}
          onChange={() =>
            dispatch(setIsSimulationRunning(!isSimulationRunning))
          }
        />
      </label>
      {targetPlanet && (
        <div>
          <h3>Выбранная планета:</h3>
          <p>Название: {targetPlanet.name}</p>
          <p>Масса: {targetPlanet.mass} кг</p>
          <p>Радиус: {targetPlanet.size} м</p>
          <p>
            Текущая скорость:
            {Math.sqrt(
              targetPlanet.velocity.x * targetPlanet.velocity.x +
                targetPlanet.velocity.y * targetPlanet.velocity.y
            )}
          </p>
        </div>
      )}
    </aside>
  );
};

export default SettingsPanel;
