const express = require('express');
const cors = require('cors');
const { db } = require('./db/database');
const {readdirSync} = require('fs')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
//midleware
app.use(express.json())
app.use(cors())


//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)))
const server = () => {
    db()
    app.listen(PORT,()=> {
        console.log('listening to port:',PORT);
    })
}

server()