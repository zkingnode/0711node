/**
 * Created by Awei on 2016/10/28.
 */
var express = require('express');
var app = express();
app.get('/',function (request,response) {
    response.send("你好这是我的第一个Node网站");
});

app.listen(1234,function () {
    console.log("正在监听1234端口");
});
