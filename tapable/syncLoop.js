const {SyncLoopHook} = require('tapable')

const hook = new SyncLoopHook(['test', 'arg'])
let i = 0

hook.tap('test', (arg, ttt) => {
    console.log(arg, ttt, i)
    i++;
    if (i === 10000) {
        return;
    }
    return 1;
})

hook.tap('test1', (arg, ttt) => {
    console.log(arg, ttt)
})

hook.call('hello', 'world')