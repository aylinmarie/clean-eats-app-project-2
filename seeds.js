var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-2');
var Restaurant = require("./models/restaurant");
var User = require("./models/user");

mongoose.promise = global.Promise;

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

var herbanFix = new Restaurant({
    name: 'Herban Fix',
    location: 'Atlanta',
    type: 'Pan Asian'
});

var trueFood = new Restaurant({
    name: 'True Food Kitchen',
    location: 'Atlanta',
    type: 'Variety'
});

var desta = new Restaurant({
    name: 'Desta Ethiopian',
    location: 'Atlanta',
    type: 'Ethiopian'
});

var urbanpl8 = new Restaurant({
    name: 'urban pL8',
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

herbanFix.save(function(err) {
  if (err) console.log(err);
  console.log('herban fix created!');
});

trueFood.save(function(err) {
  if (err) console.log(err);
  console.log('true food created!');
});

desta.save(function(err) {
  if (err) console.log(err);
  console.log('desta created!');
});

urbanpl8.save(function(err) {
  if (err) console.log(err);
  console.log('urban pl8 created!');
});
