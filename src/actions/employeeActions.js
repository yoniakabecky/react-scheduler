import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
} from "../constants/actionTypes";
import axios from "axios";

export const signInUser = (userData, history) => (dispatch) => {
  axios
    .post("/signin", userData)
    .then((res) => {
      setAuthHeader(res.data.token);
      dispatch({ type: SET_AUTHENTICATED });
      history.push("/home");
    })
    .catch((err) => console.error(err));
};

export const signOutUser = () => (dispatch) => {
  localStorage.removeItem("FBToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const signUpUser = (newUser, history) => (dispatch) => {
  axios
    .post("/signup", newUser)
    .then((res) => {
      setAuthHeader(res.data.token);
      dispatch({ type: SET_AUTHENTICATED });
      history.push("/home");
    })
    .catch((err) => console.error(err));
};

const setAuthHeader = (token) => {
  const FBToken = `Bearer ${token}`;
  localStorage.setItem("FBToken", FBToken);
  axios.defaults.headers.common["Authorization"] = FBToken;
};
