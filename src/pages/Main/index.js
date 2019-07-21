import { FlatList,ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Container,FlatListDate,Footer,DateView,DateText,Header,Title} from './styles'
import api from '../../services/api'
import Create from '../../components/create'
import Update from '../../components/update'
import io from 'socket.io-client'

export default class Main extends Component
{
      
    state =
    {
        stress : [],
        days: [],
        exist: false,
        day: '',
        visible: false,
        current: {},
        loading: true
    }

    
    async componentDidMount()
    {   
        try
        {   
            this.registerToSocket()
            this.getDays(7)
            const token = await AsyncStorage.getItem('@login')
            const { data: stress} = await api.get('stress/list', {headers: { 'authorization': `Bearer ${token}` }})
            console.log(stress)
            this.setState({ stress }, this.setState({loading: false}))
        }
        catch(err)
        {
            console.log(err)
        }
    }

    registerToSocket = () =>
    {
        
        const socket =  io.connect('https://moodar-backend.herokuapp.com')
        socket.on('connect', () => { 
            console.log('connected to socket server'); 
          }); 
        socket.on('create', newStress =>
        {
            console.log(newStress)
            this.setState({stress: [...this.state.stress,newStress]})
        })

        socket.on('update', newStress =>
        {
            console.log(newStress)
            this.setState({stress: this.state.stress.map(item => item._id === newStress._id? newStress: item)})
        })
        
       
        
    }
   

    handleCheck = (item) =>
    {
        this.setState({ day: item,visible: true })
        const current = this.state.stress.filter(stress => stress.date === item)
        
        current.length ? this.setState({ exist:true,current:current[0] }) : this.setState({ exist:false})
    }
    
    
    renderItem = ({ item }) =>
    (
        <DateView disabled={this.state.loading} onPress={() => this.handleCheck(item)}>
            <DateText>{item}</DateText>
        </DateView>
    )

    getDays = (days) =>
    {
        const week = []

        for(let i = 0; i<days ; i++)
        {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const finalDate = `${date.getDate() < 9?`0${date.getDate()}`:date.getDate()}/${(date.getMonth()+1 < 9?`0${date.getMonth()+1}`:date.getMonth()+1)}/${date.getFullYear()}`;
            week.push(finalDate)
        }

        this.setState({ days: week })
       
    }
   
    
    render()
    {
        return (
            <Container>
                <Header>
                    <Title>Stress Nosso de cada dia</Title>
                    <FlatListDate>
                        <FlatList showsHorizontalScrollIndicator={false} style={{flex:1}} data={this.state.days} renderItem={this.renderItem} keyExtractor={(item) => item} horizontal />
                        
                    </FlatListDate>

                </Header>

                <Footer>
                    {this.state.visible && (this.state.exist? <Update onClose={() => this.setState({visible: false})} data={this.state.current} /> : <Create onClose={() => this.setState({visible: false})} date={this.state.day}/>)}
                    {this.state.loading && <ActivityIndicator size="small" color="#CC0066" />}
                </Footer>
            </Container>
        )
    }
}