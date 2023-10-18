// index.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  const mongoURL =
    "mongodb+srv://root:root@cluster0.qytq2iu.mongodb.net/?retryWrites=true&w=majority";

  mongoose.connect(mongoURL).then(() => {
    res.send("Hey this is my API running 🥳");
  });
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
