const express = require('express');
const { registerSeller, loginSeller, getSellerDetails, addFollower } = require('../controllers/sellerController');
const router = express.Router();


router.post('/register', registerSeller);
router.post('/login', loginSeller);
router.get('/sellerDetails/:id', getSellerDetails);
router.post('/addFollower', addFollower);

module.exports = router;