import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  SIGNOUT,
  ADD_ERROR,
  CLEAR_ERROR_MSG,
} from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null };
    case SIGNOUT:
      return { token: null };
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR_MSG:
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
}
