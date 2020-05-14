import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'
import { getRestaurantByID } from '../Utils/Api'
import PropertyRestaurant from './PropertyRestaurant'


function Restaurant({ route, navigation }) {

    const [restaurant, setRestaurant] = useState({ menu: [] })

    useEffect(() => {
        const data = navigation.addListener('focus', () => {
            getRestaurantByID(route.params.item._id).then((res) => setRestaurant(res))
        });

        return data
    }, [navigation, route]);

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container} >
                <Text style={styles.title}>{route.params.item.name}</Text>
                {restaurant.menu.map((e) => {
                    return <PropertyRestaurant item={e} key={Math.random()} />
                })}
                <Button appearance='outline' style={styles.button} onPress={() => navigation.navigate('Confirm')}>Ordina</Button>
            </ScrollView>
        </View>
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
        marginTop: 5,
        width: 200,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
    }
})