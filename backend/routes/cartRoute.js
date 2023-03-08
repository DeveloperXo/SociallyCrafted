const express = require('express');
const { addItemToCart} = require('../controllers/cartController');
const { requireLogin } = require('../controllers/customerController')
const router = express.Router();

router.get('/add-to-cart', requireLogin, addItemToCart);

module.exports = router;