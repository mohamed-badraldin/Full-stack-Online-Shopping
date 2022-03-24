const router = require('express').Router();

router.use(async(req, res, next)=>{
    try{
        res.render('documentation',{
            isAuth: req.session.userId,
            isAdmin: req.session.isAdmin,
            page: 'documentation'
        })
    }
    catch(err){
        next(err)
    }
})

module.exports = router