import { Router } from 'express'
import { getUsers } from '../controllers/user_controller.js'
import { authenticate } from '../middlewares/authenticate.js'
import { AdminGuard } from '../middlewares/AdminGaurd.js'

const router = Router()

router.get('/', authenticate, AdminGuard, getUsers)

export default router
