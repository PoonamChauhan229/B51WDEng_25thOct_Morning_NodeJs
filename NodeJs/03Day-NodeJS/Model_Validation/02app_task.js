const mongoose =require('mongoose')
mongoose.connect("mongodb://localhost:27017/mongoose-task01-b51wd",{
    useNewUrlParser:true
})
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

//creating the intance
const taskData= new Task({
    description:"Test the work 02",
    // completed:true
})

//save it to DB:
// save()
taskData.save()

// taskData.save().then(()=>console.log(userData)).catch(err=>console.log(err))
//Task
