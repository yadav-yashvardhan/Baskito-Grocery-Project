const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  weight: String,
  price: String,
  ingredient: { type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }
});

module.exports = mongoose.model("Product", productSchema);
