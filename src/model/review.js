const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: String,
  time: { type: Date, default: Date.now },
  like: {
    type: Number,
    default: 0,
  },
});

const reviewModal = mongoose.model("reviews", reviewSchema);

module.exports = reviewModal;
