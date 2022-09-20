const express = require('express');
const router = express.Router();

// need to set content-type header
// app.js /
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
    res.send('POST request at /');
});

router.put('/', (req, res) => {
    res.send('PUT request at /');
});

module.exports = router;
