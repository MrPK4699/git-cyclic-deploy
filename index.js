const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const petrolLogRoutes = require('./routes/petrolLogRoutes');

require('dotenv').config();
const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection failed:', err.message);
});
// console.log()

app.use('/auth', authRoutes);
app.use('/logs', petrolLogRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
