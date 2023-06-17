import { View, ScrollView , Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import api from '../../api'
import { Container, SubTitle, Title } from '../Login/styles'
import { Slider } from '@miblanchard/react-native-slider'
import Icon from 'react-native-vector-icons/Feather'
import { ChangeStats, ImageContainer } from './styles'
import DiceButton from '../../components/DiceButton'
import DiceModal from '../../components/DiceModal'
import UpdateLifeModal from '../../components/UpdateLifeModal'
import UpdateSanityModal from '../../components/UpdateSanityModal'

type Character = {
  id: string
  name: string
  currentLife: number
  maxLife: number
  currentSanity: number
  maxSanity: number
  strength: number
  fight: number
  agility: number
  intelligence: number
  charm: number
  emotion: number
}

export default function Character() {

  const route = useRoute()

  const { id } = route.params

  const [character, setCharacter] = useState<Character[]>([])
  const [dice, setDice] = useState(0 as number)
  const [diceModal, setDiceModal] = useState(false)
  const [lifeModal, setLifeModal] = useState(false)
  const [sanityModal, setSanityModal] = useState(false)

  useEffect(() => {
    async function getCharacter() {
      try {
        const response = await api.get(`/character?id=${id}`)
        .then(response => setCharacter(response.data.character as Character[]))

      } catch (error) {
        console.log(error)
      }
    }

    getCharacter()
  }, [lifeModal, sanityModal])

  function rollDice( faces: number ) {
    const dice = Math.floor(Math.random() * faces) + 1

    setDice(dice)
    setDiceModal(true)
  }

  return (
    <Container>
      <ImageContainer>
        <Icon name="user" size={75} color="#5e5e5e"/>
      </ImageContainer>
      <Title style={{ marginVertical: 10 }}>{character.name}</Title>
      <ChangeStats onPress={() => setLifeModal(true)}>
        <SubTitle style={{ color: "#fff" }}>Vida: {character.currentLife + '/' + character.maxLife}</SubTitle>
        <Slider
          value={character.currentLife}
          minimumValue={0}
          maximumValue={character.maxLife}
          trackStyle={{ width: "100%", height: 20, backgroundColor: "#7c5b5b" }}
          thumbStyle={{ width: 0, height: 0 }}
          minimumTrackTintColor="#df3d3d"
          containerStyle={{ height: 20, width: "80%", marginVertical: 10 }}
          disabled
        />
      </ChangeStats>
      <ChangeStats onPress={() => setSanityModal(true)}>
        <SubTitle style={{ color: "#fff" }}>Sanidade: {character.currentSanity + '/' + character.maxSanity}</SubTitle>
        <Slider
          value={character.currentSanity}
          minimumValue={0}
          maximumValue={character.maxSanity}
          trackStyle={{ width: "100%", height: 20, backgroundColor: "#5d5b7c"}}
          thumbStyle={{ width: 0, height: 0 }}
          minimumTrackTintColor="#3d4ddf"
          containerStyle={{ height: 20, width: "80%", marginVertical: 10  }}
          disabled
        />
      </ChangeStats>

      <ScrollView style={{ maxHeight: '30%' }}>
        <DiceButton title={`Força D${character.strength}`} onPress={() => rollDice(character.strength)}/>
        <DiceButton title={`Luta D${character.fight}`} onPress={() => rollDice(character.fight)}/>
        <DiceButton title={`Inteligência D${character.intelligence}`} onPress={() => rollDice(character.intelligence)}/>
        <DiceButton title={`Agilidade D${character.agility}`} onPress={() => rollDice(character.agility)}/>
        <DiceButton title={`Charme D${character.charm}`} onPress={() => rollDice(character.charm)}/>
        <DiceButton title={`Emoção D${character.emotion}`} onPress={() => rollDice(character.emotion)}/>
    
      </ScrollView>

      <DiceModal diceModal={diceModal} setModal={setDiceModal} value={dice}/>
      <UpdateLifeModal id={character.id} lifeModal={lifeModal} setLifeModal={setLifeModal}/>
      <UpdateSanityModal id={character.id} sanModal={sanityModal} setSanModal={setSanityModal}/>
    </Container>
  )
}