const {MongoClient,ObjectId}=require('mongodb')

const connectionURL="mongodb://localhost:27017"

const databaseName="taskManager01"

const client = new MongoClient(connectionURL);

//create a connection
async function createConnection(){
    await client.connect()
 //   console.log("Mongo db is connected")
    const db=client.db(databaseName)

    const result ={
        name:"guvi1",
        year:2023
    }
    
   const findResult1=await db.collection('users').findOne(result)
   //console.log(findResult1)

    const findResult2=await db.collection('users').findOne({name:"b51wdeng",year:2023})
   //console.log(findResult2)

   const findResult3=await db.collection('users').findOne({_id: new ObjectId('6541d9460a3ebc7e4d1c3b88')})
   console.log(findResult3)
   
}
createConnection()




