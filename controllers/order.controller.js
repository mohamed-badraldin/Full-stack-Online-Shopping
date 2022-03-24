const Order = require('../models/order.model');
const User = require('../models/user.model');

const postOrder = async (req, res, next)=>{
    try{   
        const {email} = await User.findOne({_id: req.session.userId},{_id:0, email:1})
        const createOrder = new Order({
            userId: req.session.userId,
            userEmail: email,
            productsOfCart: req.body.productAsString,
            address: req.body.address,
            status: 'pendding',
            total: req.body.total,
            timestamp: new Date().toLocaleString()
        })
        await createOrder.save(); 
        res.redirect('/order');
    }
    catch(err){
        next(err);
    }
}

const getOrder = async (req, res, next)=>{
    try{
        const orders = await Order.find({userId: `${req.session.userId}`} , {}, { sort: { timestamp: 1 } });
        const {username} = await User.findOne({_id: req.session.userId},{_id:0, username:1})
        res.render('order',{
            username,
            orders,
            isAuth: req.session.userId,
            isAdmin: req.session.isAdmin,
            page: 'orders'
        })
    }
    catch(err){
        next(err);
    }
    
}

const deleteOrder = async (req, res, next)=>{
    try{
        await Order.findOneAndRemove({_id: req.body.orderId});
        res.redirect('/order')
    }
    catch(err){
        next(err);
    }
    
}


module.exports = {postOrder, getOrder, deleteOrder}