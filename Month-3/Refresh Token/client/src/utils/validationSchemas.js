import * as yup from 'yup'

// Rules:
// - Must start with a letter
// - After @ first char must be a letter
// - After . first char must be a letter
const emailRegex =
  /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z][a-zA-Z]{1,}$/

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

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegex, 'Invalid email address'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})
