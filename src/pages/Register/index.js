import { Container,Content,Input,Header,LoginButton,TextButton,Image,SwitchView,TextSwitch } from '../authStyles/styles'
import React, { Component } from 'react'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'
import { ActivityIndicator } from 'react-native'

export default class Register extends Component
{
    state = 
    {
        email: '',
        password: '',
        name: '',
        loading: false
    }

    handleLogin = async () =>
    {
        this.setState({loading: true })
        try
        {
            const { email, password,name } =  this.state
            const { data: user } = await api.post('signup', { email,password,name })
            this.setState({loading: false })
            await AsyncStorage.setItem('@login', user.token)
            this.props.navigation.navigate('Main', {token: user.token })
        }
        catch(error)
        {
            console.log(error)
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
                    <Input placeholder="Nome" value={this.state.name} blurOnSubmit={false} returnKeyType = { "next" } onSubmitEditing={() => { this.secondTextInput.focus(); }} autoFocus={true} onChangeText={name => this.setState({ name })} />
                    <Input keyboardType="email-address" ref={(input) => { this.secondTextInput = input; }} autoCapitalize='none' autoCorrect={false}  placeholder="Email" blurOnSubmit={false} returnKeyType = { "next" } onSubmitEditing={() => { this.thirdTextInput.focus(); }} value={this.state.email} onChangeText={email => this.setState({ email })}/>
                    <Input secureTextEntry autoCapitalize='none' ref={(input) => { this.thirdTextInput = input; }} placeholder = "Senha" value={this.state.password} onChangeText={password => this.setState({ password })} />
                    <LoginButton onPress={this.handleLogin} disabled={!(this.state.name && this.state.email && this.state.password)}>
                        <TextButton>Registrar</TextButton>
                    </LoginButton>
                    <SwitchView onPress={() => this.props.navigation.navigate('Login')}>
                        <TextSwitch>Já possui uma conta? Entre agora mesmo!</TextSwitch>
                    </SwitchView>
                    {this.state.loading && <ActivityIndicator size="small" color="#CC0066" />}
                </Content>
            </Container>
        )
    }
}