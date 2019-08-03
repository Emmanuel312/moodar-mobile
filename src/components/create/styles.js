import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    align-items: center;
    padding: 20px 30px;
`;

//export const 
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
export const InputArea = styled.View`
    flex-direction: row;
    align-items: flex-end;
`
export const Input = styled.TextInput`
    padding: 10px;
    border-radius: 10px; 
    height: 150px;
    width: 230px;
    background-color: #CDEDFF;
    text-align-vertical: top;
`

export const Send = styled.TouchableOpacity`
    margin-left: 15px;
`


