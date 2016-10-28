      //引入NodeJS的http moudle模块
var http = require('http');
var server=http.createServer(
          function(request,response){
              //使用response向客户端发出http格式的响应
              //首先设置响应头
              //第一个参数是响应的状态编码（成功是200）
              //第二个参数是设置响应的内容是什么
              response.writeHead(200,{
                  'Content-Type':'text/html'
              });
              //发送响应的数据
              response.end('<html><body><input type="text"/><br/><br/><input type="password"/></body></html>');
      });
      server.listen(1234);
      console.log("serve is running at port:1234")