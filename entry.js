import App from './App'

import React ,{Component,useEffect} from 'react'
import {createEpicMiddleware} from 'redux-observable'
import { createStore ,applyMiddleware} from 'redux';
import FlashMessage from 'react-native-flash-message'
import { Provider, connect } from 'react-redux';
import rootReducer from './root'
import rootEpic from './observer'
import {persistReducer,persistStore} from 'redux-persist'
import SplashScreen from 'react-native-splash-screen'
import { PersistGate } from 'redux-persist/lib/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import  AsyncStorage from '@react-native-community/async-storage'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };
   const epicMiddleware = createEpicMiddleware()
   const pReducer = persistReducer(persistConfig, rootReducer);
   
   export const store = createStore(pReducer,applyMiddleware(epicMiddleware));
   export const persistor = persistStore(store);



epicMiddleware.run(rootEpic)
const Entry: () => React$Node = () => {
    
        useEffect(()=>{SplashScreen.hide()},[])
        return(
        <Provider store={store}>
            <PersistGate persistor={persistor} >
                <App/>
                <FlashMessage position='center' />
            </PersistGate>
        </Provider>
        )
    
}
export default Entry;