var express = require('express');
var router = express.Router();

var userJSON = require('../users/user.json');

// in app.js set route "/users"
// in users.js route is "/"
router.all('/', function (req, res, next) {
    console.log('');
    console.log(req.protocol);
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.originalUrl);
    console.log('');
    console.log(req.subdomains);
    console.log(req.body);
    console.log(req.method);
    console.log('');
    console.log(req.header('user-agent'));
    console.log(req.header('Content-Type'));
    res.json(userJSON);
});

module.exports = router;
