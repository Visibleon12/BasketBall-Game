import React,{Component} from 'react'
import { View,Animated ,PanResponder,Text, Dimensions} from 'react-native'
import {connect} from 'react-redux'


 class BallComponent extends React.PureComponent{
    constructor(props) {
        super(props);
        this.translateX=new Animated.Value(0)
        
        this._gestureOffset = { x: 0 ,y:0};
        this._panResponder = PanResponder.create({
           
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      
            onPanResponderGrant: (evt, gestureState) => {
              
            },
            onPanResponderMove: (evt, gestureState) => {
                if(this.props.PanResponderOff===true){

                }
                else{
                this.translateX.setValue(
                     this._gestureOffset.x + gestureState.dx,
                   
                  );
                  this.props.cBackPanGesture(this.translateX)}
            },
            
            onPanResponderRelease: (evt, gestureState) => {
                if(this.props.PanResponderOff===true){
                    console.log(gestureState)
                    this.props.cBackSwipe(this._gestureOffset.x,this._gestureOffset.y,gestureState.dx,gestureState.dy)
                }
                else{
                this._gestureOffset.x += gestureState.dx;
                
                }
                
            },
            
          });
      }

     
    render(){
        return(
           
            <Animated.View ref={component => this.refView = component} style={{...this.props.style,flex:1,height:this.props.ballradius*2,width:this.props.ballradius*2,borderRadius:this.props.ballradius,alignSelf:'center',shadowOffset: {height: 30, width: 30},
            shadowOpacity: 0.5,transform:[{translateX:this.props.translateX},{ scale: this.props.scale1 }, { translateY: this.props.translatey }]
            ,alignItems:'center',justifyContent:'center'}} {...this._panResponder.panHandlers}  >
            <Text style={{fontSize:10,color:'blue',fontStyle:'italic',fontWeight:'bold'}}>
                NBA
            </Text>
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
export default connect(mapStateToProps)(BallComponent)