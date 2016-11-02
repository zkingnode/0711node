/**
 * Created by Awei on 2016/10/28.
 */

/*
 *
 * 飞船
 * */
function Airship(orbital) {
    this.orbital = orbital;
    this.powerValu = 100;   //飞船初始电量
}

Airship.prototype.control = function () {
    var fly = function () {

    };
    var stop = function () {

    };

    return {
        fly:fly,
        stop:stop
    }
};


// Airship.prototype.power =