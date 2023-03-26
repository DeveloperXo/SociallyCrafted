const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

const sellerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type:String,
        select: false
    }
}, { strict: false })

sellerSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10)
})

//jwt token
sellerSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
        expiresIn: '1d'
    });
}

//comparePassword
sellerSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)

}

module.exports = mongoose.model('Seller', sellerSchema);