import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  setStep,
  setIsHabitableZoneEnabled,
  setIsSimulationRunning,
} from '../../store/settings/settingsSlice';
import { selectSettings } from '../../store/settings/settingsSlice';
import { selectTargetPlanet } from '../../store/planets/planetsSlice';
import { useDrag, useDrop } from 'react-dnd';
import { useEffect, useState } from 'react';

const DND_TYPE_SETTINGS = 'settings';

interface SettingsPanelProps {
  appRef?: React.RefObject<HTMLDivElement>;
}

const SettingsPanel = ({ appRef }: SettingsPanelProps) => {
  const [position, setPosition] = useState({ top: 100, left: 40 });
  const [isDraggDisabled, setIsDraggDisabled] = useState(false);

  const { isHabitableZoneEnabled, isSimulationRunning, step } =
    useAppSelector(selectSettings);
  const targetPlanet = useAppSelector(selectTargetPlanet);

  const dispatch = useAppDispatch();

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DND_TYPE_SETTINGS,
      canDrag: !isDraggDisabled,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [isDraggDisabled],
  );

  const [, drop] = useDrop({
    accept: DND_TYPE_SETTINGS,
    drop(_, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const x = Math.round(position.left + delta!.x);
      const y = Math.round(position.top + delta!.y);

      setPosition({ left: x, top: y });
    },
  });

  useEffect(() => {
    if (appRef?.current) {
      drop(appRef.current);
    }
  }, []);

  return (
    <aside
      style={{
        display: isDragging ? 'none' : 'flex',
        left: position.left,
        top: position.top,
      }}
      className={`settings ${targetPlanet ? 'expanded' : ''}`}
      onPointerDown={(e) => e.stopPropagation()}
      ref={(node) => {
        drag(node);
      }}
    >
      <h2>Опции</h2>
      <div>
        <strong>Скорость симуляции: </strong>
        <input
          type="range"
          min="10000"
          max="200000"
          value={step}
          onChange={(e) => {
            setIsDraggDisabled(true);
            dispatch(setStep(Number((e?.target as HTMLInputElement).value)));
          }}
          onBlur={() => setIsDraggDisabled(false)}
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
          <h3>
            <strong>Выбранная планета:</strong>
          </h3>
          <p>
            <strong>Название:</strong> {targetPlanet.name}
          </p>
          <p>
            <strong>Масса:</strong> {targetPlanet.mass} кг
          </p>
          <p>
            <strong>Радиус:</strong> {targetPlanet.size} м
          </p>
          <p>
            <strong>Текущая скорость:</strong>{' '}
            {Math.sqrt(
              targetPlanet.velocity.x * targetPlanet.velocity.x +
                targetPlanet.velocity.y * targetPlanet.velocity.y,
            ).toFixed(2)}
          </p>
          <p>
            <strong>Текущая скорость (X):</strong>{' '}
            {targetPlanet.velocity.x.toFixed(2)}
          </p>
          <p>
            <strong>Текущая скорость (Y):</strong>{' '}
            {targetPlanet.velocity.y.toFixed(2)}
          </p>
          <p>
            <strong>Позиция (X):</strong> {targetPlanet.position.x.toFixed(2)}
          </p>
          <p>
            <strong>Позиция (Y):</strong> {targetPlanet.position.y.toFixed(2)}
          </p>
        </div>
      )}
    </aside>
  );
};

export default SettingsPanel;
