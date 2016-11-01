/**
 * Created by awei on 16-11-1.
 */
function toBase64(input) {
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    str+=str.toLowerCase();
    str+='1234567890+/';
    var arr=""
    var a = new Buffer(input).toString('hex');
    console.log('16进制为：'+a);

    for(var i=0; i<(a.length/2); i++){
        //先转为１０进制，再转２进制
        arr+= Number("0x" + a.slice(i * 2, i * 2 + 2)).toString(2);
    }
    console.log('2进制为：'+arr);

    var b=[];
    var out= '';
    for(var j=0; j<arr.length/6; j++){
        b[j] = arr.slice(j*6,j*6+6);    //六个一组
        b[j] = parseInt(b[j],2);         //转为二进制
        out+=str[b[j]];     //转为base64
    }
    console.log("base64："+out);
}

toBase64("第一天");