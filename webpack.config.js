const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        publicPath: '/',
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss'],
        alias: {
            Components: path.resolve(__dirname, 'src', 'components'),
            Containers: path.resolve(__dirname, 'src', 'containers'),
            Pages: path.resolve(__dirname, 'src', 'pages'),
            Thunks: path.resolve(__dirname, 'src', 'thunks')
        },
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') }),
        new MiniCSSExtractPlugin({ filename: 'style.css' }),
        new CopyWebpackPlugin([
            {
                from: 'src/img/*.png', to: 'img/[name].[ext]', force: true, toType: 'template',
            },
        ], { debug: 'info' }),
    ],
    devServer: {
        historyApiFallback: true
    }
};
