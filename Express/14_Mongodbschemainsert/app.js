import express from 'express'
import connectDB from './db/connectdB.js'
import {createMultiDoc } from './models/student.js'
import './models/student.js'
const app = express()
const port =process.env.PORT||'3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

    connectDB(DATABASE_URL)

    // createDoc()
    // createDoc('sumit',29,8666.5,false,[{value:'this is bad'}])
createMultiDoc()

    app.listen(port, ()=>{
        console.log(`server listening at http://localhost:${port}`)
    })