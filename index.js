// index.js
const express = require("express");
const { MongoClient } = require("mongodb"); // Import the MongoDB client

const mongoURL =
  "mongodb+srv://root:root@cluster0.qytq2iu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(mongoURL, { useUnifiedTopology: true });

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

// Connect to the MongoDB cluster when the application starts
client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/", (req, res) => {
  res.send("Hey, this is my API running 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my about route.....");
});

// Export the Express API
module.exports = app;
