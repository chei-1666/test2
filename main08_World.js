// exports.world=function(){
//     console.log("hello world.");
// }

function Hello(){
    var name;
    this.setName=function(tName){
        name=tName;
    };

    this.sayhello=function(){
        console.log("Hello "+name);
    };
};
module.exports=Hello;