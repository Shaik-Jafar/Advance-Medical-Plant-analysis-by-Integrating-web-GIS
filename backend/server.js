const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3001', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  };
  
  app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/plants'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Import routes
const locationRoutes = require('./routes/location');
const plantDetailsRoutes = require('./routes/plantDetails');

// Use routes
app.use('/api/locations', locationRoutes);
app.use('/api/plantdetails', plantDetailsRoutes);

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
