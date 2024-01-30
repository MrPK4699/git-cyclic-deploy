const mongoose = require('mongoose');

const petrolLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  odometer_reading: { type: Number, required: true },
  petrol_price: { type: Number, required: true },
  petrol_volume: { type: Number, required: true },
  station: { type: String, enum: ['Shell', 'Bharat-petroleum', 'HP'], required: true }
});

module.exports = mongoose.model('PetrolLog', petrolLogSchema);
