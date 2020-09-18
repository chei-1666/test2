var http=require("http");
var url=require("url");
var fs=require("fs");

//创建服务器
http.createServer(function(request,response){
    //解析请求，包括文件名
    var pathname=url.parse(request.url).pathname;
    //输出请求的文件名
    console.log("Request for "+pathname+" recevied.");
    //从文件系统中服务请求的文件内容
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
            //HTTP状态码：404：NOT
            //Content Type:text/html
            response.writeHead(404,{'Content-Type':'text/html'});
        }else{
            //HTTP状态码：200：OK
            //Content Type:text/html
            response.writeHead(200,{'Content-Type':'text/html'});
            //响应文件内容
            response.write(data.toString());
        }
        //发送响应数据
        response.end();
    });
}).listen(8080);
//控制台会输出以下信息
console.log("Server running at http://127.0.0.1:8080/");