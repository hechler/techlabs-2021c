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
        type: Number
    },
    visum: {
        type: Boolean
    },
    warnung: {
        type: Boolean
    },
    highlights: {
        type: String
    },
    wikipedia: {
        type: String
    },
    bilder: {
        type: String
    }
})






const Country = mongoose.model('Countrie', countrySchema)

module.exports = Country;