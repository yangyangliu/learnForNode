/*
* nextTick
* 把任务放在当前事件队列的尾部
* setImmediate
* 把任务放在下个事件队列中(的第一个)执行
*
* 所以nextTick的优先级 > setImmediate
*
* */
/*
setImmediate(function(){
    console.log('dd');
});
process.nextTick(function(){
    console.log('a');
    process.nextTick(function(){
        console.log('b');
        process.nextTick(function(){
            console.log('c');
        });
    });
});
//输出结果是: a b c dd*/

/*
setImmediate(function(){
    console.log('dd');
});
process.nextTick(function(){
    console.log('a');
    setImmediate(function(){
        console.log('ff');
    });
    process.nextTick(function(){
        console.log('b');
        process.nextTick(function(){
            console.log('c');
        });
    });
});
//输出结果是: a b c dd ff*/
setImmediate(function(){
    console.log('dd');
});
process.nextTick(function(){
    console.log('a');
    setImmediate(function(){
        console.log('ff');
        process.nextTick(function(){
            console.log('b');
        });
    });
});
// a dd ff b