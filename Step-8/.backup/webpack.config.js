const path = require('path');

module.exports = {
    entry: './Step-8/index.js',
    devtool: 'source-map',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
