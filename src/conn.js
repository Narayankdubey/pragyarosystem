const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
