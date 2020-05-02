import React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Button, Text, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

function Home() {

    const goToSignIn = () => {
        Actions.push('SignIn')
    }

    const goToSignUp = () => {
        Actions.push('SignUp')
    }

    return (
        <View style={styles.view}>
            <Container style={styles.container}>
                <Text style={styles.title}>Benvenuto su Take Away!!</Text>
                <Text style={styles.subtitle}>Il modo più veloce per ordinare dai tuoi ristoranti preferiti! {"\n"} {"\n"} </Text>
                <Button danger rounded bordered style={styles.button} onPress={goToSignIn}>
                    <Text>Accedi</Text>
                </Button>
                <Button dark rounded bordered style={styles.button} onPress={goToSignUp}>
                    <Text>Registrati</Text>
                </Button>
            </Container>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        margin: 5
    },
    title: {
        fontWeight: "bold",
        fontSize: 36
    },
    subtitle: {
        fontSize: 20
    }
});