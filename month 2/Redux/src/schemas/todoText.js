import * as yup from 'yup'

export const schema = yup.object({
  text: yup
    .string()
    .trim()
    .required('Task is required')
    .min(3, 'Task must be at least 3 characters')
    .max(100, 'Task cannot exceed 100 characters')
    .matches(/^[a-zA-Z]/, 'Task must start with a letter'),
})
