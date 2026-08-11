export const login = (data) => {
  if (data.email === 'naeem@gmail.com' && data.password === 'Naeem@123') {
    return 'mock-auth-token'
  }

  throw new Error('Invalid email or password')
}
