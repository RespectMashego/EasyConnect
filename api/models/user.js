const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true,unique: true},
  password: {type: String, required: true, },
  image: {type: String},
  receivedfriendsRequest: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  sentfriendsRequest: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
});

const User = mongoose.model('User', userSchema);

module.exports=User
