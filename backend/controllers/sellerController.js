const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const mongoose = require('mongoose')
const Seller = require('../models/sellerModel');
const Product = require('../models/productModel')
const Customer = require('../models/customerModel')

exports.registerSeller = catchAsyncErrors( async(req,res,next)=>{
    const {name, email, password} = req.body;
    const seller = await Seller.create({
        name,
        email,
        password
    });

    const token = seller.getJWTToken();

    res.status(201).json({
        success: true,
        token,
        seller
    })
})

//login
exports.loginSeller = catchAsyncErrors(async(req,res,next)=>{
    
    const {email,password} = req.body;
    const seller = await Seller.findOne({email}).select("+password");
    console.log('seller',seller);
    if(!seller){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    const isPasswordMatched = await seller.comparePassword(password);
    
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    const token = seller.getJWTToken();

    res.status(200).json({
        success: true,
        token,
        seller
    })
})

exports.getSellerDetails = catchAsyncErrors(async(req, res, next) => {
    const  id  = req.params.id;
    const seller = await Seller.findById(id);
    if( !seller ){
        return next(new ErrorHandler("Invalid Seller Id"))
    }
    const sellerProducts = await Product.find({seller: req.params.id})

    res.status(200).json({
        success: true,
        seller,
        sellerProducts
    })
})

exports.addFollower = catchAsyncErrors(async(req, res, next) => {
    let byFollowId = { _id: req.body.byFollowId }
    const toFollowId = {_id: req.body.toFollowId}

    const sellerUpdate = {"$addToSet": {"followers": byFollowId }}
    const customerUpdate = {"$addToSet": {"following": toFollowId}}
    
    const toFollow = await Seller.findOneAndUpdate( toFollowId, sellerUpdate, { 
        returnNewDocument: true,
        new: true,
        strict: false
    } )

    const byFollow = await Customer.findOneAndUpdate(byFollowId, customerUpdate, {
        returnNewDocument: true,
        new: true,
        strict: false
    })

    const updateUser = await Customer.findById(byFollowId)

    if( !toFollowId ){ return new ErrorHandler('Something went wrong...')}

    res.status(200).json({
        success: true,
        toFollow,
        byFollow,
        updateUser
    })
})