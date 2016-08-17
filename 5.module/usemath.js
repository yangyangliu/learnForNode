/*
* require()
* 1、需要哪个js就把哪个js文件名称路径写在require中
* 2、require的返回值是
*
* */

//require('./math.js'); //需要哪个js就把哪个js文件名称路径写在require中
//当我们在一个模块里面去require()另一个模块的时候,它的返回时就是module.exports属性
/*
var math = require('./math.js');
console.log(math);// 返回一个空对象{}*/




//多次require一个模块后会得到同一个模块

//require.cache 放的是模块的缓存
console.log(Object.keys(require.cache));
//得到模块的绝对路径
//resolve的时候并不会真正执行或加载这个模块,只是分析路径而已
//console.log(require.resolve('./math.js'));//e:\201603node\5.module\math.js
var add1 = require('./math.js');
console.log(Object.keys(require.cache));
//删除缓存
delete require.cache[require.resolve('./math.js')];
var add2 = require('./math.js');
console.log(Object.keys(require.cache));
console.log(add1 === add2); //true