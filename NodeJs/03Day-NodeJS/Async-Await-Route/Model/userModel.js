const mongoose =require('mongoose')
const validator = require('validator');

//define the model:
const User=mongoose.model('User',{
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    age:{
        type:Number,
        default:16,
        validate(value){
            if(value<15) throw new Error("Age must be greater than 15")
        }
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("Email Address Not Valid")
        }
    },
    password:{
        type:String,
        minLength:8,
        lowercase:true,
        required:true,
        validate(value){
            if(value.includes("password")) throw new Error("Password should not contain password")
        }

    }
})

module.exports=User