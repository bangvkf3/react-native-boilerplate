import { LoginAction, LogoutAction, User } from "./types";

export const loginAction = (loggedUser: User): LoginAction => ({
  type: "@login/login",
  loggedUser,
});
export const logoutAction = (): LogoutAction => ({
  type: "@login/logout",
});
