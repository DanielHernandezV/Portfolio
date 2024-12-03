import { JOURNEY_DATA } from "../../data/journey.data";

//Currently initialized here
const INITIAL_STATE = {
  journey: JOURNEY_DATA,
};

export const journeyReducer = (state = INITIAL_STATE, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    default:
      return state;
  }
};
