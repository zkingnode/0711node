/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
};


/**
 * 渲染图表
 */
function renderChart() {
    var aqichartwrap = document.getElementsByClassName("aqi-chart-wrap")[0];
    var str = "";
    for (var key in chartData) {
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        str += '<div style="background-color:' + color + ';height:' + chartData[key] + 'px"></div>'
    }
    aqichartwrap.innerHTML = str
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
// 确定是否选项发生了变化
    if (event.target.value != pageState.nowGraTime) {
        pageState.nowGraTime = event.target.value;
        initAqiChartData();
    }
// 设置对应数据
// 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
// 确定是否选项发生了变化 (onchange只有在变化后才会调用)
// 设置对应数据
    pageState.nowSelectCity = this.value;
    initAqiChartData();
// 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {

    var form_gra_time = document.getElementsByName("gra-time");
    for (var i = 0; i < form_gra_time.length; i++) {
        form_gra_time[i].onclick = graTimeChange;
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    var select = document.getElementById("city-select");
    pageState.nowSelectCity = select.value;
// 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var str = "";
    for (var key in aqiSourceData) {
        str += "<option>" + key + "</option>";
    }
    select.innerHTML = str;
// 给select设置事件，当选项发生变化时调用函数citySelectChange
    select.onchange = citySelectChange;

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
// 将原始的源数据处理成图表需要的数据格式

    //保存城市的所有数据到city_num
    var city_num;
    for (var key in aqiSourceData) {
        if (key == pageState.nowSelectCity) {
            city_num = aqiSourceData[key];
        }
    }

//    提前需要的日期粒度数据
    var sum = 0;
    var i = 0;
    var week = 0;
    var mouth = 0;
    if (pageState.nowGraTime == "day") {
        chartData = {}
        chartData = city_num;
    }

    if (pageState.nowGraTime == "week") {
        chartData = {}
        var city_week;
        city_week = city_num;
        for (key in city_week) {
            var date = new Date(key);
            sum += city_week[key];
            i++;
            if (date.getDay() == 6) {
                week++;
                chartData[date.getFullYear() + "年第" + week + "周"] = parseInt(sum / i);
                i = 0;
                sum = 0;
            }
        }
        if (i != 0) {
            week++;
            chartData[date.getFullYear() + "年第" + week + "周"] = parseInt(sum / i);
            week = 0;
        }
        i = 0;
    }


    if (pageState.nowGraTime == "month") {
        chartData = {}

        var city_mon;
        city_mon = city_num;
        for (key in city_mon) {
            var date = new Date(key);
            if (mouth != date.getMonth()) {
                mouth = date.getMonth();
                chartData[date.getFullYear() + "年第" + mouth + "月"] = parseInt(sum / i)
                sum = 0;
                i = 0;
            }
            sum += city_mon[key];
            i++;
        }
        if (i != 0) {
            chartData[date.getFullYear() + "年第" + (date.getMonth() + 1) + "月"] = parseInt(sum / i);
            sum = 0;
            i = 0;
            mouth = 0;
        }
    }
// 处理好的数据存到 chartData 中
    renderChart();
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
}

init();