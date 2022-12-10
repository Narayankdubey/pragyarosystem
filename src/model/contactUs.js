const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { stringify } = require("uuid");

// SCHEMA DEFINATION //

const contactUsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: String,
  address: String,
  feedback: String,
  adminFeedback: String,
  time: { type: Date, default: Date.now },
});

const contactUsModal = mongoose.model("contactus", contactUsSchema);

module.exports = contactUsModal;
