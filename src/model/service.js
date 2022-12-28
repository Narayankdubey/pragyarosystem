const mongoose = require("mongoose");

// SCHEMA DEFINATION //

const serviceSchema = mongoose.Schema({
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
  productName: {
    type: String,
    required: true,
  },
  issue: String,
  adminFeedback: String,
  time: { type: Date, default: Date.now },
});

const serviceModal = mongoose.model("service", serviceSchema);

module.exports = serviceModal;
