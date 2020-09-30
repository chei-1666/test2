var express=require("express");
var app= new express();
var util=require("util");
var cookieParser=require("cookie-parser");

app.use(cookieParser());

app.get('/',function(req,res){
    console.log("Cookie:"+util.inspect(req.cookies));
})

app.listen(8081);