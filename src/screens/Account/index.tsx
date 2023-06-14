import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Button, Container, SubTitle, Title } from "../Login/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Account() {
  const { user, setUser } = useContext(AuthContext);

  async function handleLogout() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <Container>
      <Title>Olá, {user?.name}</Title>
      <Button onPress={handleLogout}>
        <SubTitle>Sair</SubTitle>
      </Button>
    </Container>
  );
}
