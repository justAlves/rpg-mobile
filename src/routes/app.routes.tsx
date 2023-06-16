import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import AddCharacter from "../screens/AddCharacter";
import Account from "../screens/Account";
import Icon from "react-native-vector-icons/Feather";
import CharacterRoutes from "./character.routes";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#111111",
          borderTopColor: "rgba(0, 0, 0, 0.24)",
          paddingBottom: 4,
        },
        tabBarActiveTintColor: "#d15454",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="users" color={color} size={24} />
          ),
        }}
        name="Select Character"
        component={CharacterRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="plus-circle" color={color} size={24} />
          ),
        }}
        name="New Character"
        component={AddCharacter}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={24} />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
}
