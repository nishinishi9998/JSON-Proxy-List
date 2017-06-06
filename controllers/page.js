var fs = require('fs');

module.exports = send_page;


function send_page(req, res)
    {
        var index = fs.readFileSync('./index.html', 'utf8');
        
        res.send(index);
    }