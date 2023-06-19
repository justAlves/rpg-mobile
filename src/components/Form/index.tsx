import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import StepOne from './StepOne'
import { Container } from './StepOne/styles'
import { Button } from './styles'
import StepTwo from './StepTwo'




export default function Form() {

  const [step, setStep] = useState(1)

  const [name, setName] = useState('')

  function Step(){
    if(step === 1) {
      return (
        <StepOne setName={setName}/>
      )
    }else if(step === 2) {
      return (
       <StepTwo/>
      )
    }else if(step === 3) {
      return (
        <View>
          <Text>StepThree</Text>
        </View>
      )
    }
  }

  return (
    <Container>
      <Step />
      <Button onPress={() => setStep(step + 1)}>
        <Text style={{color: '#fff'}}>Próximo</Text>
      </Button>
    </Container>
  )

}