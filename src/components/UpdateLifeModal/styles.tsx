import { styled } from "styled-components/native";

export const Modal = styled.Modal`
  width: 100%;
  flex: 1;
  background-color: #00000068;

  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: #0000006f;

  align-items: center;
  justify-content: center;
`;

export const ResultContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #1c1c1c;
  justify-content: center;
  align-items: center;
`;

export const CurrentButton = styled.TouchableOpacity<{type: string}>`
  width: 40%;
  height: 50px;
  background-color: #0c0c0c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.type === 'current' ? '#e73232' : '#ffffff97'};
`;

export const MaxButton = styled.TouchableOpacity<{type: string}>`
  width: 40%;
  height: 50px;
  background-color: #0c0c0c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.type === 'max' ? '#e73232' : '#ffffff97'};
`;

export const OutButton = styled.TouchableOpacity<{type: string}>`
  width: 40%;
  height: 50px;
  background-color: #0c0c0c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.type === 'out' ? '#e73232' : '#ffffff97'};
`;

export const InButton = styled.TouchableOpacity<{type: string}>`
  width: 40%;
  height: 50px;
  background-color: #0c0c0c;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.type === 'in' ? '#38e732' : '#ffffff97'};
`;