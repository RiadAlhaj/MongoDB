
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();  
const userRoutes = require('./routes/userRoutes');  

const app = express();
const PORT = 3000;


app.use(bodyParser.json());  


app.use('/api/users', userRoutes);


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
