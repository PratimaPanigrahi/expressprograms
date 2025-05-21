import { join } from 'path'
import express from 'express'; //ES6 syntax
const app = express()
const port = process.env.PORT ||'3000'
import web from './routes/web.js'

//static Files
console.log(join(process.cwd(),'public'))
//app.use(express.static(join(process.cwd(), 'public')))

app.use('/photo',express.static(join(process.cwd(), 'public/images')))

const options ={
    dotfiles : "allow"
}

app.use('/',web)

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})