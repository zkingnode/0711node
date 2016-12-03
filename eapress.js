var express =require("express");
var app=express();
app.get('/',function(request,response){
   response.send("第一个网站");
});
app.listen(1234,function(){
    console.log("监听1234端口");
});