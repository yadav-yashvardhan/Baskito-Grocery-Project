const mongoose = require("mongoose");
// const Dish = require("./models/dish");
const Ingredient = require("./models/Ingredient"); // 💥 Yeh line add karo


// 🔗 MongoDB se connect ho jao
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/smartdish")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ Connection error:", err));

// 🔍 Yeh test function run karega
async function testPopulate() {
  try {
    const dish = await Dish.findById("68408a50cb04c7b57e2ca962").populate("ingredients");
    console.log("✅ Populated Dish:\n", dish);
  } catch (err) {
    console.error("❌ Error while fetching:", err);
  } finally {
    mongoose.connection.close();
  }
}

testPopulate();
