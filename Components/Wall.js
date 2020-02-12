import React,{Component} from 'react'
import { ImageBackground, View ,Image,StyleSheet,Dimensions} from 'react-native'

import BasketComponent from './BasketComponent'
import TimerComponent from './TimerComponent'
import ScoreComponent from './ScoreComponent'
export default class Floor extends Component{
    render(){
        return(
            <View style={{flex:1 ,flexDirection:'row'}}>
            <View style={{flex:1,backgroundColor:'gray',transform:[{skewY:'-30deg'},{scaleY:1.2},{scaleX:1.2}],zIndex:1}}></View>
            <View style={{backgroundColor:'#ab6235',flex:6,transform:[{scaleY:1.1}]}}>
                
                <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between'}}>
                    <TimerComponent cBackTimer={this.props.cBackTimer}/>
                    <ScoreComponent score={this.props.score}/>
                </View>
                <View style={{alignItems:'center',marginTop:190,position:'absolute',marginEnd:1000}}>
                                    <View style={[styles.hoopContainer, {
                            bottom: this.props.y,
                        }]}
                        >
                            <View style={styles.hoopContained} />
                            

                        </View>

                        
               </View>
            </View>
            <View style={{flex:1,backgroundColor:'gray',transform:[{skewY:'30deg'},{scaleY:1.2},{scaleX:1.2}]}}></View>
            </View>
        )
        
    }
}


const styles = StyleSheet.create({
    hoopContainer: {
      position: 'absolute',
      left:(Dimensions.get('screen').width/2)-140,
      width: 179,
      height: 112,
      alignItems: 'center',
      borderWidth: 5,
      borderColor: 'black',
      borderRadius: 4,
      backgroundColor:'white'
    },
    hoopContained: {
      width: 70,
      height: 54,
      marginTop: 38,
      borderWidth: 5,
      borderColor: 'black',
    },
    netContainer: {
        position: 'absolute',
        backgroundColor: '#ff260f',
        borderRadius: 3,}
      
  });