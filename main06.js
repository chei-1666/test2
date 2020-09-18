// 缓冲区创建方法
// const定义变量不可修改，必须初始化
// const buf=Buffer.from("runoob","ascii");

const buf1=Buffer.alloc(10);
console.log(buf1);

// const buf2=Buffer.alloc(10,1);
// console.log(buf2);

// const buf3=Buffer.allocUnsafe(10);
// buf3.fill(6);
// console.log(buf3);

// const buf4=Buffer.from(["weewyr,jt,",8865]);
// console.log(buf4);

// const buf5=Buffer.from("test");
// console.log(buf5);

// const buf6=Buffer.from("test","latin1");
// console.log(buf6);

// console.log(buf.toString("hex"));

// console.log(buf.toString("base64"));

// 缓冲区写入
let len;
len=buf1.write("www.baidu.com");
console.log(len);

// 缓冲区读取
console.log(buf1.toString("ascii",0,3));

// 转换为JSON对象
const json=JSON.stringify(buf1);
console.log(json);

// 拷贝缓冲区
var buf2=Buffer.alloc(20);
buf2.write("12fdhd");
buf1.copy(buf2,3,2,7);
console.log(buf2.toString());

// 缓冲区裁剪
var buf3=Buffer.from("abcdefg");
// var buf4=Buffer.alloc("20");
// let length=buf3.write("abcdefg");
var buf4=buf3.slice(2,5);
console.log(buf4.toString());

