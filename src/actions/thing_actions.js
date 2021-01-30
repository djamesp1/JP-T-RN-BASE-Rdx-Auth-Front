import AsyncStorage from "@react-native-async-storage/async-storage";
import { FETCH_THINGS } from "./types";
import { navigate } from "../utils/navigationRef";
import apiLink from "../utils/api/apiLink";

export const fetchThings = () => async (dispatch) => {
  try {
    const response = await apiLink.get("/model_2");
    // console.log(response.data);
    dispatch({ type: FETCH_THINGS, payload: response.data });
    // navigate("One");
  } catch (err) {
    console.log("Something went wrong with sign up");
    /* dispatch({
      type: ADD_ERROR,
      payload: "Something went wrong with sign up",
    }); */
  }
};
