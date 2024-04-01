import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Settings = ({ navigation }) => {

    const navigate = () => {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.view}>
            <Text>Settings</Text>
            <TouchableOpacity onPress={navigate} style={styles.mainText}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeff',
    },
    mainText: {
        backgroundColor: 'salmon',
        color: '#ffffff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        width: 100,
    }
})