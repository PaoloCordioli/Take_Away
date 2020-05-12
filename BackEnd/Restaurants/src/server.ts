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

server.get('/restaurants', async (req, res) => { // ritorno tutti i ristoranti
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

    const database = await MongoDB.get_instance()
    const restaurants = await database.get()

    res.status(200).send({
        ok: true,
        data: {
            restaurants
        }
    })
})

server.get('/restaurants_name', async (req, res) => { // ritorno tutti i nomi dei ristoranti
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

    const database = await MongoDB.get_instance()
    const restaurants = await database.get_name()

    res.status(200).send({
        ok: true,
        data: {
            restaurants
        }
    })
})

server.get('/restaurants/:id', async (req, res) => { // ritorno un ristorante
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

    let { id } = req.params

    const database = await MongoDB.get_instance()
    const restaurant = await database.get_by_id(id)

    if (restaurant.length === 0) {
        res.status(401).send({
            ok: false,
            data: {
                err: "Restaurant not found"
            }
        })
        return
    }

    res.status(200).send({
        ok: true,
        data: {
            restaurant
        }
    })
})

server.post('/restaurants', async (req, res) => { // crea un ristorante
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

    const { restaurant } = req.body

    const database = await MongoDB.get_instance()
    database.add(restaurant)

    res.status(200).send({
        ok: true,
        data: {}
    })

})

module.exports = server
