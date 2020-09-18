// 数据流

var fs=require("fs");
var read=fs.createReadStream("input.txt");
var data="";

read.setEncoding("utf-8");

read.on("data",function(chunk){
    data+=chunk;
})

read.on("end",function(){
    console.log(data);
})

read.on("error",function(err){
    console.log(err.stack);
})

console.log("程序执行完毕。");

// var fs=require("fs");
// var read=fs.createReadStream("input.txt");
// var write=fs.createWriteStream("output.txt");

// read.pipe(write);

// console.log("程序执行完毕。");