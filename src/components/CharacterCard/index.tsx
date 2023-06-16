import { View, Text } from "react-native";
import React from "react";
import { CharacterContainer, CharacterStats, ImageContainer } from "./styles";
import { SubTitle } from "../../screens/Login/styles";
import Icon from "react-native-vector-icons/Feather";
import { Slider } from "@miblanchard/react-native-slider";

export default function CharacterCard({ data }) {
  return (
    <CharacterContainer>
      <ImageContainer>
        <Icon name="user" size={75} color="#5e5e5e" />
      </ImageContainer>
      <CharacterStats>
        <SubTitle style={{ color: "#fff" }}>{data.name}</SubTitle>
        <Slider
          value={data.currentLife}
          minimumValue={0}
          maximumValue={data.maxLife}
          trackStyle={{ width: "100%", height: 10, backgroundColor: "#7c5b5b" }}
          thumbStyle={{ width: 0, height: 0 }}
          minimumTrackTintColor="#df3d3d"
          containerStyle={{ height: 20, width: "100%" }}
          disabled
        />
        <Slider
          value={data.currentSanity}
          minimumValue={0}
          maximumValue={data.maxSanity}
          trackStyle={{ width: "100%", height: 10, backgroundColor: "#5d5b7c" }}
          thumbStyle={{ width: 0, height: 0 }}
          minimumTrackTintColor="#3d4ddf"
          containerStyle={{ height: 20, width: "100%" }}
          disabled
        />
      </CharacterStats>
    </CharacterContainer>
  );
}
