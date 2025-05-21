import express from 'express';
const router = express.Router()

router.get('/teacher/all',(req,res)=>{
    res.send('All teachers')
})

export default router