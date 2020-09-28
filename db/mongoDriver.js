const { MongoClient } = require('mongodb');
const configString = require('./config.js');

const client = new MongoClient(configString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  const db = client.db('admin');
  console.log( `Mongo Live,  connected to ${db.databaseName} DB`);
});

const db = client.db('admin');
module.exports.db = db;
