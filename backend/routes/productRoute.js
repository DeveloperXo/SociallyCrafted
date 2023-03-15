const express = require('express');
const { requireLogin } = require('../controllers/customerController');
const { getAllProducts, createProduct, getProductDetails} = require('../controllers/productController');
const router = express.Router();

router.get('/products' , requireLogin, getAllProducts);
router.get('/product/:id', requireLogin, getProductDetails);
router.post('/product/new', requireLogin ,createProduct);

module.exports = router;