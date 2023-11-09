const express=require('express')
const User=require('../Model/userModel')
const Task=require('../Model/taskModel')
const router=express.Router()
const Joi=require('joi')
const bcrypt=require('bcryptjs')
const auth=require('../middleware/auth')

// Add Task
// router.post('/task',async(req,res)=>{  
//     console.log(req.user)  
//    const taskData=new Task(req.body)
//     try{
//         await taskData.save()
//         res.send(taskData)
//     }catch(e){res.send({message:e})}
// })
// add ||edit-update ||delete
// req.params.id
//user=>login=> task creadted with his IDs
//get task=> only that particluar user task should reflect


router.post('/task',auth,async(req,res)=>{  
    console.log(req.user)  
   const taskData=new Task({
    ...req.body,
    owner:req.user._id
   })
    try{
        await taskData.save()
        res.send(taskData)
    }catch(e){res.send({message:e})}
})

// Task Route for add ||edit-update ||delete
//Movie Route +Model


module.exports=router