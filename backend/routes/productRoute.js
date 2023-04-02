const express = require('express');
// const { requireLogin } = require('../controllers/customerController');
const { requireSellerLogin } = require('../controllers/sellerController')
const { getAllProducts, createProduct, getProductDetails} = require('../controllers/productController');
const router = express.Router();

router.get('/products' , requireSellerLogin, getAllProducts);
router.get('/product/:id', requireSellerLogin, getProductDetails);
router.post('/product/new', requireSellerLogin ,createProduct);

module.exports = router;