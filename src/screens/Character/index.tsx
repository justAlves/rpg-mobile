import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import api from '../../api'
import { Container, SubTitle, Title } from '../Login/styles'
import { Slider } from '@miblanchard/react-native-slider'

export default function Character() {

  const route = useRoute()

  const { id } = route.params

  const [character, setCharacter] = useState([])
  const [dice, setDice] = useState(0 as number)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    async function getCharacter() {
      try {
        const response = await api.get(`/character?id=${id}`)

        setCharacter(response.data.character)
      } catch (error) {
        console.log(error)
      }
    }

    getCharacter()
  }, [])

  function rollDice( faces: number ) {
    const dice = Math.floor(Math.random() * faces) + 1

    setDice(dice)
    setModal(true)
  }

  return (
    <Container>
      <Title>{character.name}</Title>
      <Slider
        value={character.currentLife}
        minimumValue={0}
        maximumValue={character.maxLife}
        trackStyle={{ width: "100%", height: 10, backgroundColor: "#7c5b5b" }}
        thumbStyle={{ width: 0, height: 0 }}
        minimumTrackTintColor="#df3d3d"
        containerStyle={{ height: 20, width: "80%" }}
        disabled
      />
      <Slider
        value={character.currentSanity}
        minimumValue={0}
        maximumValue={character.maxSanity}
        trackStyle={{ width: "100%", height: 10, backgroundColor: "#5d5b7c" }}
        thumbStyle={{ width: 0, height: 0 }}
        minimumTrackTintColor="#3d4ddf"
        containerStyle={{ height: 20, width: "80%" }}
        disabled
      />
      <TouchableOpacity onPress={() => rollDice(character.strength)}>
        <Text>Roll</Text>
      </TouchableOpacity>
    </Container>
  )
}