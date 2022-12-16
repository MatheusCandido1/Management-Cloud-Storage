import { useState } from 'react';
import { Image, View, Modal } from 'react-native';
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
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export function Storage({ route }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const storage = route.params.storage.item

  const usagesPerDay = [
    {id: 1, day: "02", usage: 20},
    {id: 2, day: "03", usage: 40},
    {id: 3, day: "04", usage: 65},
    {id: 4, day: "05", usage: 30},
    {id: 5, day: "06", usage: 85},
    {id: 6, day: "07", usage: 65},
    {id: 7, day: "08", usage: 35},
  ]

  const stats = [
    {id: 1, name: "Visitors", value: '20,837', pct: '34.35', result: "up"},
    {id: 2, name: "Pageviews", value: '35,021', pct: '-4.43', result: "down"},
    {id: 3, name: "Download Files", value: '3,123', pct: '15.96', result: "up"},
    {id: 4, name: "Bandwidth Usage", value: '10.1 GB', pct: '2.12', result: "up"},
  ]

  const maxUsage = usagesPerDay.reduce((max, item) => item.usage > max ? item.usage : max, usagesPerDay[0].usage)

  function Stat({item}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
                <Text size={14} weight="700" color="#cbced6">{item.name}</Text>
                <Text style={{marginTop: 12}} size={24} weight="700" color="#000">{item.value}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 12
                  }}
                >
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      backgroundColor: item.result == 'up' ? '#e1f2ff':'#fff1d8',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 8
                    }}
                  >
                  <MaterialCommunityIcons
                    name={item.result == 'up' ? 'arrow-top-right':'arrow-bottom-right'}
                    size={14}
                    color={item.result == 'up' ? '#4084fa':'#ffbb5e'}
                  />
                  </ View>
                  <Text  size={12} weight="700" color={item.result == 'up' ? '#4084fa':'#ffbb5e'}>{item.pct}%</Text>
                </View>
                </View>
    )
  }

  function Day({ day, usage }){
    return (
      <View
        style={{
          height: 140
        }}
      >
        <View
          style={{
            justifyContent: 'flex-end',
            height: 90,
            width: 42,
            borderRadius: 8,
            backgroundColor: 'transparent',
          }}
        >
          <View
            style={{
              height: usage,
              width: 42,
              borderRadius: 8,
              backgroundColor: usage === maxUsage ? '#4084fa': '#e1f2ff',
            }}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}>
          <Text color="#aaafbe" size={14} weight="400">{day}</Text>
          <Text color="#aaafbe" size={14} weight="4009">Feb</Text>
        </View>
      </View>
    )
  }

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
              <Option
                onPress={() => setIsModalVisible(true)}
                style={{
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
      <Modal
        animationType="slide"
        visible={isModalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', paddingHorizontal: 20}}>
          <View style={{marginTop: 24, width: 56, height: 6, borderRadius: 8, backgroundColor: '#83899e' }}></View>
          <Text style={{marginTop: 64}} size={36} weight="700" color="#000">20,120</Text>
          <Text style={{marginTop: 16}} size={16} weight="600" color="#a4a9b8">Interaction from 2 feb - 8 feb</Text>
          <View style={{height: 180}}>
          <FlatList
            data={usagesPerDay}
            style={{marginTop: 32}}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{width: 6}} />}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Day day={item.day} usage={item.usage} />
            )}
          />

          </View>
          <View style={{marginTop: 56, flex: 1, width: '100%'}}>
            <FlatList
              data={stats}
              numColumns="2"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                marginVertical: 24,
                justifyContent: 'space-between'
              }}
              ItemSeparatorComponent={() => <View style={{height: 40, width: 20}} />}
              renderItem={({ item }) => (
                <Stat item={item} />
              )}
              keyExtractor={item => String(item.id)}
            />
          </View>

        </View>
      </Modal>
    </Container>

  );
}
