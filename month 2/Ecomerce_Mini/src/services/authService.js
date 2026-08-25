import Cookies from 'js-cookie'

export const loginUser = (email, password) => {
  if (email === 'naeem@gmail.com' && password === 'Naeem123') {
    const mockToken = `mock-token${Date.now()}`
    Cookies.set('token', mockToken, {
      expires: 1,
      sameSite: 'strict',
    })
    return {
      success: true,
      token: mockToken,
    }
  }
  return {
    success: false,
    message: 'Invalid email or password',
  }
}

export const logoutUser = () => {
  Cookies.remove('token')
}
export const getToken = () => {
  return Cookies.get('token')
}
