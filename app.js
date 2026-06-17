require('dotenv').config();
const express = require('express');
const session = require('express-session'); // Added for admin login tracking
const path = require('path');
const connectDB = require('./config/db.js');

const app = express();

// Database Connection
connectDB();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session Middleware Configuration (Must be placed before mounting routes)
app.use(session({
    secret: process.env.SESSION_SECRET || 'TechShelfSuperSecureAdminSecretKey123!',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 2 } // Active admin login lasts for 2 hours
}));

// Mount Architectural Routes
app.use('/', require('./routes/index'));
app.use('/contact', require('./routes/contact'));
app.use('/order', require('./routes/order')); 
app.use('/admin', require('./routes/admin')); // Mounted your new administration gateway

<<<<<<< HEAD
// Server Execution Block (Smart Hybrid setup for Local + Vercel)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`==================================================`);
        console.log(`Database connected successfully!`);
        console.log(`Server executing seamlessly on port http://localhost:${PORT}`);
        console.log(`==================================================`);
    });
}

// Export the application layer for Vercel Serverless Functions
module.exports = app;
=======
// Server Execution
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server executing seamlessly on port http://localhost:${PORT}`);
});

module.exports = app;
>>>>>>> 6e30a7e59482dc8b8ce3017e3d2f3af62147a9b2
