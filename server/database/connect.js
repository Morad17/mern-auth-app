const mongoose = require('mongoose')
const MongoMemoryServer = require('mongodb-memory-server')


async function connect(){
    const mongodb = await MongoMemoryServer.create()
    const getUri = mongodb.getUri()

    const db = await mongoose.connect(getUri)
    console.log("Database Connected");
    return db
}

export default connect