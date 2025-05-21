import express from 'express'; //ES6 syntax
const app = express()
const port = process.env.PORT ||'3000'
import student from './Routes/students.js'

app.use('/student',student)

app.get('/',(req,res)=>{
    res.send(`Get method called
        <h1>Home page</h1>
        `);
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})