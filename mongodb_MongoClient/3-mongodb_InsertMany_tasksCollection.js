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
            description:"Brush Teeth",
            Completed:true
        },
        {
            description:"Clean House",
            Completed:false
        },
        {
            description:"Go to College",
            Completed:true
        },
        {
            description:"Renew Netflix Subscription",
            Completed:false
        },
        {
            description:"Learn NodeJS",
            Completed:true
        },        
        {
            description:"Get the Groceries",
            Completed:true
        },
        {
            description:"Suscribe to Guvi Channel",
            Completed:false
        }
    ]
    await db.collection('tasks').insertMany(result)
    console.log('Inserted Docs',result)
}
createConnection()