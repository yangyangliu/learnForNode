/**
 * Created by Administrator on 2016/8/15.
 */
/*
1、什么是回调
--> 异步编程的基本方法,需要将异步处理的时候一般采用后续传递的方式
--> 将后续逻辑函数作为起始函数的参数
*/

//先点餐,点完餐5s之后 才能吃饭
//点餐
function pick(eat){
    console.log('点餐');
    setTimeout(eat,5000);
}
//吃饭
function eat(eat){
    console.log('吃饭');
}
pick();
