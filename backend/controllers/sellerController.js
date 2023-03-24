const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

const Seller = require('../models/sellerModel');

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