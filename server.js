var http = require('http')

var server = http.createServer(function(req,res)
{
    if(req.url =='/hello')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<html><body><h1>Hello world !!!</h1></body></html>');
        res.end();
    }
    else{
        res.end('Invalid Request');
    }
});
server.listen(3000);
console.log('Web server is successfully created !!!')