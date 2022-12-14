const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

// routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const redditRouter = require('./routes/reddit');
const uploadRouter = require('./routes/upload');

const corsOptions = {
    credentials: true,
    maxAge: 86400,
    origin: true,
};

// express
const app = express();

// req.body parse

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middleware
app.use(cors(corsOptions));
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/reddit', redditRouter);
app.use('/upload', uploadRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
