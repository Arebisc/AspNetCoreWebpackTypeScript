const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = {
    mode: 'development',
    context: __dirname, // to automatically find tsconfig.json
    entry: {
        main: './src/main.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'wwwroot/js'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            },
        ],
    },
    resolve: {
        extensions: [ '.js', '.ts' ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ]
};

module.exports = config;




