import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { Input } from '../../../screens/Login/styles'
import { Container } from './styles'
import { ImageContainer } from '../../../screens/Character/styles'
import Icon from 'react-native-vector-icons/Feather'

interface StepOneProps {
  setName: (text: string) => void
}

export default function StepOne({ setName }: StepOneProps) {
  return (
    <Container>
      <ImageContainer>
        <Icon name='user' size={75} color='#5e5e5e' />
      </ImageContainer>
      <Input
        placeholder="Nome"
        placeholderTextColor="#fff"
        onChange={text => setName(text.nativeEvent.text)}
      />
    </Container>
  )
}