require('dotenv').config();
const express = require('express');
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

// Mount Architectural Routes
app.use('/', require('./routes/index'));
app.use('/contact', require('./routes/contact'));
app.use('/order', require('./routes/order')); // Hook up our new transactions pipeline

// Server Execution
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server executing seamlessly on port http://localhost:${PORT}`);
});