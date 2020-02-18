import React,{Component} from 'react'
import {View,StyleSheet, Image, ImageComponent} from 'react-native'
import {connect} from 'react-redux'

 class BasketComponent extends React.PureComponent{

    render(){
        return(
            
           
            <View style={[styles.netContainer,]}>
                
                <Image
                source={{uri:'https://ya-webdesign.com/transparent250_/basketball-net-silhouette-png-1.png'}}
                style={{height:100,width:130,transform:[{scale:0.9},]}}
                />
            </View>
           
        )
    }
}

const mapStateToProps=(state)=>{
    return({
        
        basketradius:state.R1.basketradius,
        
    })
}
export default connect(mapStateToProps)(BasketComponent)

const styles = StyleSheet.create({
    
    netContainer: {
        position: 'absolute',
        
        borderRadius: 3,
        alignSelf:'center',
        marginTop:(Platform.OS==="ios")?295:200,zIndex:1
    
    }
      
  });