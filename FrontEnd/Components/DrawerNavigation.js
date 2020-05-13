import React from 'react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import { DrawerContent } from './DrawerContent'
import Dashboard from './Dashboard'
import Restaurant from './Restaurant'
import ConfirmOrder from './ConfirmOrder'
import MyOrder from './MyOrder'


const DashboardStack = createStackNavigator()

const DashboardStackScreen = ({ navigation }) => (
    <DashboardStack.Navigator screenOptions={{
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DashboardStack.Screen name="Home" component={Dashboard} options={{
            title: 'Home',
            headerLeft: () => (
                <Icon.Button name="menu" size={25} color="#000000" backgroundColor="#ffffff"
                    onPress={() => { navigation.openDrawer() }} />
            )
        }} />
    </DashboardStack.Navigator>
)


const MyOrderStack = createStackNavigator()

const MyOrderStackScreen = ({ navigation }) => (
    <MyOrderStack.Navigator screenOptions={{
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <MyOrderStack.Screen name="Le mie Prenotazioni" component={MyOrder} options={{
            title: 'Le mie Prenotazioni',
            headerLeft: () => (
                <Icon.Button name="menu" size={25} color="#000000" backgroundColor="#ffffff"
                    onPress={() => { navigation.openDrawer() }} />
            )
        }} />
    </MyOrderStack.Navigator>
)


const Stack = createStackNavigator()

function Root({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Restaurant" component={Restaurant} options={{
                title: "Fai il tuo ordine",
                headerLeft: () => (
                    <Icon.Button name="arrow-left" size={25} color="#000000" backgroundColor="#ffffff"
                        onPress={() => { navigation.goBack() }} />
                )
            }} />
            <Stack.Screen name="Confirm" component={ConfirmOrder} options={{
                title: "Conferma il tuo ordine",
                headerLeft: () => (
                    <Icon.Button name="arrow-left" size={25} color="#000000" backgroundColor="#ffffff"
                        onPress={() => { navigation.navigate('Restaurant') }} />
                )
            }} />

        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator()

function Menu() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                    <Drawer.Screen name="Home" component={DashboardStackScreen} />
                    <Drawer.Screen name="Reservations" component={MyOrderStackScreen} />
                    <Drawer.Screen name="Root" component={Root} />
                </Drawer.Navigator>
            </NavigationContainer>
        </ApplicationProvider>
    )
}

export default Menu