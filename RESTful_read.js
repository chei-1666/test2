var express=require("express");
var app=new express();
var fs=require("fs");

//读取数据
app.get("/listUsers",function(req,res){
    fs.readFile(__dirname+"/"+"users.json","utf-8",function(err,data){
        console.log(data);
        res.end(data);
    });
})

var server=app.listen(8081,function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s",host,port);
})