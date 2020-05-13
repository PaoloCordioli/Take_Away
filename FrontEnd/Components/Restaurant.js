import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'
import { getRestaurantByID } from '../Utils/Api'
import PropertyRestaurant from './PropertyRestaurant'

//<Button onPress={() => navigation.navigate('Reservations')}>CLick</Button>

function Restaurant({ route, navigation }) {

    const [restaurant, setRestaurant] = useState("")

    useFocusEffect(() => {
        getRestaurantByID(route.params.item._id).then((res) => setRestaurant(res))
    }, []);

    if (restaurant === "") {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{route.params.item.name}</Text>
            </View>
        )
    }


    return (
        <>
            <ScrollView contentContainerStyle={styles.container} >
                <Text style={styles.title}>{route.params.item.name}</Text>
                <PropertyRestaurant restaurant={restaurant} />
                <Button appearance='outline' style={styles.button} onPress={() => navigation.navigate('Confirm')}>Ordina</Button>
            </ScrollView>
        </>
    );
}

export default Restaurant


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 25
    },
    button: {
        marginTop : 5,
        width: 200,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
    }
})