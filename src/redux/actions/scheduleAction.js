import { LOADING_DATA, SET_MY_SCHEDULE } from "../../constants/actionTypes";
import axios from "axios";

export const getMySchedule = (name) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  const userName = {
    userName: name,
  };
  console.log(userName);
  axios
    .get("/schedules/mySchedules")
    .then((res) => {
      dispatch({
        type: SET_MY_SCHEDULE,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};
