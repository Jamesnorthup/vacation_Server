

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

app.listen(process.env.PORT, () => {
    console.log('we live')
})



