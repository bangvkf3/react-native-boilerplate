import type { Action } from "redux";

export type LoggedIn = { loggedIn: boolean };

export type User = {
  name: string;
  email: string;
  password: string;
};

export type LoginState = LoggedIn & User;

export type LogoutAction = Action<"logout">;
export type LoginAction = Action<"login"> & {
  loggedUser: User;
};
export type LoginActions = LogoutAction | LoginAction;
