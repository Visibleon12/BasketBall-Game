import React ,{Component,useEffect} from 'react'
import { View ,StyleSheet,Text,Image,BackHandler} from 'react-native'
import ButtonComponent from '../ButtonComponent'

import {connect } from 'react-redux'

 class HomeScreen extends Component{
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
           
            if(this.props.dataonKill!=''){
                this.props.dispatch({type:'Entry',name:this.props.dataonKill.name,score:this.props.dataonKill.score})
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
                alert('Press Again to exit')
                return true;
            }
            else{
                
                return true;
            }
            
          }

    render(){
       
        return(
            <View style={styles.container}>
                
                <ButtonComponent title='Settings' onPressAction={this.onPressSettings} style={styles.settingsbutton}/>
                <Text style={styles.text}>BasketBall Game</Text>
                <Image
                source={{uri:'https://www.animatedimages.org/data/media/159/animated-basketball-image-0036.gif'}}
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
        
        width:90,
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