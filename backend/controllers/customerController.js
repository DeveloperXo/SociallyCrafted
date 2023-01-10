const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

const Customer = require('../models/customerModel');

exports.registerCustomer = catchAsyncErrors( async(req,res,next)=>{
    const {name, email, password} = req.body;

    const customer = await Customer.create({
        name,
        email,
        password
    });

    const token = customer.getJWTToken();

    res.status(201).json({
        success: true,
        token,
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
    const isPasswordMatched = customer.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    const token = customer.getJWTToken();

    res.status(200).json({
        success: true,
        token,
    })
})