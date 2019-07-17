import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #CC0066;
`;
export const Header = styled.View`
    flex: 3;
    width: 100%;
    padding: 30px;
    align-items: center;
    justify-content: flex-end;
`;
export const Image = styled.Image`
    height: 50px;
    width: 60%;
    margin-right: 20px;
`;
export const Content = styled.View`
    flex: 7;
    align-items: center;
    width: 100%;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 70%;
    border-radius: 20px;
    background-color: #FFF;
    margin-top: 30px;
    padding-left: 15px;
`;

export const LoginButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 70%;
    border-radius: 20px;
    margin-top: 30px;
    background: ${props => props.disabled? "#B9B9B9" : "#7AC5F0"}  
`;

export const TextButton = styled.Text`
    color: #FFF;

`;
export const SwitchView = styled.TouchableOpacity`
   padding: 10px;
`;
export const TextSwitch = styled.Text`
    color: #B9B9B9;
    font-size: 10px;
    text-decoration: underline;
`;
