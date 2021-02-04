import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNOUT,
  ADD_ERROR,
  CLEAR_ERROR_MSG,
  FETCHED_USER,
} from "./types";
import { navigate } from "../utils/navigationRef";
import apiLink from "../utils/api/apiLink";

export const tryLocalSignIn = () => async (dispatch) => {
  let token = await AsyncStorage.getItem("token");
  if (token) {
    await dispatch({ type: LOGIN_SUCCESS, payload: token });
    const fetchedUser = await apiLink.get("/user");
    // console.log("fetchedUser res: ", fetchedUser.data[0]);
    await dispatch({ type: FETCHED_USER, payload: fetchedUser.data[0] });
    navigate("ThingList");
  } else {
    navigate("Signup");
  }
};

export const signout = () => async (dispatch) => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: SIGNOUT });
  navigate("loginFlow");
};

export const clearErrorMessage = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR_MSG });
};

export const signin = ({ email, password }) => async (dispatch) => {
  // console.log(email, password);
  try {
    const response = await apiLink.post("/signin", { email, password });
    // console.log(response.data.token);
    await AsyncStorage.setItem("token", response.data.token);
    await dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    const fetchedUser = await apiLink.get("/user");
    // console.log("fetchedUser res: ", fetchedUser.data[0]);
    await dispatch({ type: FETCHED_USER, payload: fetchedUser.data[0] });
    navigate("ThingList");
  } catch (err) {
    console.log("Something went wrong with sign in");
    dispatch({
      type: ADD_ERROR,
      payload: "Something went wrong with sign in",
    });
  }
};

export const signup = ({ email, password }) => async (dispatch) => {
  // console.log(email, password);
  try {
    const response = await apiLink.post("/signup", { email, password });
    // console.log(response.data.token);
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    navigate("ThingList");
  } catch (err) {
    console.log("Something went wrong with sign up");
    dispatch({
      type: ADD_ERROR,
      payload: "Something went wrong with sign up",
    });
  }
};
