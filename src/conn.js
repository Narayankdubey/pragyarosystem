const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://narayankdubey:koolerty@cluster0.fyd8g.mongodb.net/pragyarosystem?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
