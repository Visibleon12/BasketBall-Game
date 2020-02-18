import React ,{Component,useEffect} from 'react'
import { View ,StyleSheet,Text,Image,BackHandler} from 'react-native'
import ButtonComponent from '../ButtonComponent'

import {connect } from 'react-redux'
import { showMessage } from 'react-native-flash-message'

 class HomeScreen extends React.PureComponent{
    constructor(props){
        super(props)
        this.handleBackPress = this.handleBackPress.bind(this);
         this.count=0
        
    }
    
    onPressPlay=()=>{
        this.props.navigation.push('PlayArea')}
    onPressSettings=()=>{
        this.props.navigation.navigate('Settings')}
    onPressScorecard=()=>{
        this.props.navigation.push('Scoreboard')}
        componentDidMount() {
            console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
            if(this.props.dataonKill!=''){
                this.props.dispatch({type:'Append data',value:{...this.props.dataonKill}})
                this.props.dispatch({type:'reset'})
             }
             BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
          }
        
          componentWillUnmount() {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
            this.count=0
          }
        
          handleBackPress = () => {
            if(this.count==0){
                this.count=1
                showMessage({message:'Press Again to Exit',type:'default',duration:2000,position:'bottom'})
                setTimeout(()=>{this.count=0},2000)
                return true;
            }
            else{
                this.count=0
                BackHandler.exitApp()
                return true;
            }
            
          }

    render(){
       
        return(
            <View style={styles.container}>
                
                <ButtonComponent title='Settings' onPressAction={this.onPressSettings} style={styles.settingsbutton}/>
                <Text style={styles.text}>BasketBall Game</Text>
                <Image
                source={{uri:'https://media.tenor.com/images/376f97088d766c7b714190fe90ad8799/tenor.gif'}}
                style={styles.gif}
                />
                <View style={{flex:0.4,justifyContent:'space-evenly'}}>
                    <ButtonComponent title='Play' onPressAction={this.onPressPlay} style={styles.playbutton}/>
                    <ButtonComponent title='Scorecard' onPressAction={this.onPressScorecard} style={styles.scorecardbutton}/>  
                </View>
            </View>
        )
    }
        
}
const mapStateToProps=(state)=>{
   console.log(state)
    return({
    dataonKill:state.R3.data1
})}
export default connect(mapStateToProps)(HomeScreen)

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFF0',
        justifyContent:'space-around',
        alignItems:'center'
    },
    playbutton:{
        
        width:150,
        height:50,
        backgroundColor:'#FFD700',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15

    },
    scorecardbutton:{
        
        width:150,
        height:50,
        backgroundColor:'#FFD700',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15

    },
    settingsbutton:{
        
        
        height:50,
        backgroundColor:'#FFD700',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        marginStart:300
    },
    text:{
        
        
        fontSize:35,
        fontWeight:"bold",
        color:'orange'
    },
    gif:{
        
        width:150,
        height:150,
        
        
    }

})