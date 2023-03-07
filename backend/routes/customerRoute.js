const express = require('express');
const { registerCustomer, loginCustomer, requireLogin } = require('../controllers/customerController');
const router = express.Router();


router.post('/register', registerCustomer);
router.post('/login',loginCustomer);

// router.post('/profile', requireLogin, (req, res) => {
//     res.status(200).json({user : 'profile'})
// })

module.exports = router;