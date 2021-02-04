import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNOUT,
  ADD_ERROR,
  CLEAR_ERROR_MSG,
  FETCHED_USER,
} from "../actions/types";

const initialState = {
  token: null,
  user: {},
  errorMessage: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    /* case LOGIN_FAIL:
      return { token: null }; */
    case FETCHED_USER:
      return { ...state, user: action.payload };
    case SIGNOUT:
      return { ...state, token: null };
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR_MSG:
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
}
