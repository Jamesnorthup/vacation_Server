
//const VacationDB = require('../connection.js');

const express = require('express')
const app = express();
const destinationsRouter = express.Router();
const Destination = require('../models/DestinationSchema')
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
app.use(cors({
    credentials: true
}));
destinationsRouter.put('/', async (req, res) => {
    //  const destinationCollection = VacationDB.getDb().collection('Destinations')
    Destination.findOneAndUpdate(
        //  { _id: ObjectId(req.body._id) }, {

        { _id: ObjectId(req.body.id) }, {
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

destinationsRouter.post('/', async (req, res) => {

    const createDestination = await Destination.create(req.body)
    res.status(201).json({ status: 201, newDestination: createDestination });

})


destinationsRouter.get('/', async (req, res) => {
   
    const destinations = await Destination.find({})

    res.status(200).json({ status: 200, data: destinations })

})


destinationsRouter.delete('/', async (req, res) => {
    
        const deleteDestination = await Destination.findByIdAndDelete(req.params.id)
        res.status(204).json('Destination deleted')
})

module.exports = destinationsRouter
