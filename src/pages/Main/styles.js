import styled from 'styled-components/native'


export const Container = styled.View`
    flex: 1;
`
export const LevelStressView = styled.View`
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
    width: 200px;
    height: 40px;
`

export const TextLevel = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: ${ props => props.level > 4? '#CC0066': '#7AC5F0'};
`
export const Header = styled.View`
    flex:3;
    padding-vertical: 10px;
    align-items: center;
    justify-content: flex-end;
`

export const FlatListDate = styled.View`
    height: 90px;
`
export const Footer = styled.View`
    flex:7;
    padding-top: 100px;
    background-color: gray;
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