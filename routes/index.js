const express = require('express');
const router = express.Router();
const { getHomePage, getBooksPage, getBookDetails } = require('../controllers/bookController');

router.get('/', getHomePage);
router.get('/books', getBooksPage);
router.get('/book/:id', getBookDetails);

module.exports = router;