const {SyncBailHook} = require('tapable')
const hook = new SyncBailHook(['test'])

hook.tap('test', (arg) => {
    console.log(arg)
    return 1;
})

hook.tap('test1', (arg) => {
    console.log(arg)
})

hook.call('hello')