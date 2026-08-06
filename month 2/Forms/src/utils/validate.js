const nameRegex = /^[a-zA-Z\s]+$/
const emailRegex = /^[A-Za-z][A-Za-z0-9]*@[A-Za-z]+\.[A-Za-z]+$/

export function validateField(name, value) {
  if (name === 'name') {
    if (value.trim() === '') return 'Name is required'
    if (!nameRegex.test(value)) return 'Name must contain letters only'
  }

  if (name === 'age') {
    if (value.trim() === '') return 'Age is required'
    if (value < 1 || value > 120) return 'Age must be between 1 and 120'
  }

  if (name === 'email') {
    if (value.trim() === '') return 'Email is required'
    if (!emailRegex.test(value)) return 'Enter a valid email address'
  }

  if (name === 'number') {
    if (value.trim() === '') return 'Phone number is required'
    if (!value.startsWith('03')) return 'Phone number must start with 03'
    if (value.length < 11) return 'Must be 11 digits'
  }

  return ''
}
