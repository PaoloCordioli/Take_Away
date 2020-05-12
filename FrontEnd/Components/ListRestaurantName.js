import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button, ListItem, List } from '@ui-kitten/components'

function NameRestaurant(props) {

    const renderItemAccessory = (item) => {
        return (
            <Button size='small' appearance='outline' style={styles.button}
                onPress={() => props.navigation.navigate('Root', {
                    screen: 'Restaurant',
                    params: { item },
                })}>
                <Text style={{ color: '#000000' }} >Vedi</Text>
            </Button >
        )
    };

    const renderItem = ({ item }) => (
        <ListItem
            style={styles.item}
            key={item._id}
            title={item.name}
            accessoryRight={() => renderItemAccessory(item)}
        />
    );

    return (
        <List data={props.restaurants} renderItem={renderItem} style={styles.list} />
    );
};


export default NameRestaurant

const styles = StyleSheet.create({
    item: {
        marginTop: 25,
        borderRadius: 20,
        borderColor: '#000000',
        borderWidth: 1
    },
    list: {
        backgroundColor: '#f5f5f5'
    },
    button: {
        backgroundColor: '#7cfc00',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        marginRight: 10
    }
});