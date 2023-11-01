const {MongoClient,ObjectId}=require('mongodb')

const connectionURL="mongodb://localhost:27017"

const databaseName="taskManager01"

const client = new MongoClient(connectionURL);

//create a connection
async function createConnection(){
    await client.connect()
 //   console.log("Mongo db is connected")
    const db=client.db(databaseName)

    const updatedres=await db.collection('users').updateOne(
        {_id: new ObjectId("6540a76d240ae498d2aaeac8")},
        {$set:{name:"Balaji S"}}    
        )

    // console.log('Updated Docs',updatedres)
    
   

    const updatedres1=await db.collection('users').updateOne(
        {_id: new  ObjectId("6541db4073d5298c293346e8")},
        {$set:{year:2024}}    
        )

    // console.log('Updated Docs',updatedres1)


    const updatedres2=await db.collection('users').updateOne(
        {_id: new  ObjectId("6541db4073d5298c293346e9")},
        {$inc:{year:1}}    
        )

    // console.log('Updated Docs',updatedres2)

    const updatedres3=await db.collection('users').updateOne(
        {_id: new  ObjectId("6541db4073d5298c293346ea")},
        {$inc:{year:-1}}    
        )

    // console.log('Updated Docs',updatedres3)

    const updatedres4=await db.collection('users').updateOne(
        {_id: new  ObjectId("6541e633d18a950fd596e5d1")},
        {$set:{name:"Devika"}}    
        )
    //console.log('Updated Docs',updatedres4)

    const updatedres5=await db.collection('users').updateOne(
        {_id: new  ObjectId("6541e63c0495730de82fc580")},
        {$set:{name:"Sahid Khan"}}    
        )
    console.log('Updated Docs',updatedres5)

    const updatedres6=await db.collection('users').updateOne(
        {_id: new  ObjectId("6541d9460a3ebc7e4d1c3b88")},
        {$set:{name:"Rohit Sengupta"}}    
        )
    console.log('Updated Docs',updatedres6)

}
createConnection()