import React, { useState, useCallback } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { Button } from '@ui-kitten/components'
import { getRestaurantByID } from '../Utils/Api'
import PropertyRestaurant from './PropertyRestaurant'


function Restaurant({ route, navigation }) {

    const [restaurant, setRestaurant] = useState({ menu: [] })
    let ordered = []

    useFocusEffect(
        useCallback(() => {
            getRestaurantByID(route.params.item._id).then((res) => setRestaurant(res))

            return () => {
                setRestaurant({ menu: [] })
            };
        }, [route])
    );

    const push = (e) => {
        ordered.push({
            name: e.name,
            price: e.price
        })
    }

    const remove = (name) => {
        const indexToDelete = ordered.map((e) => { return e.name }).lastIndexOf(name);

        ordered = ordered.filter((item, index) => {
            if (index !== indexToDelete) {
                return item;
            }
        });
    }

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container} >
                <Text style={styles.title}>{route.params.item.name}</Text>
                {restaurant.menu.map((e) => {
                    return <PropertyRestaurant item={e} key={Math.random()} push={push} remove={remove} />
                })}
                <Button appearance='outline' style={styles.button} onPress={() => navigation.navigate('Confirm', { menu: ordered })}>Ordina</Button>
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