import { MongoClient } from 'mongodb'
import 'dotenv/config'

const uri = process.env.MONGODB_URI

const client = new MongoClient(uri)

try {
  await client.connect()
  console.log('MongoDB connected successfully')
} catch (error) {
  console.error('MongoDB connection failed:', error.message)
  process.exit(1)
}

export const db = client.db("ecommerce")
