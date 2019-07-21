import styled from 'styled-components/native'


export const Container = styled.View`
    flex: 1;
`

export const Header = styled.View`
    flex:3;
    padding-vertical: 10px;
    align-items: center;
    justify-content: flex-end;
    border-bottom-width: 1px;
    border-bottom-color: #A6A6A6;
`

export const FlatListDate = styled.View`
    height: 90px;
`
export const Footer = styled.View`
    flex:7;
    padding-top: 50px;
    align-items:center;
`

export const DateView = styled.TouchableOpacity`
    height: 90px;
    width: 90px;
    align-items: center;
    justify-content: center;
    border-radius: 90px;
    background-color: #7AC5F0;
    margin-right: 10px; 
    padding: 5px;
`
export const DateText = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #fff;
`
export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #CC0066;
    margin-bottom: 15px;
`
export const TextHistory = styled.Text`
font-weight: bold;
font-size: 10px;
color: #A6A6A6;

`