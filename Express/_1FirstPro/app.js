const express = require('express') //ES-5

const app = express()
const port = process.env.PORT || '3000'

app.get('/',function(req,res){
    res.send(`
        <h1>Hello Express</h1>
        <p>Welcome to  Express Js Tutorial </p>
        <a href='/'>Home</a>
        <a href='/About'>ABout</a>
        <a href='/Contact'>Contact</a>
        `)
})
app.get('/About',function(req,res){
    res.send(`
            <h1>About Page</h1>
        <a href='/'>Home</a>
        <a href='/About'>ABout</a>
        <a href='/Contact'>Contact</a>
        `)
})
app.get('/Contact',function(req,res){
    res.send(`
            <h1>Contact Page</h1>
        <a href='/'>Home</a>
        <a href='/About'>ABout</a>
        <a href='/Contact'>Contact</a>
        `)
})

app.get('*',function(req,res){
    res.status(404).send(`
            <h1>404 Page Not Found</h1>
        <a href='/'>go back to Home</a>
        
        `)
})
app.listen(port,function(req,res){
    console.log(`server is running at http://localhost:${port}`)
})