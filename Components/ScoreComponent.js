import React,{Component} from 'react'
import { View,Text } from 'react-native'



export default class ScoreComponent extends React.PureComponent{

    render(){
        return(
            <View style={{height:100,width:100,alignItems:'center',justifyContent:'center',borderRadius:50,borderColor:'black'}}>
            <Text style={{fontSize:25,color:'black'}}>Score</Text>
            <Text style={{fontSize:25,color:'black'}}>{this.props.score}</Text>
            </View>
        )
    }
}