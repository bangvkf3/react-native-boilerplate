import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import DrawerContent from "../../components/DrawerContent";
import TabNavigator from "../TabNavigator";

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ title: "Home" }}
        />
      </Drawer.Navigator>
    </>
  );
}
