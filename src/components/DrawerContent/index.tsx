import React, { useCallback } from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/routers";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

export default function DrawerContent(props: DrawerContentComponentProps) {
  const { navigation } = props;
  const close = useCallback(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }, []);
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <DrawerItemList {...props} />
      <Text>드로어 콘텐츠</Text>
      <Ionicons name="close" size={24} onPress={close} />
    </DrawerContentScrollView>
  );
}
