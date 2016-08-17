/*
* process
* 当前工作目录(可以进行修改)
*   当前程序是在哪个目录下面启动的
*   current working directory
*
* */

//console.log(process.cwd()); //  e:\201603node\3.global  cwd是可修改的
//console.log(__dirname);     //  e:\201603node\3.global  __dirname不可修改


//返回上级目录
/*
process.chdir('..');  //e:\201603node
console.log(process.cwd());
process.chdir('3.global'); //回到3.global
console.log(process.cwd());//e:\201603node\3.global*/

/*
* 当前node进程使用的内存数量
* 返回的是个对象类型
* {
*   rss: 17424384,      常驻内存
*   heapTotal: 7409232, 申请到的堆内存的总数量
*   heapUsed: 3820984   已经使用的堆内存的总数量
* }
* 当一个变量不再被引用时会被回收掉
*
* */
console.log(process.memoryUsage()); //{ rss: 17424384, heapTotal: 7409232, heapUsed: 3820984 }
var arr = [];
/*
for(var i=0;i<1000000;i++){
    arr.push(""+i);
    console.log(process.memoryUsage());
}*/
