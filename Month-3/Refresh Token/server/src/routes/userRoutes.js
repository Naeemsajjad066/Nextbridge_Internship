import { Router } from 'express'
import {
  currentUser,
  loginUser,
  signupUser,
  refreshToken,
  logoutUser,
} from '../controllers/user_controller.js'
import { validateLogin, validateRegister } from '../middlewares/validate.js'
import { authenticate } from '../middlewares/authenticate.js'

const router = Router()

router.post('/signup', validateRegister, signupUser)
router.post('/login', validateLogin, loginUser)
router.post('/refresh', refreshToken)
router.post('/logout', authenticate, logoutUser)
router.get('/me', authenticate, currentUser)

export default router
