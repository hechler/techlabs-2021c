const express = require('express')
const server = express()
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/static'));



server.get('/', (req, res) => {
    res.sendFile('./Karte.html', { root: path.join(__dirname, '/') })
})

server.get('/country/:name', async (req, res) => {
    let land = await fetch(`https://restcountries.eu/rest/v2/name/${req.params.name}`)
    let warnung = await fetch(`https://www.reisewarnung.net/api?country=${req.params.name}`)
    let bild = await fetch(`https://api.unsplash.com/search/photos/?query=${req.params.name}&topics=nature&client_id=kxt-JhYM739fMDWvsvN1NQW_sUPo_Oz-7lK_tkVqcjg`)
    let returnObject = { country: await land.json(), warning: await warnung.json(), picture: await bild.json() }
    res.render('Land', { returnObject })
})


server.listen(3000, () => {
    console.log("Listening on Port 3000")
})
