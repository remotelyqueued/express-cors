const express = require('express');
const router = express.Router();

const redditJSON = require('../data/reddit.json');
const dataJSON = require('../data/dataisbeautiful.json');
const superJSON = require('../data/superstonk.json');
const webdevJSON = require('../data/webdev.json');

// app.js /reddit
// reddit.js /reddit/
router.all('/', function (req, res, next) {
    res.json({ redditJSON, dataJSON, superJSON, webdevJSON });
});

module.exports = router;
