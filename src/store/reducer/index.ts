import { userFormReducer } from "./formReducer";
import { combineReducers } from "redux";
import { stepperReducer } from "./stepperReducer";
import { tableReducer } from "./tableReducer";

export default combineReducers({
  userForm: userFormReducer,
  stepper: stepperReducer,
  table: tableReducer,
});
