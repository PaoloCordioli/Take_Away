import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Text, Button } from '@ui-kitten/components';

function PropertyRestaurant(props) {

    const footer = () => (
        <View style={styles.footerContainer}>
            <Button style={styles.footerControl} size='small' status='danger'
                onPress={() => console.log('add')}> Aggiungi </Button>
            <Button style={styles.footerControl} size='small' status='success'
                onPress={() => console.log('remove')}> Rimuovi </Button>
        </View>
    );

    const createCardTime = (e) => (
        <Card key={Math.random()} style={styles.card} footer={footer}>
            <Text>
                <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{e.name}: </Text>
                <Text>{e.price}</Text>
            </Text>
            <Text>
                <Text style={{ fontWeight: 'bold' }}>Descrizione: </Text>
                <Text >{e.ingredients}</Text>
            </Text>
        </Card>
    )

    const createList = () => {
        if (props.restaurant === []) {
            return <Text></Text>
        } else {
            return props.restaurant.menu.map(createCardTime)
        }
    }


    return (
        <View>
            {createList()}
        </View>
    );
}

export default PropertyRestaurant


const styles = StyleSheet.create({
    card: {
        marginBottom: 5,
        borderRadius: 20,
        borderColor: '#000000',
        borderWidth: 1,
        marginRight : 10,
        marginLeft: 10
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerControl: {
        marginHorizontal: 5,
        marginBottom: 5
    },
});