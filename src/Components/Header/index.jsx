import { Container, Option } from './styles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export function Header({showGoBack = false}) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Dashboard')
  }
  return (
    <Container>
      <Option onPress={
        showGoBack ? handleGoBack : null
      }>
        {showGoBack ? (
        <MaterialCommunityIcons name="arrow-left" size={30} color={"#434343"} />
        ) : (
        <MaterialCommunityIcons name="menu" size={30} color={"#434343"} />
        )}
      </Option>
      <Option>
        <MaterialCommunityIcons name="dots-vertical" size={30} color={"#434343"} />
      </Option>
    </Container>
  );
}
