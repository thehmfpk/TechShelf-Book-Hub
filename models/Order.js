const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    bookTitle: { type: String, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    contactNumber: { type: String, required: true }, // New Field
    address: { type: String, required: true },       // New Field
    status: { type: String, default: 'Processing' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);