const express = require('express');
const router = express.Router();

// app.js /upload
// upload.js /upload/
router.all('/', function (req, res, next) {
    next();
});

module.exports = router;
