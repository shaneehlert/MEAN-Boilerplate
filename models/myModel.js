var mongoose = require('mongoose');

var MySchema = new mongoose.Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('MyModel', MySchema);