var express = require("express");
var router = express.Router({mergeParams: true});
var mongoose = require("mongoose");
var User = require('../models/user.js');
var Restaurant = require('../models/restaurant.js');
var authHelpers = require('../helpers/auth.js');

//======================
// HOMEPAGE
//======================

router.get('/', function(req, res) {
    res.render('index', {layout: false});
});

//======================
// ABOUT PAGE
//======================
router.get('/about', function(req, res) {
    User.find({})
        .exec(function(err, user) {
            if(err) console.log(err);
            console.log(user);
            res.render('about');
        });
});


module.exports = router;
