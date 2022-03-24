const router = require('express').Router();
const cartController = require('../controllers/cart.controller')
const {auth} = require('../middleware/authentication')
const {cartRequiredArguments} = require('../middleware/checkRequired');


router.get('/', auth, cartController.getCartByUserId)
router.post('/', auth, cartRequiredArguments, cartController.postCart)
router.post('/update', auth, cartRequiredArguments, cartController.updateCart)
router.post('/delete', auth, cartController.deleteFromCart)
module.exports = router;