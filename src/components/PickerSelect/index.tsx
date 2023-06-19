import { View, Text } from 'react-native'
import React from 'react'

import RNPickerSelect from 'react-native-picker-select'

export default function PickerSelect() {

  const items = [
    {
    label: 'teste',
    value: 'teste'
    },
    {
    label: 'teste2',
    value: 'teste2'
    },
    {
    label: 'teste3',
    value: 'teste3'
    }
  ]

  return (
    <RNPickerSelect
      items={[...items]}
      onValueChange={(value) => console.log(value)}
    />
  )
}