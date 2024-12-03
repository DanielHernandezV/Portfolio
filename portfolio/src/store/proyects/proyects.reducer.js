import { PROYECTS_DATA } from "../../data/proyects.data";

//Currently initialized here
const INITIAL_STATE = {
  proyects: PROYECTS_DATA,
};

export const proyectsReducer = (state = INITIAL_STATE, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    default:
      return state;
  }
};
