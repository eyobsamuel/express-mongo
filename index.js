// index.js
const express = require("express");
const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://root:root@cluster0.qytq2iu.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURL);
const app = express();
const PORT = 4000;

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
});

const ProductModel = mongoose.model("Products", ProductSchema);

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  ProductModel.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
