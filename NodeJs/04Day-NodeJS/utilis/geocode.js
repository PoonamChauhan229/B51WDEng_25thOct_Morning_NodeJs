// https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w&limit=1

const request =require('request')

const geocode=(address,callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w&limit=1`
    request({url:url,json:true},(error,response)=>{
        // console.log(response.body.features)
        // console.log(response.body.features[0].place_name)
        // console.log(response.body.features[0].center[0])
        // console.log(response.body.features[0].center[1])
        if(error){
            callback("Unable to connect",undefined)
        }else if(response.body.features.length==0){
            callback("Unable to get the GeoCodes as per the address provided","No data found")
        }else{
           
            let lat=response.body.features[0].center[0]
            let lon=response.body.features[0].center[1]
            let place= response.body.features[0].place_name
            callback(undefined,{lat,lon,place})
        }
        
    })
}
module.exports=geocode
