import { View, Text } from 'react-native'
import React from 'react'

import RNPickerSelect from 'react-native-picker-select'

interface PickerSelectProps {
  items: {
    label: string
    value: number
  }[]
  onValueChange: (value: (number | string), index: number) => void
  value: string | number
}

export default function PickerSelect({ items, onValueChange, value }: PickerSelectProps) {


  return (
    <RNPickerSelect
      items={[...items]}
      onValueChange={onValueChange}
      value={value}
      style={{
        inputIOS: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 4,
          color: '#fff',
          paddingRight: 30,
          backgroundColor: '#000',
          marginTop: 10,
          marginBottom: 10,
        },
        inputAndroid: {
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 8,
          color: '#fff',
          paddingRight: 30,
          backgroundColor: '#303030',
          marginTop: 10,
          marginBottom: 10,
        },
      }}
      placeholder={{
        label: 'Selecione um valor',
        value: null,
        color: '#000',
        inputLabel: 'Selecione um valor',
      }}
      
    />
  )
}