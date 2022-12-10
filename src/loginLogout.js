const adminModal = require("./model/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

///////////  LOGIN ////////////

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input are required");
    }
    const admin = await adminModal.findOne({ email });
    if (admin && (await bcrypt.compare(password, admin.password))) {
      const token = jwt.sign(
        { admin_id: admin._id, email },
        process.env.JWT_SECRET
        // { expiresIn: "2h" }
      );
      // res.cookie("jwt", token, {
      //   expires: new Date(Date.now() + 600000000),
      //   httpOnly: true,
      // });
      admin.token = token;
      res.status(200).send(token);
      // res.status(200).send("Logged in");
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("Error in Login");
  }
};

///////////  LOGOUT  //////////

const logOut = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.send("logged out");
  } catch (error) {}
};

/////////  EXPORT  ////////////

module.exports = {
  logIn,
  logOut,
};
