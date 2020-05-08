import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { useHistory } from 'react-router-native'
import { setItem } from '../Utils/Storage';


function Dashboard() {

    const history = useHistory()

    const logout = async () => {
        await setItem('login', "false")
        await setItem('token', "")
        await setItem('username', "")
        await setItem('password', "")

        history.push('/SignIn')
    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            < Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>DASHBOARD</Text>
                <Button appearance='outline' status='success' onPress={logout}>Esci</Button>
            </Layout >
        </ApplicationProvider>
    )
}

export default Dashboard