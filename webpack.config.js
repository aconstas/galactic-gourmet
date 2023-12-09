const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: "inline-source-map",
    mode: "development",
    devServer: {
        static: './dist',
    },
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
                test: /\.(png|jpg|jpeg|svg|webp|gif|ico)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/i,
                type: "asset/resource"
            },
        ],
    },
};