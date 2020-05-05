const express = require('express');
const router = express.Router();

router.get('/list/:sellerId',require('../controllers/productController/listProduct').listProduct);
router.post('/add/:sellerId',require('../controllers/productController/addProduct').addProduct);
router.post('/update/:productId',require('../controllers/productController/updateProduct').updateProduct);
router.delete('/delete/:productId',require('../controllers/productController/deleteProduct').deleteProduct);

module.exports = router;
