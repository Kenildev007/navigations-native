import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Feed = () => {
    return (
        <View style={styles.view}>
            <Text>Feed</Text>
        </View>
    )
}

export default Feed

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeff',
    },
})