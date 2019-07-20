import { View,Text,FlatList } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Container,Slider,LevelStressView,TextLevel,FlatListDate,Footer,DateView,DateText,Header,Title} from './styles'
import api from '../../services/api'
import Create from '../../components/create'
import Update from '../../components/update'

export default class Main extends Component
{
      
    state =
    {
        stress : [],
        level: 0,
        days: [],
        exist: false,
        day: '',
        visible: false,
        current: {}
    }

    
    async componentDidMount()
    {   
        try
        {   
            this.getDays(7)
            const token = await AsyncStorage.getItem('@login')
            const { data: stress} = await api.get('stress/list', {headers: { 'authorization': `Bearer ${token}` }})
            console.log(stress)
            this.setState({ stress })
        }
        catch(err)
        {
            console.log(err)
        }
    }


    handleCreateStress = async (date) =>
    {
        const data =
        {
            level: 1,
            context: 'teste',
            date
        }
        try
        {   
            const token = await AsyncStorage.getItem('@login')
            const { data: stress} = await api.post('stress/create',data, {headers: { 'authorization': `Bearer ${token}` }})
            console.log(stress)
            this.setState({...stress })
        }
        catch(err)
        {
            console.log(err)
        }
        
    }

    handleCheck = (item) =>
    {
        this.setState({ day: item,visible: true })
        const current = this.state.stress.filter(stress => stress.date === item)
        
        current.length ? this.setState({ exist:true,current:current[0] }) : this.setState({ exist:false})
    }
    
    

    renderItem = ({ item }) =>
    (
        <DateView onPress={() => this.handleCheck(item)}>
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
                    {this.state.visible && (this.state.exist? <Update onClose={() => this.setState({visible: false})} data={this.state.current} /> : <Create onClose={() => this.setState({visible: false})} data={this.state.day}/>)}
                    
                    {/* <LevelStressView>
                        <Slider value={this.state.level} onValueChange={level => this.setState({ level})} />
                        <TextLevel level={this.state.level}>{this.state.level}</TextLevel>
                        <Text>{this.state.current.context}</Text>
                    </LevelStressView>
                    
                 */}
                     
            
                   
                </Footer>
            </Container>
        )
    }
}