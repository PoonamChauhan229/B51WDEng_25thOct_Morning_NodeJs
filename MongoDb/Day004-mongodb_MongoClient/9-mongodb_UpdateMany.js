const {MongoClient,ObjectId}=require('mongodb')

const connectionURL="mongodb://localhost:27017"

const databaseName="taskManager01"

const client = new MongoClient(connectionURL);

//create a connection
async function createConnection(){
    await client.connect()
 //   console.log("Mongo db is connected")
    const db=client.db(databaseName)

    const updatedres=await db.collection('tasks').updateMany(
        {Completed:true},
        {$set:{Completed:false}}    
        )

    console.log('Updated Docs',updatedres)


    const updatedres1=await db.collection('users').updateMany(
        {year:2023},
        {$set:{year:2026}}    
        )

    console.log('Updated Docs',updatedres1)


}
createConnection()