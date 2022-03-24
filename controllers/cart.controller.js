const Cart = require('../models/cart.model')

const postCart = async (req, res, next) => {
    try {
        const existProduct = await Cart.findOne({title: req.body.title, userId:req.session.userId});
        if(existProduct){
            await Cart.findOneAndUpdate({title: req.body.title, userId:req.session.userId},{amount: Number(existProduct.amount) + Number(req.body.amount)})
        }
        else{
        const createProduct = new Cart({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
            amount: req.body.amount,
            userId: req.session.userId,
            productId: req.body.productId,
            timestamp: new Date().toLocaleString()
        });

        const product = await createProduct.save();
        }
        res.redirect('/cart');
    }
    catch (err) {
        next(err)
    }
}

const getCartByUserId = async (req, res, next) => {
    try{
    const productsOfUser = await Cart.find({ userId: req.session.userId }, {}, { sort: { timestamp: 1 } });
    const productAsString = JSON.stringify(productsOfUser);
    res.render('cart', {
        productAsString,
        productsOfUser,
        isAuth: req.session.userId,
        isAdmin: req.session.isAdmin,
        validationErrors: req.flash('validationErrors')[0],
        page: 'cart'
    })
    }
    catch(err) {
        next(err)
    }
}

const updateCart = async (req, res, next)=>{
    try{
    const productId = req.body.productIdl;
    const productAmount = req.body.amount;
    await Cart.findOneAndUpdate({_id: req.body.productId},{amount: productAmount})
    res.redirect('/cart')
    }
    catch(err) { 
        next(err)
    }
}

const deleteFromCart = async (req, res, next)=>{
    try{
        await Cart.findOneAndRemove({_id: req.body.productId})
        res.redirect('/cart')
    }
    catch(err) {
        next(err)
    }
}

module.exports = { postCart, getCartByUserId, updateCart, deleteFromCart}