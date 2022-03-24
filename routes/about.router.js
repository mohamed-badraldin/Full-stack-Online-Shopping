const router = require('express').Router();

router.use(async(req, res, next)=>{
    try{
        res.render('about',{
            isAuth: req.session.userId,
            isAdmin: req.session.isAdmin,
            page: 'about'
        })
    }
    catch(err){
        next(err)
    }
})

module.exports = router