import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,TextInput} from 'react-native';
import ButtonComponent from './ButtonComponent'
import {connect} from 'react-redux'
 class ModalExample extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isPressed:false
        };
      }
    onShow=()=>{
        if(this.props.shootPressed>0){
        console.log("here")
        this.props.dispatch({type:'Entry',name:'<Undefined>',score:this.props.score})
        this.props.cBackAnimation()}
    }

    onRestart=()=>{this.props.cBackModal()}
  render() {
    return (
      
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
            onShow={this.onShow}
          >
          <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <View style={{backgroundColor:'white',borderStyle:'solid',borderRadius:10,height:200,width:300,justifyContent:'space-evenly'}}>
              <Text style={{fontSize:30,alignSelf:'center'}}>Game Ended</Text>

              {(this.props.shootPressed===0)? 
                (<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-evenly'}}>
                    <ButtonComponent title='GoBack' onPressAction={()=>{this.props.navigation.goBack()}} style={{height:50,backgroundColor:'black',borderRadius:10,justifyContent:'center'}}/>
                    <ButtonComponent title="Restart" onPressAction={this.onRestart} style={{height:50,backgroundColor:'black',borderRadius:10,justifyContent:'center'}}/>  
                </View>)     
                
                
                :
                
                
                
                (<>
                <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-evenly'}}>
                  <Text style={{fontSize:20,justifyContent:'center'}}>Name</Text>
                  <TextInput
                    style={{height: 40,borderWidth:2,width:200}}
                    placeholder="Type here"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    />
              </View>
                <Text style={{fontSize:20,justifyContent:'center'}}>Your Score is:{this.props.score}</Text> 
                <ButtonComponent title='Save' onPressAction={()=>{
                    
                    if(this.state.text===''){alert('Please Enter name')}else{this.props.navigation.goBack(),this.props.dispatch({type:'Append data',value:{name:this.state.text,score:this.props.SaveData.score,date:this.props.SaveData.date,unixTime:this.props.SaveData.unixTime}}),this.setState({isPressed:true}),this.props.dispatch({type:'reset'})}}} style={{height:40,width:60,borderRadius:10,backgroundColor:'black',justifyContent:'center',alignItems:'center',alignSelf:'center'}} disabled={(this.state.isPressed===false)?false:true}/></>)}
              
            </View>
          </View>
        </Modal>

       
    
    );
  }
}
const mapStateToProps=(state)=>{
    return({
        SaveData:state.R3.data1
    })
}

export default connect(mapStateToProps)(ModalExample)