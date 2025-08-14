const mongoose = require("mongoose");
const Ingredient = require("./models/Ingredient");
const Product = require("./models/Product");
const Dish = require("./models/Dish");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Atlas Connected"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

const seed = async () => {
  await Ingredient.deleteMany({});
  await Product.deleteMany({});
  await Dish.deleteMany({});

  const ingredients = [
    { name: "Chickpea" },
    { name: "Onion" },
    { name: "Tomato" },
    { name: "Rice" },
    { name: "Potato" },
    { name: "Paneer" },
    { name: "Spinach" },
    { name: "Lentil" },
    { name: "Carrot" },
    { name: "Green Peas" },
    { name: "Garlic" },
    { name: "Ginger" },
    { name: "Capsicum" },
    { name: "Cabbage" },
    { name: "Cauliflower" },
    { name: "Beans" },
    { name: "Coriander" },
    { name: "Wheat Flour" },
    { name: "Chicken" },
    { name: "Butter" },
    { name: "Cream" },
    { name: "Cumin Seeds" },
    { name: "Turmeric Powder" },
    { name: "Red Chili Powder" },
    { name: "Coriander Powder" },
    { name: "Garam Masala" },
    { name: "Mustard Seeds" },
    { name: "Bay Leaf" },
    { name: "Cloves" },
    { name: "Cardamom" },
    { name: "Cinnamon" },
    { name: "Black Pepper" },
    { name: "Green Chili" },
    { name: "Curry Leaves" },
    { name: "Tamarind" },
    { name: "Coconut Milk" },
    { name: "Cashew Nuts" },
    { name: "Almonds" },
    { name: "Yogurt" },
    { name: "Ghee" },
    { name: "Red Kidney Beans" },
    { name: "Chickpea Flour" },
    { name: "Fenugreek Leaves" },
    { name: "Mustard Oil" },
    { name: "Saffron" },
    { name: "Jaggery" },
    { name: "Mutton" },
    { name: "Egg" },
    { name: "Fish" },
    { name: "Semolina" },
    { name: "Milk" },
    { name: "Salt" },
    { name: "Asafoetida" },
    { name: "Fennel Seeds" },
    { name: "Star Anise" },
    { name: "Vinegar" },
  ]; 

  const savedIngredients = await Ingredient.insertMany(ingredients);

  const products = [
    // Chickpea (10 products)
    { name: "Bansi Chana", image: "https://example.com/chana_bansi.jpg", weight: "1kg", price: "₹120", ingredient: savedIngredients[0]._id },
    { name: "Tata Sampann Chana", image: "https://example.com/chana_tata.jpg", weight: "500g", price: "₹65", ingredient: savedIngredients[0]._id },
    { name: "Organic Chana", image: "https://example.com/chana_organic.jpg", weight: "2kg", price: "₹250", ingredient: savedIngredients[0]._id },
    { name: "Pure Chana Premium", image: "https://example.com/chana_pure.jpg", weight: "1kg", price: "₹130", ingredient: savedIngredients[0]._id },
    { name: "Local Chana", image: "https://example.com/chana_local.jpg", weight: "500g", price: "₹60", ingredient: savedIngredients[0]._id },
    { name: "Farm Chana", image: "https://example.com/chana_farm.jpg", weight: "1kg", price: "₹125", ingredient: savedIngredients[0]._id },
    { name: "Nature's Chana", image: "https://example.com/chana_nature.jpg", weight: "2kg", price: "₹260", ingredient: savedIngredients[0]._id },
    { name: "Golden Chana", image: "https://example.com/chana_golden.jpg", weight: "1kg", price: "₹128", ingredient: savedIngredients[0]._id },
    { name: "Desi Chana Classic", image: "https://example.com/chana_desi.jpg", weight: "500g", price: "₹62", ingredient: savedIngredients[0]._id },
    { name: "Premium Chana", image: "https://example.com/chana_premium.jpg", weight: "1kg", price: "₹135", ingredient: savedIngredients[0]._id },
    // Onion (10 products)
    { name: "Fresh Onion", image: "https://example.com/onion_fresh.jpg", weight: "1kg", price: "₹40", ingredient: savedIngredients[1]._id },
    { name: "Organic Onion", image: "https://example.com/onion_organic.jpg", weight: "2kg", price: "₹90", ingredient: savedIngredients[1]._id },
    { name: "Farm Onion", image: "https://example.com/onion_farm.jpg", weight: "500g", price: "₹25", ingredient: savedIngredients[1]._id },
    { name: "Big Basket Onion", image: "https://example.com/onion_bigbasket.jpg", weight: "1kg", price: "₹45", ingredient: savedIngredients[1]._id },
    { name: "Nature's Onion", image: "https://example.com/onion_nature.jpg", weight: "2kg", price: "₹95", ingredient: savedIngredients[1]._id },
    { name: "Local Onion", image: "https://example.com/onion_local.jpg", weight: "1kg", price: "₹38", ingredient: savedIngredients[1]._id },
    { name: "Pure Onion Select", image: "https://example.com/onion_pure.jpg", weight: "500g", price: "₹22", ingredient: savedIngredients[1]._id },
    { name: "Desi Onion", image: "https://example.com/onion_desi.jpg", weight: "1kg", price: "₹42", ingredient: savedIngredients[1]._id },
    { name: "Golden Onion", image: "https://example.com/onion_golden.jpg", weight: "2kg", price: "₹88", ingredient: savedIngredients[1]._id },
    { name: "Premium Onion", image: "https://example.com/onion_premium.jpg", weight: "1kg", price: "₹48", ingredient: savedIngredients[1]._id },
    // Tomato (10 products)
    { name: "Fresh Tomato", image: "https://example.com/tomato_fresh.jpg", weight: "1kg", price: "₹50", ingredient: savedIngredients[2]._id },
    { name: "Organic Tomato", image: "https://example.com/tomato_organic.jpg", weight: "2kg", price: "₹110", ingredient: savedIngredients[2]._id },
    { name: "Farm Tomato", image: "https://example.com/tomato_farm.jpg", weight: "500g", price: "₹30", ingredient: savedIngredients[2]._id },
    { name: "Big Basket Tomato", image: "https://example.com/tomato_bigbasket.jpg", weight: "1kg", price: "₹55", ingredient: savedIngredients[2]._id },
    { name: "Nature's Tomato", image: "https://example.com/tomato_nature.jpg", weight: "2kg", price: "₹115", ingredient: savedIngredients[2]._id },
    { name: "Local Tomato", image: "https://example.com/tomato_local.jpg", weight: "1kg", price: "₹48", ingredient: savedIngredients[2]._id },
    { name: "Pure Tomato Select", image: "https://example.com/tomato_pure.jpg", weight: "500g", price: "₹28", ingredient: savedIngredients[2]._id },
    { name: "Desi Tomato", image: "https://example.com/tomato_desi.jpg", weight: "1kg", price: "₹52", ingredient: savedIngredients[2]._id },
    { name: "Golden Tomato", image: "https://example.com/tomato_golden.jpg", weight: "2kg", price: "₹108", ingredient: savedIngredients[2]._id },
    { name: "Premium Tomato", image: "https://example.com/tomato_premium.jpg", weight: "1kg", price: "₹58", ingredient: savedIngredients[2]._id },
    // Rice (10 products)
    { name: "Basmati Rice", image: "https://example.com/rice_basmati.jpg", weight: "1kg", price: "₹150", ingredient: savedIngredients[3]._id },
    { name: "Tata Sampann Rice", image: "https://example.com/rice_tata.jpg", weight: "5kg", price: "₹700", ingredient: savedIngredients[3]._id },
    { name: "Organic Rice", image: "https://example.com/rice_organic.jpg", weight: "2kg", price: "₹320", ingredient: savedIngredients[3]._id },
    { name: "Pure Rice Premium", image: "https://example.com/rice_pure.jpg", weight: "1kg", price: "₹160", ingredient: savedIngredients[3]._id },
    { name: "Local Rice", image: "https://example.com/rice_local.jpg", weight: "5kg", price: "₹680", ingredient: savedIngredients[3]._id },
    { name: "Farm Rice", image: "https://example.com/rice_farm.jpg", weight: "2kg", price: "₹310", ingredient: savedIngredients[3]._id },
    { name: "Nature's Rice", image: "https://example.com/rice_nature.jpg", weight: "1kg", price: "₹155", ingredient: savedIngredients[3]._id },
    { name: "Golden Rice", image: "https://example.com/rice_golden.jpg", weight: "5kg", price: "₹720", ingredient: savedIngredients[3]._id },
    { name: "Desi Rice Classic", image: "https://example.com/rice_desi.jpg", weight: "2kg", price: "₹300", ingredient: savedIngredients[3]._id },
    { name: "Premium Rice", image: "https://example.com/rice_premium.jpg", weight: "1kg", price: "₹165", ingredient: savedIngredients[3]._id },
    // Potato (10 products)
    { name: "Fresh Potato", image: "https://example.com/potato_fresh.jpg", weight: "1kg", price: "₹30", ingredient: savedIngredients[4]._id },
    { name: "Organic Potato", image: "https://example.com/potato_organic.jpg", weight: "2kg", price: "₹70", ingredient: savedIngredients[4]._id },
    { name: "Farm Potato", image: "https://example.com/potato_farm.jpg", weight: "500g", price: "₹18", ingredient: savedIngredients[4]._id },
    { name: "Big Basket Potato", image: "https://example.com/potato_bigbasket.jpg", weight: "1kg", price: "₹35", ingredient: savedIngredients[4]._id },
    { name: "Nature's Potato", image: "https://example.com/potato_nature.jpg", weight: "2kg", price: "₹75", ingredient: savedIngredients[4]._id },
    { name: "Local Potato", image: "https://example.com/potato_local.jpg", weight: "1kg", price: "₹28", ingredient: savedIngredients[4]._id },
    { name: "Pure Potato Select", image: "https://example.com/potato_pure.jpg", weight: "500g", price: "₹15", ingredient: savedIngredients[4]._id },
    { name: "Desi Potato", image: "https://example.com/potato_desi.jpg", weight: "1kg", price: "₹32", ingredient: savedIngredients[4]._id },
    { name: "Golden Potato", image: "https://example.com/potato_golden.jpg", weight: "2kg", price: "₹68", ingredient: savedIngredients[4]._id },
    { name: "Premium Potato", image: "https://example.com/potato_premium.jpg", weight: "1kg", price: "₹38", ingredient: savedIngredients[4]._id },
    // Paneer (10 products)
    { name: "Amul Paneer", image: "https://example.com/paneer_amul.jpg", weight: "200g", price: "₹90", ingredient: savedIngredients[5]._id },
    { name: "Mother Dairy Paneer", image: "https://example.com/paneer_motherdairy.jpg", weight: "500g", price: "₹200", ingredient: savedIngredients[5]._id },
    { name: "Organic Paneer", image: "https://example.com/paneer_organic.jpg", weight: "200g", price: "₹100", ingredient: savedIngredients[5]._id },
    { name: "Pure Paneer Premium", image: "https://example.com/paneer_pure.jpg", weight: "100g", price: "₹55", ingredient: savedIngredients[5]._id },
    { name: "Local Paneer", image: "https://example.com/paneer_local.jpg", weight: "500g", price: "₹190", ingredient: savedIngredients[5]._id },
    { name: "Farm Paneer", image: "https://example.com/paneer_farm.jpg", weight: "200g", price: "₹95", ingredient: savedIngredients[5]._id },
    { name: "Nature's Paneer", image: "https://example.com/paneer_nature.jpg", weight: "500g", price: "₹210", ingredient: savedIngredients[5]._id },
    { name: "Golden Paneer", image: "https://example.com/paneer_golden.jpg", weight: "200g", price: "₹98", ingredient: savedIngredients[5]._id },
    { name: "Desi Paneer Classic", image: "https://example.com/paneer_desi.jpg", weight: "100g", price: "₹50", ingredient: savedIngredients[5]._id },
    { name: "Premium Paneer", image: "https://example.com/paneer_premium.jpg", weight: "200g", price: "₹105", ingredient: savedIngredients[5]._id },
    // Spinach (10 products)
    { name: "Fresh Spinach", image: "https://example.com/spinach_fresh.jpg", weight: "500g", price: "₹40", ingredient: savedIngredients[6]._id },
    { name: "Organic Spinach", image: "https://example.com/spinach_organic.jpg", weight: "1kg", price: "₹80", ingredient: savedIngredients[6]._id },
    { name: "Farm Spinach", image: "https://example.com/spinach_farm.jpg", weight: "250g", price: "₹25", ingredient: savedIngredients[6]._id },
    { name: "Big Basket Spinach", image: "https://example.com/spinach_bigbasket.jpg", weight: "500g", price: "₹45", ingredient: savedIngredients[6]._id },
    { name: "Nature's Spinach", image: "https://example.com/spinach_nature.jpg", weight: "1kg", price: "₹85", ingredient: savedIngredients[6]._id },
    { name: "Local Spinach", image: "https://example.com/spinach_local.jpg", weight: "500g", price: "₹38", ingredient: savedIngredients[6]._id },
    { name: "Pure Spinach Select", image: "https://example.com/spinach_pure.jpg", weight: "250g", price: "₹22", ingredient: savedIngredients[6]._id },
    { name: "Desi Spinach", image: "https://example.com/spinach_desi.jpg", weight: "500g", price: "₹42", ingredient: savedIngredients[6]._id },
    { name: "Golden Spinach", image: "https://example.com/spinach_golden.jpg", weight: "1kg", price: "₹88", ingredient: savedIngredients[6]._id },
    { name: "Premium Spinach", image: "https://example.com/spinach_premium.jpg", weight: "500g", price: "₹48", ingredient: savedIngredients[6]._id },
    // Lentil (10 products)
    { name: "Bansi Lentil", image: "https://example.com/lentil_bansi.jpg", weight: "1kg", price: "₹100", ingredient: savedIngredients[7]._id },
    { name: "Tata Sampann Lentil", image: "https://example.com/lentil_tata.jpg", weight: "500g", price: "₹55", ingredient: savedIngredients[7]._id },
    { name: "Organic Lentil", image: "https://example.com/lentil_organic.jpg", weight: "2kg", price: "₹190", ingredient: savedIngredients[7]._id },
    { name: "Pure Lentil Premium", image: "https://example.com/lentil_pure.jpg", weight: "1kg", price: "₹110", ingredient: savedIngredients[7]._id },
    { name: "Local Lentil", image: "https://example.com/lentil_local.jpg", weight: "500g", price: "₹50", ingredient: savedIngredients[7]._id },
    { name: "Farm Lentil", image: "https://example.com/lentil_farm.jpg", weight: "1kg", price: "₹105", ingredient: savedIngredients[7]._id },
    { name: "Nature's Lentil", image: "https://example.com/lentil_nature.jpg", weight: "2kg", price: "₹200", ingredient: savedIngredients[7]._id },
    { name: "Golden Lentil", image: "https://example.com/lentil_golden.jpg", weight: "1kg", price: "₹108", ingredient: savedIngredients[7]._id },
    { name: "Desi Lentil Classic", image: "https://example.com/lentil_desi.jpg", weight: "500g", price: "₹52", ingredient: savedIngredients[7]._id },
    { name: "Premium Lentil", image: "https://example.com/lentil_premium.jpg", weight: "1kg", price: "₹115", ingredient: savedIngredients[7]._id },
    // Carrot (10 products)
    { name: "Fresh Carrot", image: "https://example.com/carrot_fresh.jpg", weight: "1kg", price: "₹60", ingredient: savedIngredients[8]._id },
    { name: "Organic Carrot", image: "https://example.com/carrot_organic.jpg", weight: "2kg", price: "₹130", ingredient: savedIngredients[8]._id },
    { name: "Farm Carrot", image: "https://example.com/carrot_farm.jpg", weight: "500g", price: "₹35", ingredient: savedIngredients[8]._id },
    { name: "Big Basket Carrot", image: "https://example.com/carrot_bigbasket.jpg", weight: "1kg", price: "₹65", ingredient: savedIngredients[8]._id },
    { name: "Nature's Carrot", image: "https://example.com/carrot_nature.jpg", weight: "2kg", price: "₹135", ingredient: savedIngredients[8]._id },
    { name: "Local Carrot", image: "https://example.com/carrot_local.jpg", weight: "1kg", price: "₹58", ingredient: savedIngredients[8]._id },
    { name: "Pure Carrot Select", image: "https://example.com/carrot_pure.jpg", weight: "500g", price: "₹32", ingredient: savedIngredients[8]._id },
    { name: "Desi Carrot", image: "https://example.com/carrot_desi.jpg", weight: "1kg", price: "₹62", ingredient: savedIngredients[8]._id },
    { name: "Golden Carrot", image: "https://example.com/carrot_golden.jpg", weight: "2kg", price: "₹128", ingredient: savedIngredients[8]._id },
    { name: "Premium Carrot", image: "https://example.com/carrot_premium.jpg", weight: "1kg", price: "₹68", ingredient: savedIngredients[8]._id },
    // Green Peas (10 products)
    { name: "Fresh Green Peas", image: "https://example.com/greenpeas_fresh.jpg", weight: "500g", price: "₹80", ingredient: savedIngredients[9]._id },
    { name: "Organic Green Peas", image: "https://example.com/greenpeas_organic.jpg", weight: "1kg", price: "₹160", ingredient: savedIngredients[9]._id },
    { name: "Farm Green Peas", image: "https://example.com/greenpeas_farm.jpg", weight: "250g", price: "₹45", ingredient: savedIngredients[9]._id },
    { name: "Big Basket Green Peas", image: "https://example.com/greenpeas_bigbasket.jpg", weight: "500g", price: "₹85", ingredient: savedIngredients[9]._id },
    { name: "Nature's Green Peas", image: "https://example.com/greenpeas_nature.jpg", weight: "1kg", price: "₹165", ingredient: savedIngredients[9]._id },
    { name: "Local Green Peas", image: "https://example.com/greenpeas_local.jpg", weight: "500g", price: "₹78", ingredient: savedIngredients[9]._id },
    { name: "Pure Green Peas Select", image: "https://example.com/greenpeas_pure.jpg", weight: "250g", price: "₹42", ingredient: savedIngredients[9]._id },
    { name: "Desi Green Peas", image: "https://example.com/greenpeas_desi.jpg", weight: "500g", price: "₹82", ingredient: savedIngredients[9]._id },
    { name: "Golden Green Peas", image: "https://example.com/greenpeas_golden.jpg", weight: "1kg", price: "₹158", ingredient: savedIngredients[9]._id },
    { name: "Premium Green Peas", image: "https://example.com/greenpeas_premium.jpg", weight: "500g", price: "₹88", ingredient: savedIngredients[9]._id },
    // Garlic (10 products)
    { name: "Fresh Garlic", image: "https://example.com/garlic_fresh.jpg", weight: "250g", price: "₹50", ingredient: savedIngredients[10]._id },
    { name: "Organic Garlic", image: "https://example.com/garlic_organic.jpg", weight: "500g", price: "₹100", ingredient: savedIngredients[10]._id },
    { name: "Farm Garlic", image: "https://example.com/garlic_farm.jpg", weight: "100g", price: "₹25", ingredient: savedIngredients[10]._id },
    { name: "Big Basket Garlic", image: "https://example.com/garlic_bigbasket.jpg", weight: "250g", price: "₹55", ingredient: savedIngredients[10]._id },
    { name: "Nature's Garlic", image: "https://example.com/garlic_nature.jpg", weight: "500g", price: "₹105", ingredient: savedIngredients[10]._id },
    { name: "Local Garlic", image: "https://example.com/garlic_local.jpg", weight: "250g", price: "₹48", ingredient: savedIngredients[10]._id },
    { name: "Pure Garlic Select", image: "https://example.com/garlic_pure.jpg", weight: "100g", price: "₹22", ingredient: savedIngredients[10]._id },
    { name: "Desi Garlic", image: "https://example.com/garlic_desi.jpg", weight: "250g", price: "₹52", ingredient: savedIngredients[10]._id },
    { name: "Golden Garlic", image: "https://example.com/garlic_golden.jpg", weight: "500g", price: "₹98", ingredient: savedIngredients[10]._id },
    { name: "Premium Garlic", image: "https://example.com/garlic_premium.jpg", weight: "250g", price: "₹58", ingredient: savedIngredients[10]._id },
    // Ginger (10 products)
    { name: "Fresh Ginger", image: "https://example.com/ginger_fresh.jpg", weight: "250g", price: "₹60", ingredient: savedIngredients[11]._id },
    { name: "Organic Ginger", image: "https://example.com/ginger_organic.jpg", weight: "500g", price: "₹120", ingredient: savedIngredients[11]._id },
    { name: "Farm Ginger", image: "https://example.com/ginger_farm.jpg", weight: "100g", price: "₹30", ingredient: savedIngredients[11]._id },
    { name: "Big Basket Ginger", image: "https://example.com/ginger_bigbasket.jpg", weight: "250g", price: "₹65", ingredient: savedIngredients[11]._id },
    { name: "Nature's Ginger", image: "https://example.com/ginger_nature.jpg", weight: "500g", price: "₹125", ingredient: savedIngredients[11]._id },
    { name: "Local Ginger", image: "https://example.com/ginger_local.jpg", weight: "250g", price: "₹58", ingredient: savedIngredients[11]._id },
    { name: "Pure Ginger Select", image: "https://example.com/ginger_pure.jpg", weight: "100g", price: "₹28", ingredient: savedIngredients[11]._id },
    { name: "Desi Ginger", image: "https://example.com/ginger_desi.jpg", weight: "250g", price: "₹62", ingredient: savedIngredients[11]._id },
    { name: "Golden Ginger", image: "https://example.com/ginger_golden.jpg", weight: "500g", price: "₹118", ingredient: savedIngredients[11]._id },
    { name: "Premium Ginger", image: "https://example.com/ginger_premium.jpg", weight: "250g", price: "₹68", ingredient: savedIngredients[11]._id },
    // Capsicum (10 products)
    { name: "Fresh Capsicum", image: "https://example.com/capsicum_fresh.jpg", weight: "500g", price: "₹70", ingredient: savedIngredients[12]._id },
    { name: "Organic Capsicum", image: "https://example.com/capsicum_organic.jpg", weight: "1kg", price: "₹140", ingredient: savedIngredients[12]._id },
    { name: "Farm Capsicum", image: "https://example.com/capsicum_farm.jpg", weight: "250g", price: "₹40", ingredient: savedIngredients[12]._id },
    { name: "Big Basket Capsicum", image: "https://example.com/capsicum_bigbasket.jpg", weight: "500g", price: "₹75", ingredient: savedIngredients[12]._id },
    { name: "Nature's Capsicum", image: "https://example.com/capsicum_nature.jpg", weight: "1kg", price: "₹145", ingredient: savedIngredients[12]._id },
    { name: "Local Capsicum", image: "https://example.com/capsicum_local.jpg", weight: "500g", price: "₹68", ingredient: savedIngredients[12]._id },
    { name: "Pure Capsicum Select", image: "https://example.com/capsicum_pure.jpg", weight: "250g", price: "₹38", ingredient: savedIngredients[12]._id },
    { name: "Desi Capsicum", image: "https://example.com/capsicum_desi.jpg", weight: "500g", price: "₹72", ingredient: savedIngredients[12]._id },
    { name: "Golden Capsicum", image: "https://example.com/capsicum_golden.jpg", weight: "1kg", price: "₹138", ingredient: savedIngredients[12]._id },
    { name: "Premium Capsicum", image: "https://example.com/capsicum_premium.jpg", weight: "500g", price: "₹78", ingredient: savedIngredients[12]._id },
    // Cabbage (10 products)
    { name: "Fresh Cabbage", image: "https://example.com/cabbage_fresh.jpg", weight: "1kg", price: "₹50", ingredient: savedIngredients[13]._id },
    { name: "Organic Cabbage", image: "https://example.com/cabbage_organic.jpg", weight: "2kg", price: "₹100", ingredient: savedIngredients[13]._id },
    { name: "Farm Cabbage", image: "https://example.com/cabbage_farm.jpg", weight: "500g", price: "₹30", ingredient: savedIngredients[13]._id },
    { name: "Big Basket Cabbage", image: "https://example.com/cabbage_bigbasket.jpg", weight: "1kg", price: "₹55", ingredient: savedIngredients[13]._id },
    { name: "Nature's Cabbage", image: "https://example.com/cabbage_nature.jpg", weight: "2kg", price: "₹105", ingredient: savedIngredients[13]._id },
    { name: "Local Cabbage", image: "https://example.com/cabbage_local.jpg", weight: "1kg", price: "₹48", ingredient: savedIngredients[13]._id },
    { name: "Pure Cabbage Select", image: "https://example.com/cabbage_pure.jpg", weight: "500g", price: "₹28", ingredient: savedIngredients[13]._id },
    { name: "Desi Cabbage", image: "https://example.com/cabbage_desi.jpg", weight: "1kg", price: "₹52", ingredient: savedIngredients[13]._id },
    { name: "Golden Cabbage", image: "https://example.com/cabbage_golden.jpg", weight: "2kg", price: "₹98", ingredient: savedIngredients[13]._id },
    { name: "Premium Cabbage", image: "https://example.com/cabbage_premium.jpg", weight: "1kg", price: "₹58", ingredient: savedIngredients[13]._id },
    // Cauliflower (10 products)
    { name: "Fresh Cauliflower", image: "https://example.com/cauliflower_fresh.jpg", weight: "1kg", price: "₹60", ingredient: savedIngredients[14]._id },
    { name: "Organic Cauliflower", image: "https://example.com/cauliflower_organic.jpg", weight: "2kg", price: "₹120", ingredient: savedIngredients[14]._id },
    { name: "Farm Cauliflower", image: "https://example.com/cauliflower_farm.jpg", weight: "500g", price: "₹35", ingredient: savedIngredients[14]._id },
    { name: "Big Basket Cauliflower", image: "https://example.com/cauliflower_bigbasket.jpg", weight: "1kg", price: "₹65", ingredient: savedIngredients[14]._id },
    { name: "Nature's Cauliflower", image: "https://example.com/cauliflower_nature.jpg", weight: "2kg", price: "₹125", ingredient: savedIngredients[14]._id },
    { name: "Local Cauliflower", image: "https://example.com/cauliflower_local.jpg", weight: "1kg", price: "₹58", ingredient: savedIngredients[14]._id },
    { name: "Pure Cauliflower Select", image: "https://example.com/cauliflower_pure.jpg", weight: "500g", price: "₹32", ingredient: savedIngredients[14]._id },
    { name: "Desi Cauliflower", image: "https://example.com/cauliflower_desi.jpg", weight: "1kg", price: "₹62", ingredient: savedIngredients[14]._id },
    { name: "Golden Cauliflower", image: "https://example.com/cauliflower_golden.jpg", weight: "2kg", price: "₹118", ingredient: savedIngredients[14]._id },
    { name: "Premium Cauliflower", image: "https://example.com/cauliflower_premium.jpg", weight: "1kg", price: "₹68", ingredient: savedIngredients[14]._id },
    // Beans (10 products)
    { name: "Fresh Beans", image: "https://example.com/beans_fresh.jpg", weight: "500g", price: "₹70", ingredient: savedIngredients[15]._id },
    { name: "Organic Beans", image: "https://example.com/beans_organic.jpg", weight: "1kg", price: "₹140", ingredient: savedIngredients[15]._id },
    { name: "Farm Beans", image: "https://example.com/beans_farm.jpg", weight: "250g", price: "₹40", ingredient: savedIngredients[15]._id },
    { name: "Big Basket Beans", image: "https://example.com/beans_bigbasket.jpg", weight: "500g", price: "₹75", ingredient: savedIngredients[15]._id },
    { name: "Nature's Beans", image: "https://example.com/beans_nature.jpg", weight: "1kg", price: "₹145", ingredient: savedIngredients[15]._id },
    { name: "Local Beans", image: "https://example.com/beans_local.jpg", weight: "500g", price: "₹68", ingredient: savedIngredients[15]._id },
    { name: "Pure Beans Select", image: "https://example.com/beans_pure.jpg", weight: "250g", price: "₹38", ingredient: savedIngredients[15]._id },
    { name: "Desi Beans", image: "https://example.com/beans_desi.jpg", weight: "500g", price: "₹72", ingredient: savedIngredients[15]._id },
    { name: "Golden Beans", image: "https://example.com/beans_golden.jpg", weight: "1kg", price: "₹138", ingredient: savedIngredients[15]._id },
    { name: "Premium Beans", image: "https://example.com/beans_premium.jpg", weight: "500g", price: "₹78", ingredient: savedIngredients[15]._id },
    // Coriander (10 products)
    { name: "Fresh Coriander", image: "https://example.com/coriander_fresh.jpg", weight: "100g", price: "₹20", ingredient: savedIngredients[16]._id },
    { name: "Organic Coriander", image: "https://example.com/coriander_organic.jpg", weight: "200g", price: "₹40", ingredient: savedIngredients[16]._id },
    { name: "Farm Coriander", image: "https://example.com/coriander_farm.jpg", weight: "50g", price: "₹12", ingredient: savedIngredients[16]._id },
    { name: "Big Basket Coriander", image: "https://example.com/coriander_bigbasket.jpg", weight: "100g", price: "₹22", ingredient: savedIngredients[16]._id },
    { name: "Nature's Coriander", image: "https://example.com/coriander_nature.jpg", weight: "200g", price: "₹45", ingredient: savedIngredients[16]._id },
    { name: "Local Coriander", image: "https://example.com/coriander_local.jpg", weight: "100g", price: "₹18", ingredient: savedIngredients[16]._id },
    { name: "Pure Coriander Select", image: "https://example.com/coriander_pure.jpg", weight: "50g", price: "₹10", ingredient: savedIngredients[16]._id },
    { name: "Desi Coriander", image: "https://example.com/coriander_desi.jpg", weight: "100g", price: "₹20", ingredient: savedIngredients[16]._id },
    { name: "Golden Coriander", image: "https://example.com/coriander_golden.jpg", weight: "200g", price: "₹42", ingredient: savedIngredients[16]._id },
    { name: "Premium Coriander", image: "https://example.com/coriander_premium.jpg", weight: "100g", price: "₹25", ingredient: savedIngredients[16]._id },
    // Wheat Flour (10 products)
    { name: "Ashirwad Wheat Flour", image: "https://example.com/wheatflour_ashirwad.jpg", weight: "5kg", price: "₹250", ingredient: savedIngredients[17]._id },
    { name: "Bansi Wheat Flour", image: "https://example.com/wheatflour_bansi.jpg", weight: "1kg", price: "₹60", ingredient: savedIngredients[17]._id },
    { name: "Organic Wheat Flour", image: "https://example.com/wheatflour_organic.jpg", weight: "2kg", price: "₹130", ingredient: savedIngredients[17]._id },
    { name: "Pure Wheat Flour Premium", image: "https://example.com/wheatflour_pure.jpg", weight: "5kg", price: "₹260", ingredient: savedIngredients[17]._id },
    { name: "Local Wheat Flour", image: "https://example.com/wheatflour_local.jpg", weight: "1kg", price: "₹55", ingredient: savedIngredients[17]._id },
    { name: "Farm Wheat Flour", image: "https://example.com/wheatflour_farm.jpg", weight: "2kg", price: "₹125", ingredient: savedIngredients[17]._id },
    { name: "Nature's Wheat Flour", image: "https://example.com/wheatflour_nature.jpg", weight: "5kg", price: "₹270", ingredient: savedIngredients[17]._id },
    { name: "Golden Wheat Flour", image: "https://example.com/wheatflour_golden.jpg", weight: "1kg", price: "₹58", ingredient: savedIngredients[17]._id },
    { name: "Desi Wheat Flour Classic", image: "https://example.com/wheatflour_desi.jpg", weight: "2kg", price: "₹120", ingredient: savedIngredients[17]._id },
    { name: "Premium Wheat Flour", image: "https://example.com/wheatflour_premium.jpg", weight: "5kg", price: "₹280", ingredient: savedIngredients[17]._id },
    // Chicken (10 products)
    { name: "Fresh Chicken", image: "https://example.com/chicken_fresh.jpg", weight: "1kg", price: "₹200", ingredient: savedIngredients[18]._id },
    { name: "Organic Chicken", image: "https://example.com/chicken_organic.jpg", weight: "500g", price: "₹120", ingredient: savedIngredients[18]._id },
    { name: "Farm Chicken", image: "https://example.com/chicken_farm.jpg", weight: "2kg", price: "₹380", ingredient: savedIngredients[18]._id },
    { name: "Big Basket Chicken", image: "https://example.com/chicken_bigbasket.jpg", weight: "1kg", price: "₹210", ingredient: savedIngredients[18]._id },
    { name: "Nature's Chicken", image: "https://example.com/chicken_nature.jpg", weight: "500g", price: "₹115", ingredient: savedIngredients[18]._id },
    { name: "Local Chicken", image: "https://example.com/chicken_local.jpg", weight: "1kg", price: "₹190", ingredient: savedIngredients[18]._id },
    { name: "Pure Chicken Select", image: "https://example.com/chicken_pure.jpg", weight: "2kg", price: "₹400", ingredient: savedIngredients[18]._id },
    { name: "Desi Chicken", image: "https://example.com/chicken_desi.jpg", weight: "1kg", price: "₹205", ingredient: savedIngredients[18]._id },
    { name: "Golden Chicken", image: "https://example.com/chicken_golden.jpg", weight: "500g", price: "₹125", ingredient: savedIngredients[18]._id },
    { name: "Premium Chicken", image: "https://example.com/chicken_premium.jpg", weight: "1kg", price: "₹220", ingredient: savedIngredients[18]._id },
    // Butter (10 products)
    { name: "Amul Butter", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314", weight: "100g", price: "₹60", ingredient: savedIngredients[19]._id },
    { name: "Mother Dairy Butter", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/e70f0d40-f2da-411e-9cfa-d163e0e2a1f7.jpg?ts=1708591835", weight: "500g", price: "₹280", ingredient: savedIngredients[19]._id },
    { name: "Organic Butter", image: "https://example.com/butter_organic.jpg", weight: "200g", price: "₹130", ingredient: savedIngredients[19]._id },
    { name: "Pure Butter Premium", image: "https://example.com/butter_pure.jpg", weight: "100g", price: "₹65", ingredient: savedIngredients[19]._id },
    { name: "Local Butter", image: "https://example.com/butter_local.jpg", weight: "500g", price: "₹270", ingredient: savedIngredients[19]._id },
    { name: "Farm Butter", image: "https://example.com/butter_farm.jpg", weight: "200g", price: "₹125", ingredient: savedIngredients[19]._id },
    { name: "Gowardhan Butter", image: "https://example.com/butter_gowardhan.jpg", weight: "100g", price: "₹62", ingredient: savedIngredients[19]._id },
    { name: "Nestle Butter", image: "https://example.com/butter_nestle.jpg", weight: "500g", price: "₹290", ingredient: savedIngredients[19]._id },
    { name: "Desi Butter Classic", image: "https://example.com/butter_desi.jpg", weight: "200g", price: "₹120", ingredient: savedIngredients[19]._id },
    { name: "Premium Butter", image: "https://example.com/butter_premium.jpg", weight: "100g", price: "₹68", ingredient: savedIngredients[19]._id },
    // Cream (10 products)
    { name: "Amul Fresh Cream", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/740347d8-80b9-40eb-8de4-72b283acb7bc.jpg?ts=1706182141", weight: "200ml", price: "₹70", ingredient: savedIngredients[20]._id },
    { name: "Mother Dairy Cream", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/196152a.jpg?ts=1690814399", weight: "500ml", price: "₹160", ingredient: savedIngredients[20]._id },
    { name: "Organic Cream", image: "https://example.com/cream_organic.jpg", weight: "250ml", price: "₹90", ingredient: savedIngredients[20]._id },
    { name: "Nestle Cream", image: "https://example.com/cream_nestle.jpg", weight: "200ml", price: "₹75", ingredient: savedIngredients[20]._id },
    { name: "Pure Cream Premium", image: "https://example.com/cream_pure.jpg", weight: "500ml", price: "₹170", ingredient: savedIngredients[20]._id },
    { name: "Local Cream", image: "https://example.com/cream_local.jpg", weight: "200ml", price: "₹65", ingredient: savedIngredients[20]._id },
    { name: "Farm Fresh Cream", image: "https://example.com/cream_farm.jpg", weight: "250ml", price: "₹85", ingredient: savedIngredients[20]._id },
    { name: "Gowardhan Cream", image: "https://example.com/cream_gowardhan.jpg", weight: "200ml", price: "₹72", ingredient: savedIngredients[20]._id },
    { name: "Desi Cream Classic", image: "https://example.com/cream_desi.jpg", weight: "500ml", price: "₹165", ingredient: savedIngredients[20]._id },
    { name: "Premium Cream", image: "https://example.com/cream_premium.jpg", weight: "200ml", price: "₹78", ingredient: savedIngredients[20]._id },
    // Cumin Seeds (10 products)
    { name: "Everest Cumin Seeds", image: "https://example.com/cumin_everest.jpg", weight: "100g", price: "₹50", ingredient: savedIngredients[21]._id },
    { name: "MDH Cumin Seeds", image: "https://example.com/cumin_mdh.jpg", weight: "200g", price: "₹95", ingredient: savedIngredients[21]._id },
    { name: "Organic Cumin Seeds", image: "https://example.com/cumin_organic.jpg", weight: "100g", price: "₹60", ingredient: savedIngredients[21]._id },
    { name: "Pure Cumin Premium", image: "https://example.com/cumin_pure.jpg", weight: "50g", price: "₹30", ingredient: savedIngredients[21]._id },
    { name: "Local Cumin Seeds", image: "https://example.com/cumin_local.jpg", weight: "200g", price: "₹90", ingredient: savedIngredients[21]._id },
    { name: "Farm Cumin Seeds", image: "https://example.com/cumin_farm.jpg", weight: "100g", price: "₹55", ingredient: savedIngredients[21]._id },
    { name: "Bansi Cumin Seeds", image: "https://example.com/cumin_bansi.jpg", weight: "50g", price: "₹28", ingredient: savedIngredients[21]._id },
    { name: "Nature's Cumin Seeds", image: "https://example.com/cumin_nature.jpg", weight: "200g", price: "₹100", ingredient: savedIngredients[21]._id },
    { name: "Golden Cumin Seeds", image: "https://example.com/cumin_golden.jpg", weight: "100g", price: "₹52", ingredient: savedIngredients[21]._id },
    { name: "Desi Cumin Classic", image: "https://example.com/cumin_desi.jpg", weight: "50g", price: "₹25", ingredient: savedIngredients[21]._id },
    // Turmeric Powder (10 products)
    { name: "Everest Turmeric Powder", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/22c06e44-417a-4ead-8872-5b2a625973ae.jpg?ts=1707312311", weight: "100g", price: "₹40", ingredient: savedIngredients[22]._id },
    { name: "MDH Turmeric Powder", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5ceee552-5f6f-4cec-9702-68e48d127f67.jpg?ts=1729071855", weight: "200g", price: "₹80", ingredient: savedIngredients[22]._id },
    { name: "Organic Turmeric Powder", image: "https://example.com/turmeric_organic.jpg", weight: "100g", price: "₹50", ingredient: savedIngredients[22]._id },
    { name: "Pure Turmeric Premium", image: "https://example.com/turmeric_pure.jpg", weight: "50g", price: "₹25", ingredient: savedIngredients[22]._id },
    { name: "Local Turmeric Powder", image: "https://example.com/turmeric_local.jpg", weight: "200g", price: "₹75", ingredient: savedIngredients[22]._id },
    { name: "Farm Turmeric Powder", image: "https://example.com/turmeric_farm.jpg", weight: "100g", price: "₹45", ingredient: savedIngredients[22]._id },
    { name: "Bansi Turmeric Powder", image: "https://example.com/turmeric_bansi.jpg", weight: "50g", price: "₹22", ingredient: savedIngredients[22]._id },
    { name: "Nature's Turmeric Powder", image: "https://example.com/turmeric_nature.jpg", weight: "200g", price: "₹85", ingredient: savedIngredients[22]._id },
    { name: "Golden Turmeric Powder", image: "https://example.com/turmeric_golden.jpg", weight: "100g", price: "₹42", ingredient: savedIngredients[22]._id },
    { name: "Desi Turmeric Classic", image: "https://example.com/turmeric_desi.jpg", weight: "50g", price: "₹20", ingredient: savedIngredients[22]._id },
    // Red Chili Powder (10 products)
    { name: "Everest Red Chili Powder", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/24ebaa60-1c83-4987-acd2-a5ef0415ec54.jpg?ts=1708588722", weight: "100g", price: "₹45", ingredient: savedIngredients[23]._id },
    { name: "MDH Red Chili Powder", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/484e247b-daa2-4ded-acad-458fd144cb17.jpg?ts=1732789328", weight: "200g", price: "₹85", ingredient: savedIngredients[23]._id },
    { name: "Organic Red Chili Powder", image: "https://example.com/redchili_organic.jpg", weight: "100g", price: "₹55", ingredient: savedIngredients[23]._id },
    { name: "Pure Red Chili Premium", image: "https://example.com/redchili_pure.jpg", weight: "50g", price: "₹28", ingredient: savedIngredients[23]._id },
    { name: "Local Red Chili Powder", image: "https://example.com/redchili_local.jpg", weight: "200g", price: "₹80", ingredient: savedIngredients[23]._id },
    { name: "Farm Red Chili Powder", image: "https://example.com/redchili_farm.jpg", weight: "100g", price: "₹50", ingredient: savedIngredients[23]._id },
    { name: "Bansi Red Chili Powder", image: "https://example.com/redchili_bansi.jpg", weight: "50g", price: "₹25", ingredient: savedIngredients[23]._id },
    { name: "Nature's Red Chili Powder", image: "https://example.com/redchili_nature.jpg", weight: "200g", price: "₹90", ingredient: savedIngredients[23]._id },
    { name: "Golden Red Chili Powder", image: "https://example.com/redchili_golden.jpg", weight: "100g", price: "₹48", ingredient: savedIngredients[23]._id },
    { name: "Desi Red Chili Classic", image: "https://example.com/redchili_desi.jpg", weight: "50g", price: "₹22", ingredient: savedIngredients[23]._id },
    // Coriander Powder (10 products)
    { name: "Everest Coriander Powder", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/d88b00ea-8186-4b7e-84fb-3b602ee77ed7.jpg?ts=1713776994", weight: "100g", price: "₹35", ingredient: savedIngredients[24]._id },
    { name: "MDH Coriander Powder", image: "https://example.com/corianderpowder_mdh.jpg", weight: "200g", price: "₹70", ingredient: savedIngredients[24]._id },
    { name: "Organic Coriander Powder", image: "https://example.com/corianderpowder_organic.jpg", weight: "100g", price: "₹45", ingredient: savedIngredients[24]._id },
    { name: "Pure Coriander Premium", image: "https://example.com/corianderpowder_pure.jpg", weight: "50g", price: "₹20", ingredient: savedIngredients[24]._id },
    { name: "Local Coriander Powder", image: "https://example.com/corianderpowder_local.jpg", weight: "200g", price: "₹65", ingredient: savedIngredients[24]._id },
    { name: "Farm Coriander Powder", image: "https://example.com/corianderpowder_farm.jpg", weight: "100g", price: "₹40", ingredient: savedIngredients[24]._id },
    { name: "Bansi Coriander Powder", image: "https://example.com/corianderpowder_bansi.jpg", weight: "50g", price: "₹18", ingredient: savedIngredients[24]._id },
    { name: "Nature's Coriander Powder", image: "https://example.com/corianderpowder_nature.jpg", weight: "200g", price: "₹75", ingredient: savedIngredients[24]._id },
    { name: "Golden Coriander Powder", image: "https://example.com/corianderpowder_golden.jpg", weight: "100g", price: "₹38", ingredient: savedIngredients[24]._id },
    { name: "Desi Coriander Classic", image: "https://example.com/corianderpowder_desi.jpg", weight: "50g", price: "₹15", ingredient: savedIngredients[24]._id },
    // Garam Masala (10 products)
    { name: "Everest Garam Masala", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/104731a.jpg?ts=1690813802", weight: "100g", price: "₹60", ingredient: savedIngredients[25]._id },
    { name: "MDH Garam Masala", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/68a.jpg?ts=1704874665", weight: "200g", price: "₹110", ingredient: savedIngredients[25]._id },
    { name: "Organic Garam Masala", image: "https://example.com/garammasala_organic.jpg", weight: "100g", price: "₹70", ingredient: savedIngredients[25]._id },
    { name: "Pure Garam Masala Premium", image: "https://example.com/garammasala_pure.jpg", weight: "50g", price: "₹35", ingredient: savedIngredients[25]._id },
    { name: "Local Garam Masala", image: "https://example.com/garammasala_local.jpg", weight: "200g", price: "₹100", ingredient: savedIngredients[25]._id },
    { name: "Farm Garamm Masala", image: "https://example.com/garammasala_farm.jpg", weight: "50g", price: "₹65", ingredient: savedIngredients[25]._id },
    { name: "Bansi Garam Masala", image: "https://example.com/garammasala_bansi.jpg", weight: "50g", price: "₹30", ingredient: savedIngredients[25]._id },
    { name: "Nature's Garam Masala", image: "https://example.com/garammasala_nature.jpg", weight: "200g", price: "₹115", ingredient: savedIngredients[25]._id },
    { name: "Golden Garam Masala", image: "https://example.com/garammasala_golden.jpg", weight: "100g", price: "₹62", ingredient: savedIngredients[25]._id },
    { name: "Desi Garam Masala Classic", image: "https://example.com/garammasala_desi.jpg", weight: "50g", price: "₹28", ingredient: savedIngredients[25]._id },
    // Mustard Seeds (10 products)
    { name: "Everest Mustard Seed", image: "https://example.com/seeds_everest.jpg", weight: "100g", price: "₹30", ingredient: savedIngredients[26]._id },
    { name: "MDH Mustard Seed", image: "https://example.com/seeds_mdh.jpg", weight: "200g", price: "₹60", ingredient: savedIngredients[26]._id },
    { name: "Organic Mustard Seed", image: "https://example.com/seeds_organic.jpg", weight: "100g", price: "₹40", ingredient: savedIngredients[26]._id },
    { name: "Pure Mustard Premium", image: "https://example.com/seeds_pure.jpg", weight: "50g", price: "₹20", ingredient: savedIngredients[26]._id },
    { name: "Local Mustard Seed", image: "https://example.com/seeds_local.jpg", weight: "200g", price: "₹55", ingredient: savedIngredients[26]._id },
    { name: "Farm Mustard Seeds", image: "https://example.com/seeds_farm.jpg", weight: "100g", price: "₹35", ingredient: savedIngredients[26]._id },
    { name: "Bansi Mustard Seed", image: "https://example.com/seeds_bansi.jpg", weight: "50g", price: "₹18", ingredient: savedIngredients[26]._id },
    { name: "Nature's Mustard Seeds", image: "https://example.com/seeds_nature.jpg", weight: "200g", price: "₹65", ingredient: savedIngredients[26]._id },
    { name: "Golden Mustard Seed", image: "https://example.com/seeds_golden.jpg", weight: "100g", price: "₹32", ingredient: savedIngredients[26]._id },
    { name: "Desi Mustard Classic", image: "https://example.com/seeds_desi.jpg", weight: "50g", price: "₹15", ingredient: savedIngredients[26]._id },
    // Bay Leaf (10 products)
    { name: "Everest Bay Leaf", image: "https://example.com/bayleaf_everest.jpg", weight: "30g", price: "₹25", ingredient: savedIngredients[27]._id },
    { name: "MDH Bay Leaf", image: "https://example.com/bay_leaf_mdh.jpg", weight: "100g", price: "₹50", ingredient: savedIngredients[27]._id },
    { name: "Organic Bay Leaf", image: "https://example.com/bay_leaf_organic.jpg", weight: "50g", price: "₹30", ingredient: savedIngredients[27]._id },
    { name: "Pure Bay Leaf Premium", image: "https://example.com/bay_leaf_pure.jpg", weight: "25g", price: "₹15", ingredient: savedIngredients[27]._id },
    { name: "Local Bay Leaf", image: "https://example.com/bay_leaf_local.jpg", weight: "100g", price: "₹45", ingredient: savedIngredients[27]._id },
    { name: "Farm Bay Leaf", image: "https://example.com/bay_leaf_farm.jpg", weight: "50g", price: "₹28", ingredient: savedIngredients[27]._id },
    { name: "Bansi Bay Leaf", image: "https://example.com/bay_leaf_bansi.jpg", weight: "25g", price: "₹12", ingredient: savedIngredients[27]._id },
    { name: "Nature's Bay Leaf", image: "https://example.com/bay_leaf_nature.jpg", weight: "100g", price: "₹55", ingredient: savedIngredients[27]._id },
    { name: "Golden Bay Leaf", image: "https://example.com/bay_leaf_golden.jpg", weight: "50g", price: "₹27", ingredient: savedIngredients[27]._id },
    { name: "Desi Bay Leaf Classic", image: "https://example.com/bay_leaf_desi.jpg", weight: "25g", price: "₹10", ingredient: savedIngredients[27]._id },
    // Cloves (10 products)
    { name: "Everest Cloves", image: "https://example.com/cloves_everest.jpg", weight: "50g", price: "₹80", ingredient: savedIngredients[28]._id },
    { name: "MDH Cloves", image: "https://example.com/cloves_mdh.jpg", weight: "100g", price: "₹150", ingredient: savedIngredients[28]._id },
    { name: "Organic Cloves", image: "https://example.com/cloves_organic.jpg", weight: "50g", price: "₹90", ingredient: savedIngredients[28]._id },
    { name: "Pure Cloves Premium", image: "https://example.com/cloves_pure.jpg", weight: "25g", price: "₹45", ingredient: savedIngredients[28]._id },
    { name: "Local Cloves", image: "https://example.com/cloves_local.jpg", weight: "100g", price: "₹140", ingredient: savedIngredients[28]._id },
    { name: "Farm Cloves", image: "https://example.com/cloves_farm.jpg", weight: "50g", price: "₹85", ingredient: savedIngredients[28]._id },
    { name: "Bansi Cloves", image: "https://example.com/cloves_bansi.jpg", weight: "25g", price: "₹40", ingredient: savedIngredients[28]._id },
    { name: "Nature's Cloves", image: "https://example.com/cloves_nature.jpg", weight: "100g", price: "₹155", ingredient: savedIngredients[28]._id },
    { name: "Golden Cloves", image: "https://example.com/cloves_golden.jpg", weight: "50g", price: "₹88", ingredient: savedIngredients[28]._id },
    { name: "Desi Cloves Classic", image: "https://example.com/cloves_desi.jpg", weight: "25g", price: "₹42", ingredient: savedIngredients[28]._id },
    // Cardamom (10 products)
    { name: "Everest Cardamom", image: "https://example.com/cardamom_everest.jpg", weight: "100g", price: "50g", ingredient: savedIngredients[29]._id },
    { name: "MDH Cardamom", image: "https://example.com/cardamom_mdh.jpg", weight: "100g", price: "₹380", ingredient: savedIngredients[29]._id },
    { name: "Organic Cardamom", image: "https://example.com/cardamom_organic.jpg", weight: "50g", price: "₹220", ingredient: savedIngredients[29]._id },
    { name: "Pure Cardamom Premium", image: "https://example.com/cardamom_pure.jpg", weight: "25g", price: "₹110", ingredient: savedIngredients[29]._id },
    { name: "Local Cardamom", image: "https://example.com/cardamom_local.jpg", weight: "100g", price: "₹360", ingredient: savedIngredients[29]._id },
    { name: "Farm Cardamom", image: "https://example.com/cardamom_farm.jpg", weight: "50g", price: "₹210", ingredient: savedIngredients[29]._id },
    { name: "Bansi Cardamom", image: "https://example.com/cardamom_bansi.jpg", weight: "25g", price: "₹100", ingredient: savedIngredients[29]._id },
    { name: "Nature's Cardamom", image: "https://example.com/cardamom_nature.jpg", weight: "100g", price: "₹390", ingredient: savedIngredients[29]._id },
    { name: "Golden Cardamom", image: "https://example.com/cardamom_golden.jpg", weight: "50g", price: "₹215", ingredient: savedIngredients[29]._id },
    { name: "Desi Cardamom Classic", image: "https://example.com/cardamom_desi.jpg", weight: "25g", price: "₹105", ingredient: savedIngredients[29]._id },
    // Cinnamon (10 products)
    { name: "Everest Cinnamon", image: "https://example.com/cinnamon_everest.jpg", weight: "50g", price: "₹60", ingredient: savedIngredients[30]._id },
    { name: "MDH Cinnamon", image: "https://example.com/cinnamon_mdh.jpg", weight: "100g", price: "₹110", ingredient: savedIngredients[30]._id },
    { name: "Organic Cinnamon", image: "https://example.com/cinnamon_organic.jpg", weight: "50g", price: "₹70", ingredient: savedIngredients[30]._id },
    { name: "Pure Cinnamon Premium", image: "https://example.com/cinnamon_pure.jpg", weight: "25g", price: "₹35", ingredient: savedIngredients[30]._id },
    { name: "Local Cinnamon", image: "https://example.com/cinnamon_local.jpg", weight: "100g", price: "₹100", ingredient: savedIngredients[30]._id },
    { name: "Farm Cinnamon", image: "https://example.com/cinnamon_farm.jpg", weight: "50g", price: "₹65", ingredient: savedIngredients[30]._id },
    { name: "Bansi Cinnamon", image: "https://example.com/cinnamon_bansi.jpg", weight: "25g", price: "₹30", ingredient: savedIngredients[30]._id },
    { name: "Nature's Cinnamon", image: "https://example.com/cinnamon_nature.jpg", weight: "100g", price: "₹115", ingredient: savedIngredients[30]._id },
    { name: "Golden Cinnamon", image: "https://example.com/cinnamon_golden.jpg", weight: "50g", price: "₹68", ingredient: savedIngredients[30]._id },
    { name: "Desi Cinnamon Classic", image: "https://example.com/cinnamon_desi.jpg", weight: "25g", price: "₹32", ingredient: savedIngredients[30]._id },
    // Black Pepper (10 products)
    { name: "Everest Black Pepper", image: "https://example.com/blackpepper_everest.jpg", weight: "100g", price: "₹90", ingredient: savedIngredients[31]._id },
    { name: "MDH Black Pepper", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/18917a.jpg?ts=1697628350", weight: "200g", price: "₹170", ingredient: savedIngredients[31]._id },
    { name: "Organic Black Pepper", image: "https://example.com/black_pepper_organic.jpg", weight: "100g", price: "₹100", ingredient: savedIngredients[31]._id },
    { name: "Pure Black Pepper Premium", image: "https://example.com/black_pepper_pure.jpg", weight: "50g", price: "₹50", ingredient: savedIngredients[31]._id },
    { name: "Local Black Pepper", image: "https://example.com/black_pepper_local.jpg", weight: "200g", price: "₹160", ingredient: savedIngredients[31]._id },
    { name: "Farm Black Pepper", image: "https://example.com/black_pepper_farm.jpg", weight: "100g", price: "₹95", ingredient: savedIngredients[31]._id },
    { name: "Bansi Black Pepper", image: "https://example.com/black_pepper_bansi.jpg", weight: "50g", price: "₹45", ingredient: savedIngredients[31]._id },
    { name: "Nature's Black Pepper", image: "https://example.com/black_pepper_nature.jpg", weight: "200g", price: "₹175", ingredient: savedIngredients[31]._id },
    { name: "Golden Black Pepper", image: "https://example.com/black_pepper_golden.jpg", weight: "100g", price: "₹98", ingredient: savedIngredients[31]._id },
    { name: "Desi Black Pepper Classic", image: "https://example.com/black_pepper_desi.jpg", weight: "50g", price: "₹48", ingredient: savedIngredients[31]._id },
    // Green Chili (10 products)
    { name: "Fresh Green Chili", image: "https://example.com/green_chili_fresh.jpg", weight: "100g", price: "₹25", ingredient: savedIngredients[32]._id },
    { name: "Organic Green Chili", image: "https://example.com/green_chili_organic.jpg", weight: "200g", price: "₹50", ingredient: savedIngredients[32]._id },
    { name: "Farm Green Chili", image: "https://example.com/green_chili_farm.jpg", weight: "50g", price: "₹15", ingredient: savedIngredients[32]._id },
    { name: "Big Basket Green Chili", image: "https://example.com/green_chili_bigbasket.jpg", weight: "100g", price: "₹28", ingredient: savedIngredients[32]._id },
    { name: "Nature's Green Chili", image: "https://example.com/green_chili_nature.jpg", weight: "200g", price: "₹55", ingredient: savedIngredients[32]._id },
    { name: "Local Green Chili", image: "https://example.com/green_chili_local.jpg", weight: "100g", price: "₹22", ingredient: savedIngredients[32]._id },
    { name: "Pure Green Chili Select", image: "https://example.com/green_chili_pure.jpg", weight: "50g", price: "₹12", ingredient: savedIngredients[32]._id },
    { name: "Desi Green Chili", image: "https://example.com/green_chili_desi.jpg", weight: "100g", price: "₹25", ingredient: savedIngredients[32]._id },
    { name: "Golden Green Chili", image: "https://example.com/green_chili_golden.jpg", weight: "200g", price: "₹50", ingredient: savedIngredients[32], ingredient: savedIngredients[32]._id },
    { name: "Premium Green Chili", image: "https://example.com/green_chili_premium.jpg", weight: "100g", price: "₹30", ingredient: savedIngredients[32]._id },
    // Curry Leaves (10 products)
    { name: "Fresh Curry Leaves", image: "https://example.com/curry_leaves_fresh.jpg", weight: "50g", price: "₹20", ingredient: savedIngredients[33]._id },
    { name: "Organic Curry Leaves", image: "https://example.com/curry_leaves_organic.jpg", weight: "100g", price: "₹35", ingredient: savedIngredients[33]._id },
    { name: "Farm Curry Leaves", image: "https://example.com/curry_leaves_farm.jpg", weight: "25g", price: "₹12", ingredient: savedIngredients[33]._id },
    { name: "Big Basket Curry Leaves", image: "https://example.com/curry_leaves_bigbasket.jpg", weight: "50g", price: "₹22", ingredient: savedIngredients[33]._id },
    { name: "Nature's Curry Leaves", image: "https://example.com/curry_leaves_nature.jpg", weight: "100g", price: "₹40", ingredient: savedIngredients[33]._id },
    { name: "Local Curry Leaves", image: "https://example.com/curry_leaves_local.jpg", weight: "50g", price: "₹15", ingredient: savedIngredients[33]._id },
    { name: "Pure Curry Leaves Select", image: "https://example.com/curry_leaves_pure.jpg", weight: "25g", price: "₹10", ingredient: savedIngredients[33]._id },
    { name: "Desi Curry Leaves", image: "https://example.com/curry_leaves_desi.jpg", weight: "50g", price: "₹20", ingredient: savedIngredients[33]._id },
    { name: "Golden Curry Leaves", image: "https://example.com/curry_leaves_golden.jpg", weight: "100g", price: "₹38", ingredient: savedIngredients[33]._id },
    { name: "Premium Curry Leaves", image: "https://example.com/curry_leaves_premium.jpg", weight: "50g", price: "₹25", ingredient: savedIngredients[33]._id },
 
 
 
 // Tamarind (continuing, 8 more products)
    { name: "Pure Tamarind Premium", image: "https://example.com/tamarind_pure.jpg", weight: "1kg", price: "₹200", ingredient: savedIngredients[34]._id },
    { name: "Nature's Tamarind", image: "https://example.com/tamarind_nature.jpg", weight: "500g", price: "₹120", ingredient: savedIngredients[34]._id },
    { name: "Golden Tamarind", image: "https://example.com/tamarind_golden.jpg", weight: "200g", price: "₹55", ingredient: savedIngredients[34]._id },
    { name: "Desi Tamarind Classic", image: "https://example.com/tamarind_desi.jpg", weight: "1kg", price: "₹190", ingredient: savedIngredients[34]._id },
    { name: "Organic Tamarind", image: "https://example.com/tamarind_organic.jpg", weight: "500g", price: "₹130", ingredient: savedIngredients[34]._id },
    { name: "Bansi Tamarind", image: "https://example.com/tamarind_bansi.jpg", weight: "200g", price: "₹48", ingredient: savedIngredients[34]._id },
    { name: "Everest Tamarind Paste", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/22c06e44-417a-4ead-8872-5b2a625973ae.jpg?ts=1707312311", weight: "400g", price: "₹100", ingredient: savedIngredients[34]._id },
    { name: "Premium Tamarind", image: "https://example.com/tamarind_premium.jpg", weight: "1kg", price: "₹210", ingredient: savedIngredients[34]._id },
    // Coconut Milk (10 products)
    { name: "Biona Organic Coconut Milk", image: "https://example.com/coconut_milk_biona.jpg", weight: "400ml", price: "₹250", ingredient: savedIngredients[35]._id },
    { name: "Dabur Hommade Coconut Milk", image: "https://example.com/coconut_milk_dabur.jpg", weight: "200ml", price: "₹120", ingredient: savedIngredients[35]._id },
    { name: "Pure Coconut Milk", image: "https://example.com/coconut_milk_pure.jpg", weight: "400ml", price: "₹240", ingredient: savedIngredients[35]._id },
    { name: "Nature's Coconut Milk", image: "https://example.com/coconut_milk_nature.jpg", weight: "200ml", price: "₹110", ingredient: savedIngredients[35]._id },
    { name: "Local Coconut Milk", image: "https://example.com/coconut_milk_local.jpg", weight: "400ml", price: "₹230", ingredient: savedIngredients[35]._id },
    { name: "Farm Fresh Coconut Milk", image: "https://example.com/coconut_milk_farm.jpg", weight: "200ml", price: "₹115", ingredient: savedIngredients[35]._id },
    { name: "Golden Coconut Milk", image: "https://example.com/coconut_milk_golden.jpg", weight: "400ml", price: "₹260", ingredient: savedIngredients[35]._id },
    { name: "Desi Coconut Milk", image: "https://example.com/coconut_milk_desi.jpg", weight: "200ml", price: "₹105", ingredient: savedIngredients[35]._id },
    { name: "Premium Coconut Milk", image: "https://example.com/coconut_milk_premium.jpg", weight: "400ml", price: "₹270", ingredient: savedIngredients[35]._id },
    { name: "Organic Coconut Milk", image: "https://example.com/coconut_milk_organic.jpg", weight: "200ml", price: "₹125", ingredient: savedIngredients[35]._id },
    // Cashew Nuts (10 products)
    { name: "Bansi Cashew Nuts", image: "https://example.com/cashew_bansi.jpg", weight: "250g", price: "₹350", ingredient: savedIngredients[36]._id },
    { name: "Organic Cashew Nuts", image: "https://example.com/cashew_organic.jpg", weight: "500g", price: "₹700", ingredient: savedIngredients[36]._id },
    { name: "Pure Cashew Premium", image: "https://example.com/cashew_pure.jpg", weight: "100g", price: "₹150", ingredient: savedIngredients[36]._id },
    { name: "Nature's Cashew Nuts", image: "https://example.com/cashew_nature.jpg", weight: "250g", price: "₹360", ingredient: savedIngredients[36]._id },
    { name: "Local Cashew Nuts", image: "https://example.com/cashew_local.jpg", weight: "500g", price: "₹680", ingredient: savedIngredients[36]._id },
    { name: "Farm Cashew Nuts", image: "https://example.com/cashew_farm.jpg", weight: "100g", price: "₹145", ingredient: savedIngredients[36]._id },
    { name: "Golden Cashew Nuts", image: "https://example.com/cashew_golden.jpg", weight: "250g", price: "₹370", ingredient: savedIngredients[36]._id },
    { name: "Desi Cashew Classic", image: "https://example.com/cashew_desi.jpg", weight: "500g", price: "₹690", ingredient: savedIngredients[36]._id },
    { name: "Premium Cashew Nuts", image: "https://example.com/cashew_premium.jpg", weight: "100g", price: "₹160", ingredient: savedIngredients[36]._id },
    { name: "Roasted Cashew Nuts", image: "https://example.com/cashew_roasted.jpg", weight: "250g", price: "₹380", ingredient: savedIngredients[36]._id },
    // Almonds (10 products)
    { name: "Bansi Almonds", image: "https://example.com/almond_bansi.jpg", weight: "250g", price: "₹400", ingredient: savedIngredients[37]._id },
    { name: "Organic Almonds", image: "https://example.com/almond_organic.jpg", weight: "500g", price: "₹800", ingredient: savedIngredients[37]._id },
    { name: "Pure Almond Premium", image: "https://example.com/almond_pure.jpg", weight: "100g", price: "₹180", ingredient: savedIngredients[37]._id },
    { name: "Nature's Almonds", image: "https://example.com/almond_nature.jpg", weight: "250g", price: "₹410", ingredient: savedIngredients[37]._id },
    { name: "Local Almonds", image: "https://example.com/almond_local.jpg", weight: "500g", price: "₹780", ingredient: savedIngredients[37]._id },
    { name: "Farm Almonds", image: "https://example.com/almond_farm.jpg", weight: "100g", price: "₹170", ingredient: savedIngredients[37]._id },
    { name: "Golden Almonds", image: "https://example.com/almond_golden.jpg", weight: "250g", price: "₹420", ingredient: savedIngredients[37]._id },
    { name: "Desi Almond Classic", image: "https://example.com/almond_desi.jpg", weight: "500g", price: "₹790", ingredient: savedIngredients[37]._id },
    { name: "Premium Almonds", image: "https://example.com/almond_premium.jpg", weight: "100g", price: "₹190", ingredient: savedIngredients[37]._id },
    { name: "Roasted Almonds", image: "https://example.com/almond_roasted.jpg", weight: "250g", price: "₹430", ingredient: savedIngredients[37]._id },
    // Yogurt (10 products)
    { name: "Amul Yogurt", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/f17db04c-0e5c-490e-99c1-be0ccbd8d558.jpg?ts=1708592504", weight: "400g", price: "₹60", ingredient: savedIngredients[38]._id },
    { name: "Mother Dairy Yogurt", image: "https://example.com/yogurt_motherdairy.jpg", weight: "1kg", price: "₹140", ingredient: savedIngredients[38]._id },
    { name: "Organic Yogurt", image: "https://example.com/yogurt_organic.jpg", weight: "500g", price: "₹80", ingredient: savedIngredients[38]._id },
    { name: "Pure Yogurt Premium", image: "https://example.com/yogurt_pure.jpg", weight: "200g", price: "₹35", ingredient: savedIngredients[38]._id },
    { name: "Local Yogurt", image: "https://example.com/yogurt_local.jpg", weight: "1kg", price: "₹130", ingredient: savedIngredients[38]._id },
    { name: "Farm Fresh Yogurt", image: "https://example.com/yogurt_farm.jpg", weight: "400g", price: "₹65", ingredient: savedIngredients[38]._id },
    { name: "Nature's Yogurt", image: "https://example.com/yogurt_nature.jpg", weight: "500g", price: "₹85", ingredient: savedIngredients[38]._id },
    { name: "Golden Yogurt", image: "https://example.com/yogurt_golden.jpg", weight: "200g", price: "₹40", ingredient: savedIngredients[38]._id },
    { name: "Desi Yogurt Classic", image: "https://example.com/yogurt_desi.jpg", weight: "1kg", price: "₹150", ingredient: savedIngredients[38]._id },
    { name: "Premium Yogurt", image: "https://example.com/yogurt_premium.jpg", weight: "400g", price: "₹70", ingredient: savedIngredients[38]._id },
    // Ghee (10 products)
    { name: "Amul Ghee", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/15520a.jpg?ts=1698063512", weight: "500ml", price: "₹320", ingredient: savedIngredients[39]._id },
    { name: "Mother Dairy Ghee", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/506697a.jpg?ts=1698063888", weight: "1L", price: "₹600", ingredient: savedIngredients[39]._id },
    { name: "Organic Ghee", image: "https://example.com/ghee_organic.jpg", weight: "500ml", price: "₹350", ingredient: savedIngredients[39]._id },
    { name: "Pure Ghee Premium", image: "https://example.com/ghee_pure.jpg", weight: "200ml", price: "₹150", ingredient: savedIngredients[39]._id },
    { name: "Local Ghee", image: "https://example.com/ghee_local.jpg", weight: "1L", price: "₹580", ingredient: savedIngredients[39]._id },
    { name: "Farm Fresh Ghee", image: "https://example.com/ghee_farm.jpg", weight: "500ml", price: "₹330", ingredient: savedIngredients[39]._id },
    { name: "Nature's Ghee", image: "https://example.com/ghee_nature.jpg", weight: "200ml", price: "₹160", ingredient: savedIngredients[39]._id },
    { name: "Golden Ghee", image: "https://example.com/ghee_golden.jpg", weight: "1L", price: "₹610", ingredient: savedIngredients[39]._id },
    { name: "Desi Ghee Classic", image: "https://example.com/ghee_desi.jpg", weight: "500ml", price: "₹340", ingredient: savedIngredients[39]._id },
    { name: "Premium Ghee", image: "https://example.com/ghee_premium.jpg", weight: "200ml", price: "₹170", ingredient: savedIngredients[39]._id },
    // Red Kidney Beans (10 products)
    { name: "Bansi Rajma", image: "https://example.com/rajma_bansi.jpg", weight: "1kg", price: "₹150", ingredient: savedIngredients[40]._id },
    { name: "Organic Rajma", image: "https://example.com/rajma_organic.jpg", weight: "500g", price: "₹80", ingredient: savedIngredients[40]._id },
    { name: "Pure Rajma Premium", image: "https://example.com/rajma_pure.jpg", weight: "2kg", price: "₹290", ingredient: savedIngredients[40]._id },
    { name: "Nature's Rajma", image: "https://example.com/rajma_nature.jpg", weight: "1kg", price: "₹160", ingredient: savedIngredients[40]._id },
    { name: "Local Rajma", image: "https://example.com/rajma_local.jpg", weight: "500g", price: "₹75", ingredient: savedIngredients[40]._id },
    { name: "Farm Rajma", image: "https://example.com/rajma_farm.jpg", weight: "2kg", price: "₹280", ingredient: savedIngredients[40]._id },
    { name: "Golden Rajma", image: "https://example.com/rajma_golden.jpg", weight: "1kg", price: "₹170", ingredient: savedIngredients[40]._id },
    { name: "Desi Rajma Classic", image: "https://example.com/rajma_desi.jpg", weight: "500g", price: "₹70", ingredient: savedIngredients[40]._id },
    { name: "Premium Rajma", image: "https://example.com/rajma_premium.jpg", weight: "2kg", price: "₹300", ingredient: savedIngredients[40]._id },
    { name: "Tata Sampann Rajma", image: "https://example.com/rajma_tata.jpg", weight: "1kg", price: "₹165", ingredient: savedIngredients[40]._id },
    // Chickpea Flour (10 products)
    { name: "Bansi Besan", image: "https://example.com/besan_bansi.jpg", weight: "1kg", price: "₹120", ingredient: savedIngredients[41]._id },
    { name: "Organic Besan", image: "https://example.com/besan_organic.jpg", weight: "500g", price: "₹65", ingredient: savedIngredients[41]._id },
    { name: "Pure Besan Premium", image: "https://example.com/besan_pure.jpg", weight: "2kg", price: "₹230", ingredient: savedIngredients[41]._id },
    { name: "Nature's Besan", image: "https://example.com/besan_nature.jpg", weight: "1kg", price: "₹130", ingredient: savedIngredients[41]._id },
    { name: "Local Besan", image: "https://example.com/besan_local.jpg", weight: "500g", price: "₹60", ingredient: savedIngredients[41]._id },
    { name: "Farm Besan", image: "https://example.com/besan_farm.jpg", weight: "2kg", price: "₹220", ingredient: savedIngredients[41]._id },
    { name: "Golden Besan", image: "https://example.com/besan_golden.jpg", weight: "1kg", price: "₹140", ingredient: savedIngredients[41]._id },
    { name: "Desi Besan Classic", image: "https://example.com/besan_desi.jpg", weight: "500g", price: "₹55", ingredient: savedIngredients[41]._id },
    { name: "Premium Besan", image: "https://example.com/besan_premium.jpg", weight: "2kg", price: "₹240", ingredient: savedIngredients[41]._id },
    { name: "Tata Sampann Besan", image: "https://example.com/besan_tata.jpg", weight: "1kg", price: "₹135", ingredient: savedIngredients[41]._id },
    // Fenugreek Leaves (10 products)
    { name: "Fresh Fenugreek Leaves", image: "https://example.com/fenugreek_fresh.jpg", weight: "100g", price: "₹30", ingredient: savedIngredients[42]._id },
    { name: "Organic Fenugreek Leaves", image: "https://example.com/fenugreek_organic.jpg", weight: "200g", price: "₹60", ingredient: savedIngredients[42]._id },
    { name: "Dried Fenugreek Leaves", image: "https://example.com/fenugreek_dried.jpg", weight: "50g", price: "₹25", ingredient: savedIngredients[42]._id },
    { name: "Nature's Fenugreek Leaves", image: "https://example.com/fenugreek_nature.jpg", weight: "100g", price: "₹35", ingredient: savedIngredients[42]._id },
    { name: "Local Fenugreek Leaves", image: "https://example.com/fenugreek_local.jpg", weight: "200g", price: "₹55", ingredient: savedIngredients[42]._id },
    { name: "Farm Fenugreek Leaves", image: "https://example.com/fenugreek_farm.jpg", weight: "50g", price: "₹20", ingredient: savedIngredients[42]._id },
    { name: "Golden Fenugreek Leaves", image: "https://example.com/fenugreek_golden.jpg", weight: "100g", price: "₹40", ingredient: savedIngredients[42]._id },
    { name: "Desi Fenugreek Leaves", image: "https://example.com/fenugreek_desi.jpg", weight: "200g", price: "₹65", ingredient: savedIngredients[42]._id },
    { name: "Premium Fenugreek Leaves", image: "https://example.com/fenugreek_premium.jpg", weight: "50g", price: "₹30", ingredient: savedIngredients[42]._id },
    { name: "Pure Fenugreek Leaves", image: "https://example.com/fenugreek_pure.jpg", weight: "100g", price: "₹38", ingredient: savedIngredients[42]._id },
    // Mustard Oil (10 products)
    { name: "Fortune Mustard Oil", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6bf283d2-4bd0-41e9-9305-db2acb94ce8f.jpg?ts=1747743709", weight: "1L", price: "₹180", ingredient: savedIngredients[43]._id },
    { name: "Organic Mustard Oil", image: "https://example.com/mustardoil_organic.jpg", weight: "500ml", price: "₹100", ingredient: savedIngredients[43]._id },
    { name: "Pure Mustard Oil Premium", image: "https://example.com/mustardoil_pure.jpg", weight: "2L", price: "₹350", ingredient: savedIngredients[43]._id },
    { name: "Nature's Mustard Oil", image: "https://example.com/mustardoil_nature.jpg", weight: "1L", price: "₹190", ingredient: savedIngredients[43]._id },
    { name: "Local Mustard Oil", image: "https://example.com/mustardoil_local.jpg", weight: "500ml", price: "₹95", ingredient: savedIngredients[43]._id },
    { name: "Farm Mustard Oil", image: "https://example.com/mustardoil_farm.jpg", weight: "2L", price: "₹340", ingredient: savedIngredients[43]._id },
    { name: "Golden Mustard Oil", image: "https://example.com/mustardoil_golden.jpg", weight: "1L", price: "₹200", ingredient: savedIngredients[43]._id },
    { name: "Desi Mustard Oil Classic", image: "https://example.com/mustardoil_desi.jpg", weight: "500ml", price: "₹90", ingredient: savedIngredients[43]._id },
    { name: "Premium Mustard Oil", image: "https://example.com/mustardoil_premium.jpg", weight: "2L", price: "₹360", ingredient: savedIngredients[43]._id },
    { name: "Dabur Mustard Oil", image: "https://example.com/mustardoil_dabur.jpg", weight: "1L", price: "₹195", ingredient: savedIngredients[43]._id },
    // Saffron (10 products)
    { name: "Lion Saffron", image: "https://example.com/saffron_lion.jpg", weight: "1g", price: "₹400", ingredient: savedIngredients[44]._id },
    { name: "Organic Saffron", image: "https://example.com/saffron_organic.jpg", weight: "2g", price: "₹800", ingredient: savedIngredients[44]._id },
    { name: "Pure Saffron Premium", image: "https://example.com/saffron_pure.jpg", weight: "0.5g", price: "₹200", ingredient: savedIngredients[44]._id },
    { name: "Nature's Saffron", image: "https://example.com/saffron_nature.jpg", weight: "1g", price: "₹420", ingredient: savedIngredients[44]._id },
    { name: "Local Saffron", image: "https://example.com/saffron_local.jpg", weight: "2g", price: "₹780", ingredient: savedIngredients[44]._id },
    { name: "Farm Saffron", image: "https://example.com/saffron_farm.jpg", weight: "0.5g", price: "₹190", ingredient: savedIngredients[44]._id },
    { name: "Golden Saffron", image: "https://example.com/saffron_golden.jpg", weight: "1g", price: "₹430", ingredient: savedIngredients[44]._id },
    { name: "Desi Saffron Classic", image: "https://example.com/saffron_desi.jpg", weight: "2g", price: "₹790", ingredient: savedIngredients[44]._id },
    { name: "Premium Saffron", image: "https://example.com/saffron_premium.jpg", weight: "0.5g", price: "₹210", ingredient: savedIngredients[44]._id },
    { name: "Baby Saffron", image: "https://example.com/saffron_baby.jpg", weight: "1g", price: "₹410", ingredient: savedIngredients[44]._id },
    // Jaggery (10 products)
    { name: "Bansi Jaggery", image: "https://example.com/jaggery_bansi.jpg", weight: "1kg", price: "₹100", ingredient: savedIngredients[45]._id },
    { name: "Organic Jaggery", image: "https://example.com/jaggery_organic.jpg", weight: "500g", price: "₹60", ingredient: savedIngredients[45]._id },
    { name: "Pure Jaggery Premium", image: "https://example.com/jaggery_pure.jpg", weight: "2kg", price: "₹190", ingredient: savedIngredients[45]._id },
    { name: "Nature's Jaggery", image: "https://example.com/jaggery_nature.jpg", weight: "1kg", price: "₹110", ingredient: savedIngredients[45]._id },
    { name: "Local Jaggery", image: "https://example.com/jaggery_local.jpg", weight: "500g", price: "₹55", ingredient: savedIngredients[45]._id },
    { name: "Farm Jaggery", image: "https://example.com/jaggery_farm.jpg", weight: "2kg", price: "₹180", ingredient: savedIngredients[45]._id },
    { name: "Golden Jaggery", image: "https://example.com/jaggery_golden.jpg", weight: "1kg", price: "₹120", ingredient: savedIngredients[45]._id },
    { name: "Desi Jaggery Classic", image: "https://example.com/jaggery_desi.jpg", weight: "500g", price: "₹50", ingredient: savedIngredients[45]._id },
    { name: "Premium Jaggery", image: "https://example.com/jaggery_premium.jpg", weight: "2kg", price: "₹200", ingredient: savedIngredients[45]._id },
    { name: "Tata Sampann Jaggery", image: "https://example.com/jaggery_tata.jpg", weight: "1kg", price: "₹115", ingredient: savedIngredients[45]._id },
    // Mutton (10 products)
    { name: "Fresh Mutton", image: "https://example.com/mutton_fresh.jpg", weight: "1kg", price: "₹800", ingredient: savedIngredients[46]._id },
    { name: "Organic Mutton", image: "https://example.com/mutton_organic.jpg", weight: "500g", price: "₹420", ingredient: savedIngredients[46]._id },
    { name: "Pure Mutton Premium", image: "https://example.com/mutton_pure.jpg", weight: "2kg", price: "₹1580", ingredient: savedIngredients[46]._id },
    { name: "Nature's Mutton", image: "https://example.com/mutton_nature.jpg", weight: "1kg", price: "₹820", ingredient: savedIngredients[46]._id },
    { name: "Local Mutton", image: "https://example.com/mutton_local.jpg", weight: "500g", price: "₹400", ingredient: savedIngredients[46]._id },
    { name: "Farm Mutton", image: "https://example.com/mutton_farm.jpg", weight: "2kg", price: "₹1560", ingredient: savedIngredients[46]._id },
    { name: "Golden Mutton", image: "https://example.com/mutton_golden.jpg", weight: "1kg", price: "₹830", ingredient: savedIngredients[46]._id },
    { name: "Desi Mutton Classic", image: "https://example.com/mutton_desi.jpg", weight: "500g", price: "₹410", ingredient: savedIngredients[46]._id },
    { name: "Premium Mutton", image: "https://example.com/mutton_premium.jpg", weight: "2kg", price: "₹1600", ingredient: savedIngredients[46]._id },
    { name: "Big Basket Mutton", image: "https://example.com/mutton_bigbasket.jpg", weight: "1kg", price: "₹810", ingredient: savedIngredients[46]._id },
    // Egg (10 products)
    { name: "Fresh Eggs", image: "https://example.com/egg_fresh.jpg", weight: "12pcs", price: "₹90", ingredient: savedIngredients[47]._id },
    { name: "Organic Eggs", image: "https://example.com/egg_organic.jpg", weight: "6pcs", price: "₹50", ingredient: savedIngredients[47]._id },
    { name: "Pure Eggs Premium", image: "https://example.com/egg_pure.jpg", weight: "30pcs", price: "₹220", ingredient: savedIngredients[47]._id },
    { name: "Nature's Eggs", image: "https://example.com/egg_nature.jpg", weight: "12pcs", price: "₹95", ingredient: savedIngredients[47]._id },
    { name: "Local Eggs", image: "https://example.com/egg_local.jpg", weight: "6pcs", price: "₹45", ingredient: savedIngredients[47]._id },
    { name: "Farm Eggs", image: "https://example.com/egg_farm.jpg", weight: "30pcs", price: "₹210", ingredient: savedIngredients[47]._id },
    { name: "Golden Eggs", image: "https://example.com/egg_golden.jpg", weight: "12pcs", price: "₹100", ingredient: savedIngredients[47]._id },
    { name: "Desi Eggs Classic", image: "https://example.com/egg_desi.jpg", weight: "6pcs", price: "₹48", ingredient: savedIngredients[47]._id },
    { name: "Premium Eggs", image: "https://example.com/egg_premium.jpg", weight: "30pcs", price: "₹230", ingredient: savedIngredients[47]._id },
    { name: "Big Basket Eggs", image: "https://example.com/egg_bigbasket.jpg", weight: "12pcs", price: "₹92", ingredient: savedIngredients[47]._id },
    // Fish (10 products)
    { name: "Fresh Rohu Fish", image: "https://example.com/fish_rohu.jpg", weight: "1kg", price: "₹250", ingredient: savedIngredients[48]._id },
    { name: "Organic Fish", image: "https://example.com/fish_organic.jpg", weight: "500g", price: "₹130", ingredient: savedIngredients[48]._id },
    { name: "Pure Fish Premium", image: "https://example.com/fish_pure.jpg", weight: "2kg", price: "₹480", ingredient: savedIngredients[48]._id },
    { name: "Nature's Fish", image: "https://example.com/fish_nature.jpg", weight: "1kg", price: "₹260", ingredient: savedIngredients[48]._id },
    { name: "Local Fish", image: "https://example.com/fish_local.jpg", weight: "500g", price: "₹120", ingredient: savedIngredients[48]._id },
    { name: "Farm Fish", image: "https://example.com/fish_farm.jpg", weight: "2kg", price: "₹470", ingredient: savedIngredients[48]._id },
    { name: "Golden Fish", image: "https://example.com/fish_golden.jpg", weight: "1kg", price: "₹270", ingredient: savedIngredients[48]._id },
    { name: "Desi Fish Classic", image: "https://example.com/fish_desi.jpg", weight: "500g", price: "₹125", ingredient: savedIngredients[48]._id },
    { name: "Premium Fish", image: "https://example.com/fish_premium.jpg", weight: "2kg", price: "₹490", ingredient: savedIngredients[48]._id },
    { name: "Big Basket Fish", image: "https://example.com/fish_bigbasket.jpg", weight: "1kg", price: "₹255", ingredient: savedIngredients[48]._id },
    // Semolina (10 products)
    { name: "Bansi Semolina", image: "https://example.com/semolina_bansi.jpg", weight: "1kg", price: "₹60", ingredient: savedIngredients[49]._id },
    { name: "Organic Semolina", image: "https://example.com/semolina_organic.jpg", weight: "500g", price: "₹35", ingredient: savedIngredients[49]._id },
    { name: "Pure Semolina Premium", image: "https://example.com/semolina_pure.jpg", weight: "2kg", price: "₹110", ingredient: savedIngredients[49]._id },
    { name: "Nature's Semolina", image: "https://example.com/semolina_nature.jpg", weight: "1kg", price: "₹65", ingredient: savedIngredients[49]._id },
    { name: "Local Semolina", image: "https://example.com/semolina_local.jpg", weight: "500g", price: "₹30", ingredient: savedIngredients[49]._id },
    { name: "Farm Semolina", image: "https://example.com/semolina_farm.jpg", weight: "2kg", price: "₹100", ingredient: savedIngredients[49]._id },
    { name: "Golden Semolina", image: "https://example.com/semolina_golden.jpg", weight: "1kg", price: "₹70", ingredient: savedIngredients[49]._id },
    { name: "Desi Semolina Classic", image: "https://example.com/semolina_desi.jpg", weight: "500g", price: "₹32", ingredient: savedIngredients[49]._id },
    { name: "Premium Semolina", image: "https://example.com/semolina_premium.jpg", weight: "2kg", price: "₹120", ingredient: savedIngredients[49]._id },
    { name: "Tata Sampann Semolina", image: "https://example.com/semolina_tata.jpg", weight: "1kg", price: "₹68", ingredient: savedIngredients[49]._id },
    // Milk (10 products)
    { name: "Amul Milk", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142", weight: "1L", price: "₹70", ingredient: savedIngredients[50]._id },
    { name: "Mother Dairy Milk", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/ba929c05-aba2-4838-b674-e2072089022b.jpg?ts=1712325614", weight: "500ml", price: "₹35", ingredient: savedIngredients[50]._id },
    { name: "Organic Milk", image: "https://th.bing.com/th/id/OIP.zobmkUGuT87S73cbvv9xcwHaFf?o=7rm=3&rs=1&pid=ImgDetMain", weight: "1L", price: "₹90", ingredient: savedIngredients[50]._id },
    { name: "Pure Milk Premium", image: "https://example.com/milk_pure.jpg", weight: "2L", price: "₹140", ingredient: savedIngredients[50]._id },
    { name: "Local Milk", image: "https://example.com/milk_local.jpg", weight: "500ml", price: "₹30", ingredient: savedIngredients[50]._id },
    { name: "Farm Milk", image: "https://example.com/milk_farm.jpg", weight: "1L", price: "₹75", ingredient: savedIngredients[50]._id },
    { name: "Golden Milk", image: "https://example.com/milk_golden.jpg", weight: "2L", price: "₹150", ingredient: savedIngredients[50]._id },
    { name: "Desi Milk Classic", image: "https://example.com/milk_desi.jpg", weight: "500ml", price: "₹32", ingredient: savedIngredients[50]._id },
    { name: "Premium Milk", image: "https://example.com/milk_premium.jpg", weight: "1L", price: "₹80", ingredient: savedIngredients[50]._id },
    { name: "Nandini Milk", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f686d62b-7387-4026-b732-3baad3af2524.jpg", weight: "1L", price: "₹72", ingredient: savedIngredients[50]._id },
    // Salt (10 products)
    { name: "Tata Salt", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/167b98c4-9e70-4204-b618-fc3f29f16747.jpg?ts=1733299682", weight: "1kg", price: "₹25", ingredient: savedIngredients[51]._id },
    { name: "Organic Salt", image: "https://example.com/salt_organic.jpg", weight: "500g", price: "₹20", ingredient: savedIngredients[51]._id },
    { name: "Pure Salt Premium", image: "https://example.com/salt_pure.jpg", weight: "2kg", price: "₹45", ingredient: savedIngredients[51]._id },
    { name: "Nature's Salt", image: "https://example.com/salt_nature.jpg", weight: "1kg", price: "₹28", ingredient: savedIngredients[51]._id },
    { name: "Local Salt", image: "https://example.com/salt_local.jpg", weight: "500g", price: "₹15", ingredient: savedIngredients[51]._id },
    { name: "Farm Salt", image: "https://example.com/salt_farm.jpg", weight: "2kg", price: "₹40", ingredient: savedIngredients[51]._id },
    { name: "Golden Salt", image: "https://example.com/salt_golden.jpg", weight: "1kg", price: "₹30", ingredient: savedIngredients[51]._id },
    { name: "Desi Salt Classic", image: "https://example.com/salt_desi.jpg", weight: "500g", price: "₹18", ingredient: savedIngredients[51]._id },
    { name: "Premium Rock Salt", image: "https://example.com/salt_premium.jpg", weight: "2kg", price: "₹50", ingredient: savedIngredients[51]._id },
    { name: "Aashirvaad Salt", image: "https://example.com/salt_aashir.jpg", weight: "1kg", price: "₹27", ingredient: savedIngredients[51]._id },
    // Asafoetida (10 products)
    { name: "Everest Asafoetida", image: "https://example.com/asafoetida_everest.jpg", weight: "50g", price: "₹100", ingredient: savedIngredients[52]._id },
    { name: "MDH Asafoetida", image: "https://example.com/asafoetida_mdh.jpg", weight: "100g", price: "₹190", ingredient: savedIngredients[52]._id },
    { name: "Organic Asafoetida", image: "https://example.com/asafoetida_organic.jpg", weight: "25g", price: "₹60", ingredient: savedIngredients[52]._id },
    { name: "Pure Asafoetida Premium", image: "https://example.com/asafoetida_pure.jpg", weight: "50g", price: "₹110", ingredient: savedIngredients[52]._id },
    { name: "Local Asafoetida", image: "https://example.com/asafoetida_local.jpg", weight: "100g", price: "₹180", ingredient: savedIngredients[52]._id },
    { name: "Farm Asafoetida", image: "https://example.com/asafoetida_farm.jpg", weight: "25g", price: "₹55", ingredient: savedIngredients[52]._id },
    { name: "Golden Asafoetida", image: "https://example.com/asafoetida_golden.jpg", weight: "50g", price: "₹120", ingredient: savedIngredients[52]._id },
    { name: "Desi Asafoetida Classic", image: "https://example.com/asafoetida_desi.jpg", weight: "100g", price: "₹200", ingredient: savedIngredients[52]._id },
    { name: "Premium Asafoetida", image: "https://example.com/asafoetida_premium.jpg", weight: "25g", price: "₹65", ingredient: savedIngredients[52]._id },
    { name: "Bansi Asafoetida", image: "https://example.com/asafoetida_bansi.jpg", weight: "50g", price: "₹105", ingredient: savedIngredients[52]._id },
    // Fennel Seeds (10 products)
    { name: "Everest Fennel Seeds", image: "https://example.com/fennel_seeds_everest.jpg", weight: "100g", price: "₹50", ingredient: savedIngredients[53]._id },
    { name: "Organic Fennel Seeds", image: "https://example.com/fennel_seeds_organic.jpg", weight: "200g", price: "₹90", ingredient: savedIngredients[53]._id },
    { name: "Pure Fennel Seeds Premium", image: "https://example.com/fennel_seeds_pure.jpg", weight: "50g", price: "₹30", ingredient: savedIngredients[53]._id },
    { name: "Nature's Fennel Seeds", image: "https://example.com/fennel_seeds_nature.jpg", weight: "100g", price: "₹55", ingredient: savedIngredients[53]._id },
    { name: "Local Fennel Seeds", image: "https://example.com/fennel_seeds_local.jpg", weight: "200g", price: "₹85", ingredient: savedIngredients[53]._id },
    { name: "Farm Fennel Seeds", image: "https://example.com/fennel_seeds_farm.jpg", weight: "50g", price: "₹25", ingredient: savedIngredients[53]._id },
    { name: "Golden Fennel Seeds", image: "https://example.com/fennel_seeds_golden.jpg", weight: "100g", price: "₹60", ingredient: savedIngredients[53]._id },
    { name: "Desi Fennel Seeds Classic", image: "https://example.com/fennel_seeds_desi.jpg", weight: "200g", price: "₹95", ingredient: savedIngredients[53]._id },
    { name: "Premium Fennel Seeds", image: "https://example.com/fennel_seeds_premium.jpg", weight: "50g", price: "₹35", ingredient: savedIngredients[53]._id },
    { name: "MDH Fennel Seeds", image: "https://example.com/fennel_seeds_mdh.jpg", weight: "100g", price: "₹52", ingredient: savedIngredients[53]._id },
    // Star Anise (10 products)
    { name: "Everest Star Anise", image: "https://example.com/star_anise_everest.jpg", weight: "50g", price: "₹80", ingredient: savedIngredients[54]._id },
    { name: "Organic Star Anise", image: "https://example.com/star_anise_organic.jpg", weight: "100g", price: "₹150", ingredient: savedIngredients[54]._id },
    { name: "Pure Star Anise Premium", image: "https://example.com/star_anise_pure.jpg", weight: "25g", price: "₹45", ingredient: savedIngredients[54]._id },
    { name: "Nature's Star Anise", image: "https://example.com/star_anise_nature.jpg", weight: "50g", price: "₹85", ingredient: savedIngredients[54]._id },
    { name: "Local Star Anise", image: "https://example.com/star_anise_local.jpg", weight: "100g", price: "₹140", ingredient: savedIngredients[54]._id },
    { name: "Farm Star Anise", image: "https://example.com/star_anise_farm.jpg", weight: "25g", price: "₹40", ingredient: savedIngredients[54]._id },
    { name: "Golden Star Anise", image: "https://example.com/star_anise_golden.jpg", weight: "50g", price: "₹90", ingredient: savedIngredients[54]._id },
    { name: "Desi Star Anise Classic", image: "https://example.com/star_anise_desi.jpg", weight: "100g", price: "₹160", ingredient: savedIngredients[54]._id },
    { name: "Premium Star Anise", image: "https://example.com/star_anise_premium.jpg", weight: "25g", price: "₹50", ingredient: savedIngredients[54]._id },
    { name: "MDH Star Anise", image: "https://example.com/star_anise_mdh.jpg", weight: "50g", price: "₹82", ingredient: savedIngredients[54]._id },
    // Vinegar (10 products)
    { name: "Dabur Vinegar", image: "https://example.com/vinegar_dabur.jpg", weight: "500ml", price: "₹50", ingredient: savedIngredients[55]._id },
    { name: "Organic Vinegar", image: "https://example.com/vinegar_organic.jpg", weight: "1L", price: "₹100", ingredient: savedIngredients[55]._id },
    { name: "Pure Vinegar Premium", image: "https://example.com/vinegar_pure.jpg", weight: "250ml", price: "₹30", ingredient: savedIngredients[55]._id },
    { name: "Nature's Vinegar", image: "https://example.com/vinegar_nature.jpg", weight: "500ml", price: "₹55", ingredient: savedIngredients[55]._id },
    { name: "Local Vinegar", image: "https://example.com/vinegar_local.jpg", weight: "1L", price: "₹90", ingredient: savedIngredients[55]._id },
    { name: "Farm Vinegar", image: "https://example.com/vinegar_farm.jpg", weight: "250ml", price: "₹25", ingredient: savedIngredients[55]._id },
    { name: "Golden Vinegar", image: "https://example.com/vinegar_golden.jpg", weight: "500ml", price: "₹60", ingredient: savedIngredients[55]._id },
    { name: "Desi Vinegar Classic", image: "https://example.com/vinegar_desi.jpg", weight: "1L", price: "₹95", ingredient: savedIngredients[55]._id },
    { name: "Premium Vinegar", image: "https://example.com/vinegar_premium.jpg", weight: "250ml", price: "₹35", ingredient: savedIngredients[55]._id },
    { name: "American Garden Vinegar", image: "https://example.com/vinegar_american.jpg", weight: "500ml", price: "₹52", ingredient: savedIngredients[55]._id },
  ];

  await Product.insertMany(products);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 const dishes = [
  // Vegetarian - Regular (8 dishes)
  {
    name: "Pulao",
    image: "https://t4.ftcdn.net/jpg/04/18/22/71/360_F_418227121_mGoGy7ZE2jAkq07OnN599QU7PVuhVT57.jpg",
    ingredients: [
      savedIngredients[3]._id,   // Rice
      savedIngredients[9]._id,   // Green Peas
      savedIngredients[8]._id,   // Carrot
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[27]._id,  // Bay Leaf
      savedIngredients[30]._id,  // Cinnamon
      savedIngredients[16]._id,  // Coriander
      savedIngredients[51]._id,  // Salt
      savedIngredients[39]._id,  // Ghee
      savedIngredients[44]._id,  // Saffron
      savedIngredients[28]._id,  // Cloves
    ],
    category: "regular",
    type: "veg",
    description: "A fragrant rice dish cooked with green peas, carrots, and aromatic spices, perfect for a light meal."
  },
  {
    name: "Dal Tadka",
    image: "https://www.24mantra.com/wp-content/uploads/2021/03/824-x-465-26.png",
    ingredients: [
      savedIngredients[7]._id,   // Lentil
      savedIngredients[1]._id,   // Onion
      savedIngredients[16]._id,  // Coriander
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[39]._id,  // Ghee
      savedIngredients[2]._id,   // Tomato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[51]._id,  // Salt
      savedIngredients[52]._id,  // Asafoetida
      savedIngredients[33]._id,  // Curry Leaves
      savedIngredients[26]._id,  // Mustard Seeds
    ],
    category: "regular",
    type: "veg",
    description: "A comforting lentil dish tempered with garlic, onions, and spices, served with rice or roti."
  },
  {
    name: "Aloo Paratha",
    image: "https://media.istockphoto.com/id/1418692758/photo/north-indian-famous-food-aloo-paratha-with-mango-pickle-and-butter.jpg?s=612x612&w=0&k=20&c=JDbBS-5EcSOKUeossLW2NufdKE0Mg7zFZV5ZBLdbpUE=",
    ingredients: [
      savedIngredients[4]._id,   // Potato
      savedIngredients[17]._id,  // Wheat Flour
      savedIngredients[16]._id,  // Coriander
      savedIngredients[39]._id,  // Ghee
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[51]._id,  // Salt
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[11]._id,  // Ginger
      savedIngredients[24]._id,  // Coriander Powder
    ],
    category: "regular",
    type: "veg",
    description: "Whole wheat flatbread stuffed with spiced mashed potatoes, a North Indian breakfast favorite."
  },
  {
    name: "Butter Naan",
    image: "https://example.com/butternaan.jpg",
    ingredients: [
      savedIngredients[17]._id,  // Wheat Flour
      savedIngredients[19]._id,  // Butter
      savedIngredients[50]._id,  // Milk
      savedIngredients[51]._id,  // Salt
      savedIngredients[38]._id,  // Yogurt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[10]._id,  // Garlic
    ],
    category: "regular",
    type: "veg",
    description: "Soft and fluffy flatbread brushed with butter, perfect to pair with curries."
  },
  {
    name: "Vegetable Fried Rice",
    image: "https://example.com/vegfriedrice.jpg",
    ingredients: [
      savedIngredients[3]._id,   // Rice
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[15]._id,  // Beans
      savedIngredients[31]._id,  // Black Pepper
      savedIngredients[8]._id,   // Carrot
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[32]._id,  // Green Chili
    ],
    category: "regular",
    type: "veg",
    description: "A flavorful stir-fried rice dish loaded with capsicum, beans, and mild spices."
  },
  {
    name: "Poha",
    image: "https://example.com/poha.jpg",
    ingredients: [
      savedIngredients[3]._id,   // Rice (flattened)
      savedIngredients[1]._id,   // Onion
      savedIngredients[9]._id,   // Green Peas
      savedIngredients[26]._id,  // Mustard Seeds
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[16]._id,  // Coriander
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[33]._id,  // Curry Leaves
      savedIngredients[34]._id,  // Tamarind
      savedIngredients[21]._id,  // Cumin Seeds
    ],
    category: "regular",
    type: "veg",
    description: "Flattened rice cooked with onions, green peas, and a hint of spices, a light breakfast option."
  },
  {
    name: "Masala Dosa",
    image: "https://example.com/masaladosa.jpg",
    ingredients: [
      savedIngredients[3]._id,   // Rice
      savedIngredients[4]._id,   // Potato
      savedIngredients[1]._id,   // Onion
      savedIngredients[33]._id,  // Curry Leaves
      savedIngredients[35]._id,  // Coconut Milk
      savedIngredients[7]._id,   // Lentil
      savedIngredients[26]._id,  // Mustard Seeds
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[21]._id,  // Cumin Seeds
    ],
    category: "regular",
    type: "veg",
    description: "Crispy rice pancake filled with a spiced potato filling, served with chutney."
  },
  {
    name: "Upma",
    image: "https://example.com/upma.jpg",
    ingredients: [
      savedIngredients[49]._id,  // Semolina
      savedIngredients[8]._id,   // Carrot
      savedIngredients[16]._id,  // Coriander
      savedIngredients[26]._id,  // Mustard Seeds
      savedIngredients[33]._id,  // Curry Leaves
      savedIngredients[1]._id,   // Onion
      savedIngredients[9]._id,   // Green Peas
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[51]._id,  // Salt
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[52]._id,  // Asafoetida
    ],
    category: "regular",
    type: "veg",
    description: "A savory semolina porridge with carrots, coriander, and a touch of spices, ideal for breakfast."
  },
  // Vegetarian - Royal (8 dishes)
  {
    name: "Paneer Butter Masala",
    image: "https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg?w=2000",
    ingredients: [
      savedIngredients[5]._id,   // Paneer
      savedIngredients[19]._id,  // Butter
      savedIngredients[20]._id,  // Cream
      savedIngredients[2]._id,   // Tomato
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[36]._id,  // Cashew Nuts
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[29]._id,  // Cardamom
    ],
    category: "royal",
    type: "veg",
    description: "Creamy and rich paneer curry cooked in a buttery tomato-based gravy, a royal indulgence."
  },
  {
    name: "Palak Paneer",
    image: "https://img.freepik.com/premium-photo/indian-palak-paneer-curry_988987-25945.jpg",
    ingredients: [
      savedIngredients[6]._id,   // Spinach
      savedIngredients[5]._id,   // Paneer
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[2]._id,   // Tomato
      savedIngredients[51]._id,  // Salt
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[39]._id,  // Ghee
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[20]._id,  // Cream
    ],
    category: "royal",
    type: "veg",
    description: "Soft paneer cubes simmered in a vibrant spinach gravy, packed with flavor and nutrition."
  },
  {
    name: "Matar Paneer",
    image: "https://nishamadhulika.in/wp-content/uploads/2020/09/Matar-Paneer-Recipe.jpg",
    ingredients: [
      savedIngredients[9]._id,   // Green Peas
      savedIngredients[5]._id,   // Paneer
      savedIngredients[2]._id,   // Tomato
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[20]._id,  // Cream
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[36]._id,  // Cashew Nuts
    ],
    category: "royal",
    type: "veg",
    description: "A delightful curry with green peas and paneer in a rich tomato-based sauce."
  },
  {
    name: "Vegetable Biryani",
    image: "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
    ingredients: [
      savedIngredients[3]._id,   // Rice
      savedIngredients[8]._id,   // Carrot
      savedIngredients[15]._id,  // Beans
      savedIngredients[27]._id,  // Bay Leaf
      savedIngredients[44]._id,  // Saffron
      savedIngredients[9]._id,   // Green Peas
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[30]._id,  // Cinnamon
      savedIngredients[28]._id,  // Cloves
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[39]._id,  // Ghee
    ],
    category: "royal",
    type: "veg",
    description: "Aromatic basmati rice layered with mixed vegetables and exotic spices, a festive treat."
  },
  {
    name: "Kadhai Paneer",
    image: "https://static.vecteezy.com/system/resources/previews/029/641/065/non_2x/kadhai-paneer-in-black-kadhai-generative-ai-photo.jpeg",
    ingredients: [
      savedIngredients[5]._id,   // Paneer
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[10]._id,  // Garlic
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[1]._id,   // Onion
      savedIngredients[2]._id,   // Tomato
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[32]._id,  // Green Chili
    ],
    category: "royal",
    type: "veg",
    description: "Paneer and capsicum cooked in a spicy, aromatic kadhai masala, bursting with flavors."
  },
  {
    name: "Dal Makhani",
    image: "https://tse4.mm.bing.net/th?id=OIP.giZqQvtTXt3PFYe6G3MG7AHaE8&pid=Api&P=0&h=180",
    ingredients: [
      savedIngredients[7]._id,   // Lentil
      savedIngredients[19]._id,  // Butter
      savedIngredients[20]._id,  // Cream
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[36]._id,  // Cashew Nuts
      savedIngredients[1]._id,   // Onion
      savedIngredients[2]._id,   // Tomato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[39]._id,  // Ghee
      savedIngredients[29]._id,  // Cardamom
    ],
    category: "royal",
    type: "veg",
    description: "A creamy, slow-cooked lentil dish enriched with butter and cream, a Punjabi delicacy."
  },
  {
    name: "Malai Kofta",
    image: "https://example.com/malaikofta.jpg",
    ingredients: [
      savedIngredients[5]._id,   // Paneer
      savedIngredients[20]._id,  // Cream
      savedIngredients[2]._id,   // Tomato
      savedIngredients[36]._id,  // Cashew Nuts
      savedIngredients[44]._id,  // Saffron
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[37]._id,  // Almonds
      savedIngredients[39]._id,  // Ghee
    ],
    category: "royal",
    type: "veg",
    description: "Soft paneer dumplings in a rich, creamy tomato-based gravy, fit for royalty."
  },
  {
    name: "Shahi Paneer",
    image: "https://example.com/shahipaneer.jpg",
    ingredients: [
      savedIngredients[5]._id,   // Paneer
      savedIngredients[20]._id,  // Cream
      savedIngredients[11]._id,  // Ginger
      savedIngredients[37]._id,  // Almonds
      savedIngredients[44]._id,  // Saffron
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[2]._id,   // Tomato
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[36]._id,  // Cashew Nuts
      savedIngredients[39]._id,  // Ghee
    ],
    category: "royal",
    type: "veg",
    description: "Paneer in a luxurious, creamy gravy with a hint of ginger and spices, a royal treat."
  },
  // Vegetarian - Sabji (8 dishes)
  {
    name: "Chole",
    image: "https://example.com/chole.jpg",
    ingredients: [
      savedIngredients[0]._id,   // Chickpea
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[34]._id,  // Tamarind
      savedIngredients[2]._id,   // Tomato
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[52]._id,  // Asafoetida
    ],
    category: "sabji",
    type: "veg",
    description: "Spicy chickpea curry cooked with onions, garlic, and a blend of aromatic spices."
  },
  {
    name: "Aloo Gobi",
    image: "https://example.com/aloogobi.jpg",
    ingredients: [
      savedIngredients[4]._id,   // Potato
      savedIngredients[14]._id,  // Cauliflower
      savedIngredients[2]._id,   // Tomato
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[32]._id,  // Green Chili
    ],
    category: "sabji",
    type: "veg",
    description: "A classic dry curry of potatoes and cauliflower, flavored with tomatoes and spices."
  },
  {
    name: "Vegetable Stir Fry",
    image: "https://example.com/vegstirfry.jpg",
    ingredients: [
      savedIngredients[8]._id,   // Carrot
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[15]._id,  // Beans
      savedIngredients[31]._id,  // Black Pepper
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[26]._id,  // Mustard Seeds
      savedIngredients[33]._id,  // Curry Leaves
    ],
    category: "sabji",
    type: "veg",
    description: "A quick stir-fry of carrots, capsicum, and beans, lightly spiced for a fresh taste."
  },
  {
    name: "Cabbage Sabzi",
    image: "https://example.com/cabbagesabzi.jpg",
    ingredients: [
      savedIngredients[13]._id,  // Cabbage
      savedIngredients[2]._id,   // Tomato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[1]._id,   // Onion
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[26]._id,  // Mustard Seeds
      savedIngredients[9]._id,   // Green Peas
    ],
    category: "sabji",
    type: "veg",
    description: "A simple yet flavorful stir-fry of cabbage with tomatoes and garlic."
  },
  {
    name: "Rajma",
    image: "https://example.com/rajma.jpg",
    ingredients: [
      savedIngredients[40]._id,  // Red Kidney Beans
      savedIngredients[2]._id,   // Tomato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[39]._id,  // Ghee
      savedIngredients[1]._id,   // Onion
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[16]._id,  // Coriander
      savedIngredients[52]._id,  // Asafoetida
      savedIngredients[43]._id,  // Mustard Oil
    ],
    category: "sabji",
    type: "veg",
    description: "Kidney beans cooked in a thick, spicy tomato-based gravy, a North Indian favorite."
  },
  {
    name: "Chana Masala",
    image: "https://example.com/chanamasala.jpg",
    ingredients: [
      savedIngredients[0]._id,   // Chickpea
      savedIngredients[1]._id,   // Onion
      savedIngredients[2]._id,   // Tomato
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[34]._id,  // Tamarind
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[52]._id,  // Asafoetida
    ],
    category: "sabji",
    type: "veg",
    description: "A tangy and spicy chickpea curry with onions and tomatoes, perfect with naan."
  },
  {
    name: "Gobi Manchurian",
    image: "https://example.com/gobimanchurian.jpg",
    ingredients: [
      savedIngredients[14]._id,  // Cauliflower
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[1]._id,   // Onion
      savedIngredients[31]._id,  // Black Pepper
      savedIngredients[41]._id,  // Chickpea Flour
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[55]._id,  // Vinegar
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[8]._id,   // Carrot
    ],
    category: "sabji",
    type: "veg",
    description: "Crispy cauliflower florets tossed in a tangy Indo-Chinese sauce with onions and capsicum."
  },
  {
    name: "Saag Aloo",
    image: "https://example.com/saagaloo.jpg",
    ingredients: [
      savedIngredients[6]._id,   // Spinach
      savedIngredients[4]._id,   // Potato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[42]._id,  // Fenugreek Leaves
      savedIngredients[1]._id,   // Onion
      savedIngredients[11]._id,  // Ginger
      savedIngredients[2]._id,   // Tomato
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[21]._id,  // Cumin Seeds
    ],
    category: "sabji",
    type: "veg",
    description: "A wholesome dish of spinach and potatoes cooked with garlic and spices."
  },
  // Non-Vegetarian - Regular (8 dishes)
  {
    name: "Chicken Fried Rice",
    image: "https://example.com/chickenfriedrice.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[3]._id,   // Rice
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[31]._id,  // Black Pepper
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[8]._id,   // Carrot
      savedIngredients[15]._id,  // Beans
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[47]._id,  // Egg
    ],
    category: "regular",
    type: "non-veg",
    description: "Stir-fried rice with tender chicken pieces, capsicum, and mild spices."
  },
  {
    name: "Chicken Noodles",
    image: "https://example.com/chickennoodles.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[15]._id,  // Beans
      savedIngredients[31]._id,  // Black Pepper
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[8]._id,   // Carrot
      savedIngredients[55]._id,  // Vinegar
      savedIngredients[47]._id,  // Egg
    ],
    category: "regular",
    type: "non-veg",
    description: "Soft noodles tossed with chicken, capsicum, and beans in a savory sauce."
  },
  {
    name: "Chicken Roll",
    image: "https://example.com/chickenroll.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[17]._id,  // Wheat Flour
      savedIngredients[1]._id,   // Onion
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[38]._id,  // Yogurt
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[21]._id,  // Cumin Seeds
    ],
    category: "regular",
    type: "non-veg",
    description: "A flavorful wrap with spiced chicken and onions rolled in a wheat flatbread."
  },
  {
    name: "Chicken Manchurian",
    image: "https://example.com/chickenmanchurian.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[1]._id,   // Onion
      savedIngredients[31]._id,  // Black Pepper
      savedIngredients[47]._id,  // Egg
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[55]._id,  // Vinegar
      savedIngredients[41]._id,  // Chickpea Flour
      savedIngredients[23]._id,  // Red Chili Powder
    ],
    category: "regular",
    type: "non-veg",
    description: "Juicy chicken pieces in a thick Indo-Chinese sauce with capsicum and onions."
  },
  {
    name: "Chicken Pakora",
    image: "https://example.com/chickenpakora.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[17]._id,  // Wheat Flour
      savedIngredients[16]._id,  // Coriander
      savedIngredients[41]._id,  // Chickpea Flour
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[43]._id,  // Mustard Oil
    ],
    category: "regular",
    type: "non-veg",
    description: "Crispy fried chicken fritters marinated with spices and coriander, perfect as a snack."
  },
  {
    name: "Chicken 65",
    image: "https://example.com/chicken65.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[33]._id,  // Curry Leaves
      savedIngredients[41]._id,  // Chickpea Flour
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[55]._id,  // Vinegar
      savedIngredients[16]._id,  // Coriander
    ],
    category: "regular",
    type: "non-veg",
    description: "Spicy, deep-fried chicken bites with garlic and ginger, a popular South Indian appetizer."
  },
  {
    name: "Chicken Samosa",
    image: "https://example.com/chickensamosa.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[17]._id,  // Wheat Flour
      savedIngredients[1]._id,   // Onion
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[32]._id,  // Green Chili
      savedIngredients[43]._id,  // Mustard Oil
    ],
    category: "regular",
    type: "non-veg",
    description: "Crispy pastry pockets filled with spiced minced chicken and onions."
  },
  {
    name: "Chicken Skewers",
    image: "https://example.com/chickenskewers.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[11]._id,  // Ginger
      savedIngredients[38]._id,  // Yogurt
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[43]._id,  // Mustard Oil
    ],
    category: "regular",
    type: "non-veg",
    description: "Grilled chicken pieces marinated with ginger and capsicum, served on skewers."
  },
  // Non-Vegetarian - Royal (8 dishes)
  {
    name: "Chicken Curry",
    image: "https://example.com/chickencurry.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[1]._id,   // Onion
      savedIngredients[11]._id,  // Ginger
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[39]._id,  // Ghee
      savedIngredients[2]._id,   // Tomato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[16]._id,  // Coriander
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[30]._id,  // Cinnamon
      savedIngredients[27]._id,  // Bay Leaf
    ],
    category: "royal",
    type: "non-veg",
    description: "A rich and aromatic chicken curry with onions and ginger, perfect with rice."
  },
  {
    name: "Chicken Tikka",
    image: "https://example.com/chickentikka.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[11]._id,  // Ginger
      savedIngredients[20]._id,  // Cream
      savedIngredients[38]._id,  // Yogurt
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[10]._id,  // Garlic
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[43]._id,  // Mustard Oil
    ],
    category: "royal",
    type: "non-veg",
    description: "Juicy chicken chunks marinated with spices and cream, grilled to perfection."
  },
  {
    name: "Butter Chicken",
    image: "https://example.com/butterchicken.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[19]._id,  // Butter
      savedIngredients[20]._id,  // Cream
      savedIngredients[2]._id,   // Tomato
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[36]._id,  // Cashew Nuts
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[39]._id,  // Ghee
    ],
    category: "royal",
    type: "non-veg",
    description: "Tender chicken in a creamy, buttery tomato sauce, a North Indian classic."
  },
  {
    name: "Chicken Biryani",
    image: "https://example.com/chickenbiryani.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[3]._id,   // Rice
      savedIngredients[11]._id,  // Ginger
      savedIngredients[27]._id,  // Bay Leaf
      savedIngredients[44]._id,  // Saffron
      savedIngredients[1]._id,   // Onion
      savedIngredients[2]._id,   // Tomato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[30]._id,  // Cinnamon
      savedIngredients[28]._id,  // Cloves
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[39]._id,  // Ghee
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[23]._id,  // Red Chili Powder
    ],
    category: "royal",
    type: "non-veg",
    description: "Fragrant basmati rice layered with spiced chicken and aromatic spices."
  },
  {
    name: "Chicken Korma",
    image: "https://example.com/chickenkorma.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[20]._id,  // Cream
      savedIngredients[2]._id,   // Tomato
      savedIngredients[36]._id,  // Cashew Nuts
      savedIngredients[37]._id,  // Almonds
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[44]._id,  // Saffron
      savedIngredients[39]._id,  // Ghee
    ],
    category: "royal",
    type: "non-veg",
    description: "A creamy and mild chicken curry with a rich tomato and cream-based gravy."
  },
  {
    name: "Rogan Josh",
    image: "https://example.com/roganjosh.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[10]._id,  // Garlic
      savedIngredients[2]._id,   // Tomato
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[1]._id,   // Onion
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[27]._id,  // Bay Leaf
      savedIngredients[30]._id,  // Cinnamon
      savedIngredients[39]._id,  // Ghee
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[44]._id,  // Saffron
    ],
    category: "royal",
    type: "non-veg",
    description: "A flavorful Kashmiri chicken curry with garlic and tomatoes, slow-cooked to perfection."
  },
  {
    name: "Chicken Chettinad",
    image: "https://example.com/chickenchettinad.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[11]._id,  // Ginger
      savedIngredients[16]._id,  // Coriander
      savedIngredients[33]._id,  // Curry Leaves
      savedIngredients[35]._id,  // Coconut Milk
      savedIngredients[1]._id,   // Onion
      savedIngredients[2]._id,   // Tomato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[31]._id,  // Black Pepper
      savedIngredients[26]._id,  // Mustard Seeds
      savedIngredients[53]._id,  // Fennel Seeds
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[32]._id,  // Green Chili
    ],
    category: "royal",
    type: "non-veg",
    description: "A spicy South Indian chicken curry with ginger and coriander, bursting with bold flavors."
  },
  {
    name: "Chicken Malai Tikka",
    image: "https://example.com/chickenmalaitikka.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[20]._id,  // Cream
      savedIngredients[11]._id,  // Ginger
      savedIngredients[38]._id,  // Yogurt
      savedIngredients[36]._id,  // Cashew Nuts
      savedIngredients[10]._id,  // Garlic
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[44]._id,  // Saffron
      savedIngredients[39]._id,  // Ghee
    ],
    category: "royal",
    type: "non-veg",
    description: "Creamy and mildly spiced chicken tikka marinated with cream and ginger."
  },
  // Non-Vegetarian - Sabji (8 dishes)
  {
    name: "Chicken Masala",
    image: "https://example.com/chickenmasala.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[1]._id,   // Onion
      savedIngredients[2]._id,   // Tomato
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[29]._id,  // Cardamom
      savedIngredients[32]._id,  // Green Chili
    ],
    category: "sabji",
    type: "non-veg",
    description: "A spicy chicken curry with onions and tomatoes, ideal for everyday meals."
  },
  {
    name: "Chicken Saag",
    image: "https://example.com/chickensaag.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[6]._id,   // Spinach
      savedIngredients[10]._id,  // Garlic
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[1]._id,   // Onion
      savedIngredients[2]._id,   // Tomato
      savedIngredients[11]._id,  // Ginger
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[42]._id,  // Fenugreek Leaves
    ],
    category: "sabji",
    type: "non-veg",
    description: "Chicken cooked with spinach and garlic, a nutritious and flavorful dish."
  },
  {
    name: "Chicken Bharta",
    image: "https://example.com/chickenbharta.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[2]._id,   // Tomato
      savedIngredients[20]._id,  // Cream
      savedIngredients[47]._id,  // Egg
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,   // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[36]._id,  // Cashew Nuts
      savedIngredients[39]._id
      // Ghee
    ],
    category: "sabji",
    type: "non-veg",
    description: "A creamy chicken curry with tomatoes and spices, inspired by North Indian cuisine."
  },
  {
    name: "Chicken Kadhai",
    image: "https://example.com/chickenkadhai.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[10]._id,  // Garlic
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[1]._id,   // Onion
      savedIngredients[2]._id,   // Tomato
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
    savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[32]._id,  // Green Chili
    savedIngredients[29]._id
      // Cardamom
    ],
    category: "sabji",
    type: "non-veg",
    description: "Chicken cooked with capsicum and garlic in a spicy kadhai masala."
  },
  {
    name: "Chicken Do Pyaza",
    image: "https://example.com/chickendopyaza.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[1]._id,   // Onion
      savedIngredients[11]._id,  // Ginger
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[39]._id,  // Ghee
      savedIngredients[2]._id,   // Tomato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[29]._id
      // Cardamom
    ],
    category: "sabji",
    type: "non-veg",
    description: "A flavorful chicken curry with double the onions and a hint of ginger."
  },
  {
    name: "Chicken Vindaloo",
    image: "https://example.com/chickenvindaloo.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[4]._id,   // Potato
      savedIngredients[10]._id,  // Garlic
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[34]._id,  // Tamarind
      savedIngredients[1]._id,   // Onion
      savedIngredients[11]._id,  // Ginger
      savedIngredients[2]._id,   // Tomato
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[55]._id,  // Vinegar
      savedIngredients[31]._id
      // // Black Pepper
    ],
    category: "sabji",
    type: "non-veg",
    description: "A spicy Goan chicken curry with potatoes and garlic, known for its tangy kick."
  },
  {
    name: "Chicken Kolhapuri",
    image: "https://example.com/chickenkolhapuri.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[2]._id,   // Tomato
      savedIngredients[16]._id,  // Coriander
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[35]._id,  // id // Coconut Milk
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id,  // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[24]._id,  // Coriander Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[53]._id,  // Fennel Seeds
      savedIngredients[32]._id
      // // Green Chili.
    ],
    category: "sabji",
    type: "non-veg",
    description: "A fiery Maharashtrian chicken curry with tomatoes and coriander, packed with bold spices."
  },
  {
    name: "Chicken Jalfrezi",
    image: "https://example.com/chickenjalfrezi.jpg",
    ingredients: [
      savedIngredients[18]._id,  // Chicken
      savedIngredients[12]._id,  // Capsicum
      savedIngredients[2]._id,   // Tomato
      savedIngredients[24]._id,
  //     // Coriander Powder
      savedIngredients[31]._id,  // Black Pepper
      savedIngredients[1]._id,   // Onion
      savedIngredients[10]._id,  // Garlic
      savedIngredients[11]._id, // Ginger
      savedIngredients[22]._id,  // Turmeric Powder
      savedIngredients[23]._id,  // Red Chili Powder
      savedIngredients[25]._id,  // Garam Masala
      savedIngredients[51]._id,  // Salt
      savedIngredients[16]._id,  // Coriander
      savedIngredients[21]._id,  // Cumin Seeds
      savedIngredients[43]._id,  // Mustard Oil
      savedIngredients[32]._id
      // Green Chili
    ],
    category: "sabji",
    type: "non-veg",
    description: "A vibrant chicken stir-fry with capsicum and tomatoes, spiced to perfection."
  }
];

await Dish.insertMany(dishes);
 

  console.log("Database seeded successfully!");
  mongoose.connection.close();
}

seed().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
  


    

