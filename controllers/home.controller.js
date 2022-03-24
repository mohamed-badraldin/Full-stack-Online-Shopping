const productController = require('../controllers/product.controller')

const getHome = async (req,res,next)=>{
   try{
    const validCategories = ["men's clothing","women's clothing","jewelery","electronics"]
    let productPromise = (validCategories.includes(req.query.category))
    ? productController.getProductsByCategory(req.query.category) 
    : productController.getAllProducts()

    let products = await productPromise;
    res.render('index',{
        products,
        isAuth: req.session.userId,
        isAdmin: req.session.isAdmin,
        page: 'home'
    })
   }
   catch(err){
       next(err)
   }
};


module.exports = {getHome};