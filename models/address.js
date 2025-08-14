const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  houseNumber: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, // ensures consistency in index
  },
  locality: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, // ensures consistency in index
  },
  mobileNumber: {
    type: String,
    required: true,
    match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number'],
  },
  coordinates: {
    latitude: {
      type: Number,
      default: null,
    },
    longitude: {
      type: Number,
      default: null,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ✅ Unique compound index to prevent duplicate address per user
addressSchema.index(
  { userId: 1, houseNumber: 1, locality: 1, mobileNumber: 1 },
  { unique: true }
);

module.exports = mongoose.model('Address', addressSchema);
