/**
 * Created by awei on 16-11-1.
 */
var fs = require("fs");
var path = require("path");
function getFileName(dir) {
    console.log("---------------------------\n目录："+dir)
    var files = fs.readdirSync(dir);
    var len = files.length;
    for(var i=0; i<len; i++){
        if(path.extname(files[i])){
            console.log("文件："+files[i]);
        }else {
            getFileName(dir+files[i]+'/');
        }
    }
}
getFileName("./");
