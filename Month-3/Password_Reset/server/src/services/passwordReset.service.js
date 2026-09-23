import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { getUserByEmail, updatePassword } from '../models/user.js'
import {
  getResetTokens,
  saveResetTokens,
} from '../repositories/passwordReset.repository.js'
import { sendPasswordResetEmail } from './mail.service.js'
import { CustomError } from '../utills/customError.js'

const TOKEN_EXPIRY_MS = 15 * 60 * 1000

export const requestPasswordReset = async (email) => {
  const user = await getUserByEmail(email)

  if (!user) return

  const tokens = await getResetTokens()
  const filtered = tokens.filter((t) => t.email !== email)

  const resetToken = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MS).toISOString()

  filtered.push({ email, token: resetToken, expiresAt })
  await saveResetTokens(filtered)

  await sendPasswordResetEmail(email, resetToken)
}

export const resetPassword = async (token, newPassword) => {
  const tokens = await getResetTokens()
  const record = tokens.find((t) => t.token === token)

  if (!record) {
    throw new CustomError('Invalid or expired reset token', 400)
  }

  if (new Date(record.expiresAt) < new Date()) {
    await saveResetTokens(tokens.filter((t) => t.token !== token))
    throw new CustomError('Reset token has expired', 400)
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10)
  await updatePassword(record.email, hashedPassword)

  await saveResetTokens(tokens.filter((t) => t.token !== token))
}
