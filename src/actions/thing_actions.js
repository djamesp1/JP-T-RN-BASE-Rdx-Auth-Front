import AsyncStorage from "@react-native-async-storage/async-storage";
import { FETCH_THINGS, CREATE_THING } from "./types";
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

export const createThing = ({ name, locations }) => async (dispatch) => {
  try {
    const response = await apiLink.post("/model_2", {
      name,
      locations,
    });
    const reFetchNew = await apiLink.get("/model_2");
    dispatch({ type: FETCH_THINGS, payload: reFetchNew.data });
    // dispatch({ type: CREATE_THING, payload: response.data });
    navigate("ThingList");
  } catch (err) {
    console.log("Something went wrong with CREATEThing");
    /* dispatch({
      type: ADD_ERROR,
      payload: "Something went wrong with sign up",
    }); */
  }
};

export const editThing = ({ _id, name, locations }) => async (dispatch) => {
  try {
    const response = await apiLink.patch(`/model_2/${_id}`, {
      name,
      locations,
    });
    const reFetchNew = await apiLink.get("/model_2");
    dispatch({ type: FETCH_THINGS, payload: reFetchNew.data });
    // dispatch({ type: CREATE_THING, payload: response.data });
    navigate("ThingList");
  } catch (err) {
    console.log("Something went wrong with EDITThing");
    /* dispatch({
      type: ADD_ERROR,
      payload: "Something went wrong with sign up",
    }); */
  }
};

export const deleteThing = ({ _id }) => async (dispatch) => {
  try {
    const response = await apiLink.delete(`/model_2/${_id}`);
    const reFetchNew = await apiLink.get("/model_2");
    dispatch({ type: FETCH_THINGS, payload: reFetchNew.data });
    navigate("ThingList");
  } catch (err) {
    console.log("Something went wrong with DELETEThing");
    /* dispatch({
      type: ADD_ERROR,
      payload: "Something went wrong with sign up",
    }); */
  }
};
