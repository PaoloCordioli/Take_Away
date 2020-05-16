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

export async function getNameRestaurants() {
    const token = await getItem('token')

    const result = await fetch('https://take-away-restaurants.now.sh/restaurants_name', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
    }).then((res) => res.json())

    return result.data.restaurants
}

export async function getRestaurantByID(id) {
    const token = await getItem('token')

    const result = await fetch(`https://take-away-restaurants.now.sh/restaurants/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
    }).then((res) => res.json())

    return result.data.restaurant
}

export async function createReservation(ordered, restaurant, total_price) {
    const user = await getItem('username')
    const token = await getItem('token')

    const result = await fetch("https://take-away-reservations.now.sh/reservations", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify({
            user: user,
            restaurant: restaurant,
            ordered: ordered,
            total_price: total_price
        })
    }).then((res) => res.json())

    return result
}

export async function getReservations() {
    const user = await getItem('username')
    const token = await getItem('token')

    const result = await fetch(`https://take-away-reservations.now.sh/reservations/${user}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    }).then((res) => res.json())

    return result.data.reservations
}