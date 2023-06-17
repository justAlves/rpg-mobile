import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SubTitle } from '../../screens/Login/styles'
import { Button } from './styles'

interface DiceButtonProps {
  title: string
  onPress: () => void
}

export default function DiceButton({title, onPress}: DiceButtonProps) {
  return (
    <Button onPress={onPress}>
      <SubTitle>{title}</SubTitle>
    </Button>
  )
}