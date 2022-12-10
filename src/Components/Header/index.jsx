import { Container, Option } from './styles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export function Header() {
  return (
    <Container>
      <Option>
        <MaterialCommunityIcons name="menu" size={30} color={"#434343"} />
      </Option>
      <Option>
        <MaterialCommunityIcons name="dots-vertical" size={30} color={"#434343"} />
      </Option>
    </Container>
  );
}
