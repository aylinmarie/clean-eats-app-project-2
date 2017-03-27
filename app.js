pry = require('pryjs');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var db = mongoose.connection;
mongoose.promise = global.Promise

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


// Connect to DB
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/project-2');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

// Controllers
var usersController = require('./routes/users.js');
var sessionsController = require('./routes/sessions.js');
var restaurantsController = require("./routes/restaurants.js");
var indexController = require("./routes/index.js");


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

app.use('/', index);
app.use('/users', users);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/users/:userId/restaurants', restaurantsController);
app.use('/', indexController);


module.exports = app;
