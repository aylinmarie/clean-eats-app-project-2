var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-2');
var List = require("./models/list");
mongoose.promise = global.Promise;
List.remove({}, function(err) {
    console.log(err);
});
var exercise = new List({
    name: 'Exercise',
    completed: 'true'
});
var laundery = new List({
    name: 'Do Laundry',
    completed: 'true'
});

exercise.save(function(err) {
  if (err) console.log(err);
  console.log('exercise created');
});
laundry.save(function(err) {
  if (err) console.log(err);
  console.log('laundry created!');
});
