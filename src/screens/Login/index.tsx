import React, {useContext, useState} from 'react';
import {
  AuthContainer,
  Button,
  Container,
  Input,
  SubTitle,
  Title,
} from './styles';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  function handleLogin() {
    signIn({email, password});
  }

  return (
    <Container>
      <Title>RPG APP</Title>
      <SubTitle>Login</SubTitle>
      <AuthContainer>
        <Input
          onChangeText={text => setEmail(text)}
          placeholder="E-mail"
          placeholderTextColor={'#757575'}
        />
        <Input
          onChangeText={text => setPassword(text)}
          placeholder="Senha"
          placeholderTextColor={'#757575'}
          secureTextEntry={true}
        />
        <Button onPress={handleLogin}>
          <SubTitle>Entrar</SubTitle>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <SubTitle>Não possui uma conta? Registre!</SubTitle>
        </TouchableOpacity>
      </AuthContainer>
    </Container>
  );
}
