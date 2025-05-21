import express from 'express'; //ES6 syntax
import myLogger from './middlewares/logger-middleware.js'
const app = express()
const port = process.env.PORT ||'3000'
import web from './routes/web.js'
import student from './routes/student.js'

 app.set('view engine','ejs')

 //Application level middleware
 app.use(myLogger)
 app.use('/about',myLogger)

 //Load Routes
  app.use('/',web)
  app.use('/',student)

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})