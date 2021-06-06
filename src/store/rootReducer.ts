import { combineReducers } from "redux";
import { loggedInReducer } from "./login";

export const rootReducer = combineReducers({
  login: loggedInReducer,
});
export default rootReducer;
