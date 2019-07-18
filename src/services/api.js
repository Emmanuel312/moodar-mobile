import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const api = axios.create(
{
    baseURL: 'https://moodar-backend.herokuapp.com',
})


export default api