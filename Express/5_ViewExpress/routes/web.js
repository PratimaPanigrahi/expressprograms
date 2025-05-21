import express from 'express'
const router = express.Router()
import { homeController } from '../controllers/homeController.js'
import { aboutController  } from '../controllers/aboutController.js'

router.get('/', homeController) // same above import function names are used in second parameter
router.get('/about', aboutController)

export default router