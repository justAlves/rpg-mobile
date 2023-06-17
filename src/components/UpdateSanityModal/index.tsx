import { View, Text} from 'react-native'
import React, { useState } from 'react'
import { Modal, ModalContainer, ResultContainer, MaxButton, CurrentButton} from '../UpdateLifeModal/styles'
import { Button, Input } from '../../screens/Login/styles'
import api from '../../api'

interface UpdateSanityModalProps {
  sanModal: boolean
  setSanModal: (value: boolean) => void
  id: string
}

export default function UpdateSanityModal({sanModal, setSanModal, id}: UpdateSanityModalProps) {

  const [value, setValue] = useState(0)
  const [type, setType] = useState('' as string)
  const [inOut, setInOut] = useState('' as string)

  async function updateSanity() {
    try {
      if(type === 'current'){
        await api.patch(`/character?id=${id}`, {
          currentSanity: value
        })
      }else if(type === 'max'){
        await api.patch(`/character?id=${id}`, {
          maxSanity: value
        })
      }

      setSanModal(false)
    } catch (error) {
      console.log(error)

      setSanModal(false)
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={sanModal}
      onRequestClose={() => {
        setSanModal(false)
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
              <Text style={{color: '#ffffff97'}}>Sanidade Atual</Text>
            </CurrentButton>
            <MaxButton type={type} onPress={() => setType('max')}>
              <Text style={{color: '#ffffff97'}}>Sanidade Máxima</Text>
            </MaxButton>
          </View>
          <Button onPress={() => updateSanity()}>
            <Text style={{color: '#ffffff97'}}>Salvar</Text>
          </Button>
        </ResultContainer>
      </ModalContainer>
    </Modal>
  )
}