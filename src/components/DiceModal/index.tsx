import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Modal, ModalContainer, ResultContainer } from './styles'
import { Button, SubTitle, Title } from '../../screens/Login/styles'

interface DiceModalProps {
  diceModal: boolean
  setModal: (value: boolean) => void
  value: number
}

export default function DiceModal({ diceModal, setModal, value }: DiceModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={diceModal}
      onRequestClose={() => {
        setModal(!diceModal)
      }}
    >
      <ModalContainer>
        <ResultContainer>
          <SubTitle>Você tirou:</SubTitle>
          <Title>{value}</Title>
          <Button 
            onPress={() => setModal(false)}
          >
            <SubTitle>Fechar</SubTitle>
          </Button>
        </ResultContainer>
      </ModalContainer>
    </Modal>
  )
}