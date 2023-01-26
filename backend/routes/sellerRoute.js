const express = require('express');
const { registerSeller, loginSeller } = require('../controllers/sellerController');
const router = express.Router();


router.post('/register', registerSeller);
router.post('/login', loginSeller);

module.exports = router;