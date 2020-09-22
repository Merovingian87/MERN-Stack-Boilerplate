const mongoose = require('mongoose');
const configString = require('./config.js');

mongoose.connect(`${configString}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB Online!');
});


// Schema:
const userSchema = mongoose.Schema({
  userEmail: {
    type: String,
    unique: true,
  },
  userPasswordHash: String,
  dataPoint1: Number,
  dataPoint2: mongoose.Types.Decimal128,
  payStatus: Boolean, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
