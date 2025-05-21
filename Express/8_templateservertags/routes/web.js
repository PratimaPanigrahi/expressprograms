import express from 'express'
const router = express.Router()
import { homeController } from '../controllers/homeControllers.js'

router.get('/',homeController)


export default router