import express from 'express'; //ES6 syntax
import {join} from 'path'
const app = express()
const port = process.env.PORT ||'3000'
import web from './routes/web.js'


//setup the template engine to use
app.set('view engine','ejs')

//Load routes
app.use('/',web)


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})