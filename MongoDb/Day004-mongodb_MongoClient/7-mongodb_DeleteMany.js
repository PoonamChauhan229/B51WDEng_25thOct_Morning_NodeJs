const {MongoClient}=require('mongodb')

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
    const delres=await db.collection('users').deleteMany(result)
    console.log('Deleted Docs',delres)
}
createConnection()


