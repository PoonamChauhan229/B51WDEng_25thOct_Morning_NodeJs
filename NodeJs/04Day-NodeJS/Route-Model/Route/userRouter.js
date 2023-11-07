const express=require('express')
const User=require('../Model/userModel')
const router=express.Router()
const Joi=require('joi')
const bcrypt=require('bcryptjs')

router.post('/users',async(req,res)=>{
    const schema = Joi.object({
        name: Joi.string(),
        age:Joi.number(),
        email:Joi.string(),
        password:Joi.string()
    });
    const {error}=schema.validate(req.body)
    if(error) return res.send({message:error.details[0].message})

    // duplication
    let user=await User.findOne({email:req?.body?.email})
    if(user) return res.send({message:"User Already Exists"})

    //hashing of the password:
    const salt =await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)

   user=new User({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        password:hashedPassword
    })
    // console.log(req.body)
    // 
    try{
        await user.save()
        const token=await user.generateAuthToken()
        // console.log(token)
        res.send({user,token})
    }catch(e){res.send({message:e})}

})

router.get('/users',async(req,res)=>{
    // FROM DB
    // Find
    try{
        const getAllUsers=await User.find({})//ModelName.MethodName()
        res.send(getAllUsers)
    }catch(e){res.send({message:e})}
})

// by id
router.get('/users/:id',async(req,res)=>{
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

router.patch('/users/:id',async(req,res)=>{
    // FROM DB
    // Find
    //res.send(req.params.id)
    try{
        const updateUsers=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})//ModelName.MethodName()
       
        res.send(updateUsers)
    }catch(e){res.send({message:e})}
})

//delete the users
router.delete('/users/:id',async(req,res)=>{
    // FROM DB
    // Find
    //res.send(req.params.id)
    try{
        const DeleteUsers=await User.findByIdAndDelete(req.params.id)//ModelName.MethodName()       
        res.send(DeleteUsers)
    }catch(e){res.send({message:e})}
})
module.exports=router