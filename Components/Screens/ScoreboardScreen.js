import React,{Component} from 'react'
import {  View,Text,StyleSheet,BackHandler } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ButtonComponent from '../ButtonComponent'
import FlatListComponent from '../FlatListComponent'
import {connect} from 'react-redux'
import { ignoreElements } from 'rxjs/operators'
import { greaterThan } from 'react-native-reanimated'

 class ScoreboardScreen extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount() {
           
       
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
     }
   
     componentWillUnmount() {
       BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
       this.count=0
     }
   
     handleBackPress = () => {
      this.props.navigation.goBack()
      return true
     }

    getSymbol=(sortKey)=>{
        if(sortKey==='Name'){
            if(this.props.sortorderName==='Des'){
                return '↑'
            }
            else{
                return '↓'
            }
        }
        else if(sortKey==='Score'){
            if(this.props.sortorderScore==='Des'){
                return '↑'
            }
            else{
                return '↓'
            }
        }
        else{
            if(this.props.sortorderDate==='Des'){
                return '↑'
            }
            else{
                return '↓'
            }
        }

    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <ButtonComponent title={'Name '+this.getSymbol('Name')} onPressAction={()=>{this.props.dispatch({type:'Sort Data',sortKey:'Name',sortorderName:(this.props.sortorderName==='Des')?'Asc':'Des',sortorderScore:this.props.sortorderScore,sortorderDate:this.props.sortorderDate})}} style={{}} color={(this.props.sortKey==='Name')?'green':'white'}/>
                    <ButtonComponent  title={'Score '+this.getSymbol('Score')} onPressAction={()=>{this.props.dispatch({type:'Sort Data',sortKey:'Score',sortorderName:this.props.sortorderName,sortorderScore:(this.props.sortorderScore==='Des')?'Asc':'Des',sortorderDate:this.props.sortorderDate})}} style={{}} color={(this.props.sortKey==='Score')?'green':'white'}/>
                    <ButtonComponent  title={'Date/Time '+this.getSymbol('Date')} onPressAction={()=>{this.props.dispatch({type:'Sort Data',sortKey:'Date',sortorderName:this.props.sortorderName,sortorderScore:this.props.sortorderScore,sortorderDate:(this.props.sortorderDate==='Des')?'Asc':'Des'})}}style={{}} color={(this.props.sortKey==='Date')?'green':'white'}/>
                </View>
                <Text style={{width:'100%',fontSize:15}}>{'Data Displayed :'+this.props.data.length+'/'+this.props.length}</Text>
                <FlatListComponent  />
            </View>
        )
    }
}

const mapstatetoProps=(state)=>{
    return({
        sortorderScore:state.R2.sortorderScore,
        sortorderDate:state.R2.sortorderDate,
        sortorderName:state.R2.sortorderName,
        sortKey:state.R2.sortKey,
        length:state.R2.length,
        count:state.R2.count,
        data:state.R2.dataShown
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