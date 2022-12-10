import { useState } from 'react';
import { FlatList } from 'react-native';
import Avatar from '../../Components/Icons/Avatar';
import { StorageCard } from '../../Components/StorageCard';
import { Text } from  '../../Components/Text';
import {
  Container,
  Welcome,
  Frame,
  WelcomeMessage,
  Content,
  TitleContainer
} from './styles';

export function Dashboard() {
  const [storages] = useState([
    {
      id: 1,
      name: "Dropbox",
      exp: "01/2020",
      used: "9.1 GB",
      total: "15 GB",
      img: require("../../assets/img/dropbox.png"),
      progress: 61,
      color: {
        primary: "#4084fa",
        secondary: "#e6f0ff",
        bg: "#e1f1ff",
      }
    },
    {
      id: 2,
      name: "Google Drive",
      exp: "01/2020",
      used: "3.5 GB",
      total: "15 GB",
      img: require("../../assets/img/drive.png"),
      progress: 23,
      color: {
        primary: "#FFF",
        secondary: "#FFF",
        bg: "#e6e1ff",
      }
    },
    {
      id: 3,
      name: "Mediafire",
      exp: "01/2020",
      used: "12 GB",
      total: "15 GB",
      img: require("../../assets/img/mediafire.png"),
      progress: 80,
      color: {
        primary: "#FFF",
        secondary: "#FFF",
        bg: "#ffefe1",
      }
    },
  ])
  return (
    <Container>
      <Welcome>
        <WelcomeMessage>
          <Text weight="600" color="#8b93a5" >Good Morning</Text>
          <Text size="28" weight="700" color="#222222">Matheus Carvalho</Text>
        </WelcomeMessage>
        <Frame>
          <Avatar />
        </Frame>
      </Welcome>
      <Content>
        <TitleContainer>
          <Text size="16" weight="800" color="#687189">My Storage</Text>
        </TitleContainer>
        <FlatList
          data={storages}
          showsVerticalScrollIndicator={false}
          renderItem={
            (storage) => (
              <StorageCard storage={storage} />
            )
          }
          contentContainerStyle={{ marginVertical: 24 }}
          keyExtractor={storage => storage.id}
        />
      </Content>
    </Container>
  );
}
