//CORE MODULES
const express = require('express');
const app = express();

//THIRD PARTY MODULES
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

//CUSTOM MODULES
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');

//GLOBAL MIDDLEWARES
app.use(cors());

//DEVELOPMENT LOGGER
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

//BODY AND COOKIE PARSER
app.use(express.json());
app.use(cookieParser());

//MAIN ROUTES

//CAPTURE UNHANDLED ROUTES ERROR
app.all(/.*/, (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
//GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;
