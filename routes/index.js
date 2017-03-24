var express = require("express");
var router = express.Router({mergeParams: true});
var mongoose = require("mongoose");
var User = require('../models/user.js');
var Restaurant = require('../models/restaurant.js');
var authHelpers = require('../helpers/auth.js');

module.exports = router;
