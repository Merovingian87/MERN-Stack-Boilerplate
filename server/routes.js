const mongo = require('../db/mongoDriver.js');

const users = mongo.db.collection('users');

exports.dataGetAll = async (req, res) => {
  const filter = { _id: 0 };
  const docs = await users.find({}).project(filter).sort( { name: -1 } ).limit(20).toArray();
  res.send(docs);
};

// exports.dataGetOne = (req, res) => {
// };

exports.dataCreate = (req, res) => {
  const userDoc = req.body;
  users.insertOne(userDoc, (err, docs) => {
    if (err) {
      console.log(err);
      res.send('Error Saving Email');
      return
    }
    console.log('Document saved!', docs);
    res.send('Doc created');
  });
};

// exports.dataUpdateOne = (req, res) => {
// };

// exports.dataUpdateMany = (req, res) => {
// };
