// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const tasksRouter = require('./routes/tasks');
const { auth } = require('express-openid-connect');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  auth({
    authRequired: false, // means not all routes require login
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.AUTH0_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    idpLogout: true,
  })
);


// Set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data (e.g., from HTML form submissions)

// Routes
app.use('/', tasksRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});