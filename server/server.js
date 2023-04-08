import express from'express'
import mongoose from 'mongoose'
import cors from'cors'
import morgan from'morgan'

import connect from './database/connect.js'
import router from './router/route.js'
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')

const port = 8080

app.get('/', (req,res) => {

    res.status(201).json("Get")
})

// api routes //

app.use('/api', router)


// Server starts only when theres a valid connection //
connect().then(() => {
    try {
        app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (err){
        console.log("Can't connect to the Server");
    }
}).catch(err => {
    console.log("Invalid Database Connection");
})

