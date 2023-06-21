import { View, Text, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { AuthContainer, Input } from '../../../screens/Login/styles'
import { Container } from './styles'
import { ImageContainer } from '../../../screens/Character/styles'
import Icon from 'react-native-vector-icons/Feather'

interface StepOneProps {
  setName: (text: string) => void
  name: string

}

export default function StepOne({ setName, name }: StepOneProps) {
  return (
    <AuthContainer>
      <ImageContainer>
        <Icon name='user' size={75} color='#5e5e5e' />
      </ImageContainer>
      <Input
        placeholder="Nome"
        placeholderTextColor="#c9c9c9"
        onChangeText={setName}
        value={name}
      />
    </AuthContainer>
  )
}