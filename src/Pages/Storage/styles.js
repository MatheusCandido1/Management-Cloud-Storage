import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  flex: 1;
  background: #FFF;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 32px;
`;

export const Information = styled.View`
  margin-top: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.View``;

export const Frame = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: ${({ bg }) => bg || '#4084fa'};
  align-items: center;
  justify-content: center;
`;

export const BuyContainer = styled.View`
  margin-top: 32px;
  width: 100%;
  padding: 32px;
  background-color: #e1f1ff;
  border-radius: 24px;
  flex-direction: row;
`;

export const BuyButton = styled.TouchableOpacity`
  margin-top: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 16px;
  background: #4084fa;
`;

export const OptionsContainer = styled.View`
`;

export const OptionsGrid = styled.View`
  width: 100%;
`;

export const Option = styled.TouchableOpacity`
  border-radius: 16px;
  padding: 16px;
  height: 150px;
  width: 50%;
  background-color: #f5f6fc;
  justify-content: center;
  align-items: center;
`
