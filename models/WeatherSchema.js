

const mongoose = require('../connection')

const weatherSchema = new mongoose.Schema({
  CityName: { type: String, required: true },
  Description:{ type: String, required: true },
  Temp: { type: String, required: true },
  windspeed: { type: String, required: true }
})

module.exports = mongoose.model('CURRENT_WEATHER', weatherSchema)

