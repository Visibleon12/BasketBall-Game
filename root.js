import {combineReducers} from 'redux'

import ReducerSettings from './Reducers/ReducerSettings'
import  ReducerData from './Reducers/ReducerData'
import ReducerOnKill from './Reducers/ReducerOnKill'

export default  rootReducer=combineReducers({
    R1:ReducerSettings,
    R2:ReducerData,
    R3:ReducerOnKill
})