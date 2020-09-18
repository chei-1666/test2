//1.获取GET请求内容
// var http=require("http");
// var url=require("url");
// var util=require("util");

// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
//     //url.parse将URL字符串转换为对象，util.inspect将对象转换为字符串
//     res.end(util.inspect(url.parse(req.url,true)));
// }).listen(3000);


//2.获取POST请求内容

var http=require("http");
var querystring=require("querystring")

var postHtml=
'<html><head><meta charset-="utf-8"><title>菜鸟教程 Node.js 实例</title></head>'+
'<body>'+
'<form method="post">'+
'网站名：<input name="name"><br>'+
'网站URL：<input name="url"><br>'+
'<input type="submit">'+
'</form>'+
'</body></html>';

http.createServer(function(req,res){
    var body="";
    req.on("data",function(chunk){
        body+=chunk;
    });

    req.on("end",function(){
        body=querystring.parse(body);

        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        if(body.name&&body.url){
            res.write("网站名："+body.name);
            res.write("<br>");
            res.write("网站URL："+body.url);
        }
        else{
            //先执行postHtml,由body收集数据，提交后触发监听器，执行if语句
            res.write(postHtml);
        }
        res.end();
    });

}).listen(3000);