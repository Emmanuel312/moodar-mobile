import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'

export const Container = styled.View`
    flex:1;
    padding: 20px 30px;
`;

export const Header = styled.View`
    flex:5;
    padding: 20px 30px;
    border-bottom-width: ${StyleSheet.hairlineWidth};
    border-bottom-color: #A6A6A6;
`;

export const HeaderTitle = styled.View`
    align-items: center;
    
`;

export const HeaderContent = styled.View`
    flex:1;
    
`;

export const Footer = styled.View`
    flex:5;
    align-items: center;
    padding: 20px 30px;
`;

export const LevelStressView = styled.View`
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
`

export const Slider = styled.Slider.attrs({
    minimumValue: 0,
    maximumValue: 10,
    minimumTrackTintColor:'#CC0066',
    maximumTrackTintColor:'#7AC5F0',
    step:1,
    thumbTintColor: '#CC0066'
})
`
    width: 270px;
    height: 40px;
`

export const TextLevel = styled.Text`
    font-weight: bold;
    font-size: 12px;
    color: ${ props => props.level > 4? '#CC0066': '#7AC5F0'};
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #000;
`
export const SubTitle = styled.Text`
    margin-top: 3px;
    font-size: 12px;
    color: #A6A6A6;
`

export const InfoText = styled.Text`
    margin-top: 30px;
    font-weight: bold;
    font-size: 14px;
    color: #000;
`
export const InfoTextLevel = styled.Text`
    margin-top: 30px;
    font-weight: bold;
    font-size: 14px;
    color: ${ props => props.level > 4? '#CC0066': '#7AC5F0'};
`
export const InfoTextMessage = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #000;
`

export const Send = styled.TouchableOpacity`
    margin-left: 15px;
`


