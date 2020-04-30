import express from "express";
import morgan from 'morgan'
import helmet from 'helmet'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import { MongoDB } from './utils/mongoDB'

const server = express();
server.use(cors())
server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))

const validateToken = (req: any, res: any): boolean => { // funzione che controlla la validità del token
    const token = req.headers['x-access-token']
    if (!token) {
        res.status(401).send({
            ok: false,
            data: {
                err: "unauthorized"
            }
        })
        return false
    }

    jwt.verify(token, process.env.SECRET, (err: any, decoded: any) => {
        if (err) {
            res.status(401).send({
                ok: false,
                data: {
                    err: "token error"
                }
            })
            return false
        }
    })

    return true
}

server.get('/', async (req, res) => {
    res.status(200).send({
        ok: true,
        data: {
            message: "Benvenuto nel mio server"
        }
    })
})

server.get('/authentication', function (req, res) { // verifica la validità del token
    if (!validateToken(req, res))
        return
    res.status(200).send({
        ok: true,
        data: {
            err: ""
        }
    })
});

server.post('/users', async (req, res) => { // crea un utente
    const database = await MongoDB.get_instance()

    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 8)

    // se l'utente esiste già viene mandato un messaggio di errore
    const user = await database.get_user_by_name(username)
    if (user) {
        res.status(403).send({
            ok: false,
            data: {
                err: "user alredy exists"
            }
        })
        return
    }


    // se l'utente non esiste lo crea 
    const newUser = {
        username,
        hashedPassword
    }

    database.add_user(newUser)

    res.status(200).send({
        ok: true,
        data: {}
    })
});

server.post('/users/:username', async (req, res) => { // permette il login e genera un token
    const database = await MongoDB.get_instance()

    const password = req.body.password
    const username = req.params.username

    const user = await database.get_user_by_name(username)

    // controlla che l'utete esiste
    if (user) {
        const authenticated = await bcrypt.compare(password, user.hashedPassword)

        // controlla che le password siano uguali
        if (authenticated) {
            const token = jwt.sign({ username }, process.env.SECRET, { expiresIn: 86400 })
            res.status(200).send({
                ok: true,
                data: {
                    token,
                }
            })
            return
        }
        // se non sono uguali viene mandato un messaggio di errore
        res.status(401).send({
            ok: false,
            data: {
                token: '',
                err: 'error with password'
            }
        })
        return
    }
    // se l'utente non esiste viene mandato un messaggio di errore
    else res.status(401).send({
        ok: false,
        data: {
            token: '',
            err: 'error with username'
        }
    })
})

module.exports = server
