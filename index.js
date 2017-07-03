var http = require('http');
var date = require('./date');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end('Hello World! ' + date.myDateTime());
}).listen(1337);