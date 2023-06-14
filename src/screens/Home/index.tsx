import { FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container } from '../Login/styles';
import api from '../../api';
import CharacterCard from '../../components/CharacterCard';
import { CharacterList } from './styles';

type Characters = {
  id: string;
  name: string;
};

export default function Home() {
  const [characters, setCharacters] = useState<Characters>([]);

  useEffect(() => {
    async function getCharacters() {
      try {
        const response = await api.get('/character/my');
        setCharacters(response.data.character);

        console.log(characters);
      } catch (error) {
        console.log(error);
      }
    }

    getCharacters();
  }, []);

  return (
    <Container>
      {characters.length > 0 ? (
        <CharacterList
          data={characters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CharacterCard data={item} />}
        />
      ) : (
        <Text style={{ color: '#fff' }}>Loading...</Text>
      )}
    </Container>
  );
}
