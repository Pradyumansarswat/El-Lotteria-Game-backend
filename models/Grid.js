const mongoose = require('mongoose');

const gridSchema = new mongoose.Schema({
  grid1: [[Number]],
  grid2: [[Number]],
  winner: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Grid', gridSchema);