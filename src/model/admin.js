const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// SCHEMA DEFINATION //

const adminSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: String,
  profile_image: String,
  password : String,
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
adminSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { email: this.email.toString() },
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

// PASSWORD BCRYPT //
adminSchema.pre("save", async function(next){
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
})


const adminModal = mongoose.model("admins", adminSchema);

module.exports = adminModal;