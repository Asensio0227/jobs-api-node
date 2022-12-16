const mongoose = require('mongoose');


const jobsSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Please provide company'],
    maxlength:50
  },
  position: {
    type: String,
    required: [true, 'Please provide position'],
    maxlength:50
  },
  status: {
    type: String,
    enum: ['interview', 'decline', 'pending'],
    default:'pending',
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required:[true,'Please provide user']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Job', jobsSchema);