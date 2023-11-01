const {MongoClient}=require('mongodb')

const connectionURL="mongodb://localhost:27017"

const databaseName="taskManager01"

const client = new MongoClient(connectionURL);

//create a connection
async function createConnection(){
    await client.connect()
 //   console.log("Mongo db is connected")
    const db=client.db(databaseName)

    const result =[
        {
            name:"AnithaShri",
            year:2023
        },
        {
            name:"Ankit",
            year:2023
        },
        {
            name:"Archana",
            year:2023
        },{
            name:"Ashwin",
            year:2023
        }
    ]
    await db.collection('users').insertMany(result)
    console.log('Inserted Docs',result)
}
createConnection()