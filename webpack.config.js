const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const WebpackBar = require('webpackbar');

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
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@vue/babel-preset-app']
                        ],
                        // plugins: [
                        //     ['@babel/plugin-proposal-decorators', {
                        //         version: "2021-12"
                        //     }]
                        // ]
                    }
                }
            }
        ]
    },
    // 配置插件
    plugins: [
        new VueLoaderPlugin(),
        new WebpackBar()
    ]
}