# 百度IFE Task023

* [Demo][0]

* 2016-09-29

##任务目的
  
* 练习JavaScript面向对象设计
* 实践一些基础的设计模式
  
## 任务描述
* 如图（[打开查看][1]），创建一个虚拟宇宙，包括一个行星和飞船
* 每个飞船由以下部分组成
* * 动力系统，可以完成飞行和停止飞行两个行为，暂定所有飞船的动力系统飞行速度是一致的，比如每秒20px，飞行过程中会按照一定速率消耗能源（比如每秒减5%）
* * 能源系统，提供能源，并且在宇宙中通过太阳能充电（比如每秒增加2%，具体速率自定）
* * 信号接收处理系统，用于接收行星上的信号
* * 自爆系统，用于自我销毁
* 每个飞船的能源是有限的，用一个属性来表示能源剩余量，这是一个百分比，表示还剩余多少能源。
* 能源耗尽时，飞船会自动停止飞行
* 飞船有两个状态：飞行中和停止，飞船的行为会改变这个属性状态
* 飞船的自我销毁方法会立即销毁飞船自身
* 行星上有一个指挥官（不需要在页面上表现出其形象），指挥官可以通过行星上的信号发射器发布如下命令
* 创建一个新的飞船进入轨道，最多可以创建4个飞船，刚被创建的飞船会停留在某一个轨道上静止不动
* 命令某个飞船开始飞行，飞行后飞船会围绕行星做环绕运动，需要模拟出这个动画效果
* 命令某个飞船停止飞行
* 命令某个飞船销毁，销毁后飞船消失、飞船标示可以用于下次新创建的飞船
* 你需要设计类似如下指令格式的数据格式
```
{
	id: 1,
	commond: 'stop'
}
```
* 指挥官通过信号发射器发出的命令是通过一种叫做Mediator的介质进行广播
* Mediator是单向传播的，只能从行星发射到宇宙中，在发射过程中，有30%的信息传送失败（丢包）概率，你需要模拟这个丢包率，另外每次信息正常传送的时间需要1秒
* 指挥官并不知道自己的指令是不是真的传给了飞船，飞船的状态他是不知道的，他只能通过自己之前的操作来假设飞船当前的状态
* 每个飞船通过信号接收器，接受到通过Mediator传达过来的指挥官的广播信号，但因为是广播信号，所以每个飞船能接受到指挥官发出给所有飞船的所有指令，因此需要通过读取信息判断这个指令是不是发给自己的

## 任务注意事项
   
* 实现功能的同时，请仔细学习JavaScript相关的知识
* 相关信息发送、接受等，建议在控制台中输出
* 指挥官下达销毁飞船指令后，默认在指挥官那里就已经默认这个飞船已经被销毁，但由于有信息传递丢失的可能性，所以存在实际上飞船未收到销毁指令，而指挥官又创建了新的飞船，造成宇宙中的飞船数量多于创建的4个上限。
* 任务说明中的各种数值说明只是参考，可能存在不合理性，可以自行设定
* 实现各种功能、模块时，不需要生搬硬套设计模式，但希望你就设计模式相关知识进行学习，并进行合理的借鉴运用
* 请注意代码风格的整齐、优雅
* 代码中含有必要的注释
* 允许使用jQuery等库，但不建议使用React、Angular等框架
   
## 在线学习参考资料
* [JavaScript Design Patterns][2]
* [4 JavaScript Design Patterns You Should Know][3]
* [JavaScript Design Patterns][4]
* [Understanding Design Patterns in JavaScript][5]
* [在线电子书：Learning JavaScript Design Patterns][6]
* [JavaScript 设计模式 – 第一部分： 单例模式、组合模式和外观模式][7]
* [JavaScript 设计模式 – 第二部分： 适配器、装饰者和工厂模式][8]
* [JavaScript设计模式一：工厂模式和构造器模式][9]
* [JavaScript 设计模式读书笔记(五)——工厂模式][10]
* [Alloy JavaScript 设计模式][11]
* [常用的Javascript设计模式][12]
* [javascript常见的设计模式举例][13]
* [前端攻略：javascript 设计模式][14]

[0]: https://github.com/ZowieGong/demo/blob/master/IFE%20Task/task026/index.html
[1]: ./task_2_26_1.jpg
[2]: http://www.dofactory.com/javascript/design-patterns
[3]: https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
[4]: https://carldanley.com/javascript-design-patterns/
[5]: http://code.tutsplus.com/tutorials/understanding-design-patterns-in-javascript--net-25930
[6]: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
[7]: http://www.adobe.com/cn/devnet/html5/articles/javascript-design-patterns-pt1-singleton-composite-facade.html
[8]: http://www.adobe.com/cn/devnet/html5/articles/javascript-design-patterns-pt2-adapter-decorator-factory.html
[9]: https://segmentfault.com/a/1190000002525792
[10]: https://segmentfault.com/a/1190000000491074
[11]: http://www.alloyteam.com/2012/10/common-javascript-design-patterns/
[12]: http://blog.jobbole.com/29454/
[13]: http://blog.csdn.net/yingyiledi/article/details/26725795
[14]: http://www.cnblogs.com/Darren_code/archive/2011/08/31/JavascripDesignPatterns.html