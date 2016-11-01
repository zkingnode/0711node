/**
 * Created by Awei on 2016/9/29.
 */

var tag_input = document.getElementById("tag_input");
var hobby_input = document.getElementById("hobby_input");
var tag_box = document.getElementsByClassName("tag_box")[0];
var hobby_box = document.getElementsByClassName("hobby_box")[0];
var submit = document.getElementById("submit");

var re = /([ |，|,|、|\t])+/g;

console.log(tag_input);
console.log(tag_box);
console.log(hobby_input);
console.log(hobby_box);


function add_tag(input_tag) {
    var j = 1;    //重复标签标志位

    if (!re.test(input_tag))return;

    input_tag = input_tag.trim();   //去两头空格
    tag_input.value = "";   //清空输入框
    input_tag = input_tag.replace(re, "");   //清除分隔符

    //大于十个标签删除第一个
    if (tag_box.childElementCount >= 10) {
        tag_box.removeChild(tag_box.firstElementChild)
    }

    //判断是否有相同标签
    for (var i = 0; i < tag_box.childElementCount; i++) {
        if (tag_box.children[i].innerHTML == input_tag)
            j = 0;
    }

    //输出
    if (input_tag && j)creat_div(tag_box, input_tag);
}

function add_hobby() {
    var input = hobby_input.value;
    var reg = /([ |，|,|、|\t|\n])+/g;
    var split = input.match(reg);

    input = input.trim();   //去两头空格


    if (split == null) {
        creat_div(hobby_box, input)
    } else {
        for (var i = 0, len = split.length; i < len; i++) {
            input = input.replace(split[i], ",");
            console.log(input[i]);
        }
        input = input.split(",");
        for (i = 0; i < input.length; i++) {
            creat_div(hobby_box, input[i])
        }
    }
    return false
}

function creat_div(element, valu) {
    var div = document.createElement("div");
    var text = document.createTextNode(valu);
    div.appendChild(text);
    element.appendChild(div);
}

function delet() {
    var box = event.target.parentNode;
    box.removeChild(box.firstElementChild);
}

//事件绑定
tag_input.onkeyup = function () {
    var input_tag = event.target.value;

    add_tag(input_tag);
};

tag_input.onkeydown = function () {
    var input_tag = event.target.value;
    if (event.keyCode === 13) {
        console.log("OK");
        input_tag += ",";
        add_tag(input_tag);
        return false;
    }
};

submit.onclick = add_hobby;

tag_box.addEventListener("click", delet);
hobby_box.addEventListener("click", delet);