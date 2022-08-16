const { callbackify } = require('util');

const SyncHook = require('events').EventEmitter;
const hook = new SyncHook();

// 单一事件对象类型
// const arrFn = []
// const uniqueHook = {
//     tap(fn) {
//         arrFn.push(fn)
//     },
//     call() {
//         // 核心
//         const arrParams = Array.prototype.map.call(arguments, item => item) // arguments.map(item => item)
//         arrFn.forEach(fn => fn(...arrParams))
//         // console.log(arrParams)
//     }
// }
// 写成能实例化的(函数当中构造函数)
// function syncHook() {
//     this.arrFn = []
//     this.tap = function(fn) {
//         this.arrFn.push(fn)
//     }
//     this.call = function() {
//         // 核心
//         const arrParams = Array.prototype.map.call(arguments, item => item) // arguments.map(item => item)
//         this.arrFn.forEach(fn => fn(...arrParams))
//         // console.log(arrParams)
//     }
// }


// es2015+ class
class syncHook {
    // 私有属性
    #arrFn = [];

    tap(name, fn) {
        if (typeof name === 'function' && arguments.length === 1) {
            const uniqueName = Symbol('undefined name')
            this.#arrFn.push({ name: uniqueName, fn: name })
        } else {
            this.#arrFn.push({ name, fn })
        }
    }

    call() {
        // 核心
        const arrParams = Array.prototype.map.call(arguments, item => item) // arguments.map(item => item)
        this.#arrFn.forEach(event => event.fn(...arrParams))
        // console.log(arrParams)
        // console.log(arrParams)
    }
}

// test代码
const uniqueHook = new syncHook()

// 这个对象上只能注册一类事件
uniqueHook.tap('first-event', (msg, msg2) => {
    console.log(msg + msg2 + '我接受到了')
})

uniqueHook.tap((msg) => {
    console.log(msg + '我在你之后接收到了')
})

uniqueHook.call('哈哈哈，我传的', '只是第二个参数')

