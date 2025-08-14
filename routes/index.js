const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish");
const Ingredient = require("../models/Ingredient");
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  const dishes = await Dish.find({});
  res.render("index", { dishes });
});

router.get("/dish/:id", async (req, res) => {
  const dish = await Dish.findById(req.params.id).populate("ingredients");
  res.render("dish", { dish });
});

router.get("/ingredient/:id", async (req, res) => {
  const products = await Product.find({ ingredient: req.params.id });
  res.render("products", { products });
});

router.get("/products/:ingredientId", async (req, res) => {
  const products = await Product.find({ ingredient: req.params.ingredientId });
  res.json(products);
});


module.exports = router;
