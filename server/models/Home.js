const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  Date: {
    type: Date,
    required: true
  },
  url: {
    type: String
  },
  allDay: {
    type: Boolean,
    default: false
  },
  Countries: {
    type: String,
    required: true
  }
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
