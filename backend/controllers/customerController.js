const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const jwt = require('jsonwebtoken');

const Customer = require('../models/customerModel');

exports.registerCustomer = catchAsyncErrors( async(req,res,next)=>{
    const {name, email, password, role} = req.body;
    
    const customer = await Customer.create({
        name,
        email,
        password
    });

    const token = customer.getJWTToken();

    res.status(201).json({
        success: true,
        name,
        email,
        token
    })
})

//login
exports.loginCustomer = catchAsyncErrors(async(req,res,next)=>{

    const {email,password} = req.body;
    const customer = await Customer.findOne({email: email}).select("+password");
    console.log(customer);
    if(!customer){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    const isPasswordMatched = await customer.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }

    if(customer){
        const token = customer.getJWTToken();
        res.status(200).json({
            success: true,
            token,
            customer
        })
    }
})

exports.requireLogin = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const customer = jwt.verify(token, process.env.JWT_SECRET)
        req.customer = customer;
        next();
    }catch(error){
        res.status(401).json({
            success: false,
            message: 'Authentication failed - Invalid token'
        })
    }
}