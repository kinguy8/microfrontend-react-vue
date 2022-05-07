const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('../package.json').dependencies

const devConfig = {
    output: {
        publicPath: 'http://localhost:5555/'
    },
    devServer: {
        port: 5555,
        historyApiFallback: {
            index: '/index.html'
        },
        headers: {
            'Access-Control-AllowOrigin': '*'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'microfront',
            filename: 'remoteEntry.js',
            exposes: {
                './MicrofrontApp': './src/bootstrap'
            },
            shared: deps
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)