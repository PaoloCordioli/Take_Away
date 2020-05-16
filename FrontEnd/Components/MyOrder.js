import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { getReservations } from '../Utils/Api';
import SingleOrder from './SingleOrder'
import { ApplicationProvider } from '@ui-kitten/components';


function MyOrder() {

    const [reservations, setReservations] = useState([])

    useFocusEffect(
        useCallback(() => {
            getReservations().then((res) => setReservations(res))

            return () => {
                setReservations([])
            };
        }, [])
    );


    if (reservations) {
        return (
            <View>
                <Text style={styles.title}>Ecco i tuoi ordini effettuati</Text>
                <ScrollView>
                    <SingleOrder reservations={reservations}></SingleOrder>
                </ScrollView>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.title}>Ecco i tuoi ordini effettuati</Text>
        </View>
    );
}

export default MyOrder

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 25
    }
})