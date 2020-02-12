/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './Components/Screens/HomeScreen'
import SettingsScreen from './Components/Screens/SettingsScreen'
import PlayAreaScreen from './Components/Screens/PlayArea'
import ScoreboardScreen from './Components/Screens/ScoreboardScreen'
const AppNavigator=createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Settings:{
    screen:SettingsScreen,
    navigationOptions:{
      
      gesturesEnabled: false,
    }
  },
  PlayArea:{
    screen:PlayAreaScreen,
    navigationOptions:{
      headerShown:false,
      gesturesEnabled: false,
    }
  },
  Scoreboard:{
    screen:ScoreboardScreen,
    navigationOptions:{
      
      gesturesEnabled: false,
    }
  }
  
},{
  initialRouteName:'Home',
  
})

const App=createAppContainer(AppNavigator)

export default App;
