import express from 'express'; //ES6 syntax
import {join} from 'path'
const app = express()
const port = process.env.PORT ||'3000'
import web from './routes/web.js'

app.set('views','./views')


//setup the template engine to use
app.set('view engine','ejs')

//stativ files
app.use(express.static(join(process.cwd(),'public')))

//Load routes
app.use('/',web)


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})