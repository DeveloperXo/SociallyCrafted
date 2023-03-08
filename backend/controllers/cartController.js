const cartModel = require('../models/cartModel');

exports.addItemToCart = (req, res) => {
    const customer_id = req.headers.accept.split(" ")[1] // getting customer _id from header

    cartModel.findOne({ customer:  customer_id })
    .exec((error, cart) => {
        if(error) return res.status(400).json({ error });

        if(cart){
            // if cart already exists for this user, then update cart
            const product = req.body.cartItems.product
            const isItemAdded = cart.cartItems.find(c => c.product == product)

            if(isItemAdded){
                cartModel.findOneAndUpdate({ "customer": customer_id, "cartItems.product":  product}, {
                    "$set": {
                        "cartItems": {
                            ...req.body.cartItems,
                            quantity: isItemAdded.quantity + req.body.cartItems.quantity
                        }
                    }
                })
                .exec((error, _cart) => {
                    if(error) return res.status(400).json({ error });
                    if(_cart){
                        return res.status(201).json({ _cart })
                    }
                })
            }else{
                cartModel.findOneAndUpdate({ "customer": customer_id }, {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                })
                .exec((error, _cart) => {
                    if(error) return res.status(400).json({ error });
                    if(_cart){
                        return res.status(201).json({ _cart })
                    }
                })
            }  
        }
        else{
            // if there is no cart for this user, then create one
            const cart = new cartModel({
                customer: customer_id,
                cartItems: [req.body.cartItems]
            })

            cart.save((error, cart) => {
                if(error){
                    res.status(400).json({ error })
                }
                if(cart){
                    return res.status(201).json({ cart })
                }
            })

        }
    })
    
}