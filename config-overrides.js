const {override,fixBabelImports} = require('customize-cra');
module.exports = override(
    // 针对antd 实现按需打包 根据import来打包
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:'css',//自动打包相关的样式
    })
);