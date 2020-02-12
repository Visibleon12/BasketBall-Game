import React,{Component} from 'react'
import { ActivityIndicator,View, Text,StyleSheet,FlatList } from 'react-native'

import {connect} from 'react-redux'




class FlatListComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            
            fetchingStatus:false,
            itemsToRender:13
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
    getData=()=>{if(this.props.sortKey==='Score'){
        
        if(this.props.sortorderScore==='Des'){
               return this.props.data.sort((a,b) => b.score-a.score) 
        }
        else{
            return this.props.data.sort(function(a,b){return a.score-b.score})
        }
    }
    else{
       
        if(this.props.sortorderDate='Des')
           return this.props.data.sort(function(a,b){return b.date-a.date})
        else{
           return this.props.data.sort(function(a,b){return a.date-b.date})

        }
    }
}

paginated=()=>{
    const data=this.getData()
    
    return data.slice(0,this.state.itemsToRender)
    
    

}
onEndReached=()=>{
    this.setState({fetchingStatus:true})
    setTimeout(()=>{this.setState({fetchingStatus:false,itemsToRender:this.state.itemsToRender+10})},2000)
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
                data={this.paginated()}
                renderItem={({item})=>{
                    
                    return(
                        <View style={styles.innerContainer}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={{fontSize:25,width:50}}>{item.score}</Text>
                            <Text style={styles.text}>{item.date}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item)=>item.date}
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
    data:state.R2.data
})}
export default connect(mapStateToProps)(FlatListComponent)
const styles=StyleSheet.create({
   
    innerContainer:{
        flexDirection:'row',
        width:400,
        height:60,
        marginTop:10,
        
    },
    text:{
        fontSize:25,
        width:190,
       
        
    }
      

})