import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/drawerNavigation/Profile';
import Logout from '../screens/drawerNavigation/Logout';
import Feed from '../screens/bottomMaterial/Feed';
import Page1 from '../screens/bottomMaterial/Page1';
import Settings from '../screens/bottomMaterial/Settings';



const Stack = createNativeStackNavigator();
const TabMaterial = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export function Draaw() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
};

export function TabNavigations() {
    return (
        <TabMaterial.Navigator>
            <TabMaterial.Screen
                name="Page1"
                component={Page1}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name='home' size={20} color='red' />
                    ),
                }}
            />
            <TabMaterial.Screen
                name="DrawerNavigations"
                component={DrawerNavigations}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name='feed' size={20} color='red' />
                    ),
                }}
            />
            <TabMaterial.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: () => (
                        <Feather name='settings' size={20} color='red' />
                    ),
                }}
            />
        </TabMaterial.Navigator>
    )
}

function MainStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TabNavigations" component={TabNavigations} /> */}
            <Stack.Screen
                name="Draaw"
                component={Draaw}
                options={{ headerShown: false }} // Optional: Hide header for drawer screens
            />
            {/* <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Logout" component={Logout} /> */}
        </Stack.Navigator>
    )
}
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
};

export default StackNavigation

const styles = StyleSheet.create({})