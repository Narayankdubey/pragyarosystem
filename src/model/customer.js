const mongoose = require("mongoose");

// SCHEMA DEFINATION //

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  email: String,
  address: String,
  type: {
    type: String,
    require: true
  },
  productName: {
    type: String,
    required: true
  },
  dateOfActivity: {
    type: Date,
    required: true
  },
  totalAmount: { type: Number, required: true },
  paidAmount: Number,
  createdAt: { type: Date, default: Date.now }
});

const customerModal = mongoose.model("customer", customerSchema);

module.exports = customerModal;
