import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'

const App = () =>
{
    return (
        <>
            <StatusBar  barStyle="light-content" backgroundColor = "#CC0066" />
            <Routes />
        </>
    )
}


export default App  