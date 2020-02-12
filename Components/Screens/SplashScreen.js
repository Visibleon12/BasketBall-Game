import React,{Component} from 'react'
import {View,Image} from 'react-native'




export default class SplashScreen extends Component{

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image
                    source={{uri:'https://cdn2.vectorstock.com/i/1000x1000/99/56/basketball-team-logo-template-with-ball-stars-and-vector-9959956.jpg'}}
                    style={{width:400,height:950}}                
                />
            </View>
        )
    }
}