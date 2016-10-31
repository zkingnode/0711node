var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{
        'Content-Type':'text/html'
    });
    response.end("<html><meta charset='UTF-8'><body><form action=''><label for=''>用户名</label><input type='text'><label for=''>密码</label><input type='pwd'></form></body></html>")
}).listen(8888);
console.log('Server is running at port:8888');
