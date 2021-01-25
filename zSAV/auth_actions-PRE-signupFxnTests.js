import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { navigate } from "../navigationRef";
import apiLink from "../api/apiLink";

export const login = () => async (dispatch) => {
  let token = await AsyncStorage.getItem("token");

  if (token) {
    // Dispatch an action saying login is done
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } else {
    navigate("Signup");
  }
};

export const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await apiLink.post("/signup", { email, password });
    console.log(response.data.token);
    // await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    // navigate("One");
  } catch (err) {
    console.log("Something went wrong with sign up");
    /* dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    }); */
  }
};

/* const signup = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    "196207057539134",
    {
      permissions: ["public_profile"],
    }
  );

  if (type === "cancel") {
    return dispatch({ type: LOGIN_FAIL });
  }

  await AsyncStorage.setItem("token", token);
  dispatch({ type: LOGIN_SUCCESS, payload: token });
}; */
