// let createError = require('http-errors');
let express = require('express');
// let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

const morgan = require('morgan');
let sellerRoute = require('./app/routes/sellerRoute');
var productRoute = require('./app/routes/productRoute');

let app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


app.use('/seller', sellerRoute);
app.use('/product', productRoute);


module.exports = app;
