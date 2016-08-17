var b = 1;
/*
* 1、全局属性 --> 特点全局唯一
* 2、自己声明的内部的属性
* 3、形参
*
* */
function a(e){
    var c = 3;
    console.log(b,c,e); //1 3 1
}
a(1);