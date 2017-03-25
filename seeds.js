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
    type: 'Juice Bar',
    imgUrl: 'http://www.atlbucketlist.com/wp-content/uploads/2016/01/KMCreview-slideshow.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

var herbanFix = new Restaurant({
    name: 'Herban Fix',
    location: 'Atlanta',
    type: 'Pan Asian',
    imgUrl: 'http://herbanfix.com/wp-content/uploads/2015/05/menu-top4.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

var trueFood = new Restaurant({
    name: 'True Food Kitchen',
    location: 'Atlanta',
    type: 'Variety',
    imgUrl: 'http://www.truefoodkitchen.com/wp-content/uploads/2013/03/mg_90501.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

var desta = new Restaurant({
    name: 'Desta Ethiopian',
    location: 'Atlanta',
    type: 'Ethiopian',
    imgUrl: 'https://images.guestinnovations.com/7c08ebe7-7cda-49c2-9f1e-57196c5719ec/crop-to-aspect,1.3;downsample-to-fit,466,355;.jpg?signer=restaurateur&signature=XhVioFxWx%2BP551TzHGQlE2J4UEAaHjAg2gAUlRkf6eo%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

var urbanpl8 = new Restaurant({
    name: 'urban pL8',
    location: 'Atlanta',
    type: 'American',
    imgUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/wXXg3_CVlZ32r3POL-eduA/o.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});


kaleMe.save(function(err) {
  if (err) console.log(err);
  console.log('kale me crazy created');
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
