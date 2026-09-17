import {
  login,
  signup,
  refreshAccessToken,
  logout,
} from '../services/userServices.js'
import { CustomError } from '../utills/customError.js'

export const signupUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const user = await signup({ name, email, password })
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
    const { user, accessToken, refreshToken } = await login(email, password)

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
      await refreshAccessToken(refreshToken)

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

    await logout(email)

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
