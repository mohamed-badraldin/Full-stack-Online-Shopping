const router = require('express').Router();
const productController = require('../controllers/product.controller')

router.use('/:id', productController.getProductById)

module.exports = router;
