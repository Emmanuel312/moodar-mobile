import { Container,Content,Input,Header,LoginButton,TextButton,Image,TextSwitch,SwitchView } from '../authStyles/styles'
import React, { Component } from 'react'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'
import { ActivityIndicator } from 'react-native'

export default class Login extends Component
{
    state = 
    {
        email: '',
        password: '',
        loading: false
    }
  

    async componentDidMount()
    {
        const login = await AsyncStorage.getItem('@login')
        if(login) this.props.navigation.navigate('Main')
    }

    handleLogin = async () =>
    {
        this.setState({loading: true })
        try
        {
            const { email, password } =  this.state
            const { data: user } = await api.post('signin', {email,password})
            this.setState({loading: false })
            await AsyncStorage.setItem('@login', user.token)
            this.props.navigation.navigate('Main', {token: user.token} )
        }
        catch(error)
        { 
            console.log(error);
        }

    }

    render()
    {
        return (
            <Container>
                <Header>
                    <Image source={require('../../assets/logo.png')}/>
                </Header>
                <Content>
                    <Input keyboardType="email-address" autoCapitalize='none' autoCorrect={false} autoFocus={true} placeholder="Email" blurOnSubmit={false} returnKeyType = { "next" } onSubmitEditing={() => { this.secondTextInput.focus(); }} value={this.state.email} onChangeText={email => this.setState({ email })}/>
                    <Input secureTextEntry autoCapitalize='none' ref={(input) => { this.secondTextInput = input; }} placeholder = "Senha" value={this.state.password} onChangeText={password => this.setState({ password })} />
                    <LoginButton onPress={this.handleLogin} disabled={!(this.state.email && this.state.password)}>
                        <TextButton>Logar</TextButton>
                    </LoginButton>
                    <SwitchView onPress={() => this.props.navigation.navigate('Register')}>
                        <TextSwitch>Não possui uma conta? Faça agora mesmo!</TextSwitch>
                    </SwitchView>
                    {this.state.loading && <ActivityIndicator size="small" color="#CC0066" />}
                </Content>
            </Container>
        )
    }
}