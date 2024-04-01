import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Page1 from '../screens/bottomMaterial/Page1';
import Settings from '../screens/bottomMaterial/Settings';
import Feed from '../screens/bottomMaterial/Feed';



const Stack = createNativeStackNavigator();
const TabMaterial = createMaterialBottomTabNavigator();

export const TabNavigations = () => {
    return (
        <TabMaterial.Navigator>
            <TabMaterial.Screen name="Page1" component={Page1} />
            <TabMaterial.Screen name="Settings" component={Settings} />
            <TabMaterial.Screen name="Feed" component={Feed} />
        </TabMaterial.Navigator>
    )
}


const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='TabNavigations' component={TabNavigations} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})