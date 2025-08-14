const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const User = require("./models/user.js");
const ejsMate = require("ejs-mate");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const geolib = require("geolib");
const MongoStore = require("connect-mongo");

const app = express();

console.log("MONGODB_URI:", process.env.MONGODB_URI);


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Atlas Connected"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

// Add generateAuthToken method to User schema
User.schema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id, name: this.name }, process.env.JWT_SECRET || "secret-key", { expiresIn: "1h" });
};

// Models
const Dish = require("./models/Dish");
const Ingredient = require("./models/Ingredient");
const Product = require("./models/Product");
const Store = require("./models/store"); // Added Store model
const Address = require("./models/address"); // Added Address model
require('dotenv').config();

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
// app.use(cors()); // Uncomment and configure if needed for API

// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET || "secret-key",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: "mongodb://127.0.0.1:27017/smartdish",
    collectionName: 'sessions',
  }),
  cookie: {
    maxAge: 86400000,   // 1 day
    secure: false,      // true only in HTTPS
    httpOnly: true,
    sameSite: 'lax'
  }
}));


// Locals Middleware
app.use((req, res, next) => {
  res.locals.currentUser = req.session.user || null;
  next();
});

// Razorpay
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

console.log("Key ID:", process.env.RAZORPAY_KEY_ID);

// Route: Home page with all dishes and their ingredients
app.get("/", async (req, res) => {
  const dishes = await Dish.find({ category: "royal" }).populate("ingredients");
  const regularDishes = await Dish.find({ category: "regular" }).populate("ingredients");
  res.render("listings/index.ejs", { dishes, regularDishes });
});

// Route: Listings page
app.get("/listings", async(req, res) => {
  const dishes = await Dish.find();
  res.render("listings/home.ejs", { dishes });
});
app.get("/smartdish", async(req, res) => {
  const dishes = await Dish.find();
  res.render("listings/smartdish.ejs", { dishes });
});

// Route: Get products for a specific ingredient (AJAX)
app.get("/products/:ingredientId", async (req, res) => {
  try {
    const { ingredientId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(ingredientId)) {
      return res.status(400).json({ error: "Invalid ingredient ID" });
    }
    const products = await Product.find({ ingredient: ingredientId });
    res.json(products || []);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/login", (req, res) => {
  res.render("credentials/login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    // Store user info in session
    req.session.user = { id: user._id, name: user.name };

    // ✅ Updated response: return loggedIn flag and user data
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name
      },
      loggedIn: true
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// Route: Signup page
app.get("/signup", (req, res) => {
  res.render("credentials/signup.ejs");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    req.session.user = { name: user.name, id: user._id };

    // Respond with JSON for fetch to handle
    res.status(200).json({ message: "Signup successful" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Route: Logout
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Logout error:", err);
      return res.redirect("/listings");
    }
    res.clearCookie("connect.sid");
    res.redirect("/listings");
  });
});

app.get("/ingredient/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // 1. Find dish by ID, populate ingredients
    const dish = await Dish.findById(id).populate("ingredients");
    if (!dish) {
      return res.status(404).send("Dish not found");
    }
    // 2. Extract all ingredient IDs
    const ingredientIds = dish.ingredients.map(ing => ing._id);
    // 3. Find products for those ingredients
    const products = await Product.find({
      ingredient: { $in: ingredientIds }
    });
    // 4. Find ingredient details to get names
    const ingredients = await Ingredient.find({
      _id: { $in: ingredientIds }
    });
    // 5. Create a map of ingredient ID to ingredient name
    const ingredientNameMap = {};
    ingredients.forEach(ing => {
      ingredientNameMap[ing._id.toString()] = ing.name;
    });
    // 6. Group products by ingredient and format for the template
    const productsByIngredient = [];
    ingredientIds.forEach(id => {
      const idStr = id.toString();
      const ingredientName = ingredientNameMap[idStr] || 'Unknown Ingredient';
      const ingredientProducts = products.filter(p => p.ingredient.toString() === idStr);
      productsByIngredient.push({
        ingredient: ingredientName,
        products: ingredientProducts
      });
    });
    // 7. Render EJS with dish and formatted products
    res.render("listings/ingredient.ejs", {
      dish,
      products: productsByIngredient
    });
  } catch (err) {
    console.error("Error fetching dish or products:", err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/search", async (req, res) => {
  const searchQuery = req.query.query;
  try {
    // 1. Find dish by name regex, populate ingredients
    const dish = await Dish.findOne({
      name: { $regex: searchQuery, $options: 'i' }
    }).populate('ingredients');
    // If dish is found, prepare data for ingredient.ejs
    if (dish) {
      // 2. Extract all ingredient IDs
      const ingredientIds = dish.ingredients.map(ing => ing._id);
      // 3. Find products for those ingredients
      const products = await Product.find({
        ingredient: { $in: ingredientIds }
      });
      // 4. Find ingredient details to get names
      const ingredients = await Ingredient.find({
        _id: { $in: ingredientIds }
      });
      // 5. Create a map of ingredient ID to ingredient name
      const ingredientNameMap = {};
      ingredients.forEach(ing => {
        ingredientNameMap[ing._id.toString()] = ing.name;
      });
      // 6. Group products by ingredient and format for the template
      const productsByIngredient = [];
      ingredientIds.forEach(id => {
        const idStr = id.toString();
        const ingredientName = ingredientNameMap[idStr] || 'Unknown Ingredient';
        const ingredientProducts = products.filter(p => p.ingredient.toString() === idStr);
        if (ingredientProducts.length > 0) {
          productsByIngredient.push({
            ingredient: ingredientName,
            products: ingredientProducts
          });
        }
      });
      // 7. Render ingredient.ejs with dish and formatted products
      return res.render('listings/ingredient.ejs', {
        dish,
        products: productsByIngredient,
        query: searchQuery
      });
    }
    // If no dish is found, search for products by name
    const productsByName = await Product.find({
      name: { $regex: searchQuery, $options: 'i' }
    }).populate('ingredient');
    // If products are found, prepare data for product.ejs
    if (productsByName.length > 0) {
      // 8. Get unique ingredient IDs from products 
      const allIngredientIds = [...new Set(productsByName.map(p => p.ingredient?._id?.toString()))].filter(id => id);
      // 9. Find ingredient details to get names
      const ingredients = await Ingredient.find({
        _id: { $in: allIngredientIds }
      });
      // 10. Create a map of ingredient ID to ingredient name
      const ingredientNameMap = {};
      ingredients.forEach(ing => {
        ingredientNameMap[ing._id.toString()] = ing.name;
      });
      // 11. Group products by ingredient for consistency
      const productsByIngredient = [];
      allIngredientIds.forEach(id => {
        const idStr = id.toString();
        const ingredientName = ingredientNameMap[idStr] || 'Unknown Ingredient';
        const ingredientProducts = productsByName.filter(p => p.ingredient?._id?.toString() === idStr);
        if (ingredientProducts.length > 0) {
          productsByIngredient.push({
            ingredient: ingredientName,
            products: ingredientProducts
          });
        }
      });
      // 12. Render product.ejs with products and query
      return res.render('listings/product.ejs', {
        products: productsByIngredient,
        query: searchQuery
      });
    }
    // If neither dish nor products are found, return 404
    res.status(404).send("No dish or products found");
  } catch (err) {
    console.error("Error in search:", err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/smart-cart/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Find the dish and populate ingredients
    const dish = await Dish.findById(id).populate("ingredients");
    if (!dish) return res.status(404).json({ error: "Dish not found" });

    const ingredientIds = dish.ingredients.map(i => i._id);

    const products = await Product.find({ ingredient: { $in: ingredientIds } });

    // Send products as JSON
    res.json({ products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// New Route: Fetch warehouse location
app.get("/warehouse-location", async (req, res) => {
  try {
    const store = await Store.findOne(); // Fetch the first store (warehouse)
    console.log(store);
    if (!store) {
      return res.status(404).json({ error: "No warehouse found" });
    }
    res.json({
      name: store.name,
      location: {
        latitude: store.location.latitude,
        longitude: store.location.longitude
      }
    });
  } catch (err) {
    console.error("Error fetching warehouse location:", err);
    res.status(500).json({ error: "Failed to fetch warehouse location" });
  }
});

// Razorpay
app.get('/razorpay-key', (req, res) => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  if (!keyId) {
    console.error('Razorpay key ID is not set in environment variables');
    return res.status(500).json({ success: false, message: 'Server configuration error: Razorpay key ID missing' });
  }
  res.json({ keyId });
});

// Razorpay order creation
app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  console.log("Amount received:", amount);

  // Validate amount
  if (!amount || isNaN(amount) || amount <= 0) {
    console.error('Invalid amount received:', amount);
    return res.status(400).json({
      success: false,
      message: 'Invalid or missing amount'
    });
  }

  try {
    const options = {
      amount: Math.round(amount), // Ensure amount is in paise and rounded
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    };

    const order = await razorpay.orders.create(options);
    if (!order || !order.id) {
      throw new Error('Razorpay order creation returned invalid response');
    }
    console.log("Razorpay order created:", order);

    res.status(200).json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency
      }
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error.message);
    res.status(500).json({
      success: false,
      message: `Failed to create order: ${error.message}`
    });
  }
});

// Import Order model
const Order = require("./models/order");

// Authentication middleware for order routes
const authMiddleware = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Endpoint to save order
app.post('/save-order', authMiddleware, async (req, res) => {
  try {
    const { items, totalAmount, paymentId, deliveryAddress, addressId } = req.body;

    // Validate request body
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Invalid or empty items array' });
    }
    if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid total amount' });
    }
    if (!paymentId || typeof paymentId !== 'string') {
      return res.status(400).json({ success: false, message: 'Invalid payment ID' });
    }

    let finalDeliveryAddress;

    if (addressId) {
      // Use existing address from database
      const address = await Address.findById(addressId);
      if (!address) {
        return res.status(400).json({ success: false, message: 'Invalid address ID' });
      }
      finalDeliveryAddress = {
        houseNumber: address.houseNumber,
        locality: address.locality,
        mobileNumber: address.mobileNumber,
        coordinates: address.coordinates || null
      };
    } else if (deliveryAddress && deliveryAddress.houseNumber && deliveryAddress.locality && deliveryAddress.mobileNumber) {
      // Use new address and save it
      const newAddress = new Address({
        userId: req.session.user.id,
        houseNumber: deliveryAddress.houseNumber,
        locality: deliveryAddress.locality,
        mobileNumber: deliveryAddress.mobileNumber,
        coordinates: deliveryAddress.coordinates || null
      });
      await newAddress.save();
      finalDeliveryAddress = {
        houseNumber: newAddress.houseNumber,
        locality: newAddress.locality,
        mobileNumber: newAddress.mobileNumber,
        coordinates: newAddress.coordinates || null
      };
    } else {
      return res.status(400).json({ success: false, message: 'Invalid delivery address or address ID' });
    }

    const order = new Order({
      userId: req.session.user.id,
      items,
      totalAmount,
      paymentId,
      deliveryAddress: finalDeliveryAddress
    });
    await order.save();
    res.json({ success: true, order });
  } catch (error) {
    console.error('Save order error:', error.message);
    res.status(500).json({ success: false, message: `Failed to save order: ${error.message}` });
  }
});

// Endpoint to get user orders
app.get('/order', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.session.user.id }).sort({ orderDate: -1 });
    res.render("listings/order.ejs", { orders });
  } catch (error) {
    console.error('Fetch orders error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
});

app.get('/get-store-location', async (req, res) => {
  try {
    const store = await Store.findOne(); // Fetch the first store (or customize as needed)
    if (!store) {
      return res.status(404).json({ message: "No store found" });
    }

    res.json({ store });
  } catch (err) {
    console.error('Error fetching store from DB:', err);
    res.status(500).json({ message: "Server error" });
  }
});


app.post('/save-address', authMiddleware, async (req, res) => {
  try {
    let { houseNumber, locality, mobileNumber, coordinates } = req.body;

    // Normalize input
    houseNumber = houseNumber.trim().toLowerCase();
    locality = locality.trim().toLowerCase();

    // Validate input
    if (!houseNumber || !locality || !mobileNumber) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    if (!/^[0-9]{10}$/.test(mobileNumber)) {
      return res.status(400).json({ success: false, message: 'Invalid mobile number' });
    }

    // Check for duplicate address
    const existingAddress = await Address.findOne({
      userId: req.session.user.id,
      houseNumber,
      locality,
      mobileNumber,
    });

    if (existingAddress) {
      return res.status(409).json({ success: false, message: 'Address already exists' });
    }

    // Save new address
    const address = new Address({
      userId: req.session.user.id,
      houseNumber,
      locality,
      mobileNumber,
      coordinates: coordinates || null,
    });

    await address.save();

    res.status(201).json({ success: true, message: 'Address saved successfully', address });

  } catch (error) {
    // Handle MongoDB duplicate error
    if (error.code === 11000) {
      return res.status(409).json({ success: false, message: 'Duplicate address not allowed' });
    }

    console.error('Error saving address:', error);
    res.status(500).json({ success: false, message: 'Server error: Unable to save address' });
  }
});


// GET route to fetch saved addresses
app.get('/get-saved-addresses', authMiddleware, async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.session.user.id }).select('-userId -createdAt');
    res.status(200).json({ success: true, addresses });
  } catch (error) {
    console.error('Error fetching addresses:', error);
    res.status(500).json({ success: false, message: 'Server error: Unable to fetch addresses' });
  }
});
// routes/auth.js or similar
app.get('/check-auth', (req, res) => {
  if (req.session.user) {
    res.json(true);
  } else {
    res.json(false);
  }
});

// Start server
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
  console.log("Visit listings: http://localhost:8080/listings");
});


