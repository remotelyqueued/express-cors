var express = require('express');
var router = express.Router();

// from fetch request need to set content-type header

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Got a POST request at /');
});

router.put('/', (req, res) => {
    res.send('Got a PUT request at /');
});

module.exports = router;
