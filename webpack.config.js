const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /images\/.*\.(png|jpg|jpeg|svg)$/,
                type: 'asset/resource',
            },
            {
                test: /icons\/.*\.(png|jpg|jpeg)$/,
                type: 'asset/inline',
            },
            {
                test: /icons\/.*\.svg$/,
                type: 'asset/source',
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        port: 3000,
    },
};