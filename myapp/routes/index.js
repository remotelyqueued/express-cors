var express = require('express');
var router = express.Router();

// ok to just have this in app.js
// from fetch request need to set content-type header
// router.use(express.json());
// router.use(express.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
/* POST home */
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Got a POST request at /');
});
/* PUT home */
router.put('/', (req, res) => {
    res.send('Got a PUT request at /');
});

module.exports = router;
