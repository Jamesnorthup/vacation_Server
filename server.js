

// //Back end web application framework for Node.js
// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// const cors = require("cors");
// app.use(cors());

// // Acquire Path Connection to MongoDB
// var VacationDB = require('./connection.js');

// const deleteRoute = require("./controller/deleteRoute.js")
// const getRoute = require("./controller/getRoute.js")
// const postRoute = require("./controller/postRoute.js")
// const updateRoute = require("./controller/updateRoute.js")

// // Connect to MongoDB server.
// VacationDB.connectToServer(function (err, client) {
//     console.log('Connecting to Server.')
//     if (err) console.log(err);

//     app.post("/clientFormInput", (req, res) => {
//         postRoute.Destination(req,res);
//     });

//     // Manage CRUD for Destination information to MongoDB.
//     app.put('/', (req, res) => {
//         updateRoute.Destination(req, res)
//     });

//     app.get('/', (req, res) => {
//         getRoute.Destination(req, res)

//     })

//     app.delete('/', (req, res) => {
//         deleteRoute.Destination(req, res)
//     })

//     // Manage CRUD for Current Weather information to MongoDB.
//     app.put('/CurrentWeather', (req, res) => {
//         updateRoute.Weather(req, res)
//     });

//     app.get('/CurrentWeather', (req, res) => {
//         getRoute.Weather(req, res)

//     })
//     // Manage CRUD for Current Card details to MongoDB.
//     app.put('/CardDetails', (req, res) => {
//         updateRoute.Card(req, res)

//     });

//     app.get('/CardDetails', (req, res) => {
//         getRoute.Card(req, res)
//     })

//     // Listener Port 3000.
//     app.listen(3000, function () {
//         console.log('listening on 3000')
//     })
// })


const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    credentials: true
}));

const controllerDestinations = require('./controller/DestinationsRoute')
 const controllerCard = require('./controller/CardDetailsRoute')
 const controllerWeather = require('./controller/WeatherRoute')

app.use('/',  controllerDestinations )
app.use('/CurrentWeather', controllerWeather )
app.use('/CardDetails', controllerCard )

app.listen(3000, () => {
    console.log('we live')
})



