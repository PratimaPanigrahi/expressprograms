import {join} from 'path' 
const homeController = (req,res)=>{
   // res.send(`<h1>Home page</h1>`)
   //res.sendFile('D:\\Pratima\\Express\\5_ViewExpress\\Views\\index.html')

    console.log(join(process.cwd(),'views','index.html')) //cwd takes three parameter
       res.sendFile(join(process.cwd(),'views','index.html')) //cwd takes three parameter
   
}
export { homeController }