import styled from 'styled-components/native';


export const Container = styled.View`
    background: ${({ bg }) => bg || '#e1f1ff'};
    border-radius: 24px;
    padding: 28px 24px;
    width: 100%;
    height: auto;
    flex-direction: row;
    margin-bottom: 16px;
`;

export const Frame = styled.View`
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background: #4084fa;
    align-items: center;
    justify-content: center;
`;

export const IconRow = styled.View`

`;

export const ContentRow = styled.View`
    margin: 0 24px;
    width: 100%;
    flex: 1;
`;
