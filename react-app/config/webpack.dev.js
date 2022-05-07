const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const dependencies = require('../package.json').dependencies;
const path = require('path');

const devConfig = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    port: 3300,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        microfront: 'microfront@http://localhost:5555/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig); // devConfig will override anything that we have se