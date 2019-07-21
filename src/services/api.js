import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const api = axios.create(
{
    baseURL: 'http://10.0.0.105:3000'
})


export default api