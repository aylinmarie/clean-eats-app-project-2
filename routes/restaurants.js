//======================
// REQUIREMENTS
//======================
var express = require("express");
var router = express.Router({mergeParams: true});
var mongoose = require("mongoose");
var User = require('../models/user.js');
var Restaurant = require('../models/restaurant.js');
var authHelpers = require('../helpers/auth.js');

//======================
// CREATE
//======================
//create a POST "/" route that saves the restaurant item to the logged in user
router.post("/", function(req, res) {
	User.findById(req.params.userId)
		.exec(function(err, user) {
			if (err) { console.log(err); }

			var newRestaurant = new Restaurant({
				name: req.body.name,
				location: req.body.location,
				type: req.body.type
			});
			newRestaurant.save();
			user.restaurant.push(newRestaurant);
			user.save();
			res.redirect(`/users/${req.params.userId}`)
		});
});

//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the restaurant's edit page
router.get("/:id/edit", function(req, res) {
	Restaurant.findById(req.params.id)
		.exec(function(err, restaurant) {
			if (err) { console.log(err); }
			res.render("restaurants/edit", {
				restaurant: restaurant,
				user: req.params.userId
			});
		});
});

//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the restaurant.
router.put("/:id", function(req, res) {
	Restaurant.findById(req.params.id)
		.exec(function(err, restaurant) {
			if (err) { console.log(err); }
			restaurant.name = req.body.name;
			restaurant.location = req.body.location;
			restaurant.type = req.body.type;
			restaurant.save();
		});
	User.findById(req.params.userId)
		.exec(function(err, user) {
			if (err) { console.log(err); }
			var restaurantToEdit = user.restaurant.id(req.params.id);
			restaurantToEdit.name = req.body.name;
			restaurantToEdit.location = req.body.location;
			restaurantToEdit.type = req.body.type;
			user.save();
			res.redirect(`/users/${req.params.userId}`);
		});
});

//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the restaurant item
router.delete("/:id", function(req, res) {
	User.findByIdAndUpdate(req.params.userId, {
		$pull: {
			restaurant: {_id: req.params.id}
		}
	})
		.exec(function(err, user) {
			if (err) { console.log(err); }
		});
	Restaurant.findByIdAndRemove(req.params.id)
		.exec(function(err, restaurant) {
			if (err) { console.log(err); }
			res.redirect(`/users/${req.params.userId}`);
		});
});

//======================
// EXPORTS
//======================
module.exports = router;
