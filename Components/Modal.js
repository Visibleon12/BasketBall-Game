import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,TextInput} from 'react-native';
import ButtonComponent from './ButtonComponent'
import {connect} from 'react-redux'
 class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
    onShow=()=>{
        console.log("here")
        this.props.dispatch({type:'onModalon',value:{name:'<Undefined>',score:this.props.score}})
    }
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
                <ButtonComponent title='Save' onPressAction={()=>{if(this.state.text===''){alert('Please Enter name')}else{this.props.navigation.goBack(),this.props.dispatch({type:'reset'}),this.props.dispatch({type:'Entry',name:this.state.text,score:this.props.score})}}} style={{height:40,width:60,borderRadius:10,backgroundColor:'black',justifyContent:'center',alignItems:'center',alignSelf:'center'}}/>
              
            </View>
          </View>
        </Modal>

       
    
    );
  }
}

export default connect()(ModalExample)