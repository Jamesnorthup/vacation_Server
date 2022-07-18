
//const VacationDB = require('../connection.js');
const express = require('express')
const WeatherSchema= require('../models/WeatherSchema')
var mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const weatherRouter = express.Router();



weatherRouter.put('/', async(req,res)=> {

    let weather_id = '578df3efb618f5141202a196';
    WeatherSchema.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(weather_id )  }, {
        $set: {
            CityName: req.body.CityName,
            Description: req.body.Description,
            Temp: req.body.Temp,
            windspeed: req.body.windspeed
        }
    },
        { upsert: true }
    ).then(result => { res.json('Success') })
        .catch(error => console.error(error))
})




weatherRouter.get('/', async(req,res)=> {

  

    const weatherData = await WeatherSchema.find({})

    res.status(200).json({ status: 200, data: weatherData })

})
module.exports = weatherRouter