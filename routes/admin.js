const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route protection guard middleware
const checkAuth = (req, res, next) => {
    if (req.session && req.session.isAdmin) {
        return next(); // Session verified, continue to the requested dashboard layout
    }
    res.redirect('/admin/login'); // Unauthorized access, redirect back to authentication portal
};

// Endpoint Maps
router.get('/login', adminController.getLogin);
router.post('/login', adminController.postLogin);
router.get('/dashboard', checkAuth, adminController.getDashboard);
router.get('/logout', adminController.logout);

module.exports = router;