import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/core";
import React from "react";
import { Colors } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Screen2 from "../../screens/Screen2";
import Screen3 from "../../screens/Screen3";
import Screen4 from "../../screens/Screen4";
import HomeNavigator from "../HomeNavigator";
import { TabBarIconProps } from "./types";

const icons: Record<string, any[]> = {
  HomeNavigator: ["home", "home-outline"],
  Screen2: ["people", "people-outline"],
  Screen3: ["chatbubble", "chatbubble-outline"],
  Screen4: ["cog", "cog-outline"],
};

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
      const { name } = route;
      const focusedSize = focused ? size + 6 : size;
      const focusedColor = focused ? Colors.lightBlue500 : color;
      const [icon, iconOutline] = icons[name];
      const iconName = focused ? icon : iconOutline;
      return (
        <Ionicons name={iconName} size={focusedSize} color={focusedColor} />
      );
    },
  };
};

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen name="Screen4" component={Screen4} />
    </Tab.Navigator>
  );
}
