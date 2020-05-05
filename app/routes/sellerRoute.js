const express = require('express');
const router = express.Router();

router.get('/list',require('../controllers/sellerController/listSeller').listSeller);
router.post('/add',require('../controllers/sellerController/addSeller').addSeller);
router.post('/update/:sellerId',require('../controllers/sellerController/updateSeller').updateSeller);
router.delete('/delete/:sellerId',require('../controllers/sellerController/deleteSeller').deleteSeller);

module.exports = router;
