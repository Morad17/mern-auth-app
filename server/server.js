const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const

app.use(express.json)
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')

const port = 8000

app.get('/', (req,res) => {

    res.status(201).json("GEt")
})

app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
})