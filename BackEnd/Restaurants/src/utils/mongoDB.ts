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

    public async get_by_name(name: string): Promise<Array<any>> {
        const restaurant = await this.collection.find({ name: name }).toArray()
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
