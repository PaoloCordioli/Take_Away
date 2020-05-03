import { getItem, setItem } from './Storage'

export async function checkLogin(username, password) {
    const response = await fetch(`https://take-away-auth.now.sh/users/${username}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password })
    }).then((res) => res.json())

    return response
}

export async function checkRegistration(username, password) {
    const result = await fetch("https://take-away-auth.now.sh/users", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password })
    }).then((res) => res.json())

    return result
}