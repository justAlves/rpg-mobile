import { Text, Alert } from 'react-native'
import React, { useState } from 'react'
import StepOne from './StepOne'
import { Container } from './StepOne/styles'
import { Button, ButtonContainer } from './styles'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import api from '../../api'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function Form() {

  const [step, setStep] = useState(1)

  const [name, setName] = useState('')
  const [strength, setStrength] = useState(0)
  const [fight, setFight] = useState(0)
  const [agility, setAgility] = useState(0)
  const [intelligence, setIntelligence] = useState(0)
  const [charm, setCharm] = useState(0)
  const [emotion, setEmotion] = useState(0)

  const [campaign, setCampaign] = useState('')


  const navigation = useNavigation()

  async function handleCreateCharacter() {

    if(name === ''.trim()) {
      Alert.alert('Erro', 'O nome do personagem não pode ser vazio.')
      return
    }

    if(campaign === '') {
      Alert.alert('Erro', 'Selecione uma campanha.')
      return
    }

    const data = {
      name,
      strength,
      fight,
      agility,
      intelligence,
      charm,
      emotion,
      campaign_id: campaign
    }

    try {
      await api.post('/character', data)
    }
    catch (error) {
      console.log(error)
    }

    setAgility(0)
    setCharm(0)
    setEmotion(0)
    setFight(0)
    setIntelligence(0)
    setName('')
    setStrength(0)
    setCampaign('')
    setStep(1)
    navigation.navigate('Home')
  }

  function Step(){
    if(step === 1) {
      return (
        <StepOne name={name} setName={(text) => setName(text)}/>
      )
    }else if(step === 2) {
      return (
       <StepTwo
        strength={strength}
        setStrength={setStrength}
        fight={fight}
        setFight={setFight}
        agility={agility}
        setAgility={setAgility}
        intelligence={intelligence}
        setIntelligence={setIntelligence}
        charm={charm}
        setCharm={setCharm}
        emotion={emotion}
        setEmotion={setEmotion}
       />
      )
    }else if(step === 3) {
      return (
        <StepThree campaign={campaign} setCampaign={setCampaign} />
      )
    }
  }

  return (

      <Container>
        <Step />
        <ButtonContainer>
          {
            step === 1 ? null : (
              <Button onPress={() => setStep(step - 1)}>
                <Text style={{color: '#fff'}}>Voltar</Text>
              </Button>
            )
          }
          {
            step === 3 ? (
              <Button next onPress={handleCreateCharacter}>
                <Text style={{color: '#fff'}}>Criar</Text>
              </Button>
            ) : (
              <Button next onPress={() => setStep(step + 1)}>
                <Text style={{color: '#fff'}}>Próximo</Text>
              </Button>
            )
          }
        </ButtonContainer>
      </Container>
  )

}