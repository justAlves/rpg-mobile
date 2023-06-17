import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Modal, ModalContainer, ResultContainer, MaxButton, CurrentButton, InButton, OutButton } from './styles'
import { Button, Input } from '../../screens/Login/styles'
import api from '../../api'

interface UpdateLifeModalProps {
  lifeModal: boolean
  setLifeModal: (value: boolean) => void
  id: string
}

export default function UpdateLifeModal({lifeModal, setLifeModal, id}: UpdateLifeModalProps) {

  const [value, setValue] = useState(0)
  const [type, setType] = useState('' as string)
  const [inOut, setInOut] = useState('' as string)

  async function updateLife() {
    try {
      if(type === 'current'){
        await api.patch(`/character?id=${id}`, {
          currentLife: value
        })
      }else if(type === 'max'){
        await api.patch(`/character?id=${id}`, {
          maxLife: value
        })
      }

      setLifeModal(false)
    } catch (error) {
      console.log(error)

      setLifeModal(false)
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={lifeModal}
      onRequestClose={() => {
        setLifeModal(false)
      }}
    >
      <ModalContainer>
        <ResultContainer>
          <Input 
            onChange={e => setValue(Number(e.nativeEvent.text))}
            placeholder="Valor"
            keyboardType="numeric"
            value={value.toString()}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginVertical: 20}}>
            <CurrentButton type={type} onPress={() => setType('current')}>
              <Text style={{color: '#ffffff97'}}>Vida Atual</Text>
            </CurrentButton>
            <MaxButton type={type} onPress={() => setType('max')}>
              <Text style={{color: '#ffffff97'}}>Vida Máxima</Text>
            </MaxButton>
          </View>
          <Button onPress={() => updateLife()}>
            <Text style={{color: '#ffffff97'}}>Salvar</Text>
          </Button>
        </ResultContainer>
      </ModalContainer>
    </Modal>
  )
}