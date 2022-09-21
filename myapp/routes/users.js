const express = require('express');
const router = express.Router();
// parsing multi part form data
const multer = require('multer');
const upload = multer();

const userJSON = require('../users/user.json');

// app.js /users
// user.js /users/
router.get('/', function (req, res, next) {
    res.json(userJSON);
});

// https://www.npmjs.com/package/multer
// only handles multipart form data
router.post('/', upload.any(), function (req, res, next) {
    console.log(req);
    console.log('1.', req.body);
    console.log('2. req.files:', req.files, ' req.file:', req.file);
    console.log('4.', req.header('Content-Type'));
    res.send('User saved');
});

module.exports = router;
