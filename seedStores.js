const mongoose = require("mongoose");
const Store = require("./models/store");


mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/smartdish", {
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

const stores = [
  {
    name: "Noida Center",
    location: { latitude: 28.5355, longitude: 77.3910 }
  }
];

async function seedDB() {
  await Store.deleteMany({});
  await Store.insertMany(stores);
  console.log("Stores Seeded Successfully!");
  mongoose.connection.close();
}

seedDB();
