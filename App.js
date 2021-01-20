import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View } from 'react-native'
import Maps from './src/components/Map'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends Component {
  render() {
    return (
      <Maps/>
    )
  }
};