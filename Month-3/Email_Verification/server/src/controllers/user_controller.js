import { CustomError } from '../utills/customError.js'
import * as authService from '../services/auth.service.js'
import * as passwordResetService from '../services/passwordReset.service.js'
import * as emailVerificationService from '../services/emailVerification.service.js'

export const signupUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const user = await authService.signup({ name, email, password })

    try {
      await emailVerificationService.requestEmailVerification(email)
    } catch (mailErr) {
      console.error('Failed to send verification email:', mailErr.message)
    }

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      statusCode: 201,
      data: user,
    })
  } catch (err) {
    next(err)
  }
}

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const { user, accessToken, refreshToken } = await authService.login(email, password)

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      statusCode: 200,
      data: { user, accessToken },
    })
  } catch (err) {
    next(err)
  }
}

export const refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
      throw new CustomError('Refresh token not found', 401)
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await authService.refreshAccessToken(refreshToken)

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(200).json({
      success: true,
      message: 'Token refreshed successfully',
      statusCode: 200,
      data: { accessToken },
    })
  } catch (err) {
    next(err)
  }
}

export const logoutUser = async (req, res, next) => {
  try {
    const { email } = req.user
    await authService.logout(email)

    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    })

    res.status(200).json({
      success: true,
      message: 'Logged out successfully',
      statusCode: 200,
    })
  } catch (err) {
    next(err)
  }
}

export const currentUser = (req, res) => {
  res.status(200).json({
    success: true,
    statusCode: 200,
    data: { user: req.user },
  })
}

export const getUsers = async (req, res, next) => {
  try {
    const users = await authService.getUsers()
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: users,
    })
  } catch (err) {
    next(err)
  }
}

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body
    await passwordResetService.requestPasswordReset(email)

    res.status(200).json({
      success: true,
      message: 'If that email is registered, a reset link has been sent.',
      statusCode: 200,
    })
  } catch (err) {
    next(err)
  }
}

export const resetPasswordHandler = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body
    await passwordResetService.resetPassword(token, newPassword)

    res.status(200).json({
      success: true,
      message: 'Password has been reset successfully.',
      statusCode: 200,
    })
  } catch (err) {
    next(err)
  }
}

export const verifyEmailHandler = async (req, res, next) => {
  try {
    const { token } = req.query

    if (!token) {
      throw new CustomError('Verification token is required', 400)
    }

    await emailVerificationService.verifyEmail(token)

    res.status(200).json({
      success: true,
      message: 'Email verified successfully.',
      statusCode: 200,
    })
  } catch (err) {
    next(err)
  }
}

export const resendVerificationEmail = async (req, res, next) => {
  try {
    const { email } = req.body
    await emailVerificationService.requestEmailVerification(email)

    res.status(200).json({
      success: true,
      message: 'A new verification email has been sent.',
      statusCode: 200,
    })
  } catch (err) {
    next(err)
  }
}
