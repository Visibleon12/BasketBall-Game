import React,{Component} from 'react'
import { View, Button,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'




export default class ButtonComponent extends Component{

    render(){
        return(
            <TouchableOpacity style={this.props.style} onPress={this.props.onPressAction} disabled={this.props.disabled}>
            <Text style={{fontSize:25,color:'white'}}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }

}