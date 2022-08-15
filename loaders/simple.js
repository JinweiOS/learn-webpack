const { urlToRequest } = require('loader-utils');
const { validate } = require('schema-utils');

// 定义数据格式
const schema = {
    type: 'object',
    properties: {
        keyValues: {
            type: 'object',
        },
    },
    additionalProperties: false
};

// 写nodejs
// 入口就是源代码
// 返回值就是目标代码
function test(sourceCode/**源代码 */) {
    const option = this.getOptions();
    const sourceJsonObj = JSON.parse(sourceCode)

    validate(schema, option, {
        name: 'Json Injection Loader'
    })

    const result = Object.assign(sourceJsonObj, option.keyValues)
    // console.log('你看到这几句话，就说明是我干的',sourceCode);
    return `export default ${JSON.stringify(result)}`;
}

module.exports = test