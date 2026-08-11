function getToken() {
  const token = localStorage.getItem('token')
  return token
}
function setToken(token) {
  localStorage.setItem('token', token)
}

function removeToken() {
  localStorage.removeItem('token')
}

function isAuthenticated() {
  const token = localStorage.getItem('token')
  if (token) {
    return true
  }
  return false
}

function logout() {
  localStorage.removeItem('token')
}

export { getToken, setToken, removeToken, isAuthenticated, logout }
