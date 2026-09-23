import { Router } from 'express'
import {
  currentUser,
  loginUser,
  signupUser,
  refreshToken,
  logoutUser,
  getUsers,
  forgotPassword,
  resetPasswordHandler,
} from '../controllers/user_controller.js'
import {
  validateLogin,
  validateRegister,
  validateForgotPassword,
  validateResetPassword,
} from '../middlewares/validate.js'
import { authenticate } from '../middlewares/authenticate.js'
import { AdminGuard } from '../middlewares/AdminGaurd.js'

const router = Router()

router.post('/signup', validateRegister, signupUser)
router.post('/login', validateLogin, loginUser)
router.post('/refresh', refreshToken)
router.post('/logout', authenticate, logoutUser)
router.get('/me', authenticate, currentUser)
router.get('/admin', authenticate, AdminGuard, getUsers)
router.post('/forgot-password', validateForgotPassword, forgotPassword)
router.post('/reset-password', validateResetPassword, resetPasswordHandler)

export default router
