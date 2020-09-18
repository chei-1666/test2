var events=require("events");
var eventEmitter=new events.EventEmitter();

eventEmitter.on("error",function(err){
    console.error("Error",err)
})
eventEmitter.emit("error");

console.log("程序执行完毕。");