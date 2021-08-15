const path = require('path');

module.exports = {
    entry: './Step-4/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
