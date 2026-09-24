import z from 'zod'
import * as authSchemas from '../Validations/auth.js'

// Login only checks presence — no format rules on the login form
const loginSchema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
})

export const validateRegister = (req, res, next) => {
  const result = authSchemas.registerSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({
      message: 'Invalid request body',
      errors: result.error.flatten().fieldErrors,
    })
  }

  req.body = result.data
  next()
}

export const validateLogin = (req, res, next) => {
  const result = loginSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({
      message: 'Invalid request body',
      errors: result.error.flatten().fieldErrors,
    })
  }

  req.body = result.data
  next()
}

export const validateForgotPassword = (req, res, next) => {
  const result = authSchemas.forgotPasswordSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({
      message: 'Invalid request body',
      errors: result.error.flatten().fieldErrors,
    })
  }

  req.body = result.data
  next()
}

export const validateResetPassword = (req, res, next) => {
  const result = authSchemas.resetPasswordSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({
      message: 'Invalid request body',
      errors: result.error.flatten().fieldErrors,
    })
  }

  req.body = result.data
  next()
}
