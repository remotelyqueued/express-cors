var express = require('express');
var router = express.Router();

var userJSON = require('../users/user.json');

// in app.js set route "/users"
// in users.js route is "/"
router.all('/', function (req, res, next) {
    console.log(req.header('user-agent'));
    console.log(req.header('Content-Type'));
    res.send(req.headers);
});

module.exports = router;
