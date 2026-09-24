import crypto from 'crypto'
import { CustomError } from '../utills/customError.js'
import * as userModel from '../models/user.js'
import * as emailVerificationRepository from '../repositories/emailVerification.repository.js'
import * as mailService from './mail.service.js'

const TOKEN_EXPIRY_MS = 15 * 60 * 1000 // 15 minutes

export const requestEmailVerification = async (email) => {
  const user = await userModel.getUserByEmail(email)
  if (!user) {
    throw new CustomError('User not found', 404)
  }
  if (user.isVerified) {
    throw new CustomError('Email is already verified', 400)
  }

  const tokens = await emailVerificationRepository.getVerificationTokens()
  const filtered = tokens.filter((t) => t.email !== email)

  const verificationToken = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MS).toISOString()

  filtered.push({ email, token: verificationToken, expiresAt })
  await emailVerificationRepository.saveVerificationTokens(filtered)

  await mailService.sendEmailVerificationToken(email, verificationToken)
}

export const verifyEmail = async (token) => {
  const tokens = await emailVerificationRepository.getVerificationTokens()
  const record = tokens.find((t) => t.token === token)

  if (!record) {
    // Token not found — could be React StrictMode double-invoke where the
    // first call already verified and deleted the token. There's no way to
    // recover the email from just the token at this point, so we throw.
    throw new CustomError('Invalid or expired verification token', 400)
  }

  if (new Date(record.expiresAt) < new Date()) {
    await emailVerificationRepository.saveVerificationTokens(
      tokens.filter((t) => t.token !== token)
    )
    throw new CustomError('Verification token has expired', 400)
  }

  await userModel.updateVerification(record.email)
  await emailVerificationRepository.saveVerificationTokens(
    tokens.filter((t) => t.token !== token)
  )
}
