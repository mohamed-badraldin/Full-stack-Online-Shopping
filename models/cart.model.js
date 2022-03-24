const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    title:String,
    price:Number,
    image:String,
    description:String,
    amount:Number,
    userId:String,
    productId:String,
    timestamp:String
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;