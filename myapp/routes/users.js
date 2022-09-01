var express = require('express');
var router = express.Router();

var userJSON = require('../users/user.json');

// in app.js set route "/users"
// in users.js route is "/"
router.all('/', function (req, res, next) {
    res.json(userJSON);
});

module.exports = router;
