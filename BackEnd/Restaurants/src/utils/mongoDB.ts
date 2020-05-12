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
            await MongoDB.instance.init(process.env.MONGO_URI, "Take_away", "Restaurants")
        }
        return MongoDB.instance
    }

    public async get(): Promise<Array<any>> {
        const restaurants = await this.collection.find().toArray()
        return restaurants
    }

    public async get_by_id(id: string): Promise<Array<any>> {
        const _id = new ObjectID(id)
        const restaurant = await this.collection.findOne({ _id: _id })
        return restaurant
    }

    public add(restaurant: any): void {
        this.collection.insert(restaurant)
    }

    public async get_name(): Promise<Array<any>> {
        const restaurants = await this.collection.find().project({ "name": 1 }).toArray()
        return restaurants
    }
}
