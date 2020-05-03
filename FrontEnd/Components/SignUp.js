import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text, Button, Input } from '@ui-kitten/components';
import { checkRegistration } from '../Utils/Api'

function SignUp() {

    const [username, setUsername] = useState("") 
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [error, setError] = useState("")

    const goToSignIn = () => {
        Actions.push('SignIn')
    }

    const signUp = async () => {
        if (password != rePassword) {
            setError('Password non corrispondenti!!')
            return
        }

        const response = await checkRegistration(username, password)

        if (!response.ok) {
            setError('Username già esistente, cambialo!!')
            return
        }

        Actions.SignIn()
    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <View style={styles.view}>
                <Text style={styles.title}>Registrati</Text>
                <Text style={styles.subtitle}> Hai già un account?
                    <Text onPress={goToSignIn} style={styles.link} numberOfLines={1} > Accedi </Text> {"\n"}
                </Text>
                <Text style={styles.error}>{error}</Text>
                <Input style={styles.form}
                    label='Username'
                    placeholder='Username'
                    value={username}
                    onChangeText={(input) => setUsername(input)}
                    onFocus={() => setError('')}
                />
                <Input style={styles.form}
                    secureTextEntry={true}
                    label='Password'
                    placeholder='Password'
                    value={password}
                    onChangeText={(input) => setPassword(input)}
                    onFocus={() => setError('')}
                />
                <Input style={styles.form}
                    secureTextEntry={true}
                    label='Password'
                    placeholder='Password'
                    value={rePassword}
                    onChangeText={(input) => setRePassword(input)}
                    onFocus={() => setError('')}
                />
                <Button appearance='outline' status='success' style={styles.button} onPress={signUp}>Registrati</Button>
            </View>
        </ApplicationProvider>
    )
}

export default SignUp


const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        margin: 5,
        width: 250,
        borderRadius: 20
    },
    button: {
        marginTop: 15,
        width: 250,
        borderRadius: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: 40
    },
    subtitle: {
        fontSize: 20,
        marginLeft: "3%"
    },
    link: {
        fontSize: 20,
        color: "red",
        textDecorationLine: "underline"
    },
    error: {
        fontSize: 16,
        color: "red",
        marginLeft: -40,
        marginBottom: 10
    }
});