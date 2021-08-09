import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOption: {
      name: 'Blogs',
    },
  }
)

export default createAppContainer(navigator)
