import { FETCH_THINGS } from "../actions/types";

const initialState = {
  things: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_THINGS:
      return action.payload;
    /* case CREATE_THING:
      return { ...state,  }; */
    default:
      return state;
  }
}
