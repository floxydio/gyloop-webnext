// Load all image 

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',

    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
            },

        ]
    }
}