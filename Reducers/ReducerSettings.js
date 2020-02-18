const initialState={
    ballColor:'orange',
    ballspeed:2,
    ballradius:25,
    basketradius:27
}



export default function ReducerSettings(state=initialState,action){
    switch(action.type){
        case 'ResetToDefault':return(
            {
                ...initialState
            }
        )
        case 'Save Pressed':return(
            {   
                ...action.value
            }
        )
        default:return state
    }
}