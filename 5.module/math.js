//这是一个私有变量,只能在本模块内访问,外界不能访问

//在node运行时,在外面套了function
/*
* 我们能直接用的变量有两种
* 1、挂在global 下面的属性能直接用
* 2、
*
* */
console.log(module);
/*

Module {
    id: '.',         //--> 如果当前模块是入口模块的话,id:'.',否则是此模块的绝对路径
    exports: {},    //--> 导出对象
    parent: null,
    filename: 'F:\\201603node\\5.module\\math.js',  //-->此模块绝对路径
    loaded: false,
    children: [],
    paths:
    [ 'F:\\201603node\\5.module\\node_modules',
        'F:\\201603node\\node_modules',
        'F:\\node_modules' ] }

*/


//function math(exports,require,module,__filename,__dirname){//module代表当前模块

    //var exports = module.exports; module是传参传进来的
    //---------------------
    console.log('exec...');
    var add = (a,b) => a+b; //箭头函数,箭头后面的是函数体
    //---------------------
    //return module.exports;
//}
//以上math函数下 //的代码都是node帮我们封装好的


    //module.exports.add = add;
      exports.add = add;
