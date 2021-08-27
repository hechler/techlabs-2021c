const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})


const Country = mongoose.model('Countrie', countrySchema)

module.exports = Country;