import React,{Component} from 'react'
import { View,Text } from 'react-native'



export default class ScoreComponent extends Component{

    render(){
        return(
            <View style={{height:100,width:100,alignItems:'center',justifyContent:'center',backgroundColor:'white',borderRadius:50,borderColor:'black',backgroundColor:'black'}}>
            <Text style={{fontSize:20,color:'white'}}>Score</Text>
            <Text style={{fontSize:20,color:'white'}}>{this.props.score}</Text>
            </View>
        )
    }
}