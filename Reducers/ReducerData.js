import { StyleSheet } from "react-native"


 const initialState={
    data:[],
    
}


export default function ReducerData(state=initialState,action){
    switch(action.type){
        case 'Append data':
            state.data.push(action.value)
            
            return ({...state})
        
        

        default:return state
        

    }
} 