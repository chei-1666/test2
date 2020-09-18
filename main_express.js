//1.
// var process=require("process");
// var express=require("express");
// var app=express();

// app.get('/',function(req,res){
//     res.send("Hello World!");
// })

// var server=app.listen(8081,'127.0.0.1',function(){
//     var host=server.address().address;
//     var port=server.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s",host,port);
// });

// process.on("uncaughtException",(err)=>{
//     console.log(err);
// });

//2.
// var express=require("express");
// var app=express();

// app.get('/',function(req,res){
//     res.send("Hello World!");
// })

// app.post('/',function(req,res){
//     res.send("Hello Post!");
// })

// app.get('/list',function(req,res){
//     res.send("书记清单。");
// })


// var server=app.listen(8081,'127.0.0.1',function(){
//     var host=server.address().address;
//     var port=server.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s",host,port);
// });



//3.    设置中间件托管静态文件

// var process=require("process");
// var express=require("express");
// var app=express();

// app.get('/',function(req,res){
//     res.send("Hello World!");
// })

// app.use('/pub',express.static('pub'));

// var server=app.listen(8081,'127.0.0.1',function(){
//     var host=server.address().address;
//     var port=server.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s",host,port);
// });

// process.on("uncaughtException",(err)=>{
//     console.log(err);
// });


//4. GET方法
// var process=require("process");
// var express=require("express");
// var app=express();

// //处理打开express_index页面请求时，响应是将该页面发送去浏览器
// app.get('/express_index.html',function(req,res){
//     res.sendFile(__dirname+"/"+"express_index.html");
// })

// app.get('/process_get',function(req,res){
//     var response={
//         "first_name":req.query.first_name,
//         "last_name":req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })
// //此处无碍
//  app.use('/pub',express.static('pub'));

// var server=app.listen(8081,'127.0.0.1',function(){
//     var host=server.address().address;
//     var port=server.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s",host,port);
// });

// process.on("uncaughtException",(err)=>{
//     console.log(err);
// });

//5. POST方法
// var express=require("express");
// var bodyparser=require("body-parser");
// var app=express();

// var urlEncodedparser=bodyparser.urlencoded({extended:false});

// //处理打开express_index页面请求时，响应是将该页面发送去浏览器
// app.get('/express_index.html',function(req,res){
//     res.sendFile(__dirname+"/"+"express_index.html");
// })

// app.post('/process_get',urlEncodedparser,function(req,res){
//     var response={
//         "first_name":req.body.first_name,
//         "last_name":req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })
// //此处无碍
//  app.use('/pub',express.static('pub'));

// var server=app.listen(8081,'127.0.0.1',function(){
//     var host=server.address().address;
//     var port=server.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s",host,port);
// });


//6.上传文件
var express=require("express");
var bodyparser=require("body-parser");
var app=express();
var fs=require("fs");
var multer=require("multer");

app.use('/pub',express.static('pub'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(multer({dest:'./load'}).array('image'));

//处理打开express_index页面请求时，响应是将该页面发送去浏览器
app.get('/express_index.html',function(req,res){
    res.sendFile(__dirname+"/"+"express_index.html");
})

app.post('/file_unload',function(req,res){

    console.log(req.files[0].originalname);  //上传文件的信息
    var des_file=__dirname+'/'+req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.error(err);
            }else{
                response={
                    message:'File unload sucessfully',
                    filename:req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})

var server=app.listen(8081,'127.0.0.1',function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s",host,port);
});
