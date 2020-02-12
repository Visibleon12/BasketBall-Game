import React,{Component} from 'react'
import {  View,Text,StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ButtonComponent from '../ButtonComponent'
import FlatListComponent from '../FlatListComponent'
import {connect} from 'react-redux'

 class ScoreboardScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            sortKey:'Score',
            sortorderScore:'Des',
            sortorderDate:'Des'
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <ButtonComponent title='Name' onPressAction={()=>{}} style={{}}/>
                    <ButtonComponent  title='Score' onPressAction={()=>{this.setState({sortKey:'Score',sortorderScore:(this.state.sortorderScore==='Des')?'Asc':'Des'})}} style={{}}/>
                    <ButtonComponent  title='Date/Time' onPressAction={()=>{this.setState({sortKey:'Date',sortorderScore:(this.state.sortorderDate==='Des')?'Asc':'Des'})}}style={{}}/>
                </View>
                <FlatListComponent sortKey={this.state.sortKey} sortorderDate={this.state.sortorderDate} sortorderScore={this.state.sortorderScore}/>
            </View>
        )
    }
}

const mapstatetoProps=(state)=>{
    return({
        sortorderScore:state.R2.sortorderScore,
        sortorderDate:state.R2.sortorderDate
    })
}
export default connect(mapstatetoProps)(ScoreboardScreen)
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFF0',
        justifyContent:'space-around',
        alignItems:'center'
    },
    innerContainer:{
        flexDirection:'row',
        width:410,
        height:50,
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'space-between'
    },
    
      

})