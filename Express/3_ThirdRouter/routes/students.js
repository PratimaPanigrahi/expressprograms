import express from 'express';
const router = express.Router()

router.get('/student/all',(req,res)=>{
    res.send('All student')
})

//router paramters

router.get('/student/delete/:id',(req,res)=>{
    console.log(req.params)
    res.send(`Student Deleted ${req.params.id}`)
})


router.get('/product/:category/:id',(req,res)=>{
    console.log(req.params)
    const{category,id}=req.params
    //res.send(`Product category ${req.params.category} and product id: ${req.params.id}`)
   
    res.send(`Product category: ${category} and prodcut id: ${id}`)
})











export default router

