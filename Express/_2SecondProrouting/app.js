import express from 'express'; //ES6 syntax
const app = express()
const port = process.env.PORT ||'3000'

//routes
//home
app.get('/',(req,res)=>{
    res.send(`Get method called
        <h1>Home page</h1>
        `);
})

//string  path
app.get('/about',(req,res)=>{
    res.send(`Get method called
        <h1>About page</h1>
        `);
})

app.get('/contact',(req,res)=>{
    res.send(`Get method called
        <h1>contact page</h1>
        `);
})

//regx pattern
app.get('/t*t/',(req,res)=>{
    res.send(`Get method called
        <h1>REGX1 page</h1>
        `);
})

// app.get('/([^p,q,r]{1})/',(req,res)=>{
//     res.send(`Get method called
//         <h1>REGX1 page</h1>
//         `);
// })

app.get('/india|spain/',(req,res)=>{
    res.send(`Get method called
        <h1>REGX1 page</h1>
        `);
})

//singlecalback
app.get('/singlecallback/',(req,res)=>{
    res.send(`Get method called
        <h1>Single callback Method call</h1>
        `);
})

//multiplecalllback  (middleware)
app.get('/multicallback/',(req,res,next)=>{
    console.log('First callback method called')
    next()
},(req,res,next)=>{
    console.log('second callback method called')
    next()
},(req,res)=>{
    console.log('third callback method called')
    res.send(`Get method called
        <h1>Third calledback method call</h1>
        `)
})

//array of callback
const ch1 = (req,res,next)=>{
    console.log('First callback')
    next()
}

const ch2 = (req,res,next)=>{
    console.log('second callback')
    next()
}
const ch3 = (req,res,next)=>{
    console.log('third callback')
    res.send(`array of callback`)
    next()
}
//app.get('/arraycallback',[ch1,ch2,ch3])


//combination of independent callback and aray callback
app.get('/combinationcallback',[ch1,ch2,ch3],(req,res,next)=>{
    console.log('Fourth callback method called')
    next()
},(req,res)=>{
    console.log('last callback Method')
   // res.send(`combination of independent call back and array callback`)
})

//for any page not found in url page
app.all('*',(req,res)=>{
    res.sendStatus(404).send(`<h1>Requested page not found</h1>`)
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})