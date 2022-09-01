var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
/* POST home */
router.post('/', (req, res) => {
    res.send('Got a POST request at /');
});
/* PUT home */
router.put('/', (req, res) => {
    res.send('Got a PUT request at /');
});

module.exports = router;
