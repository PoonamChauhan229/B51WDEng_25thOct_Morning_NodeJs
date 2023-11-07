const mongoose =require('mongoose')

//define the model:
const Task=mongoose.model('Task',{
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=Task