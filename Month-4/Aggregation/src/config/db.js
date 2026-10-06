import {MongoClient} from 'mongodb'
const uri = 'mongodb://127.0.0.1:27017'

const client=new MongoClient(uri)

await client.connect()

const db = client.db("ecommerce")
export default db