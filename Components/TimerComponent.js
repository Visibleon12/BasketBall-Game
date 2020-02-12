import React,{Component} from 'react'
import { View,Text } from 'react-native'


export default class TimerComponent extends Component{
    constructor(props){
        super(props)
        const cd=''
        this.state={
            timer:20
        }
    }
    render(){
        return(
            <View style={{height:100,width:100,alignItems:'center',justifyContent:'center',backgroundColor:'white',borderRadius:50,borderColor:'black',backgroundColor:'black'}}>
             <Text style={{fontSize:20,color:'white'}}>Timer</Text>
            <Text style={{fontSize:20,color:'white'}}>{this.state.timer}</Text>
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

    componentWillUnmount(){
        clearInterval(cd)
        this.setState({timer:60})
    }
}