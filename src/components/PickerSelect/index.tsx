import { View, Text } from 'react-native'
import React from 'react'

import { Picker } from '@react-native-picker/picker'

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
    <Picker
      selectedValue={null}
      onValueChange={(itemValue, itemIndex) => null}
      placeholder='Selecione uma opção'
      style={{ 
        height: 50, 
        width: 200, 
        backgroundColor: '#313131',
        borderRadius: 10,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 10
      }}
      dropdownIconColor='#fff'
    >
      <Picker.Item label="teste" value="teste" />
      <Picker.Item label="teste2" value="teste2" />
      <Picker.Item label="teste3" value="teste3" />
    </Picker>
  )
}