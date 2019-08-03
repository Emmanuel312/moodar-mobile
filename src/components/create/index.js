import React, { Component } from 'react'
import { Container,Title,SubTitle,Slider,LevelStressView,TextLevel,InputArea,Input,Send } from './styles'
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
        context: '',
        loading: false
    }

    componentDidMount()
    {
        this.RBSheet.open()
    }

    

    handleCreateStress = async () =>
    {
        this.setState({loading: true })
        try
        {   
            const { context,level } = this.state
            const token = await AsyncStorage.getItem('@login')
            const { data: stress} = await api.post('stress/create',{level,context,date:this.props.date}, {headers: { 'authorization': `Bearer ${token}` }})
            this.setState({ context:'',level:0,loading: false })
            this.RBSheet.close()
            
        }
        catch(err)
        {
            console.log(err.request)
        }
        
    }

   
    render()
    {
        
        return (
            <RBSheet animationType='fade' closeOnDragDown onClose={this.props.onClose} ref={ref => { this.RBSheet = ref }} height={300} duration={100} >
                <Criar onPress={this.handleCreateStress} context={this.state.context} onChangeText={context => this.setState({ context })} date={this.props.date} level={this.state.level} onValueChange={level => this.setState({ level})}/>
                {this.state.loading && <ActivityIndicator size="small" color="#CC0066" />}
            </RBSheet>
       
        )
    }
}

const Criar = (props) =>
(
    <Container>
        <Title>Criar Stress Diario</Title>
        <SubTitle>Dia: {props.date}</SubTitle>
        <LevelStressView>
            <Slider value={props.level} onValueChange={props.onValueChange} />
            <TextLevel level={props.level}>{props.level}</TextLevel>
        </LevelStressView>
        <InputArea>
            <Input multiline placeholder="Nos conte como está se sentindo (se quiser, claro)" value={props.context} onChangeText={props.onChangeText}/>
            <Send onPress={props.onPress}>
                <Icon name="send" color="#CC0066" size={20} />
            </Send>
        </InputArea>
    </Container>
)

 
export default Example;