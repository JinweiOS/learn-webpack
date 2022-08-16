// class MyExampleWebpackPlugin {
//     apply(compiler) {


//     };
// }

// module.exports = MyExampleWebpackPlugin

// 打包文件信息采集和上报功能插件
const HttpEventBus = require('events').EventEmitter;
const HttpInstance = new HttpEventBus();

const { validate } = require('schema-utils');

// 定义数据格式
const schema = {
    type: 'object',
    properties: {
        reportUrl: {
            type: 'string',
        },
    },
    additionalProperties: false
};

HttpInstance.on('send', (data, url) => {
    reportBundleInfo(data, url)
})
async function reportBundleInfo(data, url) {
    console.log('我确实实在async函数中能够获取到数据，你看', data, url)
}



class MyExampleWebpackPlugin {

    #option

    constructor(option) {
        this.#option = option
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('name', (compilation, callback) => {
            console.log('这是一个示例插件！');
            console.log(
                '这里表示了资源的单次构建的 `compilation` 对象：',
                compilation.assetsInfo
            );
            callback()
        })
        compiler.hooks.done.tap('name1', (stats) => {
            const fileInfo = stats.compilation.assets;
            const data = []
            Object.keys(fileInfo).forEach(key => {
                data.push({
                    fileName: key,
                    size: fileInfo[key]._size
                })
            })
            console.log(stats.compilation.assets)
            validate(schema, this.#option, {
                name: 'Pack Info Reporter'
            })
            HttpInstance.emit('send', data, this.#option.reportUrl)
        })
    }
};

module.exports = MyExampleWebpackPlugin