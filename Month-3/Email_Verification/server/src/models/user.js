import 'dotenv/config'
import fs from 'fs/promises'

const usersFilePath = process.env.USERS_FILE_PATH

export const createUser = async (user) => {
  const data = await fs.readFile(usersFilePath, 'utf-8')
  const users = JSON.parse(data)
  users.push(user)
  await fs.writeFile(usersFilePath, JSON.stringify(users))
}

export const getUserByEmail = async (email) => {
  const data = await fs.readFile(usersFilePath, 'utf-8')
  const users = JSON.parse(data)
  return users.find((user) => user.email === email)
}

export const getUsers = async () => {
  const data = await fs.readFile(usersFilePath, 'utf-8')
  const users = JSON.parse(data)
  const filteredUsers = users.filter((user) => user.role !== 'admin')
  return filteredUsers
}

export const updatePassword = async (email, hashedPassword) => {
  const data = await fs.readFile(usersFilePath, 'utf-8')
  const users = JSON.parse(data)
  const index = users.findIndex((user) => user.email === email)
  if (index === -1) {
    throw new Error('User not found')
  }
  users[index].password = hashedPassword
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2))
}

export const updateVerification = async (email) => {
  const data = await fs.readFile(usersFilePath, 'utf-8')
  const users = JSON.parse(data)
  const index = users.findIndex((user) => user.email === email)
  if (index === -1) {
    throw new Error('User not found')
  }
  users[index].isVerified = true
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2))
}