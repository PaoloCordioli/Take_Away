import express from "express";
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { MongoDB } from './utils/mongoDB'
import { authentication } from './utils/api'

const server = express();
server.use(cors())
server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))


server.get('/', async (req, res) => {
    res.status(200).send({
        ok: true,
        data: {
            message: "Benvenuto nel mio server"
        }
    })
})

server.get('/reservations/:username', async (req, res) => { // ritorno tutte le prenotazioni di un utente
    const token = req.headers['x-access-token']
    const authenticated = await authentication(token)

    if (!authenticated) {
        res.status(401).send({
            ok: false,
            data: {
                err: "Unauthorized"
            }
        })
        return
    }

    const { username } = req.params

    const database = await MongoDB.get_instance()
    const reservations = await database.get_reservations_by_user(username)

    if (reservations.length === 0) {
        res.status(200).send({
            ok: false,
            data: {
                err: "Any reservations was found"
            }
        })
        return
    }

    res.status(200).send({
        ok: true,
        data: {
            reservations
        }
    })
})

server.post('/reservations', async (req, res) => { // creo una prenotazione
    const token = req.headers['x-access-token']
    const authenticated = await authentication(token)

    if (!authenticated) {
        res.status(401).send({
            ok: false,
            data: {
                err: "Unauthorized"
            }
        })
        return
    }

    const { user, restaurant, position, ordered, total_price, date } = req.body

    const new_reservation = {
        user,
        restaurant,
        position,
        date,
        ordered,
        total_price
    }

    const database = await MongoDB.get_instance()
    database.add(new_reservation)

    res.status(200).send({
        ok: true,
        data: {
            err: ""
        }
    })
})

server.get('/reservations_restaurant/:restaurant', async (req, res) => { // ritorno tutte le prenotazioni di un ristorante
    const token = req.headers['x-access-token']
    const authenticated = await authentication(token)

    if (!authenticated) {
        res.status(401).send({
            ok: false,
            data: {
                err: "Unauthorized"
            }
        })
        return
    }

    let { restaurant } = req.params
    restaurant = restaurant.replace("_", " ")

    const database = await MongoDB.get_instance()
    const reservations = await database.get_reservations_by_restaurant(restaurant)

    if (reservations.length === 0) {
        res.status(200).send({
            ok: false,
            data: {
                err: "Any reservations was found"
            }
        })
        return
    }

    res.status(200).send({
        ok: true,
        data: {
            reservations
        }
    })
})


module.exports = server
