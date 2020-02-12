const initialState={
    data1:''
}


export default function ReducerOnKill(state=initialState,action){
    switch(action.type){
        case 'onModalon':
            console.log(action)
            return({
                ...state,
                data1:action.value
            })
        case 'reset':
            return({
                ...state,
                data1:''
            })
1
        default:return state
        

    }
} 