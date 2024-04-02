import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Page1 = ({ navigation }) => {

    const navigate = () => {
        navigation.navigate('Profile');
    }
    return (
        <View style={styles.view}>
            <Text>Page 1</Text>
            <TouchableOpacity onPress={navigate} style={styles.mainText}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Page1

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