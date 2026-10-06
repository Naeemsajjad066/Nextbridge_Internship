import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.Local_Url;

const client = new MongoClient(uri);


try {
    await client.connect()
    console.log("Connection successfull ")
} catch (error) {
    console.log(error.message)
}

const db =client.db("fb")

export default db