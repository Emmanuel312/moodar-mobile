import { View,Text,FlatList } from 'react-native'
import React, { Component } from 'react'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

export default class Main extends Component
{
      
    state =
    {
        stress : []
    }

    renderItem = ({ item }) =>
    (
        <View>
            <Text>{item.level}</Text>
            <Text>{item.createdAt}</Text>
        </View>
    )

    async componentDidMount()
    {   
        try
        {   
            const token = await AsyncStorage.getItem('@login')
            const { data: stress} = await api.get('stress/list', {headers: { 'authorization': `Bearer ${token}` }})
            console.log(stress)
            this.setState({ stress })
        }
        catch(err)
        {
            console.log(err.request)
        }
    }
    render()
    {
        return (
            <View>
                <FlatList data={this.state.stress} renderItem={this.renderItem} keyExtractor={(item) => item._id} />
            </View>
        )
    }
}