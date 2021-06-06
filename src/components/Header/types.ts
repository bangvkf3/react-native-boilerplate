import { Route } from "@react-navigation/routers";
import { ReactNode } from "react";

export type HeaderProps = {
  leftItems?: () => ReactNode;
  rightItems?: () => ReactNode;
};
