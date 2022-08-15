const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
// 前端单步调试
function isProction() {
    return process.env.NODE_ENV === 'production';
}


module.exports = {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash:5].bundle.js',
    },
    devtool: isProction() ? 'source-map' : 'eval-cheap-module-source-map',
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
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
                    }
                }
            },
            // {
            //     test: /\.jsons$/,
            //     use: {
            //         loader: path.join(__dirname, '../loader/index.js')
            //     }
            // }
            {
                test: /png|jpg|gif|svg/,
                use: {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        limit: 1024, // < 1024byte 打包成base64
                        name: 'images/[name].[hash:5].[ext]'
                    }
                }
            },
            {
                test: /\.pjw$/,
                use: {
                    loader: path.join(__dirname, '../loaders/simple.js')
                }
            }
        ]
    },
    // 配置插件
    plugins: [
        new VueLoaderPlugin(),
        new WebpackBar(),
        new HtmlWebpackPlugin({
            title: 'Name From HtmlWebpack',
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:5].chunk.css'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: isProction()
                }
            }
        })],
    },
}