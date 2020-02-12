import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import DropDownComponent from '../DropDownComponent'
import ButtonComponent from '../ButtonComponent'
import SliderComponent from '../SliderComponent'
import {connect} from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs'
import { timestamp } from 'rxjs/operators'
 class SettingsScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            ballcolor:this.props.ballcolor,
            ballspeed:this.props.ballspeed,
            ballradius:this.props.ballradius,
            basketradius:this.props.basketradius
        }
    }
    cBackBallColor=(itemValue)=>{
        this.setState({ballcolor:itemValue})
    }
    cBackBasketRadius=(value)=>{
        this.setState({basketradius:value})
        
    }                               
    cBackBallRadius=(value)=>{
        this.setState({ballradius:value})
        if(value>this.state.basketradius){
            this.setState({basketradius:value})
        }
    }
    onPressResetToDefault=()=>{
       this.props. dispatch({type:'ResetToDefault'})
       this.props.navigation.goBack()
    }
    onPressSave=()=>{this.props.dispatch({type:'Save Pressed',
                               value:{ballColor:this.state.ballcolor,
                                ballspeed:this.state.ballspeed,
                                ballradius:this.state.ballradius,
                                basketradius:this.state.basketradius} })
                    }


    onPressPlus=()=>{this.setState({ballspeed:this.state.ballspeed+1})}
    onPressMinus=()=>{this.setState({ballspeed:this.state.ballspeed-1})}
    render(){
        
        return(
            <View style={styles.container}>
                <ButtonComponent title='Reset To Default' onPressAction={this.onPressResetToDefault} style={styles.buttonReset}/>
                <View style={styles.View}>
                    <Text style={styles.text}>Ball Color:</Text>
                    <DropDownComponent value={this.state.ballcolor} cback={this.cBackBallColor}/>
                </View>
                <View style={styles.View}>
                    <Text style={styles.text}>Ball Radius:</Text>
                    <SliderComponent value={this.state.ballradius} cback={this.cBackBallRadius} minValue={0}/>
                </View>
                <View style={styles.View}>
                    <Text style={styles.text}>Ball Speed:</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'50%'}}>
                        <ButtonComponent title='-' onPressAction={this.onPressMinus} style={styles.buttonminus} />
                        <Text style={{fontSize:30}}>{this.state.ballspeed}</Text>
                        <ButtonComponent title='+' onPressAction={this.onPressPlus} style={styles.buttonPlus} />
                    </View>
                </View>
                <View style={styles.View}>
                    <Text style={styles.text}>Basket Radius:</Text>
                    <SliderComponent value={this.state.basketradius} cback={this.cBackBasketRadius} minValue={this.state.ballradius}/>
                </View>
                <ButtonComponent title='Save' onPressAction={this.onPressSave} style={styles.buttonSave}/>
            </View>
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
export default connect(mapStateToProps)(SettingsScreen)



const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFF0',
        justifyContent:'space-around',
        alignItems:'center'
    },
    buttonReset:{
        
        height:50,
        backgroundColor:'#FFD700',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        marginStart:220
    },
    buttonSave:{
        width:100,
        height:50,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        
    },
    text:{
        fontSize:30,
        
    },
    buttonminus:{
        width:30,
        height:30,
        borderRadius:10,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonPlus:{
        width:30,
        height:30,
        borderRadius:10,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    View:{
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-around'
    }

})