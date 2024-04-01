// import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StackNavigation from './src/navigation/StackNavigation'




const App = () => {

  return (
    <>
    <StackNavigation/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})