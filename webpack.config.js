const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/scss/style.scss',
    output: {
        path: path.resolve(__dirname, 'web/assets/css'),
        filename: 'style.js', // This file is not used but required by Webpack
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    mode: 'development', // Change to 'production' for production build
};
