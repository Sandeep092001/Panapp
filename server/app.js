var http = require('http');

http.createServer(function (req, res){
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('hello World');
}).listen(3000);

console.log('server running at port http://localhost:3000');