interface SettingsPanelProps {
  isHabitableZoneVisible: boolean;
  currentStep: number;
  setCurrentStep: (value: number) => void;
  setIsHabitableZoneVisible: (value: boolean) => void;
}

const SettingsPanel = ({
  isHabitableZoneVisible,
  setIsHabitableZoneVisible,
  setCurrentStep,
  currentStep,
}: SettingsPanelProps) => {
  return (
    <aside className="settings">
      <h2>Опции</h2>
      <div>
        <strong>Скорость симуляции: </strong>
        <input
          type="range"
          min="10000"
          max="200000"
          value={currentStep}
          onChange={() => setCurrentStep(Number((event?.target as HTMLInputElement).value))}
        />
      </div>
      <label>
        Показать зону обитаемости
        <input
          type="checkbox"
          id="habitableZone"
          name="habitable zone"
          onChange={() => setIsHabitableZoneVisible(!isHabitableZoneVisible)}
        />
      </label>
    </aside>
  );
};

export default SettingsPanel;
