var express = require('express');
var router = express.Router();


var Proxy = require('../js/proxy.js');
var proxy = new Proxy();


function time()
    {
        var date = new Date();
        return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }


router.get('/', (req, res, next) => res.render('index', { title: 'Express' }) );
router.get('/test', (req, res) => res.send('Test page.'));

router.get( '/site/all',              (req, res) => res.json(proxy)                       );
router.get( '/site/socks_proxy',      (req, res) => res.json(proxy.list.socks_proxy)      );
router.get( '/site/socksproxylist24', (req, res) => res.json(proxy.list.socksproxylist24) );

router.get( /^\/version\//, function(req, res)
    {
        var version = req.url.substr(9);
        var list = proxy.search( { attr: 'version', val: version } );
        
        res.json(list);
        
        console.log('Version requested: ' + version);
    });
router.get( /^\/port\//, function(req, res)
    {
        var port = req.url.substr(6);
        var list = proxy.search( { attr: 'port', val: port } );
        
        res.json(list);
        
        console.log('Port requested: ' + port);
    });
router.get( /^\/country\//, function(req, res)
    {
        var country = req.url.substr(9);
        var list    = proxy.search( { attr: 'country', val: country } );
        
        res.json(list);
        
        console.log('Country requested: ' + country);
    });
    

module.exports = router;


setInterval( () => { console.log(time() + ' - Downloaded proxy list.'); proxy.get_all() }, 60000 );
proxy.get_all();