import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    const navigate = () => {
        navigation.navigate('TabNavigations'); // Ensure that the route name matches the drawer navigator's name
    }

    return (
        <View style={styles.view}>
            <Text>This is Home</Text>
            <TouchableOpacity onPress={navigate} style={styles.mainText}>
                <Text>Go to Drawer Navigation</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeff',
    },
    mainText:{
        backgroundColor: 'salmon',
        color: '#ffffff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        width: 100,
    }
})