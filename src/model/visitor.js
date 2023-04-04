const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// SCHEMA DEFINATION //

const visitorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  time: { type: Date, default: Date.now },
});


const visitorModal = mongoose.model("visitors", visitorSchema);

module.exports = visitorModal;
