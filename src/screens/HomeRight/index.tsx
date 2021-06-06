import { useNavigation } from "@react-navigation/core";
import React, { useCallback } from "react";
import { Button, Text } from "react-native";
import Header from "../../components/Header";
import { HorizontalNavigation } from "../../navigator/HorizontalNavigation";

export default function HomeRight() {
  const navigation = useNavigation();
  const goHome = useCallback(() => {
    navigation.navigate("Home");
  }, []);
  return (
    <>
      <Header />
      <HorizontalNavigation distance={40} onLeftToRight={goHome}>
        <Text>Home Right</Text>
        <Button title="돌아 갑니다" onPress={goHome} />
      </HorizontalNavigation>
    </>
  );
}
