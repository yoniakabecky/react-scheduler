import { SET_AUTHENTICATED } from "../constants/actionTypes";

const initialState = {
  authenticated: false,
};

const employeeReducer = (state = initialState, action) => {
  if (action.type === SET_AUTHENTICATED) {
    // sign in
  }
  return state;
};

export default employeeReducer;
