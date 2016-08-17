/*
* util 是一个Node.js 核心模块，提供常用函数的集合,用于弥补核心JavaScript的功能 过于精简的不足。
* */

/*
* 1、util.inherits
*    util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。
* */
var util = require('util');
function Person(){
    this.name = name;
}
Person.prototype.eat = function(){
    console.log(this.name,'吃');
};
function Teacher(name){
    this.name = name;
}
//原型继承->只继承prototype上的方法,不继承私有的方法！！让Teacher这个子类继承父类Person!
util.inherits(Teacher,Person);
var t = new Teacher();
t.eat();











