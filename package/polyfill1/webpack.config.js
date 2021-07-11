const path = require('path')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                // useBuiltIns: 'usage' 时设置
                // 这里排除了 core-js,webpack/buildin ，否则会报错，因为babel默认会将corejs自身也进行编译
                // https://github.com/zloirock/core-js/issues/743
                exclude: [
                    /\bcore-js\b/,
                    /\bwebpack\/buildin\b/
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
        ],
    },
}