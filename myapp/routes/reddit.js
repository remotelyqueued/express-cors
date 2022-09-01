var express = require('express');
var router = express.Router();

var redditJSON = require('../../../../../data-sets/reddit.json');
var dataJSON = require('../../../../../data-sets/dataisbeautiful.json');
var superJSON = require('../../../../../data-sets/superstonk.json');
var webdevJSON = require('../../../../../data-sets/webdev.json');

// in app.js set route "/users"
// in users.js route is "/"
router.all('/', function (req, res, next) {
    res.json({ redditJSON, dataJSON, superJSON, webdevJSON });
});

module.exports = router;
