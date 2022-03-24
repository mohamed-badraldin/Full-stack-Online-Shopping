const Product = require('../models/products.model');
const Order = require('../models/order.model');
const path = require('path');

const getDashboard = (req, res, next) => {
    res.render('admin/dashboard', { page: 'dashboard' })
}

const getAddProduct = (req, res, next) => {
    res.render('admin/dashboard', {
        page: 'add-product',
        //data is [errors, data of inputs] 
        data: req.flash('data'),
        done: false // if the product inserted in DB
    })
}

const postAddProduct = async (req, res, next) => {
    try {
        const imagePath = '/images/products/' + req.file.filename
        const createProduct = new Product({
            id: req.body.id,
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            image: imagePath,
            rating: {}
        })
        await createProduct.save();
        res.render('admin/dashboard',{
            page:'add-product', // if the product inserted in DB
            data:req.flash('data'),
            done:true
        })
    }
    catch (err) {
        next(err)
    }
}

const getMangeOrders = async (req, res, next) => {
    try{
        const orders = await Order.find({});
        res.render('admin/dashboard', {
            page: 'manage-orders',
            orders
        })
    }
    catch(err){
        next(err)
    }
}

const postMangeOrders = async (req, res, next) => {
    try{
        let orders;
        if(req.body.all){
            orders = await Order.find({});
        }
        else if(req.body.pending){
            orders = await Order.find({status: 'pendding'});
        }
        else if(req.body.sent){
            orders = await Order.find({status: 'sent'});
        }
        else if(req.body.compeleted){
            orders = await Order.find({status: 'compeleted'});
        }
        res.render('admin/dashboard', {
            page: 'manage-orders',
            orders
        })
    }
    catch(err){
        next(err)
    }
}


const postUpdateOrder = async (req, res, next) => {
    try{
        const orderId = req.body.orderId
        const status = req.body[orderId]
        await Order.findOneAndUpdate({_id: orderId}, {status: status})
        const orders = await Order.find({});
        res.render('admin/dashboard', {
            page: 'manage-orders',
            orders,
        })
    }
    catch(err){
        next(err)
    }
}


module.exports = {
    getDashboard,
    getAddProduct,
    postAddProduct,
    getMangeOrders,
    postMangeOrders,
    postUpdateOrder
}