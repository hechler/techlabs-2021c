const express = require('express')
const app = express()
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


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send("HI")
})

app.get('/countries', async (req, res) => {
    const countries = await Country.find({})
    res.render('Index', { countries })
})

app.get('/:name', async (req, res) => {
    const country = await Country.findOne({ name: req.params.name })
    res.render('Land', { country })
    console.log(country)
    console.log(req.params)

})


app.listen(3000, () => {
    console.log("Listening on Port 3000")
})