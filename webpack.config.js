/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const colors = require('colors');
const prettyjson = require('prettyjson');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const configLoader = require('./config/configLoader');
const packageJson = require('./package.json');

const configuration = configLoader.getConfig();

// Webpack build output directory
const BUILD_OUTPUT_DIR = path.resolve(__dirname, 'dist');

// Vendor files to package separately
const VENDOR_LIBS = ['react', 'react-dom', 'lodash', 'react-redux', 'redux', 'history', 'prop-types',
'react-document-title', 'redux-thunk'];

// entry
const entry = {
    [`${packageJson.name}.${packageJson.version}`]: './index.js',
    vendor: VENDOR_LIBS
};

// plugins
const plugins = [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new WriteFilePlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        ENVIRONMENT_CONFIGURATION: JSON.stringify(configuration),
        'typeof window': JSON.stringify('object')
    }),
    new ExtractTextPlugin({
        filename: process.env.NODE_ENV === 'local' ? '[name].css' : '[name].[chunkhash].css',
        disable: false,
        allChunks: true
    })
];

if (process.env.NODE_ENV === 'local') {
    entry['dev.a'] = 'react-hot-loader/patch';
    entry['dev.b'] = 'webpack-dev-server/client?http://localhost:8080';
    entry['dev.c'] = 'webpack/hot/only-dev-server';

    plugins.unshift(new webpack.HotModuleReplacementPlugin());
}

const outputFileTemplate = process.env.NODE_ENV === 'local' ? '[name].js' : '[name].[chunkhash].js';

// Show current settings
console.log(`\nEnvironment: ${colors.blue(process.env.NODE_ENV)}`);
console.log(`Build Output Directory: ${colors.blue(BUILD_OUTPUT_DIR)}`);
console.log(`Version: ${colors.blue(BUILD_OUTPUT_DIR)}`);
console.log(`Output: ${colors.blue(outputFileTemplate)}`);
console.log(colors.green('Configuration:'));
console.log(_.isEmpty(configuration) ? 'EMPTY' : prettyjson.render(configuration));
console.log('');

const isProd = process.env.NODE_ENV === 'production';
const context = path.resolve('src');
const cssClassNameFormat = '[name]__[local]___[hash:base64:5]';

module.exports = {
    entry,
    plugins,
    context,

    output: {
        chunkFilename: outputFileTemplate,
        filename: outputFileTemplate,
        path: BUILD_OUTPUT_DIR,
        publicPath: './'
    },

    devtool: process.env.NODE_ENV === 'local' ? 'inline-source-map' : false,

    devServer: {
        hot: process.env.NODE_ENV === 'local',
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        historyApiFallback: true,
        headers: {
            'Set-Cookie': `env=${process.env.NODE_ENV}`
        },
        disableHostCheck: true
    },

    module: {
        rules: [

            // Javascript
            {
                test: /\.js$/,
                exclude: [/node_modules/, /dev/],
                include: [
                    /node_modules(\/|\\)lib-react-component-.+(\/|\\)(lib)(\/|\\)/,
                    context
                ],
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }],
                        'stage-2',
                        'react'
                    ]
                }
            },

            // Styles (css and sass) in src and component libs
            {
                test: /\.(scss)$/,
                exclude: path.join(context, 'styles', 'main.scss'),
                include: [
                  /node_modules(\/|\\)lib-react-components/,
                  /node_modules(\/|\\)lib-react-component-.+(\/|\\)(lib)(\/|\\)/,
                  context
                ],
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [{
                                loader: 'css-loader',
                                options: {
                                    sourceMap: !isProd,
                                    importLoaders: 1,
                                    modules: true,
                                    localIdentName: cssClassNameFormat
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: { sourceMap: true }
                            }]
                        }
                    )
            },

            {
              test: /\.css/,
              loader:  ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
              })
            },

            // Style (just main.scss)
            {
                test: /\.scss$/,
                include: path.join(context, 'styles', 'main.scss'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            },


            // Images
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: 'url-loader?limit=100'
            }
        ]
    }
};
