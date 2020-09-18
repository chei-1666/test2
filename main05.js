var events=require("events");
var eventEmitter=new events.EventEmitter();

// eventEmitter.emit("error");
// 监听器1
var listener1 =function listenter1(){
    console.log("监听器1正在执行中");
}

// 监听器2
var listener2 =function listenter2(){
    console.log("监听器2正在执行中");
}

// 绑定事件
eventEmitter.on("connection",listener1);
eventEmitter.on("connection",listener2);

// 触发事件，查看当前事件监听器数量
eventEmitter.emit("connection");
console.log("监听器数量："+eventEmitter.listenerCount("connection"));

console.log(eventEmitter.listeners("connection"));

// 移除监听器1
eventEmitter.removeListener("connection",listener1);

eventEmitter.emit("connection");
console.log("监听器数量："+eventEmitter.listenerCount("connection"));


console.log("程序执行完毕。");