import React from 'react';
import { StyleSheet, View, Image } from 'react-native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text, Button } from '@ui-kitten/components';
import { useHistory } from 'react-router-native';


function Home() {

    const history = useHistory()

    const goToSignIn = async () => {
        history.push('SignIn')
    }

    const goToSignUp = () => {
        history.push('SignUp')
    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <View style={styles.view}>
                <Image source={require('../assets/take_away_logo.png')} style={styles.image} />
                <Text style={styles.title}>Benvenuto su Take Away!!</Text>
                <Text style={styles.subtitle}>Il modo più veloce per ordinare dai </Text>
                <Text style={styles.subtitle}> tuoi ristoranti preferiti! {"\n"} {"\n"} </Text>
                <Button appearance='outline' status='danger' style={styles.button} onPress={goToSignIn}>Accedi</Button>
                <Button appearance='outline' status='success' style={styles.button} onPress={goToSignUp}>Registrati</Button>
            </View>
        </ApplicationProvider>
    )
}

export default Home


const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        margin: 5,
        width: 150,
        borderRadius: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: 30
    },
    subtitle: {
        fontSize: 16
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 30,
        marginTop: -25,
        borderColor: 'black',
        borderWidth: 2
    }
});