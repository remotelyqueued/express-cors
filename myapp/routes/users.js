const express = require('express');
const router = express.Router();

const userJSON = require('../users/user.json');

// app.js  /users
// user.js /users/
router.all('/', function (req, res, next) {
    // console.log(req.header('user-agent'));
    // console.log(req.header('Content-Type'));
    res.json(userJSON);
});

module.exports = router;
