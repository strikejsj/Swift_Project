const express = require('express')
const mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://localhost/myDB')

mongoose.connection.once("open", () => {
    
    console.log("Connected to DB!")
    
})