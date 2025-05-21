import {join} from 'path' // this is to call webserve without indexing drive names
const aboutController = (req,res)=>{
    //res.send(`<h1>About page</h1>`) just to call cotroller file
    //res.sendFile('D:\\Pratima\\Express\\5_ViewExpress\\Views\\about.html') to call view folder
    console.log(join(process.cwd(),'views','about.html')) //cwd takes three parameter
    res.sendFile(join(process.cwd(),'views','about.html')) //cwd takes three parameter
}
export { aboutController }