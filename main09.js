// var hello=require("./main08_World.js");
// var a=1;
// var he=new hello();
// he.sayhello();
// console.dir(he);

// console.assert(a==0,"sgrsssef");


// console.log(__filename);

// console.log(process.platform);

// console.log(process.memoryUsage);

// console.log(process.pid+" "+process.title);
// console.log(process.version);


// 原型继承，prototype实践
function base(name,age){
    this.name="jihua";
    this.age=23;
}

base.prototype.count=null;
base.count=200;

console.log(base.count);