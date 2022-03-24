const Product = require('../models/products.model')
const fs = require('fs')

const getAllProducts = async ()=>{
        let products = await Product.find();
        return products;

};

const getProductsByCategory = async (category)=>{
        let products = await Product.find({category: category});
        return products;
};

const getProductById = async (req,res,next)=>{
        let product = await Product.findOne({id:req.params.id})
        res.render('product',{
            product,
            isAuth: req.session.userId,
            isAdmin: req.session.isAdmin,
            validationErrors: req.flash('validationErrors')[0],
            page : 'add-product',
        })

};


module.exports = {
    getAllProducts,
    getProductsByCategory,
    getProductById
};