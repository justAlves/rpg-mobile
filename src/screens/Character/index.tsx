import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function Character() {

  const route = useRoute()

  const { id } = route.params

  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}