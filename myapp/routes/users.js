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
router.post('/', function (req, res, next) {
    console.log('1.', req.body);
    console.log('2.', req.files);
    console.log('3.', req.header('Content-Type'));
    console.log('4.', req.query.width);
    res.send('User saved');
});

module.exports = router;
