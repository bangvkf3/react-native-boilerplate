import React, { useMemo } from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import Home from "../../screens/Home";
import HomeLeft from "../../screens/HomeLeft";
import HomeRight from "../../screens/HomeRight";
import { useNavigationHorizontalInterpolator } from "../../hooks/useNavigationHorizontalInterpolator";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  const interpolator = useNavigationHorizontalInterpolator();
  const leftOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: "horizontal-inverted",
      cardStyleInterpolator: interpolator,
    }),
    []
  );
  const rightOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: "horizontal",
      cardStyleInterpolator: interpolator,
    }),
    []
  );
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="HomeLeft"
        component={HomeLeft}
        options={leftOptions}
      />
      <Stack.Screen
        name="HomeRight"
        component={HomeRight}
        options={rightOptions}
      />
    </Stack.Navigator>
  );
}
