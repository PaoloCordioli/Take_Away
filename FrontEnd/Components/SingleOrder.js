import React from 'react'
import { Card, Text, List, ListItem } from '@ui-kitten/components'
import { StyleSheet, View, ScrollView } from 'react-native'

function SingleOrder(props) {

    const renderItem = ({ item }) => (
        <ListItem title={item.name} description={item.description} accessoryRight={() => { return <Text>{item.price}</Text> }} />
    )

    const createMenu = (ordered) => (
        <List data={ordered} renderItem={renderItem} />
    )

    const createCard = (e) => (
        <Card key={Math.random()} style={styles.card}>
            <Text style={{ fontSize: 18 }}>Hai ordinato da: {e.restaurant}</Text>
            {createMenu(e.ordered)}
            <Text>Prezzo totale: {e.total_price} €</Text>
        </Card>
    )

    let reservations = props.reservations.map(createCard)

    return (
        <ScrollView>
            {reservations}
        </ScrollView>
    )
}

export default SingleOrder

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        margin: 10,
        borderRadius: 20,
        borderColor: 'black'
    }
})
