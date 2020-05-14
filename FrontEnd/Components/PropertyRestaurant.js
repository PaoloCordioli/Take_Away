import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Layout } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign'


function PropertyRestaurant(props) {

    const [count, setCount] = useState(0)

    const increase = async () => {
        setCount(count + 1)
        props.push(props.item)
    }

    const decrement = () => {
        if (count === 0)
            return
        setCount(count - 1)
        props.remove(props.item.name)
    }

    return (
        <Layout style={styles.container} key={Math.random()}>
            <Layout style={styles.layout}  >
                <Text>
                    <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{props.item.name}: </Text>
                    <Text>{props.item.price}</Text>
                </Text>
                <Text>
                    <Text style={{ fontWeight: 'bold' }}>Descrizione: </Text>
                    <Text >{props.item.ingredients}</Text>
                </Text>
            </Layout>
            <Layout style={styles.layoutButton} >
                <Icon.Button name="pluscircleo" color="#000000" backgroundColor="#ffffff" onPress={increase} />
                <Icon.Button name="minuscircleo" color="#000000" backgroundColor="#ffffff" onPress={decrement} />
            </Layout>
            <Layout style={styles.layoutText}>
                <Text>{count}</Text>
            </Layout>
        </Layout>
    )
}

export default PropertyRestaurant


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        marginHorizontal: 20,
        borderWidth: 1,
    },
    layout: {
        flex: 2,
        marginLeft: 10,
        justifyContent: "center"
    },
    layoutButton: {
        alignItems: "center",
        justifyContent: "center"
    },
    layoutText: {
        marginRight: 25,
        alignItems: "center",
        justifyContent: "center"
    }
});