const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    mode: 'development', // production
    // 配置loader
    module: {
        rules: [
            {
                test: /\.vue$/, // 正则表达式
                loader: 'vue-loader'
            },
        ]
    },
    // 配置插件
    plugins: [
        new VueLoaderPlugin()
    ]
}