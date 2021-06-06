import React, { useCallback, useRef, useState } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainNavigator from "./src/navigator/MainNavigator";
import { StyleSheet } from "react-native";

enableScreens();

export default function App() {
  const navigationRef = useRef<NavigationContainerRef | null>(null);
  const [routeName, setRouteName] = useState<string | null | undefined>(null);

  const onReady = useCallback(() => {
    setRouteName(navigationRef.current?.getCurrentRoute()?.name);
  }, []);

  const onStateChange = useCallback(() => {
    setRouteName(navigationRef.current?.getCurrentRoute()?.name);
  }, [routeName]);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={onReady}
        onStateChange={onStateChange}
      >
        <SafeAreaView style={styles.view}>
          <MainNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
});
