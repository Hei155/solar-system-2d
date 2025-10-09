import { createSlice } from "@reduxjs/toolkit";
import { Planet } from "../../types";
import { planets } from "../../consts";

export interface PlanetsState {
  planetsList: Planet[];
  targetPlanetId?: number | null;
}

const initialState: PlanetsState = {
  planetsList: planets,
  targetPlanetId: null,
};

export const planetsSlice = createSlice({
  name: "planets",
  initialState: initialState,

  reducers: {
    setPlanets: (state, action) => {
      state.planetsList = action.payload;
    },

    setTargetPlanetId: (state, action) => {
      state.targetPlanetId = action.payload;
    },

    updatePlanet: (state, action) => {
      const { id, ...fields } = action.payload;
      state.planetsList = state.planetsList.map((p) => {

        if (p.id === id) { 
          return { ...p, ...fields };
        }

        return p;
      });
    }
  }
});

export const selectPlanets = (state: { planets: PlanetsState }) => state.planets.planetsList;
export const selectTargetPlanet = (state: { planets: PlanetsState }) => state.planets.planetsList.find(p => p.id === state.planets.targetPlanetId) || null;

export const { setPlanets, updatePlanet, setTargetPlanetId } = planetsSlice.actions;

export default planetsSlice.reducer;