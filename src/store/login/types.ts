import type { Action } from "redux";

export type LoggedIn = { loggedIn: boolean };

export type User = {
  name: string;
  email: string;
  password: string;
};

export type LoginState = LoggedIn & User;

export type LogoutAction = Action<"@login/logout">;
export type LoginAction = Action<"@login/login"> & {
  loggedUser: User;
};
export type LoginActions = LogoutAction | LoginAction;
