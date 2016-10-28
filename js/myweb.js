//引入NodeJS的http  moudle模块
var http=require('http');
var server=http.createServer(
  function(request,response){
      //只要执行，传入两个参数 request请求 和response响应
      //使用response 向客户端发出http格式的响应
      //首先设置响应头

      //第一个参数是响应的状态编码 成功是200
      //第二个参数设置响应的内容是什么格式
      response.writeHead(200,{
        'Content-Type':'text/html'
      });
      //发送响应的数据
      response.end('<html><head><meta charset="utf-8"><title>input框</title></head><body>用户名:<input type="text"><br><br>密码:<input type="password"></body></html>')
  });
  server.listen(8888);
console.log("Server is running at port:8888");
