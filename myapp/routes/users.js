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
// solutions I found online for uploading image suggest sending as formdata
router.post('/', function (req, res, next) {
    console.log('1.', req.body);
    console.log('2.', req.files);
    console.log('3.', req.header('Content-Type'));
    res.send('User saved');
});

module.exports = router;
