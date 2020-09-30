const fs=require("fs");
const child_process=require("child_process");

for(var i=0;i<3;i++){
    var workProcess=child_process.exec("node process_support1.js "+i,function(error,stdout,stderr){
        if(error){
            console.log(error.stack);
            console.log('Error code:'+error.code);
            console.log('Signal recevied:'+error.signal);
        }
        console.log("stdout："+stdout);
        console.log("stderr："+stderr);
    });
    workProcess.on('exit',function(code){
        console.log("子进程已退出，退出码"+code);
    });
}