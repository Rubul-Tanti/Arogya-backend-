const express = require("express");
const app = express();
const corsConfig=require("./Config/corsConfig") //comming from cofig folder corsConfig rubultanti//
const {globalErrorHandler}=require("./Middleware/errorHandlers")
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const passport = require("passport");
const path = require('path');
const indexRouter = require('./routes/index');
const userRouter = require("./routes/userRouter");
const connectWithDb = require("./Config/mongoose-connection");
connectWithDb();
// Logger Setup
logger.token("time", () => new Date().toLocaleString());
// app.use(corsConfig)
app.use(logger(":time :method :url :status"));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Setup
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(globalErrorHandler)
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// app.use("api/v1",indexRouter)
module.exports = app;
