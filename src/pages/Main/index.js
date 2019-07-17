import { View,Text } from 'react-native'
import React, { Component } from 'react'

export default class Main extends Component
{
    render()
    {
        console.log(this.props.navigation)
        return (
            <View>
                <Text>Main</Text>
            </View>
        )
    }
}