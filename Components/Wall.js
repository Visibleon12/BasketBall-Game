import React,{Component} from 'react'
import { ImageBackground, View ,Image,StyleSheet,Dimensions,Platform} from 'react-native'

import BasketComponent from './BasketComponent'
import TimerComponent from './TimerComponent'
import ScoreComponent from './ScoreComponent'
export default class Floor extends React.PureComponent{
    render(){
        let transformIos1=[{skewY:'-30deg'},{scaleY:1.2},{scaleX:1.2}]
        let transformAndroid1=[{scaleY:1.25},{scaleX:4.5},{rotateY:'75deg'}]
        let transformIos2=[{skewY:'30deg'},{scaleY:1.2},{scaleX:1.2}]
        let transformAndroid2=[{scaleY:1.25},{scaleX:4.5},{rotateY:'-75deg'}]
        return(
            <View style={{flex:1 ,flexDirection:'row'}}>
            <View style={{flex:(Platform.OS==='ios')?1:1.5,backgroundColor:'gray',transform:(Platform.OS==='ios')?transformIos1:transformAndroid1}}></View>
            <View style={{backgroundColor:'#ab6235',flex:6,transform:[{scaleY:(Platform.OS==='ios')?1.11:1.22}],zIndex:-1}}>
                
                <View style={{marginTop:(Platform.OS==='ios')?30:20,flexDirection:'row',justifyContent:'space-between'}}>
                    <TimerComponent cBackTimer={this.props.cBackTimer} TimerReload={this.props.TimerReload}/>
                    <ScoreComponent score={this.props.score}/>
                </View>
                <View style={{alignItems:'center',marginTop:(Platform.OS==='ios')?190:105,position:'absolute'}}>
                                    <View style={[styles.hoopContainer, {
                            bottom: this.props.y,
                        }]}
                        >
                            <View style={styles.hoopContained} />
                            

                        </View>

                        
               </View>
            </View>
            <View style={{flex:(Platform.OS==='ios')?1:1.5,backgroundColor:'gray',transform:(Platform.OS==='ios')?transformIos2:transformAndroid2}}></View>
            </View>
        )
        
    }
}


const styles = StyleSheet.create({
    hoopContainer: {
      position: 'absolute',
      left:(Platform.OS==='ios')?(Dimensions.get('screen').width/2)-141:(Dimensions.get('screen').width/2)-158,
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
    }
    }
);