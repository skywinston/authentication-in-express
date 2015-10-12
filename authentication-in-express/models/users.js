var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', User);
