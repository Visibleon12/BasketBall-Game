import { StyleSheet } from "react-native"
import getData from '../utilities/Sorting';

 const initialState={
    data:[],
    dataShown:[],
    length:0,
    count:10,
    sortKey:'Name',
    sortorderScore:'Des',
    sortorderDate:'Des',
    sortorderName:'Des'

}


export default function ReducerData(state=initialState,action){
    switch(action.type){
        case 'Append data':
            state.data.push(action.value)
            
            return ({...state,length:state.length+1})

        case 'Sort Data':
            data1=getData(state.data,action.sortKey,action.sortorderName,action.sortorderScore,action.sortorderDate)
           
            data2=data1.slice(0,10)
            return({
                ...state,
                data:data1,
                dataShown:data2,
                sortKey:action.sortKey,
                sortorderDate:action.sortorderDate,
                sortorderName:action.sortorderName,
                sortorderScore:action.sortorderScore
            })

        case 'on End Reached':
            return({...state,
            count:state.count+10,
            dataShown:state.data.slice(0,state.count+10)
            })
        case 'Reset DataShown':
            return({
                ...state,
                dataShown:[],
                
            })

        default:return state
        

    }
} 