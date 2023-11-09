// importing
const dotenv=require('dotenv')
dotenv.config()
const connection=require('./db/connection')
connection()
const User=require('./Model/userModel')
const Task=require('./Model/taskModel')
const userRouter=require('./Route/userRouter')
const taskRouter=require('./Route/taskRoute')
const express=require('express')


const app=express()
const PORT=process.env.PORT || 8000;

app.use(express.json())
// saving the to DB=> posting the data=> POST method

// Router
app.use(userRouter)
app.use(taskRouter)



// Install Postman


// listen to PORT
app.listen(PORT,()=>{
    console.log("Server Started at PORT no:",PORT)
})

