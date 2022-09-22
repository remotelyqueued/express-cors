const express = require('express');
const router = express.Router();

const userJSON = require('../users/user.json');

// app.js /users
// user.js /users/
router.get('/', function (req, res, next) {
    res.json(userJSON);
});

// https://www.npmjs.com/package/multer
// only handles multipart form data
// handles
// application/json

// does not handle
// image/png

router.post('/', function (req, res, next) {
    // req.on('data', console.log);
    console.log('1.', req.body);
    console.log('2. req.files:', req.files, ' req.file:', req.file);
    console.log('4.', req.header('Content-Type'));
    res.send('User saved');
});

module.exports = router;
