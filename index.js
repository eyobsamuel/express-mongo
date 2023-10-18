const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const mongoURL =
  "mongodb+srv://root:root@cluster0.qytq2iu.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Mongo is Connected");
  })
  .catch(() => {
    console.log("Mongo is not Connected");
  });

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
});

const ProductModel = mongoose.model("Products", ProductSchema);

app.get("/", (req, res) => {
  ProductModel.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/search/:title", (req, res) => {
  ProductModel.find({ title: req.params.title }).then((result) => {
    res.send(result);
  });
});

app.post("/create", (req, res) => {
  const newProduct = req.body;
  const prod1 = new ProductModel(newProduct);
  prod1.save().then(() => res.status(201).send("Saved"));
});

app.patch("/update/:id", (req, res) => {
  const keyId = +req.params.id;
  const newProduct = req.body;
  ProductModel.findOneAndUpdate({ id: keyId }, newProduct, { new: true }).then(
    (result) => res.send(result)
  );
});

app.delete("/remove/:id", (req, res) => {
  const keyId = +req.params.id;
  ProductModel.findOneAndDelete({ id: keyId }).then((result) =>
    res.send(result)
  );
});

app.listen(8080, function () {
  console.log("Server is running on 8080");
});
