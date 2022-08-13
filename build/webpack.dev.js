const { merge } = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common')
const devConfig = {
    mode: 'development',
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000/api',
        },
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        open: true,
        compress: true,
        host: '127.0.0.1',
        port: 8080,
        allowedHosts: 'all',
        client: {
            overlay: {
                errors: true,
            },
            progress: true,
        },
    },
}

module.exports = merge(commonConfig, devConfig)