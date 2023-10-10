const mongoose = require('mongoose');

const messageShema = new mongoose.Schema({
  senderId: {
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  recepientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  messageType: {
    type: String,
    enum: ['text', 'image'],
  },

  message: String,
  imageUrl: String,
  timeStamp: {
    type: Date,
    default: Date.Now,
  },
});

const Message = mongoose.model('Message', messageShema);
module.exports = Message;
