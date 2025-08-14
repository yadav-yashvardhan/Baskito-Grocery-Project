const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: String,
  location: {
    latitude: Number,
    longitude: Number
  }
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
