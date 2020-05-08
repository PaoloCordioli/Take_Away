import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { useHistory } from 'react-router-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text, Button, Input } from '@ui-kitten/components';
import { checkLogin } from '../Utils/Api';
import { setItem } from '../Utils/Storage';

function SignIn() {

    const history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const goToSignUp = () => {
        history.push('SignUp')
    }

    const signIn = async () => {
        const result = await checkLogin(username, password)

        if (!result.ok) {
            setError('Password o username errati!!')
            return
        }

        await setItem('login', "true")
        await setItem('token', result.data.token)
        await setItem('username', username)
        await setItem('password', password)

        history.push('/Dashboard')

    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <View style={styles.view}>
                <Text style={styles.title}>Accedi</Text>
                <Text style={styles.subtitle}> Non hai ancora un account?
                    <Text onPress={goToSignUp} style={styles.link} numberOfLines={1} >  Registrati </Text> {"\n"}
                </Text>
                <Text style={styles.error}>{error}</Text>
                <Input style={styles.form}
                    label='Username'
                    value={username}
                    onChangeText={(input) => setUsername(input)}
                    placeholder='Username'
                    onFocus={() => setError('')}
                />
                <Input style={styles.form}
                    label='Password'
                    value={password}
                    onChangeText={(input) => setPassword(input)}
                    placeholder='Password'
                    secureTextEntry={true}
                    onFocus={() => setError('')}
                />
                <Button appearance='outline' status='danger' style={styles.button} onPress={signIn}>Accedi</Button>
            </View>
        </ApplicationProvider>
    )
}

export default SignIn


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
        color: "green",
        textDecorationLine: "underline"
    },
    error: {
        fontSize: 16,
        color: "red",
        marginLeft: -40,
        marginBottom: 10
    }
});