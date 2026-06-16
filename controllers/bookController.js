const Book = require('../models/Book');

const getHomePage = async (req, res) => {
    const books = await Book.find().limit(3);
    res.render('index', { title: 'TechShelf | Home', books });
};

const getBooksPage = async (req, res) => {
    const books = await Book.find();
    res.render('books', { title: 'Library', books });
};

// NEW: Show only the book details on a dedicated page
const getBookDetails = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.render('book-details', { title: book.title, book });
    } catch (err) {
        res.status(404).send('Book not found');
    }
};

module.exports = { getHomePage, getBooksPage, getBookDetails };