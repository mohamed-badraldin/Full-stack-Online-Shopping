const router = require('express').Router();
const authController = require('../controllers/user.controller')
const {signupRequiredArguments, loginRequiredArguments} = require('../middleware/checkRequired');
const {auth,notAuth} = require('../middleware/authentication')

router.get('/signup', notAuth, authController.getSignup)

router.post('/signup', notAuth, signupRequiredArguments, authController.postSignup)

router.get('/login', notAuth, authController.getLogin)

router.post('/login', notAuth, loginRequiredArguments, authController.postLogin)

router.post('/logout', auth, authController.logout)

/////////////////////////////////////////////////// Profile  //////////////////////
router.get('/profile',authController.getProfile)
 
module.exports = router;