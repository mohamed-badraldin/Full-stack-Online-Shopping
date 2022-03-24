const router = require('express').Router();
const {auth} = require('../middleware/authentication')


router.post('/',auth, async(req, res, next)=>{
    try{
        res.render('address',{
            validationErrors: req.flash('validationErrors')[0],
            total:req.body.total,
            productAsString: req.body.productAsString,
            isAuth: req.session.userId,
            isAdmin: req.session.isAdmin,
            page: 'address'
        })
    }
    catch(err){
        next(err)
    }
})

module.exports = router