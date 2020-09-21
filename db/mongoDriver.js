const mongoose = require('mongoose');
const configString = require('./config.js');

const connection = mongoose.connect(`${configString}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('MongoDB Online!');
});


// Schema:
const userSchema = new mongoose.Schema({
  userEmail: String,
  userPasswordHash: String,
  userPasswordHash: String,
  dataPoint1: Number,
  dataPoint2: mongoose.Types.Decimal128,
});

module.exports = connection;