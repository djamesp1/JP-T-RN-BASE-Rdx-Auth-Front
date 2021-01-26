import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNOUT,
  ADD_ERROR,
  CLEAR_ERROR_MSG,
} from "./types";
import { navigate } from "../utils/navigationRef";
import apiLink from "../api/apiLink";

export const tryLocalSignIn = () => async (dispatch) => {
  let token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: LOGIN_SUCCESS, payload: token });
    navigate("One");
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
  console.log(email, password);
  try {
    const response = await apiLink.post("/signin", { email, password });
    console.log(response.data.token);
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    navigate("One");
  } catch (err) {
    console.log("Something went wrong with sign up");
    dispatch({
      type: ADD_ERROR,
      payload: "Something went wrong with sign up",
    });
  }
};

export const signup = ({ email, password }) => async (dispatch) => {
  console.log(email, password);
  try {
    const response = await apiLink.post("/signup", { email, password });
    console.log(response.data.token);
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    navigate("One");
  } catch (err) {
    console.log("Something went wrong with sign up");
    dispatch({
      type: ADD_ERROR,
      payload: "Something went wrong with sign up",
    });
  }
};
