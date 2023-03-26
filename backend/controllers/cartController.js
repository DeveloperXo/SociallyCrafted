const cartModel = require('../models/cartModel');

function runUpdate(condition, updateData) {
    return new Promise((resolve, reject) => {
        cartModel.findOneAndUpdate(condition, updateData, { upsert: true })
            .then(result => { resolve(); console.log('result', result) })
            .catch(error => reject(error))
    })
}

exports.addItemToCart = (req, res) => {
    const customer_id = req.customer.id

    cartModel.findOne({ customer: customer_id })
        .exec((error, cart) => {
            if (error) return res.status(400).json({ error });

            if (cart) {
                // if cart already exists for this user, then update cart
                let promiseArray = [];
                req.body.cartItems.forEach((cartItem) => {
                    const product = cartItem.product;

                    const item = cart.cartItems.find(c => String(c.product) == String(product._id))
                    let condition, update;

                    if (item) {
                        condition = { "customer": customer_id, "cartItems.product": product }
                        console.log('condition', condition)
                        update = {
                            "$set": {
                                "cartItems.$": cartItem,
                            }
                        }
                        console.log('condition got true', update)
                    } else {
                        condition = { "customer": customer_id }
                        update = {
                            "$push": {
                                "cartItems": cartItem
                            }
                        }
                        console.log('condition got false')
                    }
                    promiseArray.push(runUpdate(condition, update))

                })
                Promise.all(promiseArray)
                    .then(response => res.status(200).json({ response }))
                    .catch(error => res.status(400).json({ error }))
            } else {
                // if there is no cart for this user, then create one
                const cart = new cartModel({
                    customer: customer_id,
                    cartItems: req.body.cartItems
                })
                cart.save((error, cart) => {
                    if (error) {
                        return res.status(400).json({ error })
                    }
                    if (cart) {
                        return res.status(201).json({ cart })
                    }
                })

            }
        })

}

exports.getCartItems = (req, res) => {
    const customer_id = req.customer.id
    cartModel.findOne({ customer: customer_id })
        .populate('cartItems.product', '_id name price images') //error expected
        .exec((error, cart) => {
            if (error) return res.status(400).json({ error })
            if (cart) {
                let cartItems = {};
                cart.cartItems.forEach((item, index) => {
                    cartItems[item._id.toString()] = {
                        _id: item.product._id.toString(),
                        name: item.product.name,
                        img: item.product.images[0].url,
                        price: item.product.price,
                        qty: item.quantity
                    }
                })
                res.status(200).json({ cartItems })
            }
            else {
                res.status(200).json({ message: 'Cart empty' })
            }
        })
}

exports.removeCartItems = (req, res) => {
    const { productId } = req.body.payload;
    if (productId) {
        cartModel.update(
            { customer: req.customer.id },
            {
                $pull: {
                    cartItems: {
                        product: productId,
                    },
                },
            }
        ).exec((error, result) => {
            if (error) return res.status(400).json({ error }); 
            if (result) { res.status(202).json({ result });}
        });
    }
};