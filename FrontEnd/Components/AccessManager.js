import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';
import { getItem } from '../Utils/Storage';
import { Redirect } from 'react-router-native';


function AccessManager() {

    const [login, setLogin] = useState("")

    useEffect(() => {
        getItem('login').then((value) => {
            if (value === "true")
                setLogin(true)
            else setLogin(false)
        })
    }, [])

    if (login === true) {
        return (
            <Redirect to="/Dashboard" />
        )
    }

    if (login === false) {
        return (
            <Redirect to="/Home" />
        )
    }

    if (login === "") {
        return (
            <ApplicationProvider {...eva} theme={eva.light}>
                <View style={styles.view}>
                    <Image source={require('../assets/take_away_logo.png')} style={styles.image} />
                    <Text style={styles.title}> Loading ...</Text>
                </View>
            </ApplicationProvider >
        )
    }
}

export default AccessManager

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 125,
        borderColor: 'black',
        borderWidth: 2
    }
});