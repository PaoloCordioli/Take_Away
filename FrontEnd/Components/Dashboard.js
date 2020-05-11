import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';
import { getNameRestaurants } from '../Utils/Api'
import NameRestaurant from './NameRestaurant'

function Dashboard() {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        getNameRestaurants().then((res) => setRestaurants(res))
    }, [])

    return (
        <ApplicationProvider {...eva} theme={eva.light} >
            <Text style={styles.text}>Seleziona un ristorante</Text>
            <View style={styles.list}>
                <NameRestaurant style={styles.list} restaurants={restaurants} />
            </View>
        </ApplicationProvider>
    )
}

export default Dashboard


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 50
    },
    list: {
        marginLeft: 50,
        marginRight: 50
    }
})
