/**
 * Created by lyy on 2016/8/16.
 */

/*console.warn('warn');
console.error('error');

console.log('log');
console.info('info');*/

//当前模块的绝对路径
//console.log(__filename); // e:\201603node\3.global\1.console.js
//当前文件所在的目录
//console.log(__dirname);  // e:\201603node\3.global


//把当前事件推到下个事件队列中执行
/*console.log('a');
setImmediate(function(){
    console.log('setImmediate');
});
console.log('c');*/

/*
以上的运行结果是:
a
c
setImmediate

*/
var person = {
    food:'',
    cook:function(){
        console.log('做饭');
        this.food = '红烧排骨';
        return this;
    },
    eat:function(){
        /*var self = this;
        setImmediate(function(){
            console.log('吃',self.food);
        });
        return this;*/

        //箭头函数解决this问题
        setImmediate(()=>{ //意味着这里面的this等于父级作用域的this
           console.log('吃',this.food);
        });
        return this;
    }

};
//person.cook().eat();
person.eat().cook(); //虽然先调用的是eat()但是它需要等待让cook()先执行