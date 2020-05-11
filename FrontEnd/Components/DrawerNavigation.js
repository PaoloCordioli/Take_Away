import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import { DrawerContent } from './DrawerContent'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Dashboard from './Dashboard'


const About = () => {
    return (
        <View>
            <Text>About</Text>
        </View>
    )
}


const DashboardStack = createStackNavigator()
const AboutStack = createStackNavigator()
const Drawer = createDrawerNavigator()

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


const AboutStackScreen = ({ navigation }) => (
    <AboutStack.Navigator screenOptions={{
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <AboutStack.Screen name="Le mie Prenotazioni" component={About} options={{
            title: 'Le mie Prenotazioni',
            headerLeft: () => (
                <Icon.Button name="menu" size={25} color="#000000" backgroundColor="#ffffff"
                    onPress={() => { navigation.openDrawer() }} />
            )
        }} />
    </AboutStack.Navigator>
)


function Menu() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                    <Drawer.Screen name="Home" component={DashboardStackScreen} />
                    <Drawer.Screen name="Reservations" component={AboutStackScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </ApplicationProvider>
    )
}

export default Menu