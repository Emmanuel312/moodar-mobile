import React, { Component } from 'react'
import { Container,Title,SubTitle,Slider,HeaderTitle,LevelStressView,HeaderContent,TextLevel,InfoTextMessage,InfoTextLevel,InfoText,Send,Header,Footer } from './styles'
import RBSheet from 'react-native-raw-bottom-sheet'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ActivityIndicator } from 'react-native'

class Example extends Component
{
    state =
    {
        level: 0,
        data: this.props.data,
        loading: false
    }

    componentDidMount()
    {   
        this.RBSheet.open()
    }
    
    handleUpdateStress = async () =>
    {
        this.setState({loading: true })
        try
        {   
            const { level,data } = this.state
            const token = await AsyncStorage.getItem('@login')
            const { data: stress} = await api.put(`stress/update/${data._id}`,{level}, {headers: { 'authorization': `Bearer ${token}` }})
            console.log(stress)
            this.setState({ data:stress ,level:0,loading:false })
            
            
        }
        catch(err)
        {
            console.log(err.request)
        }
        
    }

   
    render()
    {
        
        return (
            <RBSheet animationType='fade' closeOnDragDown onClose={this.props.onClose} ref={ref => { this.RBSheet = ref }} height={500} duration={100} >
                <Criar onPress={this.handleUpdateStress}   data={this.state.data} level={this.state.level} onValueChange={level => this.setState({ level})}/>
                {this.state.loading && <ActivityIndicator size="small" color="#CC0066" />}
            </RBSheet>
       
        )
    }
}

const Criar = (props) =>
(
    <Container>
        <Header>
            <HeaderTitle>
                <Title>Stress Diario</Title>
                <SubTitle>Dia: {props.data.date}</SubTitle>
            </HeaderTitle>
            <HeaderContent>
                <InfoText>Nivel: <InfoTextLevel level={props.data.level}>{props.data.level}</InfoTextLevel></InfoText>
                <InfoTextMessage>Mensagem: {props.data.context}</InfoTextMessage>
            </HeaderContent>
        </Header>
        
        <Footer>
            <Title>Alterar Stress Diario</Title>
            <SubTitle>Dia: {props.data.date}</SubTitle>
            <LevelStressView>
                <Slider value={props.level} onValueChange={props.onValueChange} />
                <TextLevel level={props.level}>{props.level}</TextLevel>
            </LevelStressView>
            <Send onPress={props.onPress}>
                <Icon name="send" color="#CC0066" size={20} />
            </Send>
        </Footer>
    </Container>
)

 
export default Example;