import React,{Component} from 'react'
import { ActivityIndicator,View, Text,StyleSheet,FlatList } from 'react-native'

import {connect} from 'react-redux'




class FlatListComponent extends React.PureComponent{
    constructor(props){
        super(props)
        this.count=0
        this.state={
            
            fetchingStatus:false,
            
        }
    }
   
    BottomView=()=>
  {
    return (
       
        <View>
                {
                    ( this.state.fetchingStatus )
                    ?
                        <ActivityIndicator size="large" color = "#F44336" style = {{ marginEnd:10 }} />
                    :
                        <></>
                }
 
        </View>           
 
        
    )
  }
   componentDidMount(){
    this.props.dispatch({type:'Sort Data',sortKey:this.props.sortKey1,sortorderName:this.props.sortorderName1,sortorderScore:this.props.sortorderScore1,sortorderDate:this.props.sortorderDate1})
    
    
   }
    
    componentWillUnmount(){
        this.count=0
        this.props.dispatch({type:'Reset DataShown'})
    }
    // paginated=()=>{
    //     if(this.count==0){
    //         this.props.dispatch({type:'Sort Data',sortKey:this.props.sortKey1,sortorderName:this.props.sortorderName1,sortorderScore:this.props.sortorderScore1,sortorderDate:this.props.sortorderDate1})
    //         this.count=1
    //         return this.props.dataShown
    //     }

    //     else{
    //     this.props.dispatch({type:'Sort Data',sortKey:this.props.sortKey,sortorderName:this.props.sortorderName,sortorderScore:this.props.sortorderScore,sortorderDate:this.props.sortorderDate})
        
    //     return this.props.dataShown
    //     }
        

    // }

    onEndReached=()=>{
        if(this.props.dataShown.length<this.props.length){
        this.setState({fetchingStatus:true})
        setTimeout(()=>{this.setState({fetchingStatus:false}),this.props.dispatch({type:'on End Reached'})},5000)
        }
        
    }
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      };
    render(){
        
        return(
            
            <FlatList
                data={this.props.dataShown}
                renderItem={({item})=>{
                    
                    return(
                        <View style={styles.innerContainer}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={{fontSize:25,width:50}}>{item.score}</Text>
                            <Text style={styles.text}>{item.date}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item)=>item.unixTime}
                ItemSeparatorComponent={this.renderSeparator}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                onEndReachedThreshold={0.5}
                onEndReached={()=>{this.onEndReached()}}
                ListFooterComponent={this.BottomView}

                
            />
        )
    }
}

    const mapStateToProps=(state)=>{
        
        return({
        dataShown:state.R2.dataShown,
        sortKey1:state.R2.sortKey,
        sortorderDate1:state.R2.sortorderDate,
        sortorderName1:state.R2.sortorderName,
        sortorderScore1:state.R2.sortorderScore,
        length:state.R2.length
    })}
    export default connect(mapStateToProps)(FlatListComponent)
    const styles=StyleSheet.create({
    
        innerContainer:{
            flexDirection:'row',
            width:400,
            height:70,
            marginTop:10,
            
        },
        text:{
            fontSize:25,
            width:190,
        
            
        }
        

    })