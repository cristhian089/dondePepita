const mongoose = require("mongoose");
const jwt= require("jsonwebtoken");
const moment = require("moment");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    code: Number,
    description: String,
    date: {type:Date, default:Date.now},
});

productSchema.methods.generateJWT = function(){
    return jwt.sign({
        _id: this._id,
        name: this.name,
        iat:moment().unix(),
    },
    process.env.SECRET_KEY_JWT
    );

};

const product = mongoose.model("product",productSchema);
module.exports = product;