import { SET_MY_SCHEDULE, LOADING_DATA } from "../../constants/actionTypes";

const initialState = {
  mySchedules: [],
  loading: false,
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_MY_SCHEDULE:
      return {
        ...state,
        mySchedules: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default scheduleReducer;
