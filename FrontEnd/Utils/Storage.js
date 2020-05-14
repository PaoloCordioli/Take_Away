import { AsyncStorage } from 'react-native';

export async function setItem(key, value) {
    AsyncStorage.setItem(key, value)
}

export async function getItem(key) {
    const item = await AsyncStorage.getItem(key)
    return item
}

export async function removeItem(key) {
    AsyncStorage.removeItem(key)
}

export function clear() {
    AsyncStorage.clear()
}