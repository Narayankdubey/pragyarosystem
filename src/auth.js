const jwt = require("jsonwebtoken");

const adminModal = require("./model/admin")

const isAuthorized = async (req, res, next) => {
  const authorizationHeaader = req.headers.authorization;
  // const authorizationHeaader = req.cookies.jwt;
  let result;
  if (authorizationHeaader) {
    const secret = process.env.JWT_SECRET;
    const token = req.headers.authorization.split(" ")[1];
    // const token = req.cookies.jwt;
    const user = await adminModal.findOne({ token }).exec();
    if (!user) {
      return res.status(401).send("Token not found");
    }
    const options = {
      expiresIn: process.env.EXPIRESIN,
    };
    try {
      jwt.verify(token, secret, function (err) {
        if (err) {
          return res.status(401).send("session expired, Login Again !!");
        }
        result = jwt.verify(token, process.env.JWT_SECRET, options);
        req.decoded = result;
        next();
      });
    } catch (error) {
      return res.status(401).send(error);
    }
  } else {
    return res.status(401).send("Authenticatoin error, need to login");
  }
};
module.exports = { isAuthorized };
