const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false
  },
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
    select: false
  },
  isActive: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: 'member',
    enum: ['admin', 'staff', 'member']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
