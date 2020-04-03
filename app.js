const express = require('express')
const postRouter = require('./postRouter/postRouter')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express()

// Middleware
app.use(bodyParser.json())
app.use('/posts', postRouter)

// Database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database')
});

// Listening on 3000
app.listen('3000', () => {
    console.log('Listening on port 3000')
})