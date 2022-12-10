require("dotenv").config();
const express = require("express");
require("./src/conn");
const Router = require("./src/routers");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const fileUpload = require("express-fileupload");

const app = express();
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 4000;

app.use(express.json());

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });
app.use("/api", Router);

// if (process.env.NODE_ENV === "production") {
app.use(express.static("./client/static"));
// const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "static", "index.html"));
});
// }

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
