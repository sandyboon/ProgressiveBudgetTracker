const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: './public/index.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [
    new WebpackPwaManifest({
      filename: 'manifest.json',
      inject: false,
      fingerprints: false,
      display: 'standalone',
      name: 'Offline Budget Tracker',
      short_name: 'Budget PWA',
      description: 'A budget tracker that ',
      background_color: '#01579b',
      theme_color: '#ffffff',
      'theme-color': '#ffffff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('public/icons/icon-192x192.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: 'icons',
        },
      ],
    }),
  ],
  // configure webpack to use babel-loader to bundle our separate modules and transpile the code
  // refer to https://github.com/babel/babel-loader for more information on the settings
  module: {
    rules: [
      {
        test: /\.js$/, // files must end in ".js" to be transpiled
        exclude: /node_modules/, // don't transpile code from "node_modules"
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

module.exports = config;
