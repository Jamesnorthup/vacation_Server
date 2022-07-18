
const mongoose = require('../connection')

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    photo: { type: String, required: true },
    description: String
})

module.exports = mongoose.model('destinations', destinationSchema)