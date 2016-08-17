/*
* 主线程要尽可能的多异步,少同步
* 保证主线程的工作要简单
*
* */

var a = 1;
var b = function(){
    console.log('b');
};
var c = function(){
    console.log('c');
};

console.log(a);
b();
c();