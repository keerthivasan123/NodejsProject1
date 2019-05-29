    
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;