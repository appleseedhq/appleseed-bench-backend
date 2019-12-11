const mongoose = require('mongoose');
const Record = mongoose.model('Record');

exports.list = async function(_req, res) {
  try {
    var result = await Record.find().exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.create = async function(req, res) {
  try {
    const record = Record(req.body);
    const result = await record.save();

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
