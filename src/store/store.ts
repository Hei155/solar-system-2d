import { configureStore } from '@reduxjs/toolkit';
import planetsReducer from './planets/planetsSlice';
import settingsReducer from './settings/settingsSlice';

export const store = configureStore({
  reducer: {
    planets: planetsReducer,
    settings: settingsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store