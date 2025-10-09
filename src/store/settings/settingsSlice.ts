import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHabitableZoneEnabled: false,
  isSimulationRunning: true,
  step: 100000,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {
    setIsSimulationRunning: (state, action) => {
      state.isSimulationRunning = action.payload;
    },

    setIsHabitableZoneEnabled: (state, action) => {
      state.isHabitableZoneEnabled = action.payload;
    },

    setStep: (state, action) => {
      state.step = action.payload;
    }
  }
});

export const selectSettings = (state: { settings: typeof initialState }) => state.settings;

export const { setIsHabitableZoneEnabled, setStep, setIsSimulationRunning } = settingsSlice.actions;

export default settingsSlice.reducer;