import React from 'react'
import { ScrollView, View, StyleSheet, Alert } from 'react-native'
import { Text, Button, List, ListItem } from '@ui-kitten/components';
import { createReservation } from '../Utils/Api';


const renderItem = ({ item }) => (
    <ListItem style={styles.listItem} title={item.name} description={item.description} accessoryRight={() => { return <Text>{item.price}</Text> }} />
)

function ConfirmOrder({ route, navigation }) {
    let total_price = 0

    const get_total_price = () => {
        route.params.menu.map((e) => {
            const price = parseFloat(e.price.slice(0, e.price.length - 1))
            total_price += price
        })
        return total_price + 2
    }

    const confirm = async () => {
        const result = await createReservation(route.params.menu, route.params.restaurant, total_price)
        if (result.ok) {
            Alert.alert('Il tuo ordine è stato accettato', "Continua pure a usare l'app", [{ text: 'Torna al menu', onPress: () => navigation.navigate('Home') }])
        }
    }

    return (
        <ScrollView>
            <Text style={styles.text}>Ecco il tuo ordine da {route.params.restaurant}: </Text>
            <List style={styles.list} data={route.params.menu} renderItem={renderItem} />
            <Text style={styles.price}> Costo di spedizione: 2.00 €</Text>
            <Text style={styles.price}>Prezzo toale : {get_total_price()} € </Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} appearance='outline'
                    onPress={confirm}> Conferma ordine </Button>
            </View>
        </ScrollView>
    );
}

export default ConfirmOrder


const styles = StyleSheet.create({
    text: {
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    price: {
        padding: 10,
        fontWeight: 'bold',
        textAlign: "right"
    },
    button: {
        marginTop: 5,
        width: 200,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        marginHorizontal: 10,
        backgroundColor: '#f5f5f5'
    },
    listItem: {
        marginTop: 10,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1
    }
})