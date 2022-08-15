// 写nodejs
// 入口就是源代码
// 返回值就是目标代码
function test(sourceCode/**源代码 */) {
    // console.log('你看到这几句话，就说明是我干的',sourceCode);
    return `export default ${sourceCode}`;
}

module.exports = test