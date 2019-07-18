import { createSwitchNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation'
import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import Logout from './pages/Logout'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

const appNavigator = createBottomTabNavigator(
{
    Main :
    {
        name: 'Main',
        screen: Main,
        navigationOptions: 
        {
            title: 'Monitorar',
            tabBarIcon: ({ tintColor }) => <Icon name="heart-pulse" size={20} color="#FFF" />
        }
    },
    Logout:
    {
        name: 'Logout',
        screen: Logout,
        navigationOptions: 
        {
            title: 'Sair',
            tabBarIcon: ({ tintColor }) => <Icon name="exit-to-app" size={20} color="#FFF" />
        }
       
        
       
    }
},
{

    initialRouteName: 'Main',
    activeColor: '#f0edf6',
    inactiveColor: '#f0edf6',
    tabBarOptions:
    {
        activeTintColor: "#FFF",
        inactiveTintColor: "#FFF",
        activeBackgroundColor: "#7AC5F0",
        inactiveBackgroundColor: '#CC0066'
    }
})

const authNavigator = createSwitchNavigator(
{
    Login,
    Register,
    appNavigator
},{initialRouteName: 'Login'})    

export default createAppContainer(authNavigator)