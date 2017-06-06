var express = require('express');
var router = express.Router();

var test = require('../controllers/test.js');
var page = require('../controllers/page.js');

/* GET home page. */
router.get('/', function(req, res, next)
    {
        res.render('index', { title: 'Express' });
    });

router.get('/test', test);
router.get('/html', page);

module.exports = router;
