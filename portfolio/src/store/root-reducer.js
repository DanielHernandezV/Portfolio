import { combineReducers } from "redux";
import { journeyReducer } from "./journey/journey.reducer";
import { proyectsReducer } from "./proyects/proyects.reducer";

export const rootReducer = combineReducers({
  journey: journeyReducer,
  proyects: proyectsReducer,
});
