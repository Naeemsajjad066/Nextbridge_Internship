import { Router } from 'express'
import * as userController from '../controllers/user_controller.js'
import { authenticate } from '../middlewares/authenticate.js'
import { AdminGuard } from '../middlewares/AdminGaurd.js'

const router = Router()

router.get('/', authenticate, AdminGuard, userController.getUsers)

export default router
