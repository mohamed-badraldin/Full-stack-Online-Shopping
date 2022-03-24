const router = require('express').Router();
const {admin} = require('../middleware/authentication');
const adminController = require('../controllers/admin.controller');
const parseInputFile = require('../middleware/multer');
const {addProductRequiredArguments} = require('../middleware/checkRequired')


router.get('/dashboard',admin, adminController.getDashboard);

router.get('/add', admin, adminController.getAddProduct);

router.post('/add', admin, parseInputFile, addProductRequiredArguments, adminController.postAddProduct);

router.get('/manage', admin, adminController.getMangeOrders);

router.post('/manage', admin, adminController.postMangeOrders);

router.post('/manage/update-order', admin, adminController.postUpdateOrder);






module.exports = router;