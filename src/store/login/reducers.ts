import { combineReducers } from "redux";
import { LoginActions, User, LoggedIn } from "./types";

const initialLoggedIn: LoggedIn = { loggedIn: false };
export const loggedInReducer = (
  state = initialLoggedIn,
  action: LoginActions
) => {
  switch (action.type) {
    case "@login/login":
      return { loggedIn: true };
    case "@login/logout":
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
    case "@login/login":
      return { ...state, ...action.loggedUser };
    case "@login/logout":
      return initialLoggedUser;
  }
  return state;
};

export const loginReducer = combineReducers({
  loggedIn: loggedInReducer,
  loggedUser: loggedUserReducer,
});
