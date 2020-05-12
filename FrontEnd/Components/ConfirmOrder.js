import React from 'react'
import { View, Text } from 'react-native'
//<Button onPress={() => navigation.navigate('Reservations')}>CLick</Button>

function ConfirmOrder({ route, navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ORDER</Text>
        </View>
    );
}

export default ConfirmOrder