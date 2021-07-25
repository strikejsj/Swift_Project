const express = require('express')
const mongoose = require('mongoose')
var app = express()
var Data = require('./noteSchema')


mongoose.connect('mongodb://localhost/myDB')

mongoose.connection.once('open', () => {
    console.log("Connected to DB!")
}).on("error", (error) => {
    console.log("Failed to connect" + error)
})


// CREATE
// POST
app.post('/create', (req, res) => {
    var note = new Data({
        title: req.get('title'),
        date: req.get('date'),
        note: req.get('note')
    })

    note.save().then(() => {
        if(note.isNew == false) {
            console.log("Saved data!")
            res.send("Saved data!")
        }
        else {
            console.log("Failed to save data")
            res.send("Failed to save data")
        }
    })
})

// UPDATE
// POST
app.post('/update', (req, res) => {
    Data.findByIdAndUpdate({
        _id: req.get('id')
    }, {
        title: req.get('title'),
        note: req.get('note'),
        date: req.get('date')
    }, (error) => {
        console.log("Failed to update " + erorr)
    })

    res.send("Updated!")
})

// DELETE
// POST
app.post('/delete', (req, res) => {
    Data.findByIdAndRemove({
        _id: req.get('id')
    }, (error) => {
        console.log("Failed" + error)
    })
    
    res.send("Deleted!")
})

// FETCH
// GET
app.get('/fetch', (req, res) => {
    Data.find({}).then((DBitems) => {
        res.send(DBitems)
    })
})


// http://(your network ip address)/:8081/create
var server = app.listen(8081, 'your network ip address', () => {
    console.log("Server is running!")
})