var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var RestaurantSchema = new Schema({
  name: String,
  location: String,
  type: String
})

var UserSchema = new Schema({
  username: String,
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

var UserModel = mongoose.model('User', UserSchema);
var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);


//your code

//export below
module.exports = {
  User: UserModel,
  Restaurant: RestaurantModel
};
