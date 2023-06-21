import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Picker from '../../PickerSelect'
import { SubTitle, Title } from '../../../screens/Login/styles'
import { Container } from '../StepOne/styles'

interface StepTwoProps {
  setStrength: (value: number) => void
  setFight: (value: number) => void
  setAgility: (value: number) => void
  setIntelligence: (value: number) => void
  setCharm: (value: number) => void
  setEmotion: (value: number) => void
  strength: string | number
  fight: string | number
  agility: string | number
  intelligence: string | number
  charm: string | number
  emotion: string | number
}

export default function StepTwo({ setStrength, setFight, setAgility, setIntelligence, setCharm, setEmotion, strength, fight, agility, intelligence, charm, emotion}: StepTwoProps) {

  

  const dices = [
    { label: '1d4', value: 4 },
    { label: '1d6', value: 6 },
    { label: '1d8', value: 8 },
    { label: '1d10', value: 10 },
    { label: '1d12', value: 12 },
    { label: '1d20', value: 20 },
  ]

  function handleSelectValue(value: number) {
    console.log(value)
  }

  return (
    <Container>
      <Title>Atributos</Title>
      <SubTitle>Selecione os atributos do seu personagem.</SubTitle>

      <Container>
        <SubTitle>Força</SubTitle>
        <Picker items={[...dices]} onValueChange={(value, index) => setStrength(value as number) } value={strength} />
        <SubTitle>Luta</SubTitle>
        <Picker items={[...dices]} onValueChange={(value, index) => setFight(value as number)} value={fight} />
        <SubTitle>Agilidade</SubTitle>
        <Picker items={[...dices]} onValueChange={(value, index) => setAgility(value as number)} value={agility} />
        <SubTitle>Inteligência</SubTitle>
        <Picker items={[...dices]} onValueChange={(value, index) => setIntelligence(value as number)} value={intelligence} />
        <SubTitle>Carisma</SubTitle>
        <Picker items={[...dices]} onValueChange={(value, index) => setCharm(value as number)} value={charm} />
        <SubTitle>Emoções</SubTitle>
        <Picker items={[...dices]} onValueChange={(value, index) => setEmotion(value as number)} value={emotion} />
      </Container>
    </Container>
  )
}