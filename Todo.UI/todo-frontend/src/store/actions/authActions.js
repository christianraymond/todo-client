import * as actions from "./actionTypes";
import axios from "axios";

const ENPOINT_URL = "http://localhost:5000";
const REG_USER_API = `${ENPOINT_URL}/api/auth/register`;

// Sign up action creator
export const signUp = (userData) => async (dispatch) => {
  dispatch({ type: actions.AUTH_START });
  try {
    const res = await axios.post(REG_USER_API, userData);
    console.log(res);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  } finally {
    console.log("Action dispatched");
    dispatch({ type: actions.AUTH_END });
  }
};

const LOGIN_ENPOINT_URL = "http://localhost:5000";
const LOGIN_USER_API = `${LOGIN_ENPOINT_URL}/api/auth`;
// Login action creator
export const signIn = (data) => async (dispatch) => {
  dispatch({ type: actions.AUTH_START });
  try {
    const res = await axios.post(LOGIN_USER_API, data);
    console.log(res);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  } finally {
    console.log("Action dispatched");
    dispatch({ type: actions.AUTH_END });
  }
};

// Logout action creator
export const signOut =
  () =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err.message);
    }
  };

// Clean up messages
export const clean = () => ({
  type: actions.CLEAN_UP,
});
