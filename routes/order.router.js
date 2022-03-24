const router = require('express').Router();
const orederController = require('../controllers/order.controller');
const {auth} = require('../middleware/authentication')

router.post('/', auth, orederController.postOrder)
router.get('/', auth, orederController.getOrder)
router.post('/delete', auth, orederController.deleteOrder)
module.exports = router;