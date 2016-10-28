//引入NodeJS的http moudle模块

  var http = require('http');
  //创建http的服务器
  //crreatServer的参数是一个回调函数
  //这个回调函数
  var server=http.createServer(function(request,response){
    //使用response 向客户端发出Http格式的响应
    //首先设置响应头  第一个参数是响应的状态编码 成功是200
    //第2个参数设置响应的内容是什么格式
    console.log("翠花，快来接客了");
    response.writeHead(200,{
      'Content-Type':'text/html'
    });
    //发送响应的数据
    response.end('<html><bordy><div style="color:red"><h2>这是我的网页</h2></div></body></html>');
  });
  server.listen(8888);
  console.log("Server is running at port:8888");
