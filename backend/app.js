const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
const cors = require('cors');

const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use(cookieParser());
app.use(cors())

const product = require("./routes/productRoute");
app.use('/', product);

const customer = require('./routes/customerRoute');
app.use('/customer', customer);

const seller = require('./routes/sellerRoute');
app.use('/seller', seller);

app.use(errorMiddleware);


module.exports = app