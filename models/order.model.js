const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    userEmail:String,
    productsOfCart:String,
    address: String,
    status: String,
    total: Number,
    timestamp: String
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;