const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx', // точка входа
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'],
    },
    module: {
        rules: [
            {
                test: /\.(woff2?|ttf|otf|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/i,
                oneOf: [
                    {
                        resourceQuery: /url/,
                        type: 'asset/resource',
                    },
                    {
                        issuer: /\.[jt]sx?$/,
                        use: [
                            {
                                loader: '@svgr/webpack',
                                options: {
                                    icon: true,
                                    svgo: false,
                                },
                            },
                        ],
                    },
                    {
                        type: 'asset/resource',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // базовый html
        }),
    ],
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
};