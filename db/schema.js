var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var RestaurantSchema = new Schema({
  name: String,
  location: String,
  type: String
});


var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password_digest: String,
  restaurant: [RestaurantSchema],
  created_at: Date,
  updated_at: Date
});


UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);
var UserModel = mongoose.model('User', UserSchema);


//your code

//export below
module.exports = {
  Restaurant: RestaurantModel,
  User: UserModel
};
