import React,{Component} from 'react'
import { View,Text } from 'react-native'


export default class TimerComponent extends React.PureComponent{
    constructor(props){
        super(props)
        
        this.state={
            
            timer:60
        }
    }

    
    render(){

        return(
            <View style={{height:100,width:100,alignItems:'center',justifyContent:'center',borderRadius:50,borderColor:'black'}}>
             <Text style={{fontSize:25,color:'black'}}>Timer</Text>
            <Text style={{fontSize:25,color:'black'}}>{this.state.timer}</Text>
            </View>
        )
    }
    componentDidMount(){
        
         cd=setInterval(()=>{if(this.state.timer===0){
            clearInterval(cd)
            this.props.cBackTimer()
        }
        console.log(this.state.timer)
        this.setState({timer:this.state.timer-1})
    },1000)
    }

    
}