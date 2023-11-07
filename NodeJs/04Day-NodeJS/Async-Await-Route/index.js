// importing
require('./db/connection')
const User=require('./Model/userModel')
const Task=require('./Model/taskModel')

const express=require('express')
const app=express()
const PORT=8000;

app.use(express.json())
// saving the to DB=> posting the data=> POST method

app.post('/users',async(req,res)=>{
    // const userData01= new User({
    //     name:"Andrew02",
    //     age:30,
    //     email:"andrew02@gmail.com",
    //     password:"andrewabc"
    // })

    const userData=new User(req.body)
    console.log(req.body)
    // 
    try{
        await userData.save()
        res.send(userData)
    }catch(e){res.send({message:e})}
})

app.get('/users',async(req,res)=>{
    // FROM DB
    // Find
    try{
        const getAllUsers=await User.find({})//ModelName.MethodName()
        res.send(getAllUsers)
    }catch(e){res.send({message:e})}
})

// by id
app.get('/users/:id',async(req,res)=>{
    // FROM DB
    // Find
    //res.send(req.params.id)
    try{
        const getAllUsers=await User.findById(req.params.id)//ModelName.MethodName()
        if(!getAllUsers){
            res.send({message:"User Not Found"})
        }       
        res.send(getAllUsers)
    }catch(e){res.send({message:e})}
})

//update the users|| PUT/PATCH Method

app.patch('/users/:id',async(req,res)=>{
    // FROM DB
    // Find
    //res.send(req.params.id)
    try{
        const updateUsers=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})//ModelName.MethodName()
       
        res.send(updateUsers)
    }catch(e){res.send({message:e})}
})

//delete the users
app.delete('/users/:id',async(req,res)=>{
    // FROM DB
    // Find
    //res.send(req.params.id)
    try{
        const DeleteUsers=await User.findByIdAndDelete(req.params.id)//ModelName.MethodName()       
        res.send(DeleteUsers)
    }catch(e){res.send({message:e})}
})



// Install Postman


// listen to PORT
app.listen(PORT,()=>{
    console.log("Server Started at PORT no:",PORT)
})

