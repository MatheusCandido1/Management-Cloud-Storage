import { Image } from 'react-native';
import { Container, Frame, IconRow, ContentRow } from './styles';

import { Text } from  '../../Components/Text';
import { ProgressBar } from '../ProgressBar';

export function StorageCard({ storage, onSelectStorage }) {
  const image = Image.resolveAssetSource(storage.item.img).uri
  return (
    <Container onPress={onSelectStorage} bg={storage.item.color.bg}>
      <IconRow>
        <Frame bg={storage.item.color.primary}>
          <Image style={{width: 30, height: 30}} source={{uri: image}} />
        </Frame>
      </IconRow>
      <ContentRow>
        <Text style={{marginBottom: 8}} size="20" weight="700" color="#2a2b2c">{storage.item.name}</Text>
        <Text style={{marginBottom: 24}} size="12" weight="600" color="#7b859d">Exp {storage.item.exp}</Text>
        <Text style={{marginBottom: 12}} size="12" weight="700" color="#8a97ac">{storage.item.used} of {storage.item.total}  used</Text>
        <ProgressBar value={storage.item.progress} />
      </ContentRow>
    </Container>
  );
}
