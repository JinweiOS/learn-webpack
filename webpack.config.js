const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    mode: 'development', // production
    devtool: 'source-map',
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
                    // 'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                // 小于10k的图片在img下不会有图片文件，而是直接把图片的base64值写到html引入图片的地方
                // 大于10k的图片会放在img下，需要的时候通过http请求下载
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 1000000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /(\.(eot|ttf|woff|woff2|otf)|font)$/,
                loader: 'file-loader',
                options: { outputPath: 'fonts/' }
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
        new WebpackBar(),
        new HtmlWebpackPlugin({
            title: 'myapp',
            // Load a custom template (lodash by default)
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[contenthash].css",
        })
    ],
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        host: '0.0.0.0',
        hot: true,
        compress: true,
        port: 9000,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
            progress: true,
        },
        proxy: {

        }
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
}