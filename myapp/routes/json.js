var express = require('express');
var router = express.Router();

var userJSON = require('../public/json/test.json');

/* GET users listing. */
router.post('/', function (req, res, next) {
    res.send(userJSON);
});

module.exports = router;
