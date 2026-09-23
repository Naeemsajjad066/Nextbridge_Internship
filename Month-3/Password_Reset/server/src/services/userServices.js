import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { getUserByEmail, createUser } from '../models/user.js'
import { CustomError } from '../utills/customError.js'
import {
  saveRefreshToken,
  deleteAllUserTokens,
  findRefreshToken,
  deleteRefreshToken,
} from '../models/refreshToken.js'

import * as userModel from '../models/user.js'

export const signup = async (userData) => {
  const { name, email, password, role = 'user' } = userData

  const existingUser = await getUserByEmail(email)
  if (existingUser) {
    throw new CustomError('User already exists', 400)
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = {
    name,
    email,
    password: hashedPassword,
    role,
  }

  await createUser(newUser)

  return { name, email }
}

export const getUsers = async () => {
  const users = await userModel.getUsers()
  return users
}

export const login = async (email, password) => {
  const user = await getUserByEmail(email)
  if (!user) {
    throw new CustomError('Invalid email or password', 401)
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new CustomError('Invalid email or password', 401)
  }

  const accessToken = jwt.sign(
    { email: user.email, name: user.name, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1m' }
  )

  const refreshToken = jwt.sign(
    { email: user.email, name: user.name, role: user.role },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '1d' }
  )

  await saveRefreshToken(user.email, refreshToken)

  return {
    user: { name: user.name, email: user.email },
    accessToken,
    refreshToken,
  }
}

export const refreshAccessToken = async (refreshToken) => {
  try {
    const storedToken = await findRefreshToken(refreshToken)
    if (!storedToken) {
      throw new CustomError('Invalid refresh token', 401)
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)

    const newAccessToken = jwt.sign(
      { email: decoded.email, name: decoded.name, role: decoded.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    )

    const newRefreshToken = jwt.sign(
      { email: decoded.email, name: decoded.name, role: decoded.role },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '1d' }
    )

    await deleteRefreshToken(refreshToken)
    await saveRefreshToken(decoded.email, newRefreshToken)

    return { accessToken: newAccessToken, refreshToken: newRefreshToken }
  } catch (error) {
    if (
      error.name === 'JsonWebTokenError' ||
      error.name === 'TokenExpiredError'
    ) {
      throw new CustomError('Invalid or expired refresh token', 401)
    }
    throw error
  }
}

export const logout = async (email) => {
  await deleteAllUserTokens(email)
}
