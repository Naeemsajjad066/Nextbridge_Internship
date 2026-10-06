import { MongoClient } from 'mongodb'

const uri = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(uri)

await client.connect()
console.log('Connected to MongoDB')

const db = client.db('ecommerce')
const users = db.collection('users')

const insertResult = await users.insertOne({
  name: 'Ali Hassan',
  email: 'ali.hassan@example.com',
  age: 28,
  city: 'Lahore',
})
console.log('Created:', insertResult.insertedId)

const user = await users.findOne({ email: 'ali.hassan@example.com' })
console.log('Read:', user)

const updateResult = await users.updateOne(
  { email: 'ali.hassan@example.com' },
  { $set: { city: 'Karachi' } }
)
console.log('Updated:', updateResult.modifiedCount, 'document(s)')

const deleteResult = await users.deleteOne({ email: 'ali.hassan@example.com' })
console.log('Deleted:', deleteResult.deletedCount, 'document(s)')

await client.close()
