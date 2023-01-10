const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
const cors = require('cors');

const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello world');
})
const product = require("./routes/productRoute");
app.use('/', product);
const customer = require('./routes/customerRoute');
app.use('/', customer);

app.use(errorMiddleware);


module.exports = app