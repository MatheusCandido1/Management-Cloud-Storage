import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  font-weight: ${({ weight }) => weight || 'normal'};
`;
