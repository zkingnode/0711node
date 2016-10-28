var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{
        'Content-Type':'text/html'
    });
    response.end("<html><meta charset='UTF-8'><body><form action=''><label for=''>用户名</label><input type='text'><label for=''>密码</label><input type='pwd'></form></body></html>")
}).listen(8888);
console.log('Server is running at port:8888');
//// 引入NodeJS的http  moudle模块
//var http = require('http');
//http.createServer(function(request,response){
////  使用response 向客户端发出http格式的响应
////  首先设置响应头, 第一个参数是响应的状态码，成功是200
////  第二个参数设置响应的内容是什么格式
//    response.writeHead(200,{
//        'Content-Type':'text/plain'
//    });
//    //  发送响应的数据
//    response.end('hello world\n')
//}).listen(8888);
//console.log("Server is running at port:8888");