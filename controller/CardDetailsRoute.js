

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json());
var mongoose = require('mongoose');
const cardRouter = express.Router();

const cardSchema = require('../models/CardSchema.js')


cardRouter.put('/', async(req,res)=> {

    let card_id = '578df3efb618f5141202a195';
    cardSchema.findOneAndUpdate(

        { _id: mongoose.Types.ObjectId(card_id) },
        {
            $set: {

                name: req.body.name,
                location: req.body.location,
                photo: req.body.photo,
                description: req.body.description

            }
        },
        { upsert: true }
    ).then(result => { res.json('Success') })
        .catch(error => console.error(error))
})

cardRouter.get('/', async(req,res)=> {
    const cardData = await cardSchema.find({})
    res.status(200).json({ status: 200, data: cardData })
})

module.exports = cardRouter
