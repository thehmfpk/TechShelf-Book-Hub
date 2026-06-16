const Order = require('../models/Order');
const Book = require('../models/Book');

const placeOrder = async (req, res) => {
    const { bookId, customerName, customerEmail, contactNumber, address } = req.body;
    
    try {
        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json({ success: false, message: 'Book not found.' });

        const newOrder = new Order({
            bookId: book._id,
            bookTitle: book.title,
            customerName,
            customerEmail,
            contactNumber,
            address
        });

        await newOrder.save();
        res.status(200).json({ success: true, message: 'Order placed successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Database error.' });
    }
};

module.exports = { placeOrder };