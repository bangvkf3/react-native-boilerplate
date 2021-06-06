import { useNavigation, DrawerActions } from "@react-navigation/core";
import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button, Text } from "react-native";
import Header from "../../components/Header";
import { HorizontalNavigation } from "../../navigator/HorizontalNavigation";

export default function Home() {
  const navigation = useNavigation();
  const goLeft = useCallback(() => navigation.navigate("HomeLeft"), []);
  const goRight = useCallback(() => navigation.navigate("HomeRight"), []);
  const open = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, []);
  const menu = useCallback(
    () => <Ionicons name="menu" size={24} onPress={open} />,
    []
  );
  return (
    <>
      <Header leftItems={menu} />
      <HorizontalNavigation
        distance={40}
        onLeftToRight={goLeft}
        onRightToLeft={goRight}
      >
        <Text>Home</Text>
        <Button title="왼쪽으로 갑니다" color="#f194ff" onPress={goLeft} />
        <Button title="오른쪽으로 갑니다" onPress={goRight} />
        <Text>왼쪽, 오른쪽 화면 전환 스와이프 적용</Text>
      </HorizontalNavigation>
    </>
  );
}
