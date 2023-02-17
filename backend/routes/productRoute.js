const express = require('express');
const { getAllProducts, createProduct, getProductDetails} = require('../controllers/productController');
const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id',getProductDetails);
router.post('/product/new',createProduct);

module.exports = router;