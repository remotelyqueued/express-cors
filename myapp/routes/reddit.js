var express = require('express');
var router = express.Router();

var redditJSON = require('../data/reddit.json');
var dataJSON = require('../data/dataisbeautiful.json');
var superJSON = require('../data/superstonk.json');
var webdevJSON = require('../data/webdev.json');

// in app.js set route "/reddit"
// in reddit.js route is "/"
router.all('/', function (req, res, next) {
    res.json({ redditJSON, dataJSON, superJSON, webdevJSON });
});

module.exports = router;
