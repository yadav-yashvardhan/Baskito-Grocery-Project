const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient"
    }
  ],
  category: { 
    type: String, 
    enum: ["royal", "regular", "sabji"], 
    default: "regular" 
  },
  type: {
    type: String,
    enum: ["veg", "non-veg"],
    default: "veg"
  },
  description: String
});

module.exports = mongoose.model("Dish", dishSchema);
