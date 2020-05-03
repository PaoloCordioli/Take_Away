import { AsyncStorage } from 'react-native';

const storage = AsyncStorage

export async function setItem(key, value) {
    storage.setItem(key, value)
}

export async function getItem(key) {
    return storage.getItem(key)
}

export async function removeItem(key) {
    storage.removeItem(key)
}

export async function clear() {
    storage.clear()
}