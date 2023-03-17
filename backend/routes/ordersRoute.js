const { requireLogin } = require("../controllers/customerController");
const { addOrder, getOrders } = require("../controllers/ordersController");
const router = require("express").Router();

router.post("/addOrder", requireLogin, addOrder);
router.get("/getOrders", requireLogin, getOrders);
// router.post("/getOrder", requireSignin, userMiddleware, getOrder);

module.exports = router;