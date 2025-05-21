import express from 'express'
const router = express.Router()
import { allStudent,updateStudent,deleteStudent } from '../controllers/studentscontrollers.js'

router.get('/all',allStudent)
router.get('/update/:id([0-9]{2})',updateStudent)
router.get('/delete/:id([0-9]{2})',deleteStudent)

export default router