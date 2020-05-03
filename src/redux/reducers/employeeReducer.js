import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  LOADING_USER,
} from "../../constants/actionTypes";

const initialState = {
  authenticated: false,
  user: {},
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
    case SET_USER:
      return {
        authenticated: true,
        ...action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default employeeReducer;
