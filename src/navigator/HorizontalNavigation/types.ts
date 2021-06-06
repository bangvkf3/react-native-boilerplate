import { MutableRefObject, ReactNode } from "react";
import { FlatList } from "react-native";

export type HorizontalNavigationMethods = {
  resetOffset: () => void;
};

export type HorizontalNavigationProps = {
  onRightToLeft?: () => void;
  onLeftToRight?: () => void;
  distance: number;
  children?: ReactNode;
  flatListRef?: MutableRefObject<FlatList | null>;
};
