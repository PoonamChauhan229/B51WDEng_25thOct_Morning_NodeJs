console.log(1)

// express
const express=require('express')
const app=express()

app.get('/',(req,res)=>{   
    res.send("Weather Route")
})

// Query String
// /weather
app.get('/weather',(req,res)=>{
    console.log("query string",req.query)
    // res.send("Welcome to Routing")
    if(!req.query.address){
        res.send({
            error:"No address? Pass an address"
        })
    }else{
        res.send({
            forecast:"It is snowing",
            location:"Philadelphia",
            address:req.query.address
        })
    }
})

const geocode=require('./utilis/geocode')
const forecast=require('./utilis/forecast')

app.get('/geocodeweather',(req,res)=>{
    if(!req.query.address){
        res.send({
            error:"No address? Pass an address"
        })
    }
    geocode(req.query.address,(error,{lat,lon,place}={})=>{
        if(error){
            res.send({
                error:error
            })
        }
        forecast(lat,lon,(error,forecastData)=>{
            if(error){
                res.send({
                    error:error
                })
            }
            res.send({
                forecast:forecastData,
                address:req.query.address,
                lat,
                lon,
                place

            })
        })

    })
})
// Last step => STart the server
// PORT NO: 
const PORT=8000;
// listen to PORT
app.listen(PORT,()=>{
    console.log("Server Started at PORT no:",PORT)
})

