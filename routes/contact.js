const express = require('express');
const router = express.Router();
const { getContactPage, submitContactForm } = require('../controllers/contactController');

router.get('/', getContactPage);
router.post('/', submitContactForm);

module.exports = router;