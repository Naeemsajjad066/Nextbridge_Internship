import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'

function ProtectedRoute() {
  if (isAuthenticated()) {
    return <Outlet />
  }

  return <Navigate to='/login' replace />
}

export default ProtectedRoute
