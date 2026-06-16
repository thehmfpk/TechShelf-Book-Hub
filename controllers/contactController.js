const Contact = require('../models/Contact');

// Render Contact Page
const getContactPage = (req, res) => {
    res.render('contact', { title: 'Request a Book | Contact Us', success: null });
};

// Handle Contact Form Submission
const submitContactForm = async (req, res) => {
    const { name, email, requestedBook, message } = req.body;
    try {
        const newRequest = new Contact({ name, email, requestedBook, message });
        await newRequest.save();
        res.render('contact', { 
            title: 'Request a Book | Contact Us', 
            success: 'Thank you! Your book request has been securely recorded.' 
        });
    } catch (err) {
        res.status(500).send('Error saving submission request.');
    }
};

module.exports = { getContactPage, submitContactForm };