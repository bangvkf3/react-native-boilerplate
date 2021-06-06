import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useCallback } from "react";
import { Button, Text } from "react-native";
import Header from "../../components/Header";
import { HorizontalNavigation } from "../../navigator/HorizontalNavigation";

export default function HomeLeft() {
  const navigation = useNavigation();
  const goHome = useCallback(() => {
    navigation.navigate("Home");
  }, []);

  return (
    <>
      <Header />
      <HorizontalNavigation distance={40} onRightToLeft={goHome}>
        <Text>Home Left</Text>
        <Button title="돌아 갑니다" onPress={goHome} />
      </HorizontalNavigation>
    </>
  );
}
