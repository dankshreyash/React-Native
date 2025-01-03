import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>HomeScreen   HomeScreen</Text>

            <Button onPress={() => navigation.navigate('Profile')} title='go to profile' />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})