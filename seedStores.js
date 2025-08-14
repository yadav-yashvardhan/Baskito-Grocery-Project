const mongoose = require("mongoose");
const Store = require("./models/store");


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Atlas Connected"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
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

