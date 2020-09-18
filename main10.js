//文件系统模块
var fs=require("fs");

//1.
// fs.readFile("input.txt",function(err,data){
//     if(err) {
//         return console.error(err);
//     }
//     console.log("异步读取："+data.toString());
// })

// var data=fs.readFileSync("input.txt","utf-8");

// console.log("同步读取："+data.toString());

// console.log("程序执行完毕。");


//2.打开文件
// fs.open("input.txt","r",function(err,fd){
//     if(err){
//         return   console.error(err);
//     }
// });
// console.log("程序执行完毕。");

//3.获取文件信息
// fs.stat("input.txt",function(err,stats){
//     if(err){
//         return console.err(err);
//     console.log(stats);

//     console.log("是否为目录："+stats.isDirectory());

// })

//4.写入文件内容

// fs.writeFile("input.txt","羌笛何须怨杨柳，轻舟已过万重山。",function(err){
//     if(err){
//         return console.error(err);
//     }
// })

// console.log("程序执行完毕。");


//5.读取文件内容
// var buf = new Buffer.alloc(1024);
// fs.open("input.txt","r",function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("打开文件成功。");
//     fs.read(fd,buf,0,buf.length,0,function(er,bytesRead){
//         if(err){
//             return console.error(err);
//         }

//         console.log("读取字节数是："+bytesRead);

//         console.log(buf.toString());
//     });
// });

// 6.关闭文件
// var buf = new Buffer.alloc(1024);
// fs.open("input.txt","r",function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("打开文件成功。");
//     fs.read(fd,buf,0,buf.length,0,function(er,bytesRead){
//         if(err){
//             return console.error(err);
//         }

//         console.log("读取字节数是："+bytesRead);

//         console.log(buf.toString());
//     });

//     fs.close(fd,function(err){
//         if(err){
//             return console.error(err);
//         }

//         console.log("关闭文件。");
//     });

// });

//7.截取文件内容
// var buf = new Buffer.alloc(1024);
// fs.open("input.txt","r+",function(err,fd){
//     if(err){
//         return console.error(err);
//     }

//     console.log("打开文件成功。");

//     fs.ftruncate(fd,20,function(err){
//         if(err){
//             // console.log(err);
//         }
    

//     fs.read(fd,buf,0,buf.length,0,function(err,bytesRead){
//         if(err){
//             console.log(err);
//         }

//         console.log("读取字节数是："+bytesRead);

//         console.log(buf.slice(0,bytesRead).toString());
    

    
//     fs.close(fd,function(err){
//         if(err){
//             return console.error(err);
//         }

//         console.log("关闭文件。");
//     });
// });
// });
// });

// 8.查看目录

fs.readdir("/TEST/Project/project1",function(err,files){
    if(err)
        console.log(err);

    files.forEach(function(file){
        console.log(file);
    })
})