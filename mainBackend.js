const express = require('express')
const server = express()
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


const Country = require('./models/country')

mongoose.connect('mongodb://localhost:27017/Länder', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connection open")
    })
    .catch(err => {
        console.log("Mongo connection error")
        console.log(err)
    });
//Mongodb auf default server integriert mit Datenbank "Länder"


server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/static'));


server.get('/', (req, res) => {
    res.sendFile('./Karte.html', { root: path.join(__dirname, '/') })
})

server.get('/countries', async (req, res) => {
    const countries = await Country.find({})
    res.render('Index', { countries })
})

server.get('/country/:name', async (req, res) => {
    const country = await Country.findOne({ name: req.params.name })
    if (country === null) {
        return
    }
    res.render('Land', { country })
})


server.listen(3000, () => {
    console.log("Listening on Port 3000")
})