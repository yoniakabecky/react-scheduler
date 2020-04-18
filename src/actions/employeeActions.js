import { SET_AUTHENTICATED } from "../constants/actionTypes";

export const signinUser = (payload) => {
  return {
    type: SET_AUTHENTICATED,
    payload,
  };
};
