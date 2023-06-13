import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AddCharacter from '../screens/AddCharacter';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="New Character" component={AddCharacter} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
