import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: #FFF;
`

export const Bar = styled.View`
    width: ${props => props.width}%;
    background-color: #4084fa;
    height: 100%;
    border-radius: 8px;
`

