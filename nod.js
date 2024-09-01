const http = require ('http');

http.createServer ((req,res) => {
    res.write("<h1> hey this is hafeez </h1>");
    res.end();
}).listen(4500);