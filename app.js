const express = require("express");

const nodemon = require("nodemon");

const axios = require("axios");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/SpaceX");

const app = express();
const port = 3004;

app.use(express.urlencoded());
app.use(express.json());

const launchRoute = require("./routes/launchRoute");
app.use("/launches", launchRoute);

app.listen(port, () => {
  console.log(`Space X app listening on port ${port}`);
});
