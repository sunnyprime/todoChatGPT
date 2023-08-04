// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb'); // Add this line

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// MongoDB connection string
// const uri = process.env.MONGODB_URI; // Replace with your MongoDB connection string
const uri = "mongodb+srv://mangupta512:ZMUF0Wb7Y3f5KZVE@cluster0.enxtomf.mongodb.net/?retryWrites=true&w=majority";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes and other middleware (if any)...

// Connect to MongoDB and start the server
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to MongoDB');
    // Add your API routes that require database access here
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
