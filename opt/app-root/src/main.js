var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var addr = process.env.OPENSHIFT_NODEJS_IP   || '127.0.0.1';

server.listen(port, addr, function()
    {
        console.log('Listening on'+addr+':'+port.toString());
    });
