import * as yup from 'yup'

const checkoutSchema = yup.object({
  fullName: yup
    .string()
    .matches(/^[a-zA-Z\s]+$/, 'Name must contain letters only.')
    .required('Full name is required.'),

  email: yup
    .string()
    .matches(
      /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z]+$/,
      'Enter a valid email (e.g. ali.raza@gmail.com).'
    )
    .required('Email is required.'),

  phone: yup
    .string()
    .matches(
      /^03[0-9]{9}$/,
      'Phone must start with 03 and be 11 digits (e.g. 03059924066).'
    )
    .required('Phone number is required.'),

  address: yup.string().required('Address is required.'),

  city: yup.string().required('City is required.'),

  // Max 5 characters
  zip: yup
    .string()
    .max(5, 'ZIP code must be at most 5 digits.')
    .required('ZIP code is required.'),
})

export default checkoutSchema
