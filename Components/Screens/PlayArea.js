import React,{Component} from 'react'
import {  View ,Animated,StyleSheet,Dimensions,BackHandler, Platform,Image} from 'react-native'
import BasketComponent from '../BasketComponent'
import {connect} from 'react-redux'
import Wall from '../Wall'
import Floor from '../Floor'
import ButtonComponent from '../ButtonComponent'
import TimerComponent from '../TimerComponent'
import BallComponent from '../BallComponent'
import Modal from '../Modal'
import { floor } from 'react-native-reanimated'
import { ThemeColors } from 'react-navigation'
import { showMessage, hideMessage } from 'react-native-flash-message'

class PlayAreaScreen extends React.PureComponent{
    constructor(props){
        super(props)
        this.a=new Animated.Value(0)
       this.handleBackPress=this.handleBackPress.bind(this)
       this.count=0
       this.b=new Animated.Value(0)
        this.state={
            RestartPressed:false,
            shootPressed:0,
            score:0,
            modalVisible:false,
            zIndex:2,
            translateX:0,
            translatexEnd:0,
            translateXcheck:1,
            scale1:2,
            translatey:0,
            PanResponderOff:false,
            PanResponderOffOnSwipe:false,
            Clapping:false
           
        }
    }

    componentDidMount() {
           
       
         BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
        this.count=0
        hideMessage()
      }
    
      handleBackPress = () => {
        if(this.count==0){
            this.count=1
            showMessage({message:'Press Again to Go Back',type:'default',duration:2000,position:'bottom'})
            
            setTimeout(()=>{this.count=0},2000)
            return true;
        }
        else{
            
            this.props.navigation.goBack()
            return true;
        }
        
      }
    getOffset=()=>{

        if(Math.abs(this.state.translateX)<this.props.basketradius){
            return this.props.basketradius
        }
       const y=this.props.basketradius*2-this.props.ballspeed*10
        return y
    }
    
    //Swipe Logic
    findAngleAndtranslateSet=(x0,y0,x,y)=>{
        console.log(x0,y0,x,y+'cordinates')
        var dy = Math.abs(y) - y0;
        var dx = x - 0;
        if(dy==0)
        {
            dy=1
        }
        translatexEnd=(300*dx/dy)+this.state.translateX
        this.setState({translatexEnd:translatexEnd})



    }

    animation=()=>{
        this.setState({translateXcheck:this.state.translateX,PanResponderOff:true,PanResponderOffOnSwipe:true})
        setTimeout(()=>{this.setState({zIndex:0})},(6000-this.props.ballspeed*1000)/2)
        
            Animated.timing(this.a,{
                toValue:4,
                duration:6000-this.props.ballspeed*1000,
                useNativeDriver:true
        
            }).start(()=>{

                Animated.spring(this.a,{toValue:5,bounciness:25,speed:20,useNativeDriver:true}).start(()=>{this.a.setValue(0)
                    this.setState({zIndex:2,PanResponderOff:false,PanResponderOffOnSwipe:false,Clapping:false})})
                if(Math.abs(this.state.translatexEnd)<=20){
                
                this.setState({score:this.state.score+1,Clapping:true})}
                
            
            
        
    })
   
    
      
    }

    cBackSwipe(x0,y0,x,y){
        this.findAngleAndtranslateSet(x0,y0,x,y)
        
        this.animation()
    }
    
    
    //CBackPanGesture
    cBackPanGesture=(translatex)=>{
        this.setState({translateX:translatex._value})
        console.log(this.state.translateX)
    }
    cBackTimer=()=>{
        this.setState({modalVisible:true,RestartPressed:false})
    }

    cBackAnimation=()=>{this.a.stopAnimation(()=>{
        this.a.setValue(0)

        this.setState({zIndex:2,PanResponderOff:false,score:this.state.score})})
    }
    cBackModal=()=>{
        this.setState({modalVisible:false,RestartPressed:true})
        this.props.navigation.goBack()
        this.props.navigation.navigate('PlayArea')
    }
    onPressShoot=()=>{
        if(this.state.translateX!=this.state.translateXcheck)
        {this.setState({shootPressed:this.state.shootPressed+1,PanResponderOff:true})}
        else
        {showMessage({message:'Please Move your ball to another location to shoot',type:'default',duration:1000})}
    }
    render(){
        const scale1=this.a.interpolate({
            inputRange:[0,2],
            outputRange:[this.state.scale1,0.9],
            extrapolate:'clamp'
        })
        const translateyWin=this.a.interpolate({
            inputRange:[0,2,4,5],
            outputRange:[this.state.translatey,-600,-450,-300],
            extrapolate:'clamp'
        })
        const translateyLose=this.a.interpolate({
            inputRange:[0,2,4,5],
            outputRange:[this.state.translatey,-600,-400,-300],
            extrapolate:'clamp'
        })
        let translatexWin=this.a.interpolate({
            inputRange:[0,2],
            outputRange:[this.state.translateX,this.state.translatexEnd],
            extrapolate:'clamp'
        })
        
        
        let BallStyle={position:'absolute',bottom:100,zIndex:this.state.zIndex,backgroundColor:this.props.ballcolor}
        return(
            <Animated.View style={{flex:1,backgroundColor:'green'}}>
                 <Wall score={this.state.score} cBackTimer={this.cBackTimer} TimerReload={this.state.RestartPressed}/>
                 <Floor/>
                 {(this.state.Clapping===true)?
                 <Image
                 source={{uri:'https://i.pinimg.com/originals/16/7c/3b/167c3bc57c632bd458e87e76df488f53.gif'}}
                 style={{position:'absolute',height:100,width:100,alignSelf:'center',top:Dimensions.get('screen').height/2}}
                 />:<></>}
                <BasketComponent/>
                <BallComponent    style={BallStyle} scale1={scale1} translatey={(Math.abs(this.state.translateX)<=this.getOffset())?translateyWin:translateyLose} cBackPanGesture={this.cBackPanGesture}  translateX={translatexWin} PanResponderOff={this.state.PanResponderOff} PanResponderOffOnSwipe={this.state.PanResponderOffOnSwipe} cBackSwipe={this.cBackSwipe.bind(this)}/>
                <ButtonComponent title='Lock' onPressAction={this.onPressShoot} style={{alignSelf:'center',height:50,width:100,backgroundColor:'black',alignItems:'center',justifyContent:'center'}} disabled={(this.state.PanResponderOff===false)?false:true} />
                <Modal modalVisible={this.state.modalVisible} score={this.state.score} navigation={this.props.navigation} cBackAnimation={this.cBackAnimation} shootPressed={this.state.shootPressed} cBackModal={this.cBackModal}/>
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

