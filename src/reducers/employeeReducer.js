import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
} from "../constants/actionTypes";

const initialState = {
  authenticated: false,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    default:
      return state;
  }
};

export default employeeReducer;
