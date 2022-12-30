const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  url: {
    type: String
  },
  allDay: {
    type: Boolean,
    default: false
  }
});

const History = mongoose.model("History", historySchema);

module.exports = History;
