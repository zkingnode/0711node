/**
 * Created by Awei on 2016/9/21.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    //获得文本框内容并去空格
    var city_input = document.getElementById("aqi-city-input").value.trim();
    var num_input = document.getElementById("aqi-value-input").value.trim();

    //用正则表达式进行格式判断
    if(!city_input.match(/^[A-Za-z\u4E00-\u9FA5 ]+$/)){
        alert("城市名必须为中英文字符！")
        return;
    }
    if(!num_input.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return;
    }

    //存储数据
    aqiData[city_input] = num_input;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

    var table = document.getElementById("aqi-table");
    //字符串拼接
    var str = "<tr><td>"+"城市"+"</td><td>"+"空气质量</td><td>"+"操作</td></tr>";
    //遍历对象并拼接字符串
    for (var key in aqiData){
        str += "<tr><td>"+ key +"</td><td>"+aqiData[key] +"</td><td>"+"<button>删除</button></td></tr>";
    }
    //只要 key 不为空，判断一直成立。
   table.innerHTML = key ? str: "";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
    // do sth.
    //点击对象的父级节点的第一个字节点即为城市名
    var city = target.parentNode.parentNode.firstChild.innerHTML;
    //删除对应的属性
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").addEventListener("click",addBtnHandle);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById("aqi-table").addEventListener("click",function (e) {
        //传递event对象判断点击对象
        if (e.target && e.target.nodeName ==="BUTTON"){
            delBtnHandle(e.target);
        }
    })

}

init();