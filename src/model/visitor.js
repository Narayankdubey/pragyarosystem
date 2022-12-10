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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// GENERATE AUTHORIZATON TOKEN //
visitorSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { mobile: this.mobile.toString() },
      process.env.JWT_SECRET
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (e) {
    res.send("the error " + error);
    console.log("the error " + error);
  }
};


const visitorModal = mongoose.model("visitors", visitorSchema);

module.exports = visitorModal;
