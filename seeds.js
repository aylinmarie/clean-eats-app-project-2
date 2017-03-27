
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/project-2');
var Restaurant = require("./models/restaurant");
var User = require("./models/user");

mongoose.promise = global.Promise;


// Connect to database
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


// DATA

Restaurant.remove({}, function(err) {
    console.log(err);
});

var kaleMe = new Restaurant({
    name: 'Kale Me Crazy',
    location: 'Atlanta',
    type: 'Juice Bar',
    imgUrl: 'http://www.atlbucketlist.com/wp-content/uploads/2016/01/KMCreview-slideshow.jpg',
    description: 'Kale Me Crazy is a superfood café. We offer juices, smoothies, salads, and wraps in a sleek, upscale environment.',
    food: ['Vegan', ' Vegetarian']
});

var herbanFix = new Restaurant({
    name: 'Herban Fix',
    location: 'Atlanta',
    type: 'Pan Asian',
    imgUrl: 'http://herbanfix.com/wp-content/uploads/2015/05/menu-top4.jpg',
    description: 'Herban Fix is an Atlanta vegan restaurant located in Midtown Atlanta and we are cuisine enthusiasts that want to share amazing vegan food with you.',
    food: ['Vegan', ' Vegetarian']
});

var trueFood = new Restaurant({
    name: 'True Food Kitchen',
    location: 'Atlanta',
    type: 'Variety',
    imgUrl: 'http://www.truefoodkitchen.com/wp-content/uploads/2013/03/mg_90501.jpg',
    description: 'Relaxed, eco-chic chain serving health-conscious fare, including vegan options, plus cocktails.',
    food: ['Vegan', ' Vegetarian']
});

var desta = new Restaurant({
    name: 'Desta Ethiopian',
    location: 'Atlanta',
    type: 'Ethiopian',
    imgUrl:'https://images.guestinnovations.com/7c08ebe7-7cda-49c2-9f1e-57196c5719ec/crop-to-aspect,1.3;downsample-to-fit,466,355;.jpg?signer=restaurateur&signature=XhVioFxWx%2BP551TzHGQlE2J4UEAaHjAg2gAUlRkf6eo%3D',
    description: 'Popular Ethiopian spot offering a variety of exotic dishes, including ample vegetarian options.',
    food: ['Vegan', ' Vegetarian']
});

var urbanpl8 = new Restaurant({
    name: 'urban pL8',
    location: 'Atlanta',
    type: 'American',
    imgUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/wXXg3_CVlZ32r3POL-eduA/o.jpg',
    description: 'Food stall serving health-conscious, paleo & gluten-free American dishes with global flavors.',
    food: ['Vegan', ' Vegetarian']
});

var juiceBar = new Restaurant({
    name: 'Juice Bar Suwanee',
    location: 'Atlanta',
    type: 'Juice Bar',
    imgUrl: 'https://source.unsplash.com/iQISyMFR0RM',
    description: 'Juice Bar is overwhelmingly vegetarian, gluten-free, organic when possible, and always uses 100% whole fruits and vegetables.',
    food: ['Vegan', ' Vegetarian']
});

var seasons52 = new Restaurant({
    name: 'Seasons 52',
    location: 'Atlanta',
    type: 'American',
    imgUrl: 'http://restaurantweek.shopcoralgables.com/wp-content/uploads/2015/04/Seasons-52-011.jpg',
    description: 'Rotating menu of seasonal American dishes alongside international wines in an upscale setting.',
    food: ['Vegan', ' Vegetarian']
});

var rthomas = new Restaurant({
    name: 'R. Thomas Grill',
    location: 'Atlanta',
    type: 'American',
    imgUrl: 'https://cdnblog.rentcafe.com/blog/wp-content/uploads/2012/09/r.-thomas-e1348148822585.jpg',
    description: 'Funky outdoor spot open 24/7 for organic menu of burgers & vegetarian fare amid greenery & birds.',
    food: ['Vegan', ' Vegetarian']
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

juiceBar.save(function(err) {
  if (err) console.log(err);
  console.log('true food created!');
});

seasons52.save(function(err) {
  if (err) console.log(err);
  console.log('urban pl8 created!');
});

rthomas.save(function(err) {
  if (err) console.log(err);
  console.log('desta created!');
});
