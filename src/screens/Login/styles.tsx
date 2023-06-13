import {styled} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1c1c1c;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const AuthContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 75%;
  height: 50px;
  background-color: #2e2e2e;
  border-radius: 4px;
  padding: 0 10px;
  margin: 10px 0;
  color: #fff;
  box-shadow: 0px 0px 2px #000;
`;

export const Button = styled.TouchableOpacity`
  width: 75%;
  height: 50px;
  background-color: #d15454;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
