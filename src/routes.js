import { createSwitchNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation'
import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'

const appNavigator = createBottomTabNavigator(
{
    Main
})

const authNavigator = createSwitchNavigator(
{
    Login,
    Register,
    appNavigator
},{initialRouteName: 'Login'})    

export default createAppContainer(authNavigator)