const Admin = require('../models/Admin');
const Order = require('../models/Order');
const Contact = require('../models/Contact');

// Render the standalone Admin Login view portal
const getLogin = (req, res) => {
    if (req.session.isAdmin) {
        return res.redirect('/admin/dashboard');
    }
    res.render('admin-login', { 
        title: 'TechShelf | Admin Gateway', // 🌟 Added Title Variable here
        error: null 
    });
};

// Verify user input against database administrator entries
const postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        
        // Simple string comparison for development purposes
        if (admin && admin.password === password) {
            req.session.isAdmin = true;
            req.session.adminUser = admin.username;
            return res.redirect('/admin/dashboard');
        }
        
        res.render('admin-login', { 
            title: 'TechShelf | Admin Gateway', // 🌟 Added Title Variable here
            error: 'Invalid username or password match.' 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Critical server verification error occurred.');
    }
};

// Retrieve data arrays globally to populate the Master Panel Layout tabs
const getDashboard = async (req, res) => {
    try {
        // Query both collections asynchronously at the same time
        const [orders, inquiries] = await Promise.all([
            Order.find().sort({ createdAt: -1 }),
            Contact.find().sort({ createdAt: -1 })
        ]);

        res.render('admin-dashboard', { 
            title: 'TechShelf | Systems Core Console', // 🌟 FIXED: Added Title Variable here
            orders: orders, 
            inquiries: inquiries,
            adminUser: req.session.adminUser
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to assemble system log payloads.');
    }
};

// Destruct current session parameters to log out the client
const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/admin/login');
    });
};

module.exports = {
    getLogin,
    postLogin,
    getDashboard,
    logout
};