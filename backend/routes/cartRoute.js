const express = require('express');
const { addItemToCart, getCartItems, removeCartItems } = require('../controllers/cartController');
const { requireLogin } = require('../controllers/customerController')
const router = express.Router();

router.post('/add-to-cart', requireLogin, addItemToCart);
router.post('/getCartItems', requireLogin, getCartItems);
router.post('/removeItem', requireLogin, removeCartItems);

module.exports = router;