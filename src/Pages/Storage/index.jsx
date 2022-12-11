import { Image, View } from 'react-native';
import {
  Container,
  ContentContainer,
  Information,
  TextContainer,
  Frame,
  BuyContainer,
  BuyButton,
  OptionsContainer,
  Option
} from './styles';
import { Header } from '../../Components/Header';
import { Text } from '../../Components/Text';

import Dropbox from '../../assets/img/dropbox.png';
import Details from '../../assets/img/details.png';
import { FlatList } from 'react-native-gesture-handler';
import Entypo from '@expo/vector-icons/Entypo';

export function Storage({ route }) {
  const storage = route.params.storage.item

  const options = [
    {id: 1, name: "My Files", created_at: '01/2019', icon: "folder", color: "#4084fa"},
    {id: 2, name: "My Images", created_at: '01/2019', icon: "folder-images", color: "#4084fa"},
    {id: 3, name: "My Music", created_at: '01/2019', icon: "folder-music", color: "#4084fa"},
    {id: 4, name: "My Videos", created_at: '01/2019', icon: "folder-video", color: "#4084fa"},
  ]
  return (
    <Container>
      <Header showGoBack />
      <ContentContainer>
        <Information>
          <TextContainer>
            <Text size={36} weight="700" color="#000">{storage.name}</Text>
            <Text style={{marginTop: 8}} size={14} weight="600" color="#a4a9b8">Exp {storage.exp}</Text>
          </TextContainer>
          <Frame>
            <Image style={{width: 30, height: 30}} source={Dropbox} />
          </Frame>
        </Information>
        <BuyContainer>
          <View>
          <Text size={24} weight="700" color="#000">Need More {'\n'}Space?</Text>
          <BuyButton>
            <Text size={14} weight="700" color="#fff">Buy Storage</Text>
          </BuyButton>
          </View>
          <Image
            style={{
              marginTop: 20,
              marginLeft: '65%',
              position: 'absolute',
              width: 235,
              height: 235
            }}
            source={Details}
           />
        </BuyContainer>
        <OptionsContainer>
          <Text style={{marginTop: 32}} size={18} weight="700" color="#7e869b">My Storage</Text>
          <FlatList
            data={options}
            numColumns="2"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginVertical: 24,
            }}
            ItemSeparatorComponent={() => <View style={{height: 32}} />}
            keyExtractor={item => String(item.id)}
            renderItem={({ index, item }) => (
              <Option style={{
                  width: "45%",
                  marginRight: index % 2 !== 0 ? 0 : 32,
              }}>
                <Entypo name={item.icon} size={40} color={item.color} style={{marginBottom: 8}} />
                <Text size={14} weight="700" color="#000">{item.name}</Text>
                <Text style={{marginTop: 8}} size={12} weight="600" color="#a4a9b8">Created {item.created_at}</Text>
              </Option>
            )}
          />
        </OptionsContainer>
      </ContentContainer>
    </Container>

  );
}
