const mongoose = require('mongoose');
const customError = require('../helpers/customEerror');

const productSchema = mongoose.Schema({
    id:Number,
    title:String,
    price: Number,
    description: String,
    category: String,
    image:String,
    rating:Object
})

const Product = mongoose.model('product', productSchema);

// Export the model
module.exports = Product;

