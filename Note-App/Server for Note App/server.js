const express = require('express')
const mongoose = require('mongoose')
var app = express()
var Data = require('./noteSchema')


mongoose.connect('mongodb://localhost/myDB')

mongoose.connection.once("open", () => {
    console.log("Connected to DB!")
}).on("error", (error) => {
    console.log("Failed to connect" + error)
})