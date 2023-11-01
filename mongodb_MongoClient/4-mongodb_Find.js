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
    const findResult=await db.collection('users').find().toArray()
   // console.log(findResult)

    const findResult1=await db.collection('users').find(result).toArray()
    //console.log(findResult1)
   
    const findResult2=await db.collection('users').find({name:"b51wdeng",year:2023}).toArray()
   //console.log(findResult2)

    const findResult3=await db.collection('users').find({name:"Ankit"}).toArray()
   // console.log(findResult3)
    //console.log(findResult3[0]._id)

    const id=findResult3[0]._id


    const findResult4=await db.collection('users').find({_id:id}).toArray()
    // console.log(findResult4)

    //count

    const findResult5=await db.collection('users').find().count()
    console.log("Total Documents is",findResult5)

   

   
}
createConnection()




