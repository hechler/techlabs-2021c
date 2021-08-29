const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    einwohner: {
        type: Number
    },
    währung: {
        type: String
    },
    hauptstadt: {
        type: String
    },
    techies: {
        type: String
    },
    visum: {
        type: Boolean
    },
    warnung: {
        type: Boolean
    }
})


const Country = mongoose.model('Countrie', countrySchema)

module.exports = Country;