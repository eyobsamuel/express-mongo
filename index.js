const express = require("express");
const mongoose = require("mongoose");

const app = express();
const mongoURL =
  "mongodb+srv://root:root@cluster0.qytq2iu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL).then(() => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hey, this is my API running 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my about route.....");
});

module.exports = app;
