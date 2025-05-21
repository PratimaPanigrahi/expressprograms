import express from 'express'; //ES6 syntax
const app = express()
const port = process.env.PORT ||'3000'
import web from './routes/web.js'

app.use('/',web)

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})