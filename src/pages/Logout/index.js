import { View,Alert } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationEvents } from 'react-navigation';

export default class Login extends Component
{
    confirm = async () =>
    {
        Alert.alert(
            'Concluir Ação',
            'Deseja realmente sair?',
            [
              { text: 'Cancelar', onPress: this.onCancel, style: 'cancel' },
              { text: 'Sair', onPress: this.onAccept },
            ],
            {cancelable: false},
          )
        
    }

    onAccept = async () =>
    {
        await AsyncStorage.removeItem('@login')
        this.props.navigation.navigate('Login')
    }
    
    onCancel = () =>
    {
        this.props.navigation.navigate('Main')
    }


    render()
    {
        return (
            <NavigationEvents onDidFocus={this.confirm}/>
        )
    }
}