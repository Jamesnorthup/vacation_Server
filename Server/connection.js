// const MongoClient = require('mongodb').MongoClient
// const url = "mongodb+srv://James:ASDasd@cluster0.liktg.mongodb.net/?retryWrites=true&w=majority";
// //const connection = require('./server.js')
// let _db = null;
// module.exports = {

//   connectToServer: function (callback) {
//     MongoClient.connect(url, { useUnifiedTopology: true,
//       useNewUrlParser: true }, function (err, client) {
//       _db = client.db('VacationDB');
//       return callback(err);
//     });
//   },

//   getDb: function () {
//     return _db;
//   }
// };


const mongoose = require('mongoose')

const uri = "mongodb+srv://James:ASDasd@cluster0.liktg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useUnifiedTopology: true }, () => {
	console.log('MongoDB Connected as Local Database');
})

module.exports = mongoose