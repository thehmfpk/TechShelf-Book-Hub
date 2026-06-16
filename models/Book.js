const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    purchaseUrl: { type: String, default: '#' }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);