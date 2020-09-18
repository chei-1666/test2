// 事件监听、触发、处理

//引入events模块
var events=require("events");
// 创建eventEmitter对象
var eventEmitter=new events.EventEmitter();

// 创建事件处理程序
var connectHandler= function connected(){
    console.log("连接成功。");

    // 触发data_recived事件
    eventEmitter.emit('data_recived');
}

// 绑定connection事件处理程序
eventEmitter.on("connection",connectHandler);

// 使用匿名函数判定data_recived事件
eventEmitter.on('data_recived',function (){
    console.log("数据连接成功。");
})

// 触发connection事件
eventEmitter.emit('connection');

console.log("程序执行完毕。")