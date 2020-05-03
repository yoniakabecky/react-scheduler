import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import scheduleReducer from "./scheduleReducer";

const rootReducer = combineReducers({
  employee: employeeReducer,
  schedule: scheduleReducer,
});

export default rootReducer;
