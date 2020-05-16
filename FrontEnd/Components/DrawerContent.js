import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerItem } from '@react-navigation/drawer'
import { Drawer } from '@ui-kitten/components'
import { useHistory } from 'react-router-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconTwo from 'react-native-vector-icons/MaterialIcons'
import { removeItem } from '../Utils/Storage'

export function DrawerContent(props) {

    const history = useHistory()

    const logout = async () => {
        await removeItem('login')
        await removeItem('username')
        await removeItem('password')
        await removeItem('token')

        history.push('/SignIn')
    }

    return (
        <View {...props} style={styles.view}>
            <Drawer>
                <DrawerItem label="Home"
                    icon={({ size }) => <Icon name="home-outline" size={size} />}
                    onPress={() => { props.navigation.navigate('Home') }} />
            </Drawer>
            <Drawer>
                <DrawerItem label="Le mie prenotazioni"
                    icon={({ size }) => <IconTwo name="restaurant" size={size} />}
                    onPress={() => { props.navigation.navigate('Reservations') }} />
            </Drawer>
            <Drawer>
                <DrawerItem
                    icon={({ size }) => <Icon name="exit-to-app" size={size} />}
                    label="Logout"
                    onPress={logout}
                />
            </Drawer>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 30
    }
})
