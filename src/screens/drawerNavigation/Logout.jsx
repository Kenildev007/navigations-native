import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logout = () => {
    return (
        <View style={styles.view}>
            <Text>logout</Text>
        </View>
    )
}

export default Logout;

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeff',
    },
})