console.log(1)

// express
const express=require('express')
const app=express()

// localhost-8000/home

//localhost-8000/cart

// app.com=> display some content in the browser => root route
// app.com/booklist (FE)      ====>=====>======>====>====>====>====>=====>======>====>====>====>   server==>/booklist(data)

// Create Routes // Set up the Route
// app.get()
    // 2 arguments
    // => route  '/'    //=> about   '/about' 
    // cbk function
    
// Root route
app.get('/',(req,res)=>{
    res.send("Root Route")
})


// another routes
// /help
app.get('/help',(req,res)=>{
    // res.send("Welcome to help Page")
    // res.send({
    //     batch:"B51 ENG",
    //     time:"10:00",
    //     course:"FSD"
    // })
    res.send([
        {
            batch:"B51 ENG",
            time:"10:00",
            course:"FSD"
        },
        {
            batch:"B52 ENG",
            time:"11:00",
            course:"UI/UX"
        },
        {
            batch:"B53 ENG",
            time:"12:00",
            course:"JAT"
        }
    ])
})


// creat a route for About Page

app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1')
})
// Last step => STart the server
// PORT NO: 
const PORT=8000;
// listen to PORT
app.listen(PORT,()=>{
    console.log("Server Started at PORT no:",PORT)
})

