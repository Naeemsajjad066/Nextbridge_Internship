import * as yup from 'yup'

// Rules:
// - Must start with a letter
// - After @ first char must be a letter
// - After . first char must be a letter
const emailRegex =
  /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z][a-zA-Z]{1,}$/

const passwordSchema = yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
  .required('Password is required')

export const signupSchema = yup.object({
  name: yup
    .string()
    .min(1, 'Name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Name must only contain letters')
    .required('Name is required'),

  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegex, 'Invalid email address'),

  password: passwordSchema,

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Please confirm your password'),
})

export const loginSchema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
})

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegex, 'Invalid email address'),
})

export const resetPasswordSchema = yup.object({
  newPassword: passwordSchema,

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords do not match')
    .required('Please confirm your password'),
})
