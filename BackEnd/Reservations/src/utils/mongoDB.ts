import { MongoClient, Collection, ObjectID } from 'mongodb'
require('dotenv').config()

export class MongoDB {

    private static instance: MongoDB
    private collection: Collection

    private constructor() {
    }

    private async init(url: string, db_name: string, db_collection: string): Promise<void> {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        this.collection = client.db(db_name).collection(db_collection)
    }

    public static async get_instance(): Promise<MongoDB> {
        if (!MongoDB.instance) {
            MongoDB.instance = new MongoDB()
            await MongoDB.instance.init(process.env.MONGO_URI, "Take_away", "Reservations")
        }
        return MongoDB.instance
    }

    public async get(): Promise<Array<any>> {
        const reservations = await this.collection.find().toArray()
        return reservations
    }

    public async get_reservations_by_user(name: string): Promise<Array<any>> {
        const reservations = await this.collection.find({ user: name }).toArray()
        return reservations
    }

    public add(new_reservation: Object): void {
        this.collection.insertOne(new_reservation)
    }

    public async get_reservations_by_restaurant(name: string): Promise<Array<any>> {
        const reservations = await this.collection.find({ restaurant: name }).toArray()
        return reservations
    }

}
