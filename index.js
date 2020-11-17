const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')

// bd

mongoose.connect('mongodb://localhost:27017/back', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

// init app

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

const PORT = 3000
http.createServer({}, app).listen(PORT);

console.log(`server running ${PORT}`);