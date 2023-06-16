import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Character from '../screens/Character'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

export default function CharacterRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Character" component={Character} />
    </Stack.Navigator>
  )
}