import { styled } from "styled-components/native";

export const Button = styled.TouchableOpacity <{next?: boolean}> `
  width: 60%;
  height: 50px;
  background-color: #131313;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px #000;
  border: ${props => props.next ? '1px solid #20c92e' : '1px solid #d82d2d'}; 
`

export const ButtonContainer = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`