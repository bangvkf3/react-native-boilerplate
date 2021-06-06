import { combineReducers } from "redux";
import { LoginActions, User, LoggedIn } from "./types";

const initialLoggedIn: LoggedIn = { loggedIn: false };
export const loggedInReducer = (
  state = initialLoggedIn,
  action: LoginActions
) => {
  switch (action.type) {
    case "login":
      return { loggedIn: true };
    case "logout":
      return initialLoggedIn;
  }
  return state;
};

const initialLoggedUser: User = { email: "", name: "", password: "" };
export const loggedUserReducer = (
  state = initialLoggedUser,
  action: LoginActions
) => {
  switch (action.type) {
    case "login":
      return { ...state, ...action.loggedUser };
    case "logout":
      return initialLoggedUser;
  }
  return state;
};

export const loginReducer = combineReducers({
  loggedIn: loggedInReducer,
  loggedUser: loggedUserReducer,
});
