/**
 * Created by Awei on 2016/10/28.
 */

/*
 * 系统
 * */

var system = {
    airshipList:[],

    //添加飞船
    creatAirship:function () {
        var airship1 = new Airship();
        //获取轨道
        var orbital = $(event.target).attr("orbital");
        //添加飞船
        $('#orbital'+orbital).append(
            $("<div></div>")
                .attr("class","airship")
                .text("100%")
        );
    },


    //删除飞船
    deleteAirship:function (orbital) {
        //获取轨道
        var orbital = $(event.target).attr("orbital");
        //删除飞船
        $("#orbital"+ orbital+" .airship").remove();
    },


    message:function () {
        if(Math.random() <= 0.3){
            log("丢包了","red");
            return;
        }

    }


};