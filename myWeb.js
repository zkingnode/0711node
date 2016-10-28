//引入node。js的http moudle模块
var http=require('http');
http.createServer(function (request,response) {
  //使用response 向客户端发出http格式的响应
  //首先设置响应头  第一个参数是响应的状态码，成功是200
  response.writeHead(200,{
  'Content-Type':'text/html'
  });
  //发送响应的数据
  response.end('<html><meta charset="UTF-8"><body><div><table><tr><td>用户名：</td><td><input type="text"></td></tr><tr><td>密码：</td><td><input type="password"></td></tr></table></div></body></html>\n')
}).listen(8888);
console.log("Server is running at port:8888");
