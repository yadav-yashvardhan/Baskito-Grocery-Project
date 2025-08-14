mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/smartdish", {
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});
