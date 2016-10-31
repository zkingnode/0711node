	//引入node.js的http 模块
	var http = require('http');
	http.createServer(function (request,response) {
        //使用response向客户端发出http格式的响应
        //首先设置响应头
        //第一个参数是响应的状态，成功是200
        //第二个参数是设置响应的内容是什么格式
        console.log("触发了请求");
        response.writeHead(200,{
            'Content-Type':'text/html'
        });

        //发送响应的数据
        response.end('<html><head><meta charset="UTF-8"></head><body>账号：<input type="text" name="name" value="请输入用户名"><br><br>密码：<input type="password" name="name" value="请输入密码"></body></html>');
	}).listen(8888);
    console.log("Server is running at port:8888");
