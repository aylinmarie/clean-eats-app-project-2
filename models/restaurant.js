var Schema = require('../db/schema');
var mongoose = require('mongoose');
var Restaurant = Schema.Restaurant;

mongoose.promise = global.Promise;

var kaleMe = new Restaurant({
    name: 'Kale Me Crazy',
    location: 'Atlanta',
    type: 'Juice Bar'
});

module.exports = Restaurant;
