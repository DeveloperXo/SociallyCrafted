const ordersModel = require("../models/ordersModel");
const cartModel = require("../models/cartModel");

exports.addOrder = (req, res) => {
  cartModel.deleteOne({ customer: req.customer.id }).exec((error, result) => {
    if (error) return res.status(400).json({ error });
    if (result) {
      req.body.customer = req.customer.id;
      console.log('req.body.customer', req.customer.id)
      req.body.orderStatus = [
        {
          type: "ordered",
          date: new Date(),
          isCompleted: true,
        },
        {
          type: "packed",
          isCompleted: false,
        },
        {
          type: "shipped",
          isCompleted: false,
        },
        {
          type: "delivered",
          isCompleted: false,
        },
      ];
      const order = new ordersModel(req.body);
      order.save((error, order) => {
        if (error) return res.status(400).json({ error });
        if (order) {
          res.status(201).json({ order });
        }
      });
    }
  });
};

exports.getOrders = (req, res) => {
  ordersModel.find({ customer: req.customer._id })
    .select("_id paymentStatus paymentType orderStatus items")
    .populate("items.productId", "_id name productPictures")
    .exec((error, orders) => {
      if (error) return res.status(400).json({ error });
      if (orders) {
        res.status(200).json({ orders });
      }
    });
};

