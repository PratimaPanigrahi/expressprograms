import express from 'express'
//const mongose = require('mongoose');
import mongoose from 'mongoose'
import connectDB from './db/connectDB.js'
const app = express()
const port =process.env.PORT||'3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/PratimaDb"


//mongoose.connect("mongodb://localhost:27017/InfobytMongoDb").then(()=>{
    // console.log('connected successfullly')
    // })

    connectDB(DATABASE_URL)
    app.listen(port, ()=>{
        console.log(`server listening at http://localhost:${port}`)
    })