import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { Button } from '@ui-kitten/components'
import { getRestaurantByID } from '../Utils/Api'

//<Button onPress={() => navigation.navigate('Reservations')}>CLick</Button>

function Restaurant({ route, navigation }) {

    const [restaurant, setRestaurant] = useState("")

    useFocusEffect(() => {
        getRestaurantByID(route.params.item._id).then((res) => setRestaurant(res))
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.item.name}</Text>
            <Text>{route.params.item._id}</Text>
            <Button onPress={() => navigation.navigate('Confirm')}>CLick</Button>
        </View>
    );
}

export default Restaurant
