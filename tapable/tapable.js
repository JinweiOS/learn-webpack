const {
	SyncHook,
 } = require("tapable");
// 初始化同步钩子
// 声明参数个数的
const hook = new SyncHook(['n1', 'n2']);

// 我们再plugin中绑定
hook.tap('flag1', (arg1,arg2,arg3) => {
    console.log('flag1:',arg1,arg2,arg3)
    return 1;
})

hook.tap('flag2', (arg1,arg2,arg3) => {
    console.log('flag2:',arg1,arg2,arg3)
})

module.exports = hook

// // webpack内部去调用
// hook.call('19Qingfeng','wang','haoyu')
