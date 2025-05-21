import express from 'express'
const router = express.Router()
import { homeController } from '../controllers/homeControllers.js'
import { aboutController } from '../controllers/aboutControllers.js'

router.get('/',homeController)
router.get('/about',aboutController)

export default router