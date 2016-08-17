/*
 * 2、util.inspect
 *      util.inspect(object,[showHidden],[depth],[colors])
 *      是一个将任意对象转换 为字符串的方法
 *      通常用于调试和错误输出。它至少接受一个参数 object:即要转换的对象。
 *      showHidden: 显示隐藏的属性,是一个可选参数，如果值为 true，将会输出更多隐藏信息。
 *      depth:      深度
 *      colors:     颜色
 *
 *
 * */
var util = require('util');
var obj = {
    name:'zfpx',
    age:6
};
//给对象定义一个属性,一个属性有三个选项
Object.defineProperty(obj,'home',{
    value:'beijing',
    configurable:false, //是否可配置,如果为true,表示可以删除这个属性 delete
    enumerable:true,   //是否可枚举 for in Object.keys 能迭代出来
    writable: false     //是否可修改它的值,true可以修改
});
//获取一个对象所有的可枚举的属性
console.log(Object.keys(obj)); //[ 'name', 'age', 'home' ]
console.log(obj); //{ name: 'zfpx', age: 6 }
util.inspect(obj,{

});








