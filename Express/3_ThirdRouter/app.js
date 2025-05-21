import express from 'express'; 
const app = express()
const port = process.env.PORT ||'3000'

import student from './routes/students.js'
import teacher from './routes/teachers.js'

// app.use('/student',student)
// app.use('/teacher',teacher)

app.use([student,teacher])

app.get('/',(req,res)=>{
    res.send(`Get method called
        <h1>Home page</h1>
        `);
})


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})



