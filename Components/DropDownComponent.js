import React,{Component} from 'react'
import {Picker,Platform,ActionSheetIOS,View,Text} from 'react-native'


import ButtonComponent from './ButtonComponent'
const options=['Red','Green','Orange']
export default class DropDownComponent extends Component{
     
    actionSheet=()=>{
        console.log('in')
        ActionSheetIOS.showActionSheetWithOptions({       options: options,         title: 'Choose Color',              }, (args) => this.props.cback(options[args]))
    }
    
    render(){
        if(Platform.OS=='ios'){
            return(
                   <View style={{flexDirection:'row',borderWidth:1,borderStyle:'solid',borderColor:'black',width:200,justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize:20,marginLeft:5}}>{this.props.value}</Text>
                       <ButtonComponent title='>' onPressAction={this.actionSheet} style={{backgroundColor:'gray',height:35}}/>
                   </View> 
                
                )
            

        }
        else{
        return(
            <Picker
            selectedValue={this.props.value}
            onValueChange={(itemValue, itemIndex) => this.props.cback(itemValue)}
            mode='dropdown'
            style={{height: 50, width: 100}}>
            
            <Picker.Item label="Red" value='red' />
            <Picker.Item label="Green" value='green' />
            <Picker.Item label="Orange" value='orange' />
            
 
          </Picker>
        )}
    }
}