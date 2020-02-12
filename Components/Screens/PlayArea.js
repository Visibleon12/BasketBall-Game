import React,{Component} from 'react'
import {  View ,Animated,StyleSheet,Dimensions} from 'react-native'

import {connect} from 'react-redux'
import Wall from '../Wall'
import Floor from '../Floor'
import ButtonComponent from '../ButtonComponent'
import TimerComponent from '../TimerComponent'
import BallComponent from '../BallComponent'
import Modal from '../Modal'
import { floor } from 'react-native-reanimated'
import { ThemeColors } from 'react-navigation'
class PlayAreaScreen extends Component{
    constructor(props){
        super(props)
        this.a=new Animated.Value(0)
       
       this.b=new Animated.Value(0)
        this.state={
            score:0,
            modalVisible:false,
            zIndex:2,
            translateX:0,
            translateXcheck:1,
            scale1:2,
            translatey:0,
            PanResponderOff:false
        }
    }
    getOffset=()=>{
       const y=this.props.basketradius*2+this.props.ballspeed*10
        return y
    }
    cBackPanGesture=(translatex)=>{
        this.setState({translateX:translatex._value})
        console.log(this.state.translateX)
    }
    cBackTimer=()=>{
        this.setState({modalVisible:true})
    }
    animation=()=>{
        this.setState({translateXcheck:this.state.translateX,PanResponderOff:true})
       setTimeout(()=>{this.setState({zIndex:0})},(6000-this.props.ballspeed*1000)/2)
       Animated.sequence([
       Animated.timing(this.a,{
        toValue:4,
        duration:6000-this.props.ballspeed*1000,
        useNativeDriver:true
        
    }),
    Animated.spring(this.a,{toValue:5,bounciness:25,speed:20,useNativeDriver:true})
]).start(()=>{
    if(Math.abs(this.state.translateX)<=this.getOffset()){
        
    this.setState({score:this.state.score+1})}
    this.a.setValue(0)
        this.setState({zIndex:2,PanResponderOff:false})
})
   
    
      
    }
    
    render(){
        const scale1=this.a.interpolate({
            inputRange:[0,2],
            outputRange:[this.state.scale1,0.9],
            extrapolate:'clamp'
        })
        const translatey=this.a.interpolate({
            inputRange:[0,2,4,5],
            outputRange:[this.state.translatey,-600,-350,-300],
            extrapolate:'clamp'
        })
        let translatex=this.a.interpolate({
            inputRange:[0,2],
            outputRange:[this.state.translateX,0],
            
        })
        
        let BallStyle={position:'absolute',bottom:100,zIndex:this.state.zIndex,backgroundColor:this.props.ballcolor}
        return(
            <Animated.View style={{flex:1,backgroundColor:'green'}}>
                 <Wall score={this.state.score} cBackTimer={this.cBackTimer}/>
                 <Floor/>
                 <View style={[styles.netContainer, { height:7,width:this.props.basketradius*2}]}/>
                 <BallComponent    style={BallStyle} scale1={scale1} translatey={translatey} cBackPanGesture={this.cBackPanGesture}  translateX={(Math.abs(this.state.translateX)<=this.getOffset())?translatex:this.state.translateX} PanResponderOff={this.state.PanResponderOff}/>
                    
                
                
              
                <ButtonComponent title='Shoot' onPressAction={this.animation} style={{alignSelf:'center',height:50,width:100,backgroundColor:'black',alignItems:'center',justifyContent:'center'}} disabled={(this.state.translateX!=this.state.translateXcheck)?  false: true }/>
                
                <Modal modalVisible={this.state.modalVisible} score={this.state.score} navigation={this.props.navigation}/>
            </Animated.View>
        )
    }
}

const mapStateToProps=(state)=>{
    return({
        ballcolor:state.R1.ballColor,
        ballradius:state.R1.ballradius,
        basketradius:state.R1.basketradius,
        ballspeed:state.R1.ballspeed
    })
}
export default connect(mapStateToProps)(PlayAreaScreen)

const styles = StyleSheet.create({
    
    netContainer: {
        position: 'absolute',
        backgroundColor: '#ff260f',
        borderRadius: 3,
        alignSelf:'center',
        marginTop:295,zIndex:1
    
    }
      
  });