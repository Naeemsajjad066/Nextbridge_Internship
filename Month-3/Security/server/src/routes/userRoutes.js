import { Router } from 'express'
import * as userController from '../controllers/user_controller.js'
import * as validateMiddleware from '../middlewares/validate.js'
import { authenticate } from '../middlewares/authenticate.js'
import { AdminGuard } from '../middlewares/AdminGaurd.js'

const router = Router()

router.post(
  '/signup',
  validateMiddleware.validateRegister,
  userController.signupUser
)
router.post(
  '/login',
  validateMiddleware.validateLogin,
  userController.loginUser
)
router.post('/refresh', userController.refreshToken)
router.post('/logout', authenticate, userController.logoutUser)
router.get('/me', authenticate, userController.currentUser)
router.get('/admin', authenticate, AdminGuard, userController.getUsers)

router.post(
  '/forgot-password',
  validateMiddleware.validateForgotPassword,
  userController.forgotPassword
)
router.post(
  '/reset-password',
  validateMiddleware.validateResetPassword,
  userController.resetPasswordHandler
)

router.get('/verify-email', userController.verifyEmailHandler)
router.post(
  '/resend-verification',
  validateMiddleware.validateForgotPassword,
  userController.resendVerificationEmail
)

export default router
