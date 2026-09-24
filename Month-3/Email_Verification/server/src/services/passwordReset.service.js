import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { CustomError } from '../utills/customError.js'
import * as userModel from '../models/user.js'
import * as passwordResetRepository from '../repositories/passwordReset.repository.js'
import * as mailService from './mail.service.js'

const TOKEN_EXPIRY_MS = 15 * 60 * 1000 // 15 minutes

export const requestPasswordReset = async (email) => {
  const user = await userModel.getUserByEmail(email)

  // Always return silently if email doesn't exist — prevents email enumeration
  if (!user) return

  const tokens = await passwordResetRepository.getResetTokens()
  const filtered = tokens.filter((t) => t.email !== email)

  const resetToken = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MS).toISOString()

  filtered.push({ email, token: resetToken, expiresAt })
  await passwordResetRepository.saveResetTokens(filtered)

  await mailService.sendPasswordResetEmail(email, resetToken)
}

export const resetPassword = async (token, newPassword) => {
  const tokens = await passwordResetRepository.getResetTokens()
  const record = tokens.find((t) => t.token === token)

  if (!record) {
    throw new CustomError('Invalid or expired reset token', 400)
  }

  if (new Date(record.expiresAt) < new Date()) {
    await passwordResetRepository.saveResetTokens(tokens.filter((t) => t.token !== token))
    throw new CustomError('Reset token has expired', 400)
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10)
  await userModel.updatePassword(record.email, hashedPassword)

  await passwordResetRepository.saveResetTokens(tokens.filter((t) => t.token !== token))
}
