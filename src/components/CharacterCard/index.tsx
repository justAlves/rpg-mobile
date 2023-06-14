import { View, Text } from "react-native";
import React from "react";
import { CharacterContainer, ImageContainer } from "./styles";
import { SubTitle } from "../../screens/Login/styles";
import Icon from "react-native-vector-icons/Feather";

export default function CharacterCard({ data }) {
  return (
    <CharacterContainer>
      <ImageContainer>
        <Icon name="user" size={75} color="#5e5e5e" />
      </ImageContainer>
      <SubTitle style={{ color: "#fff" }}>{data.name}</SubTitle>
    </CharacterContainer>
  );
}
