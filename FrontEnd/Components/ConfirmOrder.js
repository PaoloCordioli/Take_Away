import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Card, Text, Button } from '@ui-kitten/components';
import { createReservation } from '../Utils/Api';


const header = (e) => (
    <View>
        <Text>
            <Text style={{ fontWeight: 'bold' }}>{e.name} : </Text>
            <Text>{e.price}</Text>
        </Text>
    </View>
)

const createCard = (e) => (
    <Card style={styles.card} header={() => header(e)} key={Math.random()}>
        <Text>
            {e.description}
        </Text>
    </Card>
)


function ConfirmOrder({ route, navigation }) {
    let total_price = 0

    const get_total_price = () => {
        route.params.menu.map((e) => {
            const price = parseFloat(e.price.slice(0, e.price.length - 1))
            total_price += price
        })
        return total_price
    }

    const confirm = async () => {
        const result = await createReservation(route.params.menu, route.params.restaurant, total_price)
        if (result.ok)
            navigation.navigate('Reservations')
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Ecco il tuo ordine da {route.params.restaurant}: </Text>
            {route.params.menu.map((e) => { return createCard(e) })}
            <Text>Prezzo toale : {get_total_price()} € </Text>
            <Button style={styles.button} appearance='outline'
                onPress={confirm}> Conferma ordine </Button>
        </ScrollView>
    );
}

export default ConfirmOrder


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    card: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 25,
        margin: 5
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