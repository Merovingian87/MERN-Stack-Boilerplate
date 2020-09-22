const User = require('../db/mongoDriver.js');

exports.dataGetAll = (req, res) => {
  const filter = { __v: 0 };
  User.find({}, filter, (err, docs) => {
    if (err) {
      console.log('Error fetching data', err);
      return;
    }
    res.send(docs);
  }).sort({ _id: 'desc' }).limit(100);
};

// exports.dataGetOne = (req, res) => {

// };

exports.dataCreate = (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      console.log(err);
      res.send('Error Saving Email');
      return
    }
    console.log('Document saved!');
    res.send('Doc created');
  });
};

// exports.dataUpdateOne = (req, res) => {

// };

// exports.dataUpdateMany = (req, res) => {

// };
