const { error } = require('console')
const request=require('request')
const url='https://restcountries.com/v2/all'
request({url:url},(error,response)=>{
    const data=JSON.parse(response.body)
    console.log(data[0].name)
})
// JSON.parse
request({url:url,json:true},(error,response)=>{
    console.log(response.body[0].name)
})

//Handle error
request({url:url,json:true},(error,response)=>{
    if(error){
        console.log("Error")
    }else{
        console.log(response.body[0].name)
    }
})

// Task: Open Weather Map

