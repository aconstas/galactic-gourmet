const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: "inline-source-map",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/i,
                type: "asset/resource"
            },
        ],
    },
};