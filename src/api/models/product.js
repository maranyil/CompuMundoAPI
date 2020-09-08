const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    price: Number,
    olderPrice: Number,
    savings: Number,
    colors: Array,
    category: String,
    description: String,
});

module.exports = mongoose.model('Product', productSchema);