var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-2');
var Restaurant = require("./models/restaurant");
var User = require("./models/user");

mongoose.promise = global.Promise;

User.remove({}, function(err) {
    console.log(err);
});

Restaurant.remove({}, function(err) {
    console.log(err);
});

var kaleMe = new Restaurant({
    name: 'Kale Me Crazy',
    location: 'Atlanta',
    type: 'Juice Bar'
});
var hfBurger = new Restaurant({
    name: 'H+F Burger',
    location: 'Atlanta',
    type: 'American'
});

kaleMe.save(function(err) {
  if (err) console.log(err);
  console.log('kale me crazy created');
});

hfBurger.save(function(err) {
  if (err) console.log(err);
  console.log('h+f burger created!');
});
