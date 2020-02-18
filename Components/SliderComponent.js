import React,{Component} from 'react'
import { Slider, } from 'react-native-elements'
import {View,Text,StyleSheet} from 'react-native'



export default class SliderComponent extends React.PureComponent{
    constructor(props){
        super(props)
       
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Slider
                    step={1}
                    maximumValue={this.props.maxValue}
                    value={this.props.value}
                    
                    onValueChange={(value)=>{if(this.props.value<this.props.minValue){this.props.cback(this.props.minValue)}else{this.props.cback(value)}}}
                    style={{width:200}}
                    maximumTrackTintColor='red'
                    minimumTrackTintColor='violet'
                    thumbTintColor='black'
                    minimumValue={this.props.minValue}
                    
                
                />
                <View style={styles.textCon}>
                        <Text style={styles.colorBlack}>{this.props.minValue} </Text>
                        <Text style={styles.colorViolet}>
                            {this.props.value}
                        </Text>
                        <Text style={styles.colorBlack}>{this.props.maxValue} </Text>
                </View>



            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        width:"50%",
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textCon: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorBlack: {
        color: 'black'
    },
    colorViolet: {
        color: 'violet',
        fontSize:20
    }
});