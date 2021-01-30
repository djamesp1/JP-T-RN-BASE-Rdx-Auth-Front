import { combineReducers } from "redux";
import auth from "./auth_reducer";
import things from "./thing_reducer";

export default combineReducers({
  auth,
  things,
});
