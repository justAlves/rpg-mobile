import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Title, Container, SubTitle } from '../../../screens/Login/styles'
import PickerSelect from '../../PickerSelect'
import api from '../../../api'

interface StepThreeProps {
  setCampaign: (value: string) => void
  campaign: string
}

export default function StepThree({setCampaign, campaign}: StepThreeProps) {

  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    async function loadCampaigns() {
      try {
        const response = await api.get('/campaign')
        

        const campaigns = response.data.campaign.map((campaign: any) => {
          return {
            label: campaign.name,
            value: campaign.id
          }
        })

        setCampaigns(campaigns)
      } catch (error) {
        console.log(error)
      }
    }

    loadCampaigns()
  }, [])
  

  return (
    <Container>
      {
        campaigns.length > 0 ? (
          <>
            <Title>Escolha uma campanha</Title>
            <SubTitle>Selecione a qual campanha seu personagem pertence.</SubTitle>
            <PickerSelect
                items={[...campaigns]}
                onValueChange={(value) => setCampaign(value as string)}
                value={campaign}
            />
          </>
        ) : (
          <Text>Carregando...</Text>
        ) 
      }
    </Container>
  )
}