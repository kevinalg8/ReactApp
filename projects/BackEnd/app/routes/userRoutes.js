import { Router } from 'express'
import * as Controllers from '../controllers/userController.js'

const router = Router()

router.get('/users', Controllers.getUsers)

export default router
