const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  product_name: String,
  color: String,
  capacity: Number,
  purifying_technology: String,
  booster_pump: String,
  voltage: Number,
  price: Number,
  img: String,
  cloudinary_id: String,
});

const productModal = mongoose.model("products", productSchema);

module.exports = productModal;
