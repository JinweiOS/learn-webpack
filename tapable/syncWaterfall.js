const {SyncWaterfallHook} = require('tapable')

const hook = new SyncWaterfallHook(['test', 'arg'])

hook.tap('test', (arg, ttt) => {
    console.log(arg, ttt)
    return 1;
})

hook.tap('test1', (arg, ttt) => {
    console.log(arg, ttt)
})

hook.call('hello', 'world')