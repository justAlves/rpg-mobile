import React, {useContext, useState} from 'react';
import {
  AuthContainer,
  Button,
  Container,
  Input,
  SubTitle,
  Title,
} from '../Login/styles';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

export default function Register() {
  const navigation = useNavigation();
  const {signUp} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleRegister() {
    const validations =
      confirmPassword !== password ||
      password === '' ||
      email === '' ||
      name === '';

    if (validations) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    signUp({name, email, password});
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Title>RPG APP</Title>
      <SubTitle>Registrar</SubTitle>
      <AuthContainer>
        <Input
          onChangeText={text => setName(text)}
          placeholder="Nome"
          placeholderTextColor={'#757575'}
        />
        <Input
          onChangeText={text => setEmail(text)}
          placeholder="E-mail"
          placeholderTextColor={'#757575'}
        />
        <Input
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor={'#757575'}
        />
        <Input
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={true}
          placeholder="Confirme sua senha"
          placeholderTextColor={'#757575'}
        />
        <Button onPress={handleRegister}>
          <SubTitle>Registrar</SubTitle>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <SubTitle>Já possui uma conta? Entre!</SubTitle>
        </TouchableOpacity>
      </AuthContainer>
    </Container>
  );
}
