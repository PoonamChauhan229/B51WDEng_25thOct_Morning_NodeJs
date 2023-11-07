// https://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=-75.7088,44.1545&units=f
// https://api.openweathermap.org/data/2.5/weather?lat=-71.058291&lon=42.360253&appid=d3e506754c7c6054d2a6c7e680b5a02f&units=imperial


const request =require('request')

const forecast=(lat,lon,callback)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d3e506754c7c6054d2a6c7e680b5a02f&units=imperial`
    request({url:url,json:true},(error,response)=>{
        // console.log(response.body)
        const data=response.body
        // console.log(`It is currently ${data.main.temp} degrees out and there is an ${data.main.feels_like}% chances of rain and Weather description is ${data.weather[0].description}`)
        if(error){
            callback("Unable to connect",undefined)
        }else if(response.body.message){
            callback("Unable to get the Weather Data as per the LAT & LON provided","No data found")
        }else{           
            
            callback(undefined,`It is currently ${data.main.temp} degrees out and there is an ${data.main.feels_like}% chances of rain and Weather description is ${data.weather[0].description}`)
        }
        
    })
}
// forecast()
module.exports=forecast
