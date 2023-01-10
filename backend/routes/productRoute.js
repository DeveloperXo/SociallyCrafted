const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/products', getAllProducts);
router.post('/product/new',createProduct);

module.exports = router;