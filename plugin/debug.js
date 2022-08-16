class DeBugPlugin {
    apply(compiler) {
        compiler.hooks.afterCompile.tap('first-plugin', (compilation) => {
            console.log(compilation)
            compilation.hooks.finishModules.tap('ttt', (module) => {
                console.log('哈哈')
                debugger
                const a = []
            })
        })
    }
}

module.exports = DeBugPlugin